import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface MainTitleProps {
  text: string;
}

const MainTitle = ({ text }: MainTitleProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      align="center"
      mb={2}
      sx={{
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '36px',
        letterSpacing: '-0.25px',
        color: '#181B29',
        paddingTop: '20px',
        [theme.breakpoints.up('sm')]: {
          paddingTop: '44px',
          fontWeight: 600,
          fontSize: '45px',
          lineHeight: '52px',
          letterSpacing: '-0.25px',
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default MainTitle;
