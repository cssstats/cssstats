import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const SlabStat = props => (
  <Dl my={0} py={0} {...props}>
    <Dt
      mt={0}
      fontSize={0}
      style={{
        whiteSpace: 'nowrap'
        //     textTransform: 'uppercase', letterSpacing: '0.05em'
      }}
      children={props.title}
    />
    <Dd mb={0} fontSize={6} fontWeight="bold" children={props.stat} />
  </Dl>
)

export default SlabStat
