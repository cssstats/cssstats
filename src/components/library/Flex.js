import styled from '@emotion/styled'
import { space, fontSize, width, color } from 'styled-system'

const Flex = styled('div')(
  [],
  props => ({
    display: 'flex',
    flex: `${props.flex}`,
    alignContent: `${props.alignContent}`,
    alignItems: `${props.alignItems}`,
    alignSelf: `${props.self}`,
    flexBasis: `${props.basis}`,
    flexDirection: `${props.direction}`,
    flexFlow: `${props.flow}`,
    flexGrow: `${props.grow}`,
    flexShrink: `${props.shrink}`,
    flexWrap: `${props.wrap}`,
    justifyContent: `${props.justify}`,
    order: `${props.order}`
  }),
  space,
  fontSize,
  width,
  color
)

Flex.defaultProps = {
  flex: 'initial',
  alignContent: 'initial',
  alignItems: 'initial',
  alignSelf: 'initial',
  basis: 'initial',
  direction: 'initial',
  flow: 'initial',
  grow: 'initial',
  shrink: 'initial',
  wrap: 'initial',
  justify: 'initial',
  order: 'initial'
}

export default Flex
