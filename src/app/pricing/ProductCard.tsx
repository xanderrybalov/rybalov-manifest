'use client';
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import StyledRadio from './components/StyledRadio';

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
        borderWidth: 4,
        borderColor: selected ? '#00B39B' : '#d7f4f3',
        borderRadius: 3,
        cursor: 'pointer',
        width: 'auto',
        height: '100%',
        transition: '0.3s',
        position: 'relative',
        overflow: 'visible',
        '&:hover': { boxShadow: 3 },
      }}
      onClick={onSelect}
    >
      <Box sx={{ padding: '12px 16px 12px 12px' }}>
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
              top: 0,
              right: '30px',
              width: '162.45px',
              height: '49.48px',
              gap: '6.16px',
              borderRadius: '55.45px',
              background: '#fece1f',
              color: '#181B29',
              transform: 'translateY(-80%) rotate(3deg)',
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

        <Box
          display="flex"
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={'8px'}
        >
          <StyledRadio checked={selected} onChange={onSelect} />
          <Typography
            variant="h6"
            sx={{
              color: '#22293B',
              fontWeight: 700,
              fontSize: '17px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
            }}
          >
            {name}
          </Typography>
          <Box
            display="flex"
            alignItems="flex-end"
            flexDirection="column"
            flexGrow={1}
            sx={{ color: 'common.black' }}
          >
            {oldPrice && (
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0.5px',
                  opacity: '80%',
                  textDecoration: 'line-through red',
                }}
              >
                ${oldPrice.toFixed(2)}
              </span>
            )}
            <span
              style={{
                color: '#3B71F7',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.1px',
              }}
            >
              ${price.toFixed(2)}
            </span>
            <span
              style={{
                color: '#181B29',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '20px',
                letterSpacing: '0.1px',
              }}
            >
              {period}
            </span>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
