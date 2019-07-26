import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const GiantSlabStat = props => (
  <Dl {...props}>
    <Dt fontSize={0} fontWeight={600} style={{ textTransform: 'uppercase', letterSpacing: '0.05em'}} children={props.title} />
    <Dd fontSize={[4,6,6]} fontWeight="bold" children={props.stat} />
  </Dl>
)

export default GiantSlabStat
