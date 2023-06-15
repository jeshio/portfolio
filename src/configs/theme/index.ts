import { css } from 'styled-components'
import { media } from '@helpers/media'

export const theme = {
  colors: {
    white: '#fff',
    orange100: '#FD552A',
    green100: '#0f0',
    blue800: '#575879',
  },
  cssVarNames: {
    globalBlockMargin: '--global-block-margin',
    globalBlockPadding: '--global-block-padding',
    globalBlockPaddingVertical: '--global-block-padding-vertical',
    globalBlockPaddingHorizontal: '--global-block-padding-horizontal',
  },
}

export const cssVarsSection = css(
  ({ theme }) => css`
    :root {
      ${theme.cssVarNames.globalBlockMargin}: 0;
      ${theme.cssVarNames.globalBlockPaddingVertical}: 40px;
      ${theme.cssVarNames.globalBlockPaddingHorizontal}: 20px;
      ${theme.cssVarNames.globalBlockPadding}: var(${theme.cssVarNames
        .globalBlockPaddingVertical}) var(${theme.cssVarNames
        .globalBlockPaddingHorizontal}) calc(var(${theme.cssVarNames
        .globalBlockPaddingVertical}) + 10px);

      ${media.md(
        () => css`
          ${theme.cssVarNames.globalBlockMargin}: 0 15px;
          ${theme.cssVarNames.globalBlockPaddingVertical}: 50px;
          ${theme.cssVarNames.globalBlockPaddingHorizontal}: 50px;
        `
      )}

      ${media.xl(
        () => css`
          ${theme.cssVarNames.globalBlockMargin}: 0 auto;
        `
      )}
    }
  `
)

export type ThemeType = typeof theme
