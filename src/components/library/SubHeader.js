import React from 'react'
import Flex from './Flex'
import Div from './Div'
import Hr from './Hr'
import Text from './Text'
import H2 from './H2'

const SubHeader = props => (
  <Div>
    <Div py={3}>
      <H2 fontSize={[3,4,5]} mt={0} mb={2} children={props.title} />
      <Flex>
        <Text fontWeight="700" mr={4} children={'Total file size: '+props.size} />
        <Text fontWeight="700" children={'Gzipped file size: '+props.gzipSize} />
      </Flex>
    </Div>
  </Div>
)

export default SubHeader
