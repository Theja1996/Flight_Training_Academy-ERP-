import React, { useEffect, useState } from "react";

import {
  UploadOutlined,
  CheckOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";

import {
  Space,
  Button,
  Menu,
  Dropdown,
  Divider,
  Upload,
  Row,
  Col,
  Form,
  notification,
} from "antd";
import { add, edit, get, getMaxId } from "../../utils/APIUtils";
import { useParams } from "react-router";

export default function Editimage() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  let { key } = useParams();
  // const fileList = [
  //   {
  //     uid: "1",
  //     name: "",
  //     status: "done",

  //     url:
  //       "https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/original/Screen_Shot_2017-12-18_at_10.09.31.png",
  //   },
  // ];
  const [data, setData] = useState({});
  
  useEffect(() => {
    get("users", key)
      .then((d) => {
        setData(d);
        form.setFieldsValue(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function doupdateStudent(values) {
    setLoading(true);

   
    let v = { ...values };
    v.key = data.key;
    v.active = data.avtive;
v.email = data.email;
   
    v.programme = data.programme;
    v.batch = data.batch;
    v.status = data.status;
    v.studentImage = "1";
   
    edit(v, "users", key)
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
            Edit Image
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Col
          span={14}
          style={{
            marginLeft: "200px",
          }}
        >
          <Form   form={form}
            onFinish={doupdateStudent}
            initialValues={{studentImage:"https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/original/Screen_Shot_2017-12-18_at_10.09.31.png"}}>
            <Space direction="horizontal">
              <Form.Item name="studentImage">
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <PlusOutlined style={{ color: "green" }} />
                    Choose image
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item
                name="dragger"
              
            
              >
                <Upload.Dragger name="studentImage" action="/upload.do">
                  <InboxOutlined />

                  <p>or drop here</p>
                </Upload.Dragger>
              </Form.Item>
              <Form.Item>
                <Upload
                 
                  listType="picture"
               
                ></Upload>
              </Form.Item>
            </Space>
            <Form.Item shouldUpdate={true}>
                  {() => (
                    <Button loading={loading}  htmlType="submit"   style={{
                      backgroundColor: "#5cb85c",
                      color: "white",
                      borderRadius: "4px",
                      marginTop: "25px",
                    }}>
                      <CheckOutlined /> Update image
                    </Button>
                  )}
                </Form.Item>
           
          </Form>
        </Col>
      </Row>
     
    </>
  );
}
