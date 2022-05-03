import React, { useState } from "react";
import { ExportOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Checkbox } from "antd";
import "../csscomonents/Addlinkuser.css";

function InstructorLinkuser({ Instrutorlink, setInstrutorlink }) {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = () => {
    setvisible(false);
  };

  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <div>
      <Button
        onClick={showModal}
        style={{
          width: 30,
          backgroundColor: "grey",
        }}
        type=""
        htmlType="button"
      >
        <ExportOutlined />
      </Button>

      <Modal
        title="Insert Link"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>
          {" "}
          <Input
            value={Instrutorlink}
            onChange={(e) => setInstrutorlink(e.target.value)}
          />
        </h3>
        <h4>
          {" "}
          <Checkbox>Open link in new window</Checkbox>
        </h4>
      </Modal>
    </div>
  );
}

export default InstructorLinkuser;
