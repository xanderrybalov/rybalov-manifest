import { Radio, styled } from '@mui/material';

const StyledRadio = styled(Radio)({
  padding: 0, // Убираем внутренние отступы
  position: 'relative', // Позволяет позиционировать галочку

  '&.MuiRadio-root': {
    display: 'flex',
    width: '20px',
    minWidth: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundPosition: '50%',
    border: '2px solid var(--color-common-black)', // Неактивное состояние
    backgroundColor: 'transparent',
  },

  '&.Mui-checked': {
    border: 'none', // Убираем бордер
    backgroundColor: '#00B39B', // Полностью заливаем зеленым
    boxShadow: 'none', // Убираем синий glow MUI
    outline: 'none', // Убираем возможные контуры
    backgroundImage: 'none', // Убираем стандартный MUI SVG
  },

  '&.Mui-checked .MuiSvgIcon-root': {
    display: 'none', // ⬅️ Скрываем стандартную точку только в активном состоянии
  },

  '&.Mui-checked::after': {
    content: '""',
    display: 'block',
    width: '12.62px',
    height: '9.15px',
    position: 'absolute',
    top: '5.5px', // Регулируем позицию галочки
    left: '3.7px',
    backgroundImage: "url('/check.svg')", // Галочка
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});

export default StyledRadio;
