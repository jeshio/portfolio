import { css } from 'styled-components'

type FlattenSimpleInterpolation = Parameters<typeof css>[0]

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl'

type Media = {
  [key in Breakpoints]: typeof css
}

export const breakpoints: { [key in Breakpoints]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

// Iterate through the sizes and create a media template
export const media: Media = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    const emSize = breakpoints[label as Breakpoints] / 16
    accumulator[label as Breakpoints] = (
      styles: FlattenSimpleInterpolation
    ) => css`
      @media (min-width: ${emSize}em) {
        ${styles}
      }
    `
    return accumulator
  },
  {} as Media
)
