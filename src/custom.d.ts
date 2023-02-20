import 'styled-components'
import { ThemeType } from '@configs/theme'

declare module 'styled-components' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface DefaultTheme extends ThemeType {}
}
