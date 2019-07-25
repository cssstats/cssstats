import styled from '@emotion/styled'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Label = styled('label')(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Label.defaultProps = {
  fontWeight: 'bold'
}

export default Label
