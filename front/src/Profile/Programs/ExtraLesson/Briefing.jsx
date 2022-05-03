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
} from "antd";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Briefing() {
  const { Title } = Typography;
  const [loading, setLoading] = useState(true);
  const [viewmod, setViewmod] = useState("view");
  const { Option } = Select;
  const { Panel } = Collapse;
  const { TextArea } = Input;

  //   if (loading) {
  //     return "...Loading";
  //   }
  return (
    <>
      <Form>
        <Title style={{ marginLeft: "70px", marginTop: "20px" }} level={3}>
          Extra lesson
        </Title>
        <Row style={{ marginTop: "20px", marginLeft: 400 }}>
          <Space direction="vertical">
            <Form.Item
              name="position"
              label="Position"
              style={{ float: "left" }}
            >
              <Select defaultValue="Select.." style={{ width: 300 }}>
                <Option value=""></Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="title"
              label="Title"
              style={{ marginLeft: "25px" }}
            >
              <Input />
            </Form.Item>
          </Space>
        </Row>

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
        </Collapse>
      </Form>

      <Divider />
      <Row justify="end" style={{ marginLeft: "1160px" }}>
        <Button
          type="text"
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: "20px",
            fontStyle: "italic",
          }}
          onClick={() => setViewmod("exercises")}
        >
          Exercises
          <FaArrowCircleRight style={{ color: "#1394e4", fontSize: "24px" }} />
        </Button>
      </Row>
      {/* {viewmod === "view" ? <Exercises /> : null} */}
    </>
  );
}
