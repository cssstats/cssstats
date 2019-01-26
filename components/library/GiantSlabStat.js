import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const GiantSlabStat = props => (
  <Dl>
    <Dd f={8} fontWeight="bold" children={props.stat} />
    <Dt f={3} children={props.title} />
  </Dl>
)

export default GiantSlabStat
