import React, { useState } from "react";

import "../../../AccountSettingComponent/TheoryCourseComponent/CreateTheory/CreateTheory.css";

import {
  Button,
  Dropdown,
  Table,
  Row,
  Col,
  Divider,
  Collapse,
  Tabs,
  Switch,
  Form,
  Input,
  Checkbox,
  Select,
} from "antd";
import ButtonOne from "../../../../buttonComponents/ButtonOneComponent/ButtonOne";
import { CloseOutlined } from "@ant-design/icons";
import { Card } from "semantic-ui-react";
import { FaWindowClose } from "react-icons/fa";

export default function CreateTheory() {
  const [colorvalue1, setcolorvalue1] = useState();
  const [colorvalue2, setcolorvalue2] = useState();
  const [colorvalue3, setcolorvalue3] = useState();
  const [size, setSize] = useState(8);
  const [attemptwarning, setattemptwarning] = useState(false);
  const [expairywarning, setexpairywarning] = useState(false);
  const [sittingwarning, setsittingwarning] = useState(false);
  const [requirmentvisble, setrequirmentvisble] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handledelete = () => {};

  const attempwarn = () => {
    setattemptwarning(!attemptwarning);
  };

  const expairywarn = () => {
    setexpairywarning(!expairywarning);
  };

  const sitwarn = () => {
    setsittingwarning(!sittingwarning);
  };

  const closeRequirment1 = () => {
    setcolorvalue1();
    setcolorvalue2();
    setcolorvalue3();
    setattemptwarning(false);
  };
  const closeRequirment2 = () => {
    setcolorvalue1();
    setcolorvalue2();
    setcolorvalue3();
    setexpairywarning(false);
  };
  const closeRequirment3 = () => {
    setcolorvalue1();
    setcolorvalue2();
    setcolorvalue3();
    setsittingwarning(false);
  };

  return (
    <div>
     

      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <h3 style={{ fontWeight: "bold" }}>Create Theory Course </h3>
        </Col>
      </Row>
      <Divider />
      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Max Setting"
              name="maxsetting"
              rules={[{ required: true, message: "Please input your max!" }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create theory course
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <h3 style={{ fontWeight: "bold" }}>Ground school warnings </h3>
        </Col>
      </Row>
      <Divider />
      <Row style={{ marginTop: 20 }}>
        <Col
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          span={12}
          offset={6}
        >
          <ButtonOne
            onClick={attempwarn}
            text={<a>Add attempt warning</a>}
            icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
          ></ButtonOne>
          {attemptwarning ? (
            <div style={{ borderStyle: "outset" }}>
              <Card
                style={{
                  backgroundColor: ["rgb(235, 229, 233)"],
                  width: ["100%"],
                }}
              >
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>attempt warning</p>
                    <br />A colored warning will appear when a certificate is:
                  </h4>
                  <div>
                    <Button type="danger" onClick={closeRequirment1}>
                      <FaWindowClose />
                    </Button>
                  </div>
                </div>

                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <br />
                  <div style={{ gap: 5 }}>
                    <input type="number" size="7" />
                    days
                    <input
                      style={{ marginLeft: 10 }}
                      type="text"
                      value={colorvalue1}
                    />
                    <input
                      type="color"
                      value={colorvalue1}
                      onChange={(c) => setcolorvalue1(c.target.value)}
                    />
                    <CloseOutlined
                      style={{
                        marginLeft: 10,
                        backgroundColor: "red",
                        borderRadius: 50,
                      }}
                      onClick={handledelete}
                    ></CloseOutlined>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            ""
          )}

          <ButtonOne
            onClick={expairywarn}
            text={<a>Add expairy warning</a>}
            icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
          ></ButtonOne>
          {expairywarning ? (
            <div style={{ borderStyle: "outset" }}>
              <Card
                style={{
                  backgroundColor: ["rgb(235, 229, 233)"],
                  width: ["100%"],
                }}
              >
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  <h4 style={{ display: "flex", fontWeight: "bold" }}>
                    <p>expairy warning</p>
                    <br />A colored warning will appear when a certificate is:
                  </h4>
                  <div>
                    <Button type="danger" onClick={closeRequirment2}>
                      <FaWindowClose />
                    </Button>
                  </div>
                </div>

                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <br />
                  <div style={{ gap: 5 }}>
                    <input type="number" size="7" />
                    days
                    <input
                      style={{ marginLeft: 10 }}
                      type="text"
                      value={colorvalue1}
                    />
                    <input
                      type="color"
                      value={colorvalue1}
                      onChange={(c) => setcolorvalue1(c.target.value)}
                    />
                    <CloseOutlined
                      style={{
                        marginLeft: 10,
                        backgroundColor: "red",
                        borderRadius: 50,
                      }}
                      onClick={handledelete}
                    ></CloseOutlined>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            ""
          )}

          <ButtonOne
            onClick={sitwarn}
            text={<a>Add sitting warning</a>}
            icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
          ></ButtonOne>
          {sittingwarning ? (
            <div style={{ borderStyle: "outset" }}>
              <Card
                style={{
                  backgroundColor: ["rgb(235, 229, 233)"],
                  width: ["100%"],
                }}
              >
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  <h4 style={{ display: "flex", fontWeight: "bold" }}>
                    <p>expairy warning</p>
                    <br />A colored warning will appear when a certificate is:
                  </h4>
                  <div>
                    <Button type="danger" onClick={closeRequirment3}>
                      <FaWindowClose />
                    </Button>
                  </div>
                </div>

                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <br />
                  <div style={{ gap: 5 }}>
                    <input type="number" size="7" />
                    days
                    <input
                      style={{ marginLeft: 10 }}
                      type="text"
                      value={colorvalue1}
                    />
                    <input
                      type="color"
                      value={colorvalue1}
                      onChange={(c) => setcolorvalue1(c.target.value)}
                    />
                    <CloseOutlined
                      style={{
                        marginLeft: 10,
                        backgroundColor: "red",
                        borderRadius: 50,
                      }}
                      onClick={handledelete}
                    ></CloseOutlined>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}
