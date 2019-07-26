import React from 'react'
import Flex from './Flex'
import Div from './Div'
import Hr from './Hr'
import Text from './Text'
import H2 from './H2'

const SubHeader = props => (
  <Div {...props}>
      <H2 color='inherit' fontSize={[3,5,5]} mt={0} mb={2} children={props.title} />
      <Text color='inherit' fontWeight='500' fontSize={[0,1,1]} mt={0} mb={2} children={props.description} />
  </Div>
)

export default SubHeader
