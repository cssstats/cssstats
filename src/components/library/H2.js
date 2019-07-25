import styled from '@emotion/styled'
import { space, fontSize, width, color } from 'styled-system'

const H2 = styled('h2')([], props => ({}), space, fontSize, width, color)

H2.defaultProps = {
  color: 'black'
}

export default H2
