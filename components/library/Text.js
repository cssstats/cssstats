import styled from '@emotion/styled'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Text = styled('div')(
  [],
  props => ({
    textTransform: `${props.uppercase ? 'uppercase' : 'initial'}`,
    display: `${props.inline ? 'inline-block' : 'block'}`
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Text.defaultProps = {
  fontWeight: 'normal',
  uppercase: false,
  inline: false
}

export default Text
