import styled from 'styled-components'
import { Invert as OrigInvert } from 'mdx-deck/layouts'
import colors from "./colors"


export const Invert = styled(OrigInvert)`
  background-color: ${colors.gatsby} !important;
  color: white !important;

  h1, h2, h3, h4 {
    color: white !important;
}
`
