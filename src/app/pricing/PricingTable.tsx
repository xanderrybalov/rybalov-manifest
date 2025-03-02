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

const plans: {
  id: string;
  name: string;
  oldPrice?: number;
  price: number;
  currency: string;
  discount?: string;
  badge?: 'Best value' | 'Most popular';
  period?: string;
}[] = [
  {
    id: 'monthly',
    name: 'Unlimited 1-monthly Plan',
    oldPrice: 69.99,
    price: 39.99,
    currency: 'USD',
    discount: 'Most Popular',
  },
  {
    id: 'weekly',
    name: '7-day Access',
    oldPrice: 10.0,
    price: 1.0,
    currency: 'USD',
    discount: 'Save 90%',
    period: 'then $39.99 per month',
  },
  {
    id: 'annual',
    name: 'Unlimited Annual Plan',
    oldPrice: 49.99,
    price: 24.99,
    currency: 'USD',
    discount: 'Save 50%',
    badge: 'Best value',
  },
];

const PricingTable: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>('monthly');
  const [hydrated, setHydrated] = useState(false); // Флаг, чтобы дождаться загрузки клиента
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  // Убираем гидрацию
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Используем useMemo, чтобы избежать пересортировки массива при каждом рендере
  const sortedPlans = useMemo(
    () => (isDesktop ? plans : [...plans].reverse()),
    [isDesktop]
  );

  // Ждем, пока завершится гидрация
  if (!hydrated) {
    return null;
  }

  return (
    <Container sx={{ py: '77px' }}>
      <MainTitle text="Choose your plan:" />
      <ToolBar />

      {!isDesktop && <Timer time={'12:00'} />}
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
              oldPrice={plan.oldPrice}
              price={plan.price}
              currency={plan.currency}
              discount={plan.discount}
              badge={plan.badge}
              period={plan.period}
              selected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
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
          />
        </Container>
        <Typography
          variant="caption"
          align="center"
          display="block"
          color="grey.500"
          mt={1}
        >
          Automatic renewal of{' '}
          {plans.find((p) => p.id === selectedPlan)?.price.toFixed(2)}
          {' $ '}
          per month.
          <br /> You may cancel by support@justdone.ai. Our goal is customer
          <br />
          satisfaction
        </Typography>
      </Box>
    </Container>
  );
};

export default PricingTable;
