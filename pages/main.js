import styled from 'styled-components'
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col
} from 'antd'
const StyledWrapper = styled.div`
  .site-layout-content {
    // display: flex;
    // justify-content: flex-end;
    background: #fff;
    padding: 24px;
    min-height: 280px;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .topic {
    text-align: left;
    #text {
      padding: 10px 10px 0 0;
    }
  }
  .titlepage {
    text-align: center;
    min-width: 150px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 24px;
  }
`
const { Header, Content, Footer } = Layout

function MainPage () {
  const FormLayoutDemo = () => {
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')

    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout)
    }

    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null

    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null
  }
  return (
    <StyledWrapper>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <a href='/Main'>Main</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>User : </Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <div className='titlepage'>
              แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
              กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
            </div>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='27/11/2541' />
              </Col>
              <Col span={6} pull={18}>
              เอกสารที่ มอ. 696 /
              </Col>
            </Row>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              ลงวันที่
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              ลงวันที่
              </Col>
            </Row>

          <h2>1) รายละเอียด</h2>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              ด้วยมหาวิทยาลัยการคอมพิวเตอร์ มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              ชื่อโครงการ (ถ้ามี)
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              วันที่ต้องใช้พัสดุ
              </Col>
            </Row>

          <h2>2) รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน</h2>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 , marginRight:10}} placeholder='21/03/2563' />
              แผ่น
              </Col>
              <Col span={6} pull={18}>
              2.1 รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม) จำนวน
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 , marginRight:10}} placeholder='21/03/2563' />
              แผ่น
              </Col>
              <Col span={6} pull={18}>
              2.2 บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง จำนวน
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 , marginRight:10 }} placeholder='21/03/2563' />
              แผ่น
              </Col>
              <Col span={6} pull={18}>
              2.3 บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง จำนวน
              </Col>
            </Row>

            <h2>3) คณะกรรมการ</h2>
            <h3>คณะกรรมการพิจารณาผล</h3>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              ประธานกรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              กรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              กรรมการ
              </Col>
            </Row>

            <h3>คณะกรรมการตรวจรับพัสดุ</h3>
            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              ประธานกรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              กรรมการ
              </Col>
            </Row>

            <Row gutter={[0, 24]}>
              <Col span={18} push={10}>
              <Input style={{ width: 150 }} placeholder='21/03/2563' />
              </Col>
              <Col span={6} pull={18}>
              กรรมการ
              </Col>
            </Row>
          <h2>4) แหล่งเงิน</h2>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </StyledWrapper>
  )
}
export default MainPage
