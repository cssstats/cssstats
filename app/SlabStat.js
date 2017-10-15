import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const SlabStat = props => (
  <Dl>
    <Dt children={props.title} />
    <Dd f={6} fontWeight="bold" children={props.stat} />
  </Dl>
)

export default SlabStat
