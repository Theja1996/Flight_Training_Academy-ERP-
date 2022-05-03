import React, { useEffect, useState } from "react";
import {
  Form,
  Space,
  Card,
  Col,
  Row,
  Divider,
  Typography,
  Select,
  Input,
  DatePicker,
  Upload,
  Button,
} from "antd";
import { getAll } from "../../../utils/APIUtils";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import Dragger from "antd/lib/upload/Dragger";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

export default function AddTypeQuestionnaire() {
  const { Title } = Typography;
  const { Option } = Select;
  const [form] = Form.useForm();
  const [masterList, setMasterList] = useState([]);
  const [instructorMasterList, setinstructorMasterList] = useState([]);
  const [studentMasterList, setStudentMasterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentSelectedList, setCommentSelectedList] = useState({});
  const [change, setChange] = useState(false);

  useEffect(() => {
    getAll("Programs")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("FlightInstructor")
      .then((result) => setinstructorMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("users")
      .then((result) => setStudentMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  const gridStyle = {
    width: "140px",
    background:
      "url(https://media-exp1.licdn.com/dms/image/C4D0BAQFvYxp0IqMV9A/company-logo_200_200/0/1519952520890?e=2159024400&v=beta&t=jNBNgJd3x3Y6X4pgToJzFOAFq3UGU7ykY3E08jtdedQ)",
    height: "180px",
    border: "true",
    backgroundColor: "#fff",
  };

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
                Add Type questionnaire
              </Title>
              <Title
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginLeft: "480px",
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
              name="theoryCourse"
              label="Theory course"
              rules={[{ required: true }]}
            >
              <Select style={{ width: 750, marginLeft: "15px" }}>
                {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.name}</Option>
                ))}
              </Select>
            </Form.Item>
            {/* to do map theory category data */}
            <Form.Item
              name="theoryCatgory"
              label="Theory category"
              rules={[{ required: true }]}
            >
              <Select style={{ width: 750 }}>
                {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.name}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="instructor"
              label="Instructor"
              rules={[{ required: true }]}
            >
              <Select style={{ width: 750, marginLeft: "40px" }}>
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

            <Form.Item name="subject" label="Subject">
              <Input
                style={{ width: 300, float: "left", marginLeft: "70px" }}
              />
            </Form.Item>

            <Form.Item name="date" label="Date">
              <DatePicker
                style={{ width: 300, float: "left", marginLeft: "85px" }}
              />
            </Form.Item>

            <Row justify="start" style={{ marginLeft: "125px" }}>
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

            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, name, fieldKey, index) => (
                    <Row>
                      <Card
                        style={{ width: "100%", marginTop: "10px" }}
                        key={field.key}
                      >
                        <CloseOutlined
                          style={{ float: "right" }}
                          onClick={() => {
                            remove(field.name);
                            let commentList = { ...commentSelectedList };
                            delete commentList[field.key.toString()];
                          }}
                        />
                        <Space direction="horizontal">
                          <Form.Item name="studentImage" {...field}>
                            <Card style={gridStyle}> </Card>
                          </Form.Item>
                          <Space direction="vertical">
                            <Form.Item
                              name={[name, "studentName"]}
                              fieldKey={[fieldKey, "studentName"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing studentNamee",
                                },
                              ]}
                              label="Student"
                            >
                              <Select
                                style={{ width: 500, marginLeft: "20px" }}
                              >
                                {studentMasterList.map((pl) => (
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
                            {Object.keys(commentSelectedList).includes(
                              field.key.toString()
                            ) ? (
                              <Form.Item
                                name={[name, "add_comment"]}
                                fieldKey={[fieldKey, "add_comment"]}
                                label="Student comment"
                              >
                                <TextArea rows={4} />
                              </Form.Item>
                            ) : (
                              <Form.Item
                                style={{
                                  alignItems: "flex-start",
                                  marginLeft: "95px",
                                  float: "left",
                                }}
                              >
                                <Button
                                  icon={<AiOutlineCaretDown />}
                                  onClick={() => {
                                    let commentSeletedList1 = {
                                      ...commentSelectedList,
                                    };
                                    commentSeletedList1[
                                      field.key.toString()
                                    ] = true;
                                    setCommentSelectedList(commentSeletedList1);
                                  }}
                                >
                                  Add Student Comment
                                </Button>
                              </Form.Item>
                            )}
                          </Space>
                        </Space>
                      </Card>
                    </Row>
                  ))}
                  <Form.Item>
                    <Button
                      onClick={() => add()}
                      icon={<PlusOutlined style={{ color: "green" }} />}
                      style={{
                        float: "left",
                        marginLeft: "125px",
                        marginTop: "5px",
                      }}
                    >
                      Add student
                    </Button>

                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item
              name="comment"
              label="Comment"
              style={{ float: "left", width: "95%", marginLeft: "50px" }}
            >
              <TextArea rows={10} />
            </Form.Item>

            <Form.Item style={{ float: "right" }}>
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
