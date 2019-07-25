import styled from '@emotion/styled'
import { space, fontSize, width, color } from 'styled-system'

const Font = styled('div')(
  [],
  props => ({
    fontFamily: `${props.mono ? 'monospace' : props.fontFamily}`
  }),
  space,
  fontSize,
  width,
  color
)

Font.defaultProps = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif',
  color: 'black'
}

export default Font
