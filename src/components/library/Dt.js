import styled from '@emotion/styled'
import { space, typography, width, color } from 'styled-system'

const Dt = styled('dt')([], props => ({}), space, typography, width, color)

Dt.defaultProps = {
  fontWeight: 'bold'
}

export default Dt
