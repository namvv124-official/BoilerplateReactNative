import { UnistylesRegistry, UnistylesThemes } from 'react-native-unistyles';

import { darkTheme } from './dark';
import { lightTheme } from './light';

export type Colors = keyof UnistylesThemes['dark']['color'];

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

UnistylesRegistry.addThemes({
  dark: darkTheme,
  light: lightTheme,
}).addConfig({
  adaptiveThemes: false,
  initialTheme: 'light',
});

declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface UnistylesThemes extends AppThemes {}
}
