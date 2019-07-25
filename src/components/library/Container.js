import styled from '@emotion/styled'
import { space, fontSize, width, color } from 'styled-system'
import Font from './Font'

const Container = styled(Font)(
  [],
  props => ({
    maxWidth: '72rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  }),
  space,
  fontSize,
  width,
  color
)

Container.defaultProps = {
  px: 1
}

export default Container
