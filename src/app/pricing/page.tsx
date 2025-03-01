'use client';
import PricingTable from './PricingTable';
import { Box } from '@mui/material';

export default function PricingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.100',
      }}
    >
      <PricingTable />
    </Box>
  );
}
