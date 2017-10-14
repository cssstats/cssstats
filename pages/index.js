import withTheme from '../components/withTheme'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Input from '../components/Input'

const Index = () =>
  <Layout>
    <Input />
    <Button children='Button' />
  </Layout>

export default withTheme(Index)
