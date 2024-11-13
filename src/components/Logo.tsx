import { css } from 'styled-system/css';
import { HStack } from 'styled-system/jsx';
import { FPWhite } from '~/assets';

export const Logo = () => (
  <HStack alignItems="center" gap={3}>
    <img className={css({ h: '6', pb: '0.5' })} alt="" src={FPWhite} />
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
