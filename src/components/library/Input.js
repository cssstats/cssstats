import styled from '@emotion/styled'
import {
  space,
  fontSize,
  width,
  color,
  borderColor,
  borderWidth
} from 'styled-system'

const Input = styled('input')(
  [],
  () => ({
    display: 'block',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    borderRadius: '4px',
    WebkitAppearance: 'none'
  }),
  space,
  fontSize,
  width,
  color,
  borderColor,
  borderWidth
)

Input.defaultProps = {
  m: 0,
  w: 1,
  color: 'inherit',
  bg: 'transparent',
  placeholder: 'Input a url',
  borderColor: 'black',
  borderWidth: 1,
  py: 3,
  pl: 3
}

export default Input
