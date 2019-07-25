import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const SlabStat = props => (
  <Dl {...props}>
    <Dt fontSize={0} style={{ whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em' }} children={props.title} />
    <Dd fontSize={6} fontWeight="bold" children={props.stat} />
  </Dl>
)

export default SlabStat
