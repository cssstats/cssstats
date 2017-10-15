import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const GiantSlabStat = props => (
  <Dl>
    <Dt f={3} children={props.title} />
    <Dd f={6} fontWeight="bold" children={props.stat} />
  </Dl>
)

export default GiantSlabStat
