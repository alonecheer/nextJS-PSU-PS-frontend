import WithAuth from '../src/hoc/withAuth'
import MainPage from './main'
import Topbar from '../src/components/Topbar'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'

import { Layout, Menu, Breadcrumb } from 'antd'
const { Header } = Layout
import styled from 'styled-components'
const StyledWrapper = styled.div`
  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
`
const Mainpage_test = () => {
  return (
    <StyledWrapper>
      <Layout className='layout'>
        <Topbar />
        <Content />
        <Footer />
      </Layout>
    </StyledWrapper>
  )
}

export default Mainpage_test