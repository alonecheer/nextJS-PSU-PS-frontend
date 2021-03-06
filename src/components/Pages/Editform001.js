import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Divider,
  Descriptions,
  Radio,
  BackTop
} from 'antd'

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
  .text-input {
    width: 250px;
    border-bottom: 2px solid #d9dee3;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
  }

  .btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 2px solid #d7d7d7;
    outline: none;
    transition: 1s ease-in-out;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn:hover {
    transition: 1s ease-in-out;
    background: #5ab0ff;
  }

  .btn2:hover {
    transition: 1s ease-in-out;
    background: #ffd7b6;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn span {
    color: black;
    font-size: 18px;
    font-weight: 100;
  }
  .center {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    justify-content: space-around;
  }
  
`
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
const EditForm001Content = props => {
  const [size, setSize] = useState('default')
  const [order_id, setOrder_id] = useState(props.order_id)
  //console.log('order_id inpage editform001 = ', order_id)
  const [username, setUsername] = useState('')
  const getuser = () => {
    setUsername(sessionStorage.getItem('username'))
  }

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const onSubmit = data => {
    //console.log('data', data)
    axios.patch(`http://localhost:3001/form001/${order_id}`, data).then(res => {
      //console.log('res.data', res.data)
    })
    openMessage()
  }
  const key = 'updatable'
  const openMessage = () => {
    message.loading({ content: 'Save...', key })
    setTimeout(() => {
      message.success({ content: 'Saved!', key, duration: 2 })
      Router.push('/homepage')
    }, 1000)
  }
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }
  const checkbox = e => {
    console.log(`checked = ${e.target.checked}`)
  }
  const [history, setHistoty] = useState([])
  const getform001byorder_id = async () => {
    const found = await axios.get(
      `http://localhost:3001/form001/findbyorder/${order_id}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
    console.log('history', history)
  }

  useEffect(() => {
    getuser(), getform001byorder_id()
  }, [])
  return (
    <StyledWrapper>
      {history.map((data, index) => {
        return (
          <div key={index}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>แบบฟอร์ม</Breadcrumb.Item>
              <Breadcrumb.Item>แก้ไขคำสั่งซื้อพัสดุแบบปกติ 001</Breadcrumb.Item>
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
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Divider
                      orientation='left'
                      style={{ color: '#333', fontWeight: 'normal' }}
                    >
                      <h1>
                        แก้ไขคำสั่งซื้อพัสดุแบบปกติ เลขออร์เดอร์ที่ {order_id}
                      </h1>
                      แบบขอจัดหาพัสดุของสำนักงานอธิการบดีวิทยาเขตภูเก็ต
                      กรณีวงเงินครั้งหนึ่งไม่เกิน 5 แสนบาท ที่มิใช่ก่อสร้าง
                    </Divider>

                    <Radio.Group onChange={cssonChange} value={size}>
                      <Radio value='default'>default</Radio>
                      <Radio value='middle'>middle</Radio>
                      <Radio value='small'>small</Radio>
                    </Radio.Group>
                    <br />
                    <br />
                    {/* ---------------------------------------------------- Ch 1 ---------------------------------------------------- */}
                    <Descriptions bordered title='1. รายละเอียด' size={size}>
                      <Descriptions.Item label='เอกสารของ'>
                        <input
                          className='text-input'
                          name='sid'
                          value={username}
                          disabled={true}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='เอกสารที่ มอ. 696 /'>
                        <input
                          className='text-input'
                          name='o_location'
                          //placeholder={data.o_location}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='ลงวันที่'>
                        <input
                          className='text-input'
                          name='o_date'
                          //placeholder={data.o_date}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item
                        span={3}
                        label='ด้วยมหาวิทยาลัยการคอมพิวเตอร์
                มีความประสงค์ที่จะใช้พัสดุด้านล่างนี้เพื่อ'
                      >
                        <input
                          className='text-input'
                          name='o_purpose'
                          //placeholder={data.o_purpose}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='ชื่อโครงการ (ถ้ามี)'>
                        <input
                          className='text-input'
                          name='o_projectname'
                          //placeholder={data.o_projectname}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='วันที่ต้องใช้พัสดุ'>
                        <input
                          className='text-input'
                          name='o_require'
                          //placeholder={data.o_require}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                    </Descriptions>
                    {/* -------------------------------------------------------------------------------------------------------------- */}
                    <br></br>
                    {/* ---------------------------------------------------- Ch 2 ---------------------------------------------------- */}
                    <Descriptions
                      bordered
                      title='2. รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน'
                      size={size}
                    >
                      <Descriptions.Item
                        span={3}
                        label='2.1 รายละเอียดคุณลักษณะเฉพาะ/ขอบเขตงาน
                (ประทับตรามหาวิทยาลัยพร้อมผู้มีอำนาจลงนาม)  (จำนวนแผ่น)'
                      >
                        <input
                          type='number'
                          className='text-input'
                          name='o_specific'
                          //placeholder={data.o_specific}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item
                        span={3}
                        label='2.2
                บันทึกการแต่งตั้งคณะกรรมการกำหนดคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น)'
                      >
                        <input
                          type='number'
                          className='text-input'
                          name='o_appointment'
                          //placeholder={data.o_appointment}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item
                        span={3}
                        label='2.3 บันทึกรายงานผลการจัดทำคุณลักษณะเฉพาะ/ขอบเขตงานและราคากลาง  (จำนวนแผ่น)'
                      >
                        <input
                          type='number'
                          className='text-input'
                          name='o_results'
                          //placeholder={data.o_results}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                    </Descriptions>
                    {/* -------------------------------------------------------------------------------------------------------------- */}
                    <br />
                    {/* ---------------------------------------------------- Ch 3 ---------------------------------------------------- */}
                    <Descriptions bordered title='3. คณะกรรมการ' size={size}>
                      <div span={3}>คณะกรรมการพิจารณาผล</div>
                      <Descriptions.Item label='ประธานกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee1'
                          //placeholder={data.o_committee1}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee2'
                          //placeholder={data.o_committee2}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee3'
                          //placeholder={data.o_committee3}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <div span={3}>คณะกรรมการตรวจรับพัสดุ</div>
                      <Descriptions.Item label='ประธานกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee4'
                          //placeholder={data.o_committee4}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee5'
                          //placeholder={data.o_committee5}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='คณะกรรมการ'>
                        <input
                          className='text-input'
                          name='o_committee6'
                          //placeholder={data.o_committee6}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                    </Descriptions>
                    {/* -------------------------------------------------------------------------------------------------------------- */}
                    <br />
                    {/* ---------------------------------------------------- Ch 4 ---------------------------------------------------- */}
                    <Descriptions bordered title='4. แหล่งเงิน' size={size}>
                      <div span={3}>* ใส่ข้อมูลเฉพาะที่มี</div>
                      <Descriptions.Item label='เงินอุดหนุนจากรัฐบาล ปี'>
                        <input
                          type='number'
                          className='text-input'
                          name='o_gvm_sub'
                          //placeholder={data.o_gvm_sub}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='เงินรายได้ ปี'>
                        <input
                          type='number'
                          className='text-input'
                          name='o_income'
                          //placeholder={data.o_income}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='เงินรายได้สะสม ปี'>
                        <input
                          type='number'
                          className='text-input'
                          name='o_aml_income'
                          //placeholder={data.o_aml_income}
                          ref={register}
                        ></input>
                      </Descriptions.Item>

                      <Descriptions.Item label='ทิศทาง'>
                        <input
                          className='text-input'
                          name='o_direction'
                          //placeholder={data.o_direction}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={2} label='นโยบาย'>
                        <input
                          className='text-input'
                          name='o_policy'
                          //placeholder={data.o_policy}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='ผลงาน'>
                        <input
                          className='text-input'
                          name='o_works'
                          //placeholder={data.o_works}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={2} label='งาน'>
                        <input
                          className='text-input'
                          name='o_task'
                          //placeholder={data.o_task}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item label='หมวดรายจ่าย'>
                        <input
                          className='text-input'
                          name='o_expense_cg'
                          //placeholder={data.o_expense_cg}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={2} label='หมวดย่อย'>
                        <input
                          className='text-input'
                          name='o_sub_cg'
                          //placeholder={data.o_sub_cg}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item span={3} label='ชื่อรายการ'>
                        <input
                          className='text-input'
                          name='o_list_n'
                          //placeholder={data.o_list_n}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                      <Descriptions.Item
                        span={3}
                        label='เงินอื่นๆโปรดระบุ (ตามที่แนบมาพร้อมนี้) '
                      >
                        <input
                          type='number'
                          className='text-input'
                          name='o_other_m'
                          //placeholder={data.o_other_m}
                          ref={register}
                        ></input>
                      </Descriptions.Item>
                    </Descriptions>
                    <br />
                    {/* -------------------------------------------------------------------------------------------------------------- */}
                    {/* ---------------------------------------------------- button ---------------------------------------------------- */}
                    <div className='center'>
                      <button style={{ marginLeft: '15px' }} type='submit'>
                        Eidt form001
                      </button>
                      {/* <button className='btn' type='submit'>
                <svg
                  width='180px'
                  height='60px'
                  viewBox='0 0 180 60'
                  className='border'
                >
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='bg-line'
                  />
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='hl-line'
                  />
                </svg>
                <span>Submit</span>
              </button> */}

                      {/* <button className='btn btn2' >
                <svg
                  width='180px'
                  height='60px'
                  viewBox='0 0 180 60'
                  className='border'
                >
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='bg-line'
                  />
                  <polyline
                    points='179,1 179,59 1,59 1,1 179,1'
                    className='hl-line'
                  />
                </svg>
                <span>Cancel</span>
              </button> */}
                    </div>
                  </form>
                  {/* -------------------------------------------------------------------------------------------------------------- */}
                  <br />
                  <br />
                </div>
                <Divider
                  orientation='left'
                  style={{ color: '#333', fontWeight: 'normal' }}
                ></Divider>
              </div>
            </Content>
          </div>
        )
      })}
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </StyledWrapper>
  )
}

export default EditForm001Content
