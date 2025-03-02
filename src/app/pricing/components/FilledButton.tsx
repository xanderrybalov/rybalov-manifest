import { Button, styled, SxProps, Theme } from '@mui/material';

interface FilledButtonProps {
  text: string;
  sx?: SxProps<Theme>;
}

const StyledButton = styled(Button)({
  width: 296,
  height: 56,
  gap: '8px',
  borderRadius: '100px',
  background: 'linear-gradient(90deg, #00B39B 0%, #3B71F7 100%)',
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '24px',
  letterSpacing: '0.15px',
  textAlign: 'center',
  color: '#FFFFFF',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(90deg, #00B39B 0%, #3B71F7 100%)',
  },
});

const FilledButton = ({ text, sx }: FilledButtonProps) => {
  return (
    <StyledButton variant="contained" sx={sx}>
      {text}
    </StyledButton>
  );
};

export default FilledButton;
