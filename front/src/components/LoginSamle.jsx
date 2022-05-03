import React from "react";
import "../csscomonents/LogingSample.css";
import { Form, Input, Button, Checkbox } from "antd";

function LogingSample() {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 4 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="main">
      <div className="header-logo">
        <div style={{ marginTop: 20 }}>
          <img
            className="logo-image"
            src="https://flightlogger-production-eu.s3.eu-west-1.amazonaws.com/Account/93/logo/111870/small/Screen_Shot_2017-12-18_at_10.09.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJMTPZPBV3SZQYZSA%2F20200902%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200902T041635Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=24987a1e6fadb833e4b31bf4ea5650fb4ff0811fcb8ff59a16a2beb09bd75d97"
            alt="react"
          />
        </div>
        <div className="powerdby">
          <table>
            <tr>
              <td>
                <h4>Powerd By</h4>
              </td>
              <td>
                <a href="/Register">
                  <img
                    className="logo2"
                    src="https://d308f3rtp9iyib.cloudfront.net/assets/logo-1816c958f9d8bcf31a921f274532407df92479709c2247c285e7ec5e686e40da.png"
                    alt="react"
                  />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="loginform">
        <div style={{ display: "flex", marginLeft: 60, fontWeight: "bold" }}>
          <h1>Log in</h1>
        </div>

        <Form
          style={{ marginLeft: 40, marginTop: 10 }}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <div>
              <Input />
            </div>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <a href="">Trouble logging in?</a>
          </Form.Item>
          <div style={{ display: "flex", marginLeft: 30 }}>
            <Form.Item {...tailLayout}>
              <Button type="" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="Empty"></div>
    </div>
  );
}

export default LogingSample;
