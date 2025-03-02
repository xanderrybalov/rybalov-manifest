'use client';
import React from 'react';
import { Card, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import StyledRadio from './components/StyledRadio';
import Image from 'next/image';

interface ProductProps {
  name: string;
  trial_amount: number;
  trial_period: number;
  currency: string;
  period?: string;
  badge?: 'Best value' | 'Most popular';
  discount?: string;
  selected: boolean;
  timer: string;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  trial_amount,
  trial_period,
  period = 'per month',
  badge,
  discount,
  selected,
  timer,
  onSelect,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Card
      variant="outlined"
      role="button"
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
      {/* Discount */}
      {discount && (
        <Box
          sx={{
            position: 'absolute',
            top: '-16px',
            left: '44px',
            borderRadius: '28px',
            background: '#00B39B',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px 9px',
          }}
        >
          <Typography
            sx={{
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
          </Typography>
        </Box>
      )}
      {/* Badge */}
      {badge && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: 5,
            top: 0,
            right: '30px',
            width: '162.45px',
            height: '49.48px',
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
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '30.81px',
              letterSpacing: '0.15px',
            }}
          >
            🚀 {badge}
          </Typography>
        </Box>
      )}
      {/* Timer of Sales End */}
      {isDesktop && (
        <Box
          sx={{
            background: '#181B29',
            color: '#FFD7A1',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0',
            height: '56px',
            fontWeight: 600,
            fontSize: '14px',
            gap: '6px',
            textAlign: 'center',
            alignItems: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '56px',
              right: '17px',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #181B29',
            },
          }}
        >
          <Image
            aria-hidden="true"
            src="/timer.svg"
            alt="Timer Icon"
            width={18}
            height={18}
          />
          SALE ENDS IN {timer}
        </Box>
      )}
      <Box sx={{ padding: '12px 16px 12px 12px', position: 'relative' }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="8px"
        >
          <StyledRadio
            checked={selected}
            onChange={onSelect}
            sx={{ flexShrink: 0 }}
          />
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
            {trial_amount && (
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0.5px',
                  opacity: 0.8,
                  textDecoration: 'line-through red',
                }}
              >
                ${trial_amount.toFixed(2)}
              </Typography>
            )}
            <Typography
              sx={{
                color: '#3B71F7',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: '0.1px',
              }}
            >
              ${trial_period.toFixed(2)}
            </Typography>
            <Typography
              sx={{
                color: '#181B29',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '20px',
                letterSpacing: '0.1px',
              }}
            >
              {period}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
