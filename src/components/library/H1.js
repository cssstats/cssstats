import styled from '@emotion/styled'
import { space, fontSize, width, color, borderColor } from 'styled-system'

const H1 = styled('h1')(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color,
  borderColor
)

H1.defaultProps = {
  borderColor: 'transparent',
  color: 'black'
}

export default H1
