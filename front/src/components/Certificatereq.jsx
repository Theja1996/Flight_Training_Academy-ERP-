import {
  Col,
  Row,
  Input,
  Divider,
  Form,
  Button,
  Select,
  Checkbox,
  Collapse,
  Tabs,
  Card,
  Space,
  InputNumber,
  notification,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";

import { add, getMaxId, remove_key, edit } from "../utils/APIUtils";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { FaCalendarAlt, FaFile } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import CertificateList from "../utils/Certificate.json";
import ColorPicker from "./ColorPicker/ColorPicker";
export default function Certificatereq(props) {
  const [Programs, setPrograms] = useState();

  const [keyValue, setkeyValue] = useState();
  const { Option } = Select;
  const { Panel } = Collapse;

  const [loading, setLoading] = useState(false);
  const [showrequirments, setshowrequirments] = useState(false);
  const [datawarning, setdatawarning] = useState(false);
  const [colorvalue, setcolorvalue] = useState([""]);
  const [colorvalue1, setcolorvalue1] = useState();
  const [colorvalue2, setcolorvalue2] = useState();
  const [colorvalue3, setcolorvalue3] = useState();
  const [visible, setVisible] = useState(true);
  const [initial, setInitial] = useState("#f31861");
  const { TabPane } = Tabs;
  const [form] = Form.useForm();
  const location = useLocation();
  const [selectedrevision, setSelectedrevision] = useState();

  const handleClose = (e) => {
    console.log(e);
    setVisible(false);
  };
  const doShowrequirments = () => {
    setshowrequirments(true);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const handleCancel = (e) => {
    console.log(e);
    setshowrequirments(false);
  };

  const doWarning = () => {
    setdatawarning(true);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
   <>
       {/* <Row justify="center" style={{ marginTop: "10px" }}>
        <Col span={24} offset={24}>
          <Tabs type="card">
            <TabPane
              tab={
                <tab style={{ color: "black" }}>Certificate requirements</tab>
              }
              key="1"
            />
          </Tabs>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "15px",
             textAlign: "start",
            }}
          >
            Certificate requirements
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row> */}
     
      {showrequirments ? (
      

      <Row justify="center"> 
      <Col span={8}>
            <Card
               bordered={false}
               style={{
                 width: 900,
                 backgroundColor: " #ececec",
                 height: "100%",
                 display: "block",
               }}
            >
              <AiFillCloseCircle
                style={{
                  marginLeft: "800px",
                  color: "#c0392b",
                  fontSize: "22px",
               //   marginTop:"20px"
                }}
                onClick={handleCancel}
              ></AiFillCloseCircle>
            
                <Form.Item
                  name="certificate"
                  label="Certificate"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: "50%", marginLeft: "-350px" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    {CertificateList.map((pl) => (
                      <Option value={pl.value}>
                        {pl.value} <FaFile style={{ float:"right" }} />
                        <FaCalendarAlt style={{ float:"right"}} />
                       
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
             
              <Form.Item
                label={
                  <label style={{ fontWeight: "bold" }}>
                    A colored warning will appear when a certificate is:
                  </label>
                }
              >  </Form.Item>
                 <Row justify="space-between">
                 <Col >   <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gab: 10,
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}> Missing</label>
                    <Form.Item name="color">
                    
                      <ColorPicker
                        value="#f2dede"
                        onChange={(c) => setcolorvalue2(c.target.value)}
                      />                    </Form.Item>
                  </div></Col>
                  <Col >   <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gab: 10,
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}> Expired</label>
                    <Form.Item name="color">
                    
                      <ColorPicker
                        value="#f2dede"
                        onChange={(c) => setcolorvalue2(c.target.value)}
                      />                    </Form.Item>
                  </div></Col>
                  <Col >   <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gab: 10,
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}>  Requiring approval</label>
                    <Form.Item name="color">
                    
                      <ColorPicker
                        value="#f2dede"
                        onChange={(c) => setcolorvalue2(c.target.value)}
                      />                    </Form.Item>
                  </div></Col>
          
          </Row> 
              <Row justify="center" style={{ fontWeight: "bold" }}>
                Date warnings
              </Row>

              <Row justify="center">
                <Space direction="vertical">
                  {visible ? (
                    <Card
                      style={{ width: "300px", backgroundColor: "#caeafa" }}
                    >
                      
                        <Space direction="horizontal">
                          <Form.Item name="input-number">
                            <InputNumber
                              min={1}
                              max={31}
                              style={{
                                width: 50,
                              }}
                            />
                          </Form.Item>
                          <Form.Item> days</Form.Item>
                          <Form.Item name="color">
                    
                    <ColorPicker
                      value="#f2dede"
                    
                    />                    </Form.Item>
                          <Form.Item>     <AiFillCloseCircle
                            style={{ color: "#c0392b", fontSize: "18px" }}
                            closable
                            onClick={handleClose}
                          ></AiFillCloseCircle>  </Form.Item>
                        </Space>
                     
                    </Card>                  ) : null}  
                  <Card style={{ width: "300px", backgroundColor: "#caeafa" }}>
                    
                      <Space direction="horizontal">
                        <Form.Item name="input-number" >
                          <InputNumber
                            min={1}
                            max={31}
                            style={{
                              width: 50,
                            }}
                          />
                        </Form.Item>
                        <Form.Item> days</Form.Item>
                        <Form.Item name="color">
                    
                    <ColorPicker
                      value="#f2dede"
                    
                    />                    </Form.Item>
                        <Form.Item>      <AiFillCloseCircle
                          style={{ color: "#c0392b", fontSize: "18px" }}
                          closable
                          onClick={handleClose}
                        ></AiFillCloseCircle> </Form.Item>
                      </Space>
                  
                  </Card>
                  {datawarning ? (
                    <Card
                      style={{ width: "300px", backgroundColor: "#caeafa" }}
                    >
                     
                        <Space direction="horizontal">
                          <Form.Item name="input-number" >
                            <InputNumber
                              min={1}
                              max={31}
                              style={{
                                width: 50,
                              }}
                            />
                          </Form.Item>
                          <Form.Item> days</Form.Item>
                          <Form.Item name="color">
                    
                    <ColorPicker
                      value="#f2dede"
                    
                    />                    </Form.Item>
                          <Form.Item>        <AiFillCloseCircle
                            style={{ color: "#c0392b", fontSize: "18px" }}
                            closable
                            onClick={handleClose}
                          ></AiFillCloseCircle> </Form.Item>
                        </Space>
                     
                    </Card>
                  ) : (
                    ""
                  )}</Space></Row>
                  <Row justify="center">
                    <Space direction="horizontal">
                      <Form.Item
                        label="Notify via email"
                        style={{
                          marginLeft:"-240px"
                  
                        }}
                      >
                        <Tooltip title="If checked,daily emails will be sent when date warnings are active.">
                          <Checkbox onChange={onChange}  style={{
                      marginLeft:"-100px"
             
                    }} />
                        </Tooltip>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          onClick={doWarning}
                          style={{
                            borderRadius: "4px",
                         marginTop:"10px"
                          }}
                        >
                          <PlusOutlined style={{ color: "#5cb85c" }} />
                          Add Warnings
                        </Button>
                      </Form.Item>

                     </Space>
              </Row>
           
              </Card></Col> </Row>
               ) : (
        ""
      )}
      <Row justify="start">
        <Button
          onClick={doShowrequirments}
          type="text"
          style={{
            backgroundColor: "#5cb85c",
            color: "white",
            borderRadius: "4px",
            marginLeft: "390px",
            marginTop: "10px",
          }}
        >
          <PlusOutlined />
          Add certificate Requirments
        </Button>
      </Row>
       {/* </Card>   ) : (
        ""
      )} */}
    </>
  );
}
