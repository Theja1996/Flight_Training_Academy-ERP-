import React, { useEffect, useState } from "react";
import {
  Row,
  Space,
  Select,
  Button,
  Form,
  Collapse,
  Divider,
  Typography,
} from "antd";
import { FaArrowCircleLeft, FaInfoCircle, FaRegLifeRing, FaWrench } from "react-icons/fa";
import Modal from "antd/lib/modal/Modal";
import TextArea from "antd/lib/input/TextArea";
import { getAll, getMaxId } from "../../../utils/APIUtils";
import { TiInfoLarge } from "react-icons/ti";
import { CheckOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

export default function Debriefing() {
  const { Option } = Select;
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [masterList, setMasterList] = useState([]);
  const [form] = Form.useForm();
  const { Panel } = Collapse;
  useEffect(() => {
    getAll("FlightInstructor")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  function doDebriefingComments(values) {
   
    setLoading(true);
    getMaxId("DebriefingComments")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
      

       
         
      })
     
    console.log(values);
  }


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // if (loading) {
  //   return "...Loading";
  // }

  return (
    <>
      <Modal
        visible={isModalVisible}
        footer={false}
        onCancel={handleCancel}
        style={{ backgroundColor: "#3baee7" }}
      >
        <p style={{ Color: "#4cbcf5", fontStyle: "italic" }}>
          Only instructors and administrators are able to see this comment
        </p>
      </Modal>
      <Form   name="register"
          form={form}
          onFinish={doDebriefingComments}>
      <Row style={{ marginTop: "20px" }} justify="space-between">
      <Space direction="vertical">
    
        <Collapse style={{ width: "100%" , marginLeft: "300px"}} defaultActiveKey={["1"]}>
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
                Debriefing comment
              </header>
            }
            key="1"
            style={{
              borderRadius: "4px",
              backgroundColor: " #E6E6E6",
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              // height: "40px",
              width: "100%",
            }}
          > 
            <Form.Item name="debriefingComment">
              <TextArea rows={4}  bordered={false}  />
            </Form.Item>
          </Panel>
        </Collapse>

        <Collapse style={{  width: "100%" , marginLeft: "300px" }}>
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
                Instructor note
                <FaInfoCircle
                  style={{
                    color: "#2491f7",
                    fontSize: "20px",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                  onClick={showModal}
                />
              </header>
            }
            key="1"
            style={{
              borderRadius: "4px",
              backgroundColor: " #E6E6E6",
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              // height: "40px",
              width: "100%",
            }}
          >
            <Form.Item name="instructorNote">
              <TextArea rows={4} bordered={false} />
            </Form.Item>
          </Panel>
        </Collapse>

        <Collapse style={{ width: "100%" , marginLeft: "300px" }}>
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
                Student note
                <FaInfoCircle
                  style={{
                    color: "#2491f7",
                    fontSize: "20px",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                  onClick={showModal}
                />
              </header>
            }
            key="1"
            style={{
              borderRadius: "4px",
              backgroundColor: " #E6E6E6",
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              // height: "40px",
              width: "100%",
            }}
          >
            <Form.Item name="studentNote">
              <TextArea rows={4}  bordered={false} />
            </Form.Item>
          </Panel>
        </Collapse>

        <Space direction="vertical">
          <h2 style={{ textAlign: "left", marginLeft:"300px" }}>Reports and messages</h2>
          <p style={{ textAlign: "left", marginLeft:"300px" }}>
            Use the buttons below to send feedback, report a maintenance issue
            or file a safety management report.
          </p>
        </Space>
        <Row style={{ marginLeft:"300px" }}>
        <Space direction="horizontal">
          <Button
            onClick={showModal}
            type="text"
            style={{ backgroundColor: "#5bc0de", fontSize: "16px", color: "#ffffff",fontWeight:"bold"}}
          >
          
            <TiInfoLarge style={{ color: "#ffffff", fontSize: "20px" }} />  Feedback
          </Button>
          <Button
            onClick={showModal}
            type="text"
            style={{ backgroundColor: "#5bc0de",fontSize: "16px" , color: "#ffffff"}}
          >
           
            <FaWrench style={{ color: "#ffffff", fontSize: "20px" }} /> Maintanance
          </Button>
          <Button
            onClick={showModal}
            type="text"
            style={{ backgroundColor: "#5bc0de", fontSize: "16px", color: "#ffffff" }}
          >
      
            <FaRegLifeRing style={{  color: "#ffffff", fontSize: "20px" }} />   Safety management
          </Button>
        </Space></Row>
       
      </Space>
      <Divider style={{ marginLeft:"300px",width:10}}/>
      </Row>
      <Row justify="space-between">
        <Space direction="horizontal">
        <Form.Item>
      <Button
                type="text"
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "20px",
                  fontStyle: "italic",
                  marginLeft:"300px"
                }}
             //   onClick={() => setViewmod("view")}
              >
               
                <FaArrowCircleLeft
                  style={{ color: "#1394e4", fontSize: "24px" }}
                /> Flight
              
              </Button>  </Form.Item>
              
              <Form.Item>
            <Button
           //   loading={loading}
              htmlType="submit"
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
                marginTop: "10px",
                marginLeft: "300px",
              }}
            >
              <CheckOutlined /> Submit
            </Button>
          </Form.Item> <Form.Item><Text>as</Text> </Form.Item>
          <Form.Item
                            name="instructors"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Select
                              showSearch
                              style={{ width:300 }}
                            placeholder="Select an instructor"
                            >
                            
                     {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.callsign +"-"+ pl.user_First_name+" "+pl.user_Last_name}</Option>
                ))}
                 
                            </Select>
                          </Form.Item>
              </Space></Row>
      </Form>
  
    </>
  );
}
