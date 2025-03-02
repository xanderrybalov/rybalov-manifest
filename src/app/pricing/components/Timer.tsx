import { Box } from '@mui/material';
import Image from 'next/image';

interface TimerProps {
  time: string;
}

const Timer = ({ time }: TimerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: '#181B29',
        justifyContent: 'center',
        color: '#FFD7A1',
        gap: '10px',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '0.15px',
        textAlign: 'center',
        borderRadius: '9px',
        padding: '8px 14px',
      }}
    >
      <Image
        aria-hidden="true"
        src="/timer.svg"
        alt="Timer Icon"
        width={18}
        height={18}
      />
      SALE ENDS IN {time}
    </Box>
  );
};

export default Timer;
