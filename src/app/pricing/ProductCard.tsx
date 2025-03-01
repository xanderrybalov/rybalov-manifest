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
        position: 'relative',
        overflow: 'visible',
        '&:hover': { boxShadow: 3 },
      }}
      onClick={onSelect}
    >
      <CardContent>
        {/* Discount */}
        {discount && (
          <span
            style={{
              position: 'absolute',
              top: '-16px',
              left: '44px',
              width: 'auto',
              height: '28px',
              borderRadius: '28px',
              background: '#00B39B',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px 9px 4px 10px',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '20px',
                letterSpacing: '0.1px',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            >
              {discount}
            </span>
          </span>
        )}

        {/* Badge */}
        {badge && (
          <span
            style={{
              position: 'absolute',
              zIndex: 5,
              top: '-32px',
              left: '200px',
              width: '162.45px',
              height: '49.48px',
              gap: '6.16px',
              borderRadius: '55.45px',
              background: '#fece1f',
              color: '#181B29',
              transform: 'rotate(4.26deg)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9.24px 24.64px',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '30.81px',
                letterSpacing: '0.15px',
              }}
            >
              🚀 {badge}
            </span>
          </span>
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
