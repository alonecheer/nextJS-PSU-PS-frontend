import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Layout, Menu, Breadcrumb, message, Row, Col } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
const StyledWrapper = styled.div`
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }

  .site-layout-background {
    background: #fff;
  }

`

const HistoryContent = () => {
  const [history, setHistoty] = useState([])
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
  }
  useEffect(() => {
    getForm001Bysid()
  }, [])
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>ประวัติการทำรายการ</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <div className='site-layout-content'>
          {history.map((data, index) => {
            return (
              <div key={index}>
                <h1>วันที่ : {data.o_date}</h1>
                <div style={{margin: '15px'}}> >> {data.o_location}</div>
                <div style={{margin: '15px'}}> >> {data.o_purpose}</div>
                <div style={{margin: '15px'}}> >> {data.o_projectname}</div>
                <div style={{margin: '15px'}}> >> {data.o_require}</div>
                {/* <div style={{margin: '15px'}}> >> {data.o_specific}</div>
                <div style={{margin: '15px'}}> >> {data.o_appointment}</div>
                <div style={{margin: '15px'}}> >> {data.o_results}</div> */}
                <div style={{margin: '15px'}}> >> {data.o_committee1}</div>
                <div style={{margin: '15px'}}> >> {data.o_committee2}</div>
                <div style={{margin: '15px'}}> >> {data.o_committee3}</div>
                <div style={{margin: '15px'}}> >> {data.o_committee4}</div>
                <div style={{margin: '15px'}}> >> {data.o_committee5}</div>
                <div style={{margin: '15px'}}> >> {data.o_committee6}</div>
                {/* <div style={{margin: '15px'}}> >> {data.o_gvm_sub}</div>
                <div style={{margin: '15px'}}> >> {data.o_income}</div>
                <div style={{margin: '15px'}}> >> {data.o_aml_income}</div>
                <div style={{margin: '15px'}}> >> {data.o_direction}</div>
                <div style={{margin: '15px'}}> >> {data.o_policy}</div>
                <div style={{margin: '15px'}}> >> {data.o_works}</div>
                <div style={{margin: '15px'}}> >> {data.o_task}</div>
                <div style={{margin: '15px'}}> >> {data.o_expense_cg}</div>
                <div style={{margin: '15px'}}> >> {data.o_sub_cg}</div>
                <div style={{margin: '15px'}}> >> {data.o_list_n}</div>
                <div style={{margin: '15px'}}> >> {data.o_other_m}</div> */}

              </div>
            )
          })}
        </div>
      </Content>
    </StyledWrapper>
  )
}

export default HistoryContent
