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
  notification,
  Tabs,
} from "antd";
import React, { useEffect, useState } from "react";
import { add, getAll, getMaxId } from "../../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";
import Certificatereq from "../../../../components/Certificatereq";
import { RO } from "country-flag-icons/react/3x2";

export default function CreatePrograms() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TabPane } = Tabs;
  const [loading, setLoading] = useState(false);
  const [masterList, setMasterList] = useState([]);

  useEffect(() => {
    getAll("Programs")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  function doCreateProgram(values) {
    setLoading(true);
    getMaxId("Programs")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;

        add(v, "Programs")
          .then(() => {
            setLoading(false);
            notification["success"]({
              message: "Added Successfully",
            });
            form.resetFields();
          })
          .catch((error) => {
            setLoading(false);
            notification["error"]({
              message: error,
            });
          });
      })
      .catch((error) => {
        setLoading(false);
        notification["error"]({
          message: error,
        });
      });
    console.log(values);
  }

  return (
    <>
      <Row justify="center " style={{ marginTop: "10px" }}>
        <Col span={14}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "15px",
              textAlign: "start",
            }}
          >
            Create Program
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row >
       
          <Form name="register" form={form} onFinish={doCreateProgram}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true }]}
              style={{
                marginLeft: "400px",
              }}
            >
              <Input />
            </Form.Item>
<Row>
            <Form.Item
              name="master"
              label="Use master exercise list from another program"
              style={{ marginLeft: "485px" }}
            >
              <Checkbox style={{ marginLeft: "-635px" }} />
            </Form.Item>
            {form.getFieldValue("master") ? (
              <Form.Item
                label={<label style={{ marginLeft: "100px" }}>Programme</label>}
                name="program_name"
                style={{ marginLeft: "280px" }}
              >
                <Select
                  style={{
                    width: 200,
                    marginLeft: "-135px",
                  }}
                >
                  {masterList.map((pl) => (
                    <Option value={pl.name}>{pl.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            ) : null}</Row>
               
               <Form.Item>       <Row justify="center " style={{ marginTop: "10px" }}>
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
            Create Program
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      </Form.Item>
           
           <Row>
      <Form.Item>
           
              <Certificatereq />
              </Form.Item></Row>
            <Form.Item>
              <Button
                loading={loading}
                htmlType="submit"
                style={{
                  backgroundColor: "#5cb85c",
                  color: "white",
                  borderRadius: "4px",
                  marginTop: "40px",
                  marginLeft: "280px",
                }}
              >
                <CheckOutlined /> Create Program
              </Button>
            </Form.Item>
          </Form>
     
      </Row>
    </>
  );
}
