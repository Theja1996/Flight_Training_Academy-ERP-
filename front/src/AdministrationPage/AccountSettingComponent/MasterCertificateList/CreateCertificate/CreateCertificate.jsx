import {
  Col,
  Row,
  Input,
  Divider,
  Form,
  Button,
  notification,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import { add, getMaxId } from "../../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";
import { FaCalendar, FaFile, FaRegCalendarAlt } from "react-icons/fa";

import Com from "./Com_Medi";
import ComRadio from "./Com_Radio";
import ComCertificate from "./Com_Certificate";

const certificationOptions = {
  medical_doc_cal: "Medical (include 1, 2 and LAPL)",
  radio_doc_cal: "Radio (include level 1-6)",
  certificate_doc_cal: "Certificate",
  certificate_doc: "Certificate",
  certificate_cal: "Certificate",
  certificate: "Certificate",
};

export default function CreateCertificate() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [loadingpage, setLoadingpage] = useState(false);
  useEffect(() => {
    form.setFieldsValue({ type: "medical_doc_cal" });
    setChange(!change);
    setLoadingpage(false);
  }, []);

  function doCreateCreateCertificate(values) {
    Object.keys(values).forEach((k) => {
      if (!values[k]) {
        values[k] = false;
      }
    });
    setLoading(true);
    getMaxId("MasterCertificateList")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;
        add(v, "MasterCertificateList")
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
      })
      .catch((error) => {
        setLoading(false);
        notification["error"]({
          message: error,
        });
      });
    console.log(values);
  }

  function getCertificationOptions() {
    let certificateSelectOptions = Object.keys(certificationOptions).map(
      (cp) => (
        <Option value={cp}>
          <>
            {certificationOptions[cp]}
            {cp.includes("_doc") ? (
              <FaFile style={{ float: "right" }} />
            ) : null}
            {cp.includes("_cal") ? (
              <FaRegCalendarAlt style={{ float: "right" }} />
            ) : null}
          </>
        </Option>
      )
    );
    return certificateSelectOptions
  }
  if (loadingpage) {
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
            Create Certificate
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doCreateCreateCertificate}
          style={{ width: "100%" }}
          scrollToFirstError
        
          onFieldsChange={() => setChange(!change)}
        >
          <Row justify="space-between">
            <Col>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "400px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Type"
                name="type"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "410px",
                }}
              >
                <Select
                  showSearch
                  style={{ width: 300 }}
                 
                >
                 { getCertificationOptions()}
                 
                </Select>
              </Form.Item>
            </Col>
          </Row>

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
                Default warnings
              </h1>
              <Divider style={{ marginTop: "-10px" }} />
            </Col>
          </Row>
          {form.getFieldValue("type")==="medical_doc_cal" ? (
            <Row justify="center">
              <Com />
            </Row>
          ) : null}

          {form.getFieldValue("type")==="radio_doc_cal" ||
          form.getFieldValue("type")==="certificate_doc_cal" ||
          form.getFieldValue("type")==="certificate_doc" ? (
            <Row justify="center">
             <ComRadio  />
            </Row>
          ) : null}

          {form.getFieldValue("type")==="certificate_cal" || form.getFieldValue("type")==="certificate" ? (
            <Row justify="center">
              <ComCertificate   />
            </Row>
          ) : null}

          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
                marginTop: "10px",
                marginLeft: "-30px",
              }}
            >
              <CheckOutlined /> Create Certificate
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}
