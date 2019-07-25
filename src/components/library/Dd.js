import styled from '@emotion/styled'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Dd = styled('dd')(
  [],
  props => ({
    lineHeight: '1'
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Dd.defaultProps = {
  ml: 0,
  fontWeight: 'normal'
}

export default Dd
