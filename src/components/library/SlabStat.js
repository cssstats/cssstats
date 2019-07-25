import React from 'react'
import Dl from './Dl'
import Dt from './Dt'
import Dd from './Dd'

const SlabStat = props => (
  <Dl {...props}>
    <Dt children={props.title} />
    <Dd fontSize={6} fontWeight="bold" children={props.stat} />
  </Dl>
)

export default SlabStat
