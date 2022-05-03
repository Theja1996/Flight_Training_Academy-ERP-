import React from "react"
import { Form, Input, Button, notification } from 'antd';
import { add, getMaxId } from "../utils/APIUtils";



 
 export default function Air(){
    const [form] = Form.useForm();
function Doair(values){
  
    getMaxId("Air")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;

        add(v, "Air")
          .then(() => {

            notification["success"]({
              message: "Added Successfully",
            });
            form.resetFields();
          })
          .catch((error) => {

            notification["error"]({
              message: error,
            });
          });
      })
      .catch((error) => {
        // setLoading(false);
        notification["error"]({
          message: error,
        });
      });
    console.log(values);
}


 return(
<>
<Form onFinish={Doair}
     
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</>

 ) }