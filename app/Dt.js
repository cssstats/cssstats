import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Dt = styled('dt')(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Dt.defaultProps = {
  fontWeight: 'bold'
}

export default Dt
