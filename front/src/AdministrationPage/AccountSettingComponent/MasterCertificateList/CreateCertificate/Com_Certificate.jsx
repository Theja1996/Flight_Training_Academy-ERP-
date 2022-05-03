import React, { useState } from "react";
import { Card, Row, Space, Form, Tooltip, Col } from "antd";
import ColorPicker from "../../../../components/ColorPicker/ColorPicker";
import Checkbox from "antd/lib/checkbox/Checkbox";

export default function ComCertificate() {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
    <>
      <Card
        bordered={false}
        style={{
          width: 900,
          backgroundColor: " #ececec",
          height: "100%",
          display: "block",
        }}
      >
        <Form.Item
          label={
            <label style={{ fontWeight: "bold" }}>
              A colored warning will appear when a certificate is:
            </label>
          }
        ></Form.Item>
        <Row justify="space-between">
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gab: 10,
                justifySelf: "left",
              }}
            >
              <label style={{ fontWeight: "bold" }}> Missing</label>
              <Form.Item name="miss_color">
                <ColorPicker value="#f2dede" />{" "}
              </Form.Item>
            </div>
          </Col>{" "}
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gab: 10,
              }}
            >
              <label style={{ fontWeight: "bold" }}>Requiring approval</label>
              <Form.Item name="req_color">
                <ColorPicker value="#d9edf7" />{" "}
              </Form.Item>
            </div>
          </Col>
        </Row>

        <Row>
          <Space direction="horizontal">
            <Form.Item label="Notify via email" nam="notify_email">
              <Tooltip title="If checked,daily emails will be sent when date warnings are active.">
                <Checkbox onChange={onChange} />
              </Tooltip>
            </Form.Item>
          </Space>
        </Row>
      </Card>
    </>
  );
}
