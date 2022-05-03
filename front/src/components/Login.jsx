import React, { useState } from "react";
import logo from "../logo.svg";
import { useAppContext } from "./Contaxt";
import user from "../Datacomponents/userdata.json";
import "../csscomonents/login.css";
import Logo from "../assets/Picture2.png";
import { Button, notification } from "antd";
import { useHistory } from "react-router-dom";
import { Form, Input, Checkbox } from "antd";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userrecord, setuserrecord] = useState([]);
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  function doLogin() {
    localStorage.setItem("currentuser", username);
    history.push("/Home");
    userHasAuthenticated(true);
    //  else {
    //   notification.open({
    //     message: "Alert",
    //     description: "Please enter the correct password & username",
    //   });
    // }
  }

  function ShowPassword() {
    notification.open({
      message: "Correct password & username",
      description: "username:waseem && password:1234 ",
    });
  }

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
            // src="https://flightlogger-production-eu.s3.eu-west-1.amazonaws.com/Account/93/logo/111870/small/Screen_Shot_2017-12-18_at_10.09.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJMTPZPBV3SZQYZSA%2F20200902%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200902T041635Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=24987a1e6fadb833e4b31bf4ea5650fb4ff0811fcb8ff59a16a2beb09bd75d97"
            src={Logo}
            alt="react"
          />
        </div>
        <div className="powerdby">
          <table style={{ border: 0 }} className="loging-title">
            <tr style={{ border: 0 }}>
              {/* <td style={{ border: 0, fontWeight: "bold" }}>
               <h2> Asian Academy of Aeronautics{" "}</h2>
              </td> */}
              <td style={{ border: 0 }}>
                <h4>Powerd By</h4>
              </td>
              <td style={{ border: 0 }}>
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
              <Input
                type="email"
                placeholder="email"
                value={username}
                onChange={(u) => setusername(u.target.value)}
              />
            </div>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              type="password"
              placeholder="Password"
              value={password}
              onChange={(p) => setpassword(p.target.value)}
            />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <a href="" onClick={ShowPassword}>
              Trouble logging in?
            </a>
          </Form.Item>
          <div style={{ display: "flex", marginLeft: 30 }}>
            <Form.Item {...tailLayout}>
              <Button type="" htmlType="submit" onClick={doLogin}>
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="Empty"></div>
    </div>

    // <div className="login-form">
    //   <div>
    //     <img
    //       className="logo-image"
    //       src="https://flightlogger-production-eu.s3.eu-west-1.amazonaws.com/Account/93/logo/111870/small/Screen_Shot_2017-12-18_at_10.09.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJMTPZPBV3SZQYZSA%2F20200902%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200902T041635Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=24987a1e6fadb833e4b31bf4ea5650fb4ff0811fcb8ff59a16a2beb09bd75d97"
    //       alt="react"
    //     />
    //   </div>
    //   <div className="login">
    //     <h1>Log in</h1>
    //     <Form>
    //       <Form.Field className="form-field">
    //         <label>email:</label>

    //         <input
    //           className="inpu"
    //           type="email"
    //           placeholder="email"
    //           value={username}
    //           onChange={(u) => setusername(u.target.value)}
    //         />
    //       </Form.Field>
    //       <Form.Field className="form-field">
    //         <label>password:</label>
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           value={password}
    //           onChange={(p) => setpassword(p.target.value)}
    //         />
    //       </Form.Field>

    //       <a className="href" onClick={ShowPassword}>
    //         if your trobble in password
    //       </a>
    //       <br />
    //       <div className="submit">
    //         <Button type="submit" onClick={doLogin}>
    //           Login
    //         </Button>
    //       </div>
    //     </Form>
    //   </div>
    //   <div className="rightlink">
    //     <table>
    //       <tr>
    //         <td>
    //           <h4>Powerd By</h4>
    //         </td>
    //         <td>
    //           <a href="/Register">
    //             <img
    //               className="logo2"
    //               src="https://d308f3rtp9iyib.cloudfront.net/assets/logo-1816c958f9d8bcf31a921f274532407df92479709c2247c285e7ec5e686e40da.png"
    //               alt="react"
    //             />
    //           </a>
    //         </td>
    //       </tr>
    //     </table>
    //   </div>
    // </div>
  );
}

export default Login;
