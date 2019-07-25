import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const GiantSlabStat = props => (
  <Dl>
    <Dd fontSize={8} fontWeight="bold" children={props.stat} />
    <Dt fontSize={3} children={props.title} />
  </Dl>
)

export default GiantSlabStat
