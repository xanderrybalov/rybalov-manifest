import { Radio, styled } from '@mui/material';

const StyledRadio = styled(Radio)({
  padding: 0,
  position: 'relative',

  '&.MuiRadio-root': {
    display: 'flex',
    width: '20px',
    minWidth: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundPosition: '50%',
    border: '2px solid var(--color-common-black)',
    backgroundColor: 'transparent',
  },

  '&.Mui-checked': {
    border: 'none',
    backgroundColor: '#00B39B',
    boxShadow: 'none',
    outline: 'none',
    backgroundImage: 'none',
  },

  '&.Mui-checked .MuiSvgIcon-root': {
    display: 'none',
  },

  '&.Mui-checked::after': {
    content: '""',
    display: 'block',
    width: '12.62px',
    height: '9.15px',
    position: 'absolute',
    top: '5.5px',
    left: '3.7px',
    backgroundImage: "url('/check.svg')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});

export default StyledRadio;
