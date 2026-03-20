import { Forum } from 'next/font/google';
import { createTheme, Paper } from '@mantine/core';

const forum = Forum({
    subsets: ['latin'],
    weight: ['400', '400'],
    display: 'swap',
  });

const theme = createTheme({
  primaryColor: 'alleyway',
  primaryShade: 5,
  defaultRadius: 'md',
  fontFamily: forum.style.fontFamily,
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  
  colors: {
    alleyway: [
    '#9fd3aa',
    '#8bc99b',
    '#77bf8c',
    '#63b57d',
    '#4fab6e',
    '#3c9f60',
    '#2f8c54',
    '#237948',
    '#17663c',
    '#0b5330',
    ],
  },
  //   components: {
  //   Paper: Paper.extend({
  //     defaultProps: {
  //       bg: '#0a0f13',
  //     }
  //   })
  // }
});

export default theme;
