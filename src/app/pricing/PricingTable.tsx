'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ProductCard from './ProductCard';
import MainTitle from './components/MainTitle';

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
    id: 'annual',
    name: 'Unlimited Annual Plan',
    oldPrice: 49.99,
    price: 24.99,
    currency: 'USD',
    discount: 'Save 50%',
    badge: 'Best value',
  },
  {
    id: 'weekly',
    name: '7-day Access',
    price: 2.0,
    currency: 'USD',
    period: 'then $39.99 per month',
  },
  {
    id: 'monthly',
    name: 'Unlimited Monthly Plan',
    oldPrice: 49.99,
    price: 29.99,
    currency: 'USD',
    discount: 'Most Popular',
  },
];

const PricingTable: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>('monthly');

  return (
    <Container maxWidth="xs" sx={{ py: '77px' }}>
      <MainTitle text="Choose your plan:" />

      <Box display="flex" flexDirection="column" gap={2}>
        {plans.map((plan) => (
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

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, py: 1.5, fontSize: 18 }}
        onClick={() => console.log(`Selected Plan: ${selectedPlan}`)}
      >
        Get Started
      </Button>

      <Typography variant="body2" align="center" color="grey.600" mt={1}>
        Easy plan cancellation
      </Typography>

      <Typography
        variant="caption"
        align="center"
        display="block"
        color="grey.500"
        mt={1}
      >
        By continuing, you agree that if you don’t cancel at least 24 hours
        prior to the end of the current period, you will automatically be
        charged USD {plans.find((p) => p.id === selectedPlan)?.price} every 30
        days until you cancel in the settings.
      </Typography>
    </Container>
  );
};

export default PricingTable;
