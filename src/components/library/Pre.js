import styled from '@emotion/styled'
import { space, fontSize, width, color, borderRadius } from 'styled-system'

const Pre = styled('pre')(
  [],
  props => ({
    maxHeight: '50vh',
    overflow: 'auto'
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius
)

Pre.defaultProps = {
  bg: 'lightgray',
  p: 3,
  borderRadius: 3
}

export default Pre
