import React, { useEffect, useState } from "react";
import {
  Row,
  Space,
  Select,
  Button,
  Form,
  Input,
  Collapse,
  Typography,
  Divider,
  Card,
  TimePicker,
  Col,
} from "antd";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Text from "antd/lib/typography/Text";
import moment from "moment";
import { CheckOutlined } from "@ant-design/icons";

export default function Flight() {
  const { Title } = Typography;
  const [loading, setLoading] = useState(true);
  const format = "HH:mm";

  //   if (loading) {
  //     return "...Loading";
  //   }
  return (
    <>
      <Form>
    
        <Row justify="center">   
          <Space direction="vertical">
            <Text style={{ fontWeight: "bold", fontSize: "16px" ,float:"left", marginLeft:"250px"}}>
              Pre/Post flight
            </Text>
            <Row
              style={{
                width: 1000,
                display: "flex",
                marginLeft: "250px",
                background: "#ececec",
                height: 30,
             
              }}
            >
              <Row align="middle">
                <Space direction="horizontal">
                  <Form.Item>
                    <Text>Pre flight </Text>
                  </Form.Item>
                  <Form.Item>
                    <TimePicker
                      defaultValue={moment("12:08", format)}
                      format={format}
                      allowClear={false}
                      showNow={false}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Text>(hours : minutes)</Text>
                  </Form.Item>
                </Space>
              </Row>
            </Row>
            <Row
              style={{
                width: 1000,
                display: "flex",
                marginLeft: "250px",
                background: "#ececec",
                height: 30,
               
              }}
            >
              <Row align="middle" justify="space-around">
                <Space direction="horizontal">
                  <Form.Item>
                    <Text>Pre flight </Text>
                  </Form.Item>
                  <Form.Item>
                    <TimePicker
                      defaultValue={moment("12:08", format)}
                      format={format}
                      allowClear={false}
                      showNow={false}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Text>(hours : minutes)</Text>
                  </Form.Item>
                </Space>
              </Row>
            </Row>
          </Space>
          
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Space direction="vertical" style={{float:"right"}}>
              <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                Syllabus times
              </Text>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>VFR Dual</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>VFR Solo</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>VFR SPIC</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>VFR Sim</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>IFR Dual</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>IFR SPIC</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
              <Space direction="horizontal" style={{ marginLeft: "200px" }}>
                <Form.Item>
                  <Text>IFR Sim</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space>
            </Space>
          </Col>
          <Col span={8} offset={2}>
          <Space direction="vertical" style={{float:"left"}}>
            <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
              Additional times
            </Text> 
            <Row  style={{
               
                display: "flex",
               
                background: "#ececec",
                height: 30,
               
              }}>    <Space direction="horizontal">
              <Form.Item>
                  <Text>Multi Engine (ME)</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                    style={{ marginLeft: "23px" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space> </Row> 
              <Row  style={{
               
               display: "flex",
              
               background: "#ececec",
               height: 30,
           
             }}>        <Space direction="horizontal" >
                <Form.Item>
                  <Text>Night Time (NT)</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                    style={{ marginLeft: "33px" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space> </Row> 
              <Row  style={{
               
               display: "flex",
              
               background: "#ececec",
               height: 30,
              
             }}>             <Space direction="horizontal">
                <Form.Item>
                  <Text>Cross Country (XC)</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                    style={{ marginLeft: "17px" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space></Row> 
              <Row  style={{
               
               display: "flex",
              
               background: "#ececec",
               height: 30,
              
             }}>         <Space direction="horizontal" >
                <Form.Item>
                  <Text>Pilot Flying (PF)</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                    style={{ marginLeft: "38px" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space></Row> 
              <Row  style={{
               
               display: "flex",
              
               background: "#ececec",
               height: 30,
              
             }}>          <Space direction="horizontal" >
                <Form.Item>
                  <Text>Pilot Monitoring (PM)</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space></Row> 
              <Row  style={{
               
               display: "flex",
              
               background: "#ececec",
               height: 30,
              
             }}>        <Space direction="horizontal" >
                <Form.Item>
                  <Text>Instrument Flight (IF)</Text>
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    defaultValue={moment("00h:00m", format)}
                    format={format}
                    allowClear={false}
                    showNow={false}
                    style={{ marginLeft: "5px" }}
                  />
                </Form.Item>
                <Form.Item>
                  <Text>(hours : minutes)</Text>
                </Form.Item>
              </Space></Row> 
            </Space>
          </Col>
        </Row>
        {/* 
        <Collapse
          style={{
            width: "120%",
            marginLeft: "350px",
            justifyContent: "center",
          }}
          defaultActiveKey={["1"]}
        >
          <Panel
            header={
              <header
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "18px",
                  marginTop: -5,
                }}
              >
                Briefing comment
              </header>
            }
            key="1"
            style={{
              borderRadius: "4px",
              backgroundColor: " #E6E6E6",
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
            }}
          >
            <Form.Item>
              <TextArea rows={4} bordered={false} />
            </Form.Item>
          </Panel>
        </Collapse> */}
      </Form>

      <Divider />
      <Row justify="space-between">
      <Space direction="horizontal">
        <Button
          type="text"
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: "20px",
            fontStyle: "italic",
            marginLeft: "330px",
          }}
          //   onClick={() => setViewmod("view")}
        >
          <FaArrowCircleLeft style={{ color: "#1394e4", fontSize: "24px" }} />{" "}
          Exercises
        </Button>
        <Button
                //    loading={loading}
                    htmlType="submit"
                    style={{
                      backgroundColor: "#5cb85c",
                      color: "white",
                      borderRadius: "4px",
                      marginTop: "10px",
                      marginLeft: "550px",
                    }}
                  >
                    <CheckOutlined /> Add lesson
                  </Button>
          </Space>
      </Row>
      {/* {viewmod === "view" ? <Exercises /> : null} */}
    </>
  );
}
