/** @jsx jsx */
import { jsx } from 'theme-ui'

const Text = props => (
  <p sx={{
    maxWidth: '80ch',
    lineHeight: 1.5
  }} {...props} />
)

Text.defaultProps = {
}

export default Text
