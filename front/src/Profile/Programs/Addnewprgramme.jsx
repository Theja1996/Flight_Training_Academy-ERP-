import { Col, Row, Divider, Form, Button, Select, notification } from "antd";
import React, { useEffect, useState } from "react";
import { add, getMaxId, getAll, get, edit } from "../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";
import { useParams } from "react-router";

export default function Newprogramme(props) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [masterList, setMasterList] = useState([]);
  let { studentKey } = useParams();

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    get("users", studentKey)
      .then((sd) => {
        setStudentData(sd);
        getAll("Programs")
          .then((result) => {
            let r1 = result.filter((v) => !sd.programme.includes(v.key));
            setMasterList(r1)
            setLoading(false);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  function doAddProgram(values) {
    setLoading(true);

    let stu1 = { ...studentData };
    let programme = stu1.programme;
    if (!programme.includes(values.programme)) {
      programme.push(values.programme);
      stu1.programme = programme;
      edit(stu1, "users", studentKey)
        .then(() => {
          setLoading(false);
          notification["success"]({
            message: "Added Successfully",
          });
          form.resetFields();
        })
        .catch((error) => {
          setLoading(false);
          notification["error"]({
            message: error,
          });
        });
    }
  }

  if (loading) {
    return "...Loading";
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
            Add New programme
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row justify="start">
        <Col>
          <Form name="register" form={form} onFinish={doAddProgram}>
            <Form.Item
              label="Programme"
              name="programme"
              style={{ marginLeft: "350px" }}
            >
              <Select
                style={{
                  width: 200,
                  paddingLeft: "15px",
                  alignItems: "start",
                }}
              >
                {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.name}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                loading={loading}
                htmlType="submit"
                style={{
                  backgroundColor: "#5cb85c",
                  color: "white",
                  borderRadius: "4px",
                  marginLeft: "450px",
                }}
              >
                <CheckOutlined /> Add new programme
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
