import React, { useEffect, useState } from "react";
import { Button, Space, Row, Alert, Col, Form, Select } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { addMany, get, getAll } from "../../../utils/APIUtils";
import Modal from "antd/lib/modal/Modal";
import { useHistory, useParams } from "react-router";

export default function Exams(props) {
  const { Option } = Select;
  const [selectedTablerows, setSelectedTablerows] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewmod, setViewmod] = useState("list");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [instructordata, setinstructordata] = useState([]);
  const [userData, setUserData] = useState({});
  let { key } = useParams();
  let history = useHistory();
  useEffect(() => {
    get("users", key)
      .then((d) => {
        setUserData(d);
        setLoading(false);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleSittings(data) {
    history.push("/sitting_groups/"+key+"/sittings/new");
  
  }
  function handleSittingGroup(data) {
    history.push("/users/"+key+"/sitting_groups/new");
  }
  
  useEffect(() => {
    getAll("FlightInstructor")
      .then((result) => {
        setinstructordata(result);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
 

  return (
    <>
      <Modal
        width={600}
        title="Select a booking for your registration"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Space direction="vertical">
            As an administrator you can switch between instructor to select the
            correct booking
            <Form.Item
              name=" instructor"
              label="Instructor"
              style={{ marginLeft: "80px" }}
              rules={[{ required: true }]}
            >
              <Select style={{ width: 200 }} placeholder="Select a person">
                {instructordata.map((pl) => (
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
            <Form.Item
              label={
                <label style={{ fontWeight: "bold" }}>
                  There are no open bookings to choose
                </label>
              }
            ></Form.Item>
            <Button
              loading={loading}
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
              }}
              htmlType="submit"
            >
              <CheckOutlined />
              Continue without a booking
            </Button>
          </Space>
        </Form>
      </Modal>
      <div style={{ margin: 20 }}>
        <Row>
          <Col span={6}>
            <Space>
              <div>
                <Button onClick={() => setViewmod("Atpl")}> ATPL(A) </Button>
              </div>
              <Button onClick={() => setViewmod("list")}>BAK</Button>
              <Button onClick={() => setViewmod("grid")}>
                Briefing (CPL & PPL)
              </Button>
              <Button onClick={() => setViewmod("grid")}>Briefing (IR) </Button>
              <Button
          
            onClick={() => handleSittingGroup()}
          
          >
            <PlusOutlined style={{ color: "green" }} />
            Add Sitting group
          </Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Button
            //  onClick={showModal}
            onClick={() => handleSittings()}
            style={{
              marginTop: "20px",
            }}
          >
            <PlusOutlined style={{ color: "green" }} />
            Add Sitting
          </Button>
        </Row>

        {showAlert ? (
          <Row justify="center" style={{ margin: 10 }}>
            <Alert
              message="The user(s) has been "
              type="success"
              closable
              onClose={() => setShowAlert(false)}
              style={{ width: "100%" }}
            />
          </Row>
        ) : null}
      </div>
    </>
  );
}
