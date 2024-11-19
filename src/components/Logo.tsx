import { css } from 'styled-system/css';
import { HStack } from 'styled-system/jsx';
import { LogoIcon } from '~/assets';

export const Logo = () => (
  <HStack alignItems="center" gap={2}>
    <img className={css({ h: '8', pb: '2' })} alt="" src={LogoIcon} />
    <span
      className={css({
        fontSize: 'lg',
        fontWeight: 'semibold',
        letterSpacing: 'widest',
        pointerEvents: 'none',
      })}>
      Binance Trading App
    </span>
  </HStack>
);
