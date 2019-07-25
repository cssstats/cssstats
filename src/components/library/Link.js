import styled from '@emotion/styled'
import {
  space,
  fontSize,
  width,
  color,
  fontWeight,
  borderColor
} from 'styled-system'

const Link = styled('a')(
  [],
  props => ({
    display: `${props.display}`,
    fontWeight: `${props.fontWeight}`,
    textDecoration: 'none'
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight,
  borderColor
)

Link.defaultProps = {
  color: 'blue',
  display: 'inline',
  fontWeight: 'normal',
  href: '#!',
  borderColor: 'transparent'
}

export default Link
