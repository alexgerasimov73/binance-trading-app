import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  strictPropertyValues: true,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  globalFontface: {
    PPMori: [
      {
        src: 'url(/fonts/PPMori-Regular.otf) format("opentype")',
        fontWeight: 400,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
      {
        src: 'url(/fonts/PPMori-SemiBold.otf) format("opentype")',
        fontWeight: 600,
        fontStyle: 'normal',
        fontDisplay: 'swap',
      },
    ],
  },
  globalCss: {
    html: {
      bg: 'primaryColor',
    },
    body: {
      minH: '100vh',
      bgGradient: 'to-b',
      gradientFrom: 'primaryColor',
      gradientTo: 'blueColor',
      fontFamily: 'ppmori',
      color: 'whiteColor',
    },
    h1: {
      fontSize: 'x-large',
      fontWeight: 'semibold',
      color: 'textColor',
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          blueColor: { value: '#2D47D6' },
          primaryColor: { value: '#000042' },
          textColor: { value: '#0F172A' },
          whiteColor: { value: '#ffffff' },
        },
        fonts: {
          ppmori: {
            value: 'PPMori, Avenir, Helvetica, Arial, sans-serif',
            description: 'PPMori font family',
          },
        },
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
});
