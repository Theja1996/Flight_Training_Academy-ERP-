import React, { useEffect, useState } from "react";
import { Button, Dropdown, Table, Form, Row, Col, Divider, Input } from "antd";

import TitleBar from "../../components/TitleBar";

import { FaCheck } from "react-icons/fa";

export default function FolderCreate() {
  return (
    <div>
      <TitleBar />
      <div style={{ marginTop: 20 }}>
        <Row>
          <Col style={{ display: "flex" }} span={18} offset={6}>
            <h3 style={{ fontWeight: "bold" }}>Folder Create</h3>
          </Col>
          <Divider />
        </Row>

        <Row>
          <Col span={18} offset={6}>
            <Form>
              <Form.Item label="Name">
                <Input style={{ display: "flex", width: ["50%"] }} />
              </Form.Item>
              <Form.Item>
                <Button style={{ display: "flex" }}>
                  <FaCheck />
                  Create Folder
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
