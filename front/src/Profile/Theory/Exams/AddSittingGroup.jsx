import React, { useEffect, useState } from "react";
import {
  Form,
  Space,
  Col,
  Row,
  Divider,
  Typography,
  DatePicker,
  Button,
  Select,
} from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { getAll } from "../../../utils/APIUtils";
import Checkbox from "antd/lib/checkbox/Checkbox";

export default function AddSittingGroup() {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  const [masterList, setMasterList] = useState([]);
  const { Option } = Select;
  useEffect(() => {
    getAll("Programs")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Row justify="center" style={{ marginTop: "10px" }}>
        <Col span={14}>
          <Row justify="space-between">
            <Space direction="horizontal">
              <Title
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Add Sitting group
              </Title>
              <Title
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginLeft: "570px",
                }}
              >
                (UTC+05:00)
              </Title>
            </Space>
          </Row>
          <Divider style={{ marginTop: "-10px" }} />

          <Form
            name="register"
            form={form}
            onFinish={(values) => console.log(values)}
            onFieldsChange={() => setChange(!change)}
          >
            <Row justify="start">
              <Space direction="vertical">
              <Form.Item
              name="theoryCourse"
              label="Theory course"
             
            >
              <Select style={{ width: 300 }}>
                {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.name}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
                  name="deactivate"
                  label="Deactivate previous sitting groups"
                  style={{
                  marginLeft:"125px"
                  }}
                >
                  <Checkbox
                    style={{
                      marginLeft: "-525px",
                    }}
                  />
                </Form.Item>
              </Space>
            </Row>

            <Form.Item style={{ float: "left", marginLeft: "100px" }}>
              <Button
                htmlType="submit"
                icon={
                  <CheckOutlined
                    style={{ color: "#5cb85c", fontWeight: "bold" }}
                  />
                }
              >
               Save Sitting group
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
