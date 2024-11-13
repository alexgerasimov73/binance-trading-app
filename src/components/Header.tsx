import { css } from 'styled-system/css';
import { Logo } from './Logo';

export const Header = () => (
  <header
    className={css({
      pos: 'sticky',
      top: '4',
      maxW: '8xl',
      mx: 'auto',
      p: '4',
      rounded: '2xl',
      bg: 'primaryColor',
      zIndex: 1,
    })}>
    <Logo />
  </header>
);
