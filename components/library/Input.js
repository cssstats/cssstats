import styled from '@emotion/styled'
import {
  space,
  fontSize,
  width,
  color,
  borderColor,
  borderWidth,
  focus,
  active
} from 'styled-system'

const Input = styled('input')(
  [],
  props => ({
    display: 'block',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    borderRadius: '4px'
  }),
  space,
  fontSize,
  width,
  color,
  borderColor,
  borderWidth,
  focus,
  active
)

Input.defaultProps = {
  m: 0,
  w: 1,
  color: 'inherit',
  bg: 'transparent',
  placeholder: 'Input a url',
  borderColor: 'black',
  borderWidth: 1,
  focus: {
    borderColor: 'blue'
  },
  active: {
    borderColor: 'blue'
  },
  py: 3,
  pl: 3
}

export default Input
