'use client';
import React from 'react';
import { Card, CardContent, Typography, Box, Radio } from '@mui/material';

interface ProductProps {
  name: string;
  oldPrice?: number;
  price: number;
  currency: string;
  period?: string;
  badge?: 'Best value' | 'Most popular';
  discount?: string;
  selected: boolean;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  oldPrice,
  price,
  period = 'per month',
  badge,
  discount,
  selected,
  onSelect,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderWidth: selected ? 2 : 1,
        borderColor: selected ? 'primary.main' : 'grey.300',
        borderRadius: 3,
        cursor: 'pointer',
        p: 2,
        transition: '0.3s',
        '&:hover': { boxShadow: 3 },
      }}
      onClick={onSelect}
    >
      <CardContent>
        {/* Discount */}
        {discount && (
          <Box
            sx={{
              backgroundColor: 'green',
              color: 'white',
              fontSize: 12,
              px: 1,
              py: 0.5,
              borderRadius: 1,
              display: 'inline-block',
            }}
          >
            {discount}
          </Box>
        )}

        {/* Badge */}
        {badge && (
          <Box
            sx={{
              backgroundColor: 'yellow',
              fontSize: 12,
              px: 1,
              py: 0.5,
              borderRadius: 1,
              ml: 1,
              display: 'inline-block',
            }}
          >
            🚀 {badge}
          </Box>
        )}

        <Box display="flex" alignItems="center" mt={1}>
          <Radio checked={selected} onChange={onSelect} color="primary" />
          <Typography variant="h6">{name}</Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={1}>
          {oldPrice && (
            <Typography
              variant="body2"
              sx={{ textDecoration: 'line-through', color: 'grey.500', mr: 1 }}
            >
              ${oldPrice.toFixed(2)}
            </Typography>
          )}
          <Typography variant="h5" color="primary">
            ${price.toFixed(2)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.600', ml: 1 }}>
            {period}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
