'use client';
import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ProductCard from './ProductCard';
import MainTitle from './components/MainTitle';
import FilledButton from './components/FilledButton';
import Timer from './components/Timer';
import ToolBar from './components/ToolBar';
import { useFeatureIsOn } from '@growthbook/growthbook-react';

interface Product {
  id: string;
  name: string;
  regularity: 'month' | 'year' | 'then $39.99 per month';
  trial_period: number;
  currency: 'USD';
  trial_amount: number;
  discount?: string;
  badge?: 'Best value' | 'Most popular';
  discount_time: string;
}

const plans: Product[] = [
  {
    id: 'monthly',
    name: 'Unlimited 1-monthly Plan',
    trial_amount: 69.99,
    trial_period: 39.99,
    currency: 'USD',
    discount: 'Most Popular',
    regularity: 'month',
    discount_time: '12:10',
  },
  {
    id: 'weekly',
    name: '7-day Access',
    trial_amount: 10.0,
    trial_period: 1.0,
    currency: 'USD',
    discount: 'Save 90%',
    regularity: 'month',
    discount_time: '10:10',
  },
  {
    id: 'annual',
    name: 'Unlimited Annual Plan',
    trial_amount: 49.99,
    trial_period: 24.99,
    currency: 'USD',
    discount: 'Save 50%',
    badge: 'Best value',
    regularity: 'month',
    discount_time: '09:10',
  },
];

const PricingTable: React.FC = () => {
  const isTestVariant = useFeatureIsOn('ab_test_version');

  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');
  const [hydrated, setHydrated] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // Global state for each card's time
  const [timers, setTimers] = useState<Record<string, string>>({
    monthly: plans.find((p) => p.id === 'monthly')?.discount_time || '00:00',
    weekly: plans.find((p) => p.id === 'weekly')?.discount_time || '00:00',
    annual: plans.find((p) => p.id === 'annual')?.discount_time || '00:00',
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  useEffect(() => {
    setHydrated(true);
    if (typeof window === 'undefined') return;
  }, []);

  useEffect(() => {
    if (!isTestVariant || timerExpired) return;

    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const newTimers = { ...prevTimers };
        let allExpired = true;

        Object.keys(newTimers).forEach((planId) => {
          const [minutes, seconds] = newTimers[planId].split(':').map(Number);

          if (minutes === 0 && seconds === 0) {
            newTimers[planId] = '00:00';
          } else {
            allExpired = false;
            let newMinutes = minutes;
            let newSeconds = seconds - 1;

            if (newSeconds < 0) {
              newMinutes -= 1;
              newSeconds = 59;
            }

            newTimers[planId] =
              `${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
          }
        });

        if (allExpired) {
          setTimerExpired(true);
          clearInterval(interval);
        }

        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTestVariant, timerExpired]);
  const sortedPlans = useMemo(
    () => (isDesktop ? plans : [...plans].reverse()),
    [isDesktop]
  );

  if (!hydrated) return null;

  return (
    <Container sx={{ py: '77px' }}>
      <MainTitle text="Choose your plan:" />
      <ToolBar />

      {isTestVariant && !isDesktop && !timerExpired && (
        <Timer time={timers[selectedPlan]} />
      )}
      <Box
        display="flex"
        flexDirection="column"
        gap={'20px'}
        sx={{ pt: '55px', pb: '24px' }}
      >
        <Box
          display="grid"
          sx={{
            gridAutoRows: '1fr',
            gridRowGap: '20px',
            width: '100%',
            [theme.breakpoints.up('md')]: {
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0 20px',
            },
          }}
        >
          {sortedPlans.map((plan) => (
            <ProductCard
              key={plan.id}
              name={plan.name}
              trial_amount={!timerExpired ? plan.trial_amount : null}
              trial_period={plan.trial_period}
              currency={plan.currency}
              discount={!timerExpired ? plan.discount : undefined}
              badge={plan.badge}
              period={plan.regularity}
              selected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
              timer={timers[plan.id]}
              timerExpired={timerExpired}
              isTestVariant={isTestVariant}
            />
          ))}
        </Box>

        <Container
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <FilledButton
            sx={{ alignItems: 'center', display: 'flex' }}
            text="Get Started"
            onClick={() => {
              const selectedProduct = plans.find((p) => p.id === selectedPlan);
              if (selectedProduct) {
                console.log(
                  `SelectedProduct: ID = ${selectedProduct.id}, Name = ${selectedProduct.name}`
                );
              }
            }}
          />
        </Container>
        <Typography
          variant="caption"
          align="center"
          display="block"
          sx={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '0.1px',
            textAlign: 'center',
            color: 'grey.500',
          }}
        >
          Automatic renewal of{' '}
          {plans.find((p) => p.id === selectedPlan)?.trial_period.toFixed(2)}
          {' $ '}
          per month.
          <br />
          You may cancel by{' '}
          <Typography
            component="a"
            href="mailto:support@justdone.ai"
            sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '20px',
              letterSpacing: '0.1px',
              textAlign: 'center',
              textDecoration: 'underline',
              color: 'inherit',
              '&:hover': { color: 'primary.main' },
            }}
          >
            support@justdone.ai
          </Typography>
          . Our goal is customer <br /> satisfaction.
        </Typography>
      </Box>
    </Container>
  );
};

export default PricingTable;
