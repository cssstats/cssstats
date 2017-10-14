import React from 'react'
import Flex from './Flex'
import Link from './Link'
import Div from './Div'
import Hr from './Hr'

const Footer = props => (
  <footer>
    <Hr />
    <Flex w={1} alignItems="center" justify="space-between" />
    <Div w={[1, 1 / 2]}>
      Made by
      <Link ml={2} fontWeight={600} color="black" children="@mrmrs" />,{' '}
      <Link fontWeight={600} color="black" children="@jxnblk" /> &{' '}
      <Link fontWeight={600} color="black" children="@4lpine" />
    </Div>
    <Div w={[1, 1 / 3]}>
      <Link fontWeight={600} color="black" children="Issues" />
      <Link ml={2} fontWeight={600} color="black" children="GitHub" />
    </Div>
  </footer>
)

export default Footer
