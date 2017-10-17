import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Text = styled('div')(
  [],
  props => ({
    textTransform: `${props.uppercase ? 'uppercase' : 'initial'}`
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Text.defaultProps = {
  fontWeight: 'normal',
  uppercase: false
}

export default Text
