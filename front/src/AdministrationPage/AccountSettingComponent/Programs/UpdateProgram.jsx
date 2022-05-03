import {
  Col,
  Row,
  Input,
  Divider,
  Form,
  Button,
  Select,
  notification,
  Tabs,
} from "antd";
import React, { useEffect, useState } from "react";
import { edit, get, getAll } from "../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import Certificatereq from "../../../components/Certificatereq";
import Checkbox from "antd/lib/checkbox/Checkbox";

export default function UpdateProgram() {
  let { key } = useParams();

  const { Option } = Select;
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const [data, setData] = useState({});
  const [masterList, setMasterList] = useState([]);
  const { TabPane } = Tabs;
  useEffect(() => {
    getAll("Programs")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    get("Programs", key)
      .then((d) => {
        setData(d);
        form.setFieldsValue(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const doupdateProgram = (values) => {
    setLoading(true);

    let v = { ...values };
    v.key =data.key;
    v.active = data.active;

    edit(v, "Programs", key)
      .then(() => {
        setLoading(false);
        notification["success"]({
          message: "Updated Successfully",
        });
      })
      .catch((error) => {
        setLoading(false);
        notification["error"]({
          message: error,
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  if (loading) {
    return "loading ...";
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
            Update Program
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row justify="start">
        
          <Form
            form={form}
            name="register"
            onFinish={doupdateProgram}
            onFinishFailed={onFinishFailed}
          >
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

            <Form.Item
              name="revision"
              label="Active revision"
              style={{
                marginLeft: "360px",
              }}
            >
              <Select placeholder="Revision 0">
                <Option value="Revision 0">Revision 0</Option>
                <Option value="Revision 1">Revision 1</Option>
              </Select>
            </Form.Item>
      <Row>    <Form.Item
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
            ) : null}
               
               </Row>  

               <Row justify="center " style={{ marginTop: "10px" ,width:"100%"}}>
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

<Row justify="center"> <Form.Item ><Certificatereq /></Form.Item> </Row>

<Row justify="center" >
          
              <Button
                loading={loading}
                htmlType="submit"
                style={{
                  backgroundColor: "#5cb85c",
                  color: "white",
                  borderRadius: "4px",
                  marginTop: "40px",
             marginLeft:"150px"
                }}
               
              >
                <CheckOutlined /> Update Program
              </Button>
           </Row> 
          </Form>
       
      </Row>
      {/* <Certificatereq /> */}

    </>
  );
}
