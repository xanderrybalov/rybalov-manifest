'use client';

import { Box } from '@mui/material';
import PricingTable from './pricing/PricingTable';

const PricingPage = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `
        url('/background_texture_square.webp'),
        linear-gradient(253deg, #E3FFFE 23.91%, #E6EDFD 78.01%)
      `,
      backgroundSize: '57.6px 57.6px, cover',
      backgroundRepeat: 'repeat, no-repeat',
      backgroundPosition: 'center, center',
    }}
  >
    <PricingTable />
  </Box>
);

export default PricingPage;
