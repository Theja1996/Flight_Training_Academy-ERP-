import React, { useEffect, useState } from "react";
import {
  Form,
  Space,
  Col,
  Row,
  Divider,
  Typography,
  Select,
  DatePicker,
  Upload,
  Button,
  TimePicker,
} from "antd";
import { getAll } from "../../../utils/APIUtils";
import { AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import Dragger from "antd/lib/upload/Dragger";
import { CheckOutlined } from "@ant-design/icons";
import moment from "moment";
import Text from "antd/lib/typography/Text";
import TextArea from "antd/lib/input/TextArea";

export default function AddExtraTheory() {
  const { Title } = Typography;
  const { Option } = Select;
  const [form] = Form.useForm();
  const [instructorMasterList, setinstructorMasterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  const format = "HH";
  const format_minute = "mm";
 
  useEffect(() => {
    getAll("FlightInstructor")
      .then((result) => setinstructorMasterList(result), setLoading(false))
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
                Add Extra theory
              </Title>
              <Title
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginLeft: "580px",
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
            <Form.Item
              name="Instructor"
              label="Instructor"
              rules={[{ required: true }]}
            >
              <Select style={{ width: 300, float: "left" }}>
                {instructorMasterList.map((pl) => (
                  <Option value={pl.key}>
                    {pl.callsign +
                      "-" +
                      pl.user_First_name +
                      " " +
                      pl.user_Last_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="start" label="Starts at">
              <Row
                justify="start"
                style={{ float: "left", marginLeft: "20px" }}
              >
                <Space direction="horizontal">
                  <Form.Item name="start_hours">
                    <TimePicker
                      defaultValue={moment("10", format)}
                      format={format}
                      allowClear={false}
                      showNow={false}
                      suffixIcon={false}
                      style={{ width: 50 }}
                      icon={<AiOutlineDown />}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Text>:</Text>
                  </Form.Item>
                  <Form.Item name="start_minutes">
                    <TimePicker
                      defaultValue={moment("55", format_minute)}
                      format={format_minute}
                      allowClear={false}
                      showNow={false}
                      suffixIcon={false}
                      style={{ width: 50 }}
                      icon={<AiOutlineDown />}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Text>-</Text>
                  </Form.Item>
                  <Form.Item name="start_date">
                    <DatePicker />
                  </Form.Item>
                </Space>
              </Row>
            </Form.Item>

            <Form.Item
              name="end"
              label="Ends at"
              style={{ marginTop: "-30px" }}
            >
              <Row
                justify="start"
                style={{ float: "left", marginLeft: "25px" }}
              >
                <Space direction="horizontal">
                  <Form.Item name="end_hours">
                    <TimePicker
                      defaultValue={moment("10", format)}
                      format={format}
                      allowClear={false}
                      showNow={false}
                      suffixIcon={false}
                      style={{ width: 50 }}
                      icon={<AiOutlineDown />}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Text>:</Text>
                  </Form.Item>
                  <Form.Item name="end_minutes">
                    <TimePicker
                      defaultValue={moment("55", format_minute)}
                      format={format_minute}
                      allowClear={false}
                      showNow={false}
                      suffixIcon={false}
                      style={{ width: 50 }}
                      icon={<AiOutlineDown />}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Text>-</Text>
                  </Form.Item>
                  <Form.Item name="end_date">
                    <DatePicker />
                  </Form.Item>
                </Space>
              </Row>
            </Form.Item>

            <Row justify="start" style={{ float: "left", marginLeft: "80px" }}>
              <Space direction="horizontal">
                <Form.Item name="add_files">
                  <Upload>
                    <Button icon={<FaPlus style={{ color: "#5cb85c" }} />}>
                      Add documents
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item name="add_files">
                  <Dragger>or drop here</Dragger>
                </Form.Item>
              </Space>
            </Row>

            <Form.Item
              name="description"
              label="Description"
              style={{ float: "left" }}
            >
              <TextArea rows={15} cols={100} />
            </Form.Item>

            <Form.Item style={{ float: "left", marginLeft: "80px" }}>
              <Button
                htmlType="submit"
                icon={
                  <CheckOutlined
                    style={{ color: "#5cb85c", fontWeight: "bold" }}
                  />
                }
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
