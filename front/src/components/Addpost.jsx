import { Modal, Button } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, InputNumber } from "antd";
import "../csscomonents/Addpost.css";

function Addpost({ postArray, setPostArray }) {
  const array = [];
  const [titletext, settitletext] = useState("");
  const [posttext, setposttext] = useState("");

  const doPost = () => {
    if (titletext !== "" && posttext !== "") {
      const postobj = {
        key: array.length,
        title: titletext,
        post: posttext,
      };
      settitletext(" ");
      setposttext(" ");

      array.push(postobj);
      const result = [...array, ...postArray];
      setPostArray(result);

      setvisible(false);
    } else {
      alert("fill the text");
    }
  };

  const [visible, setvisible] = useState(false);
  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
  };

  return (
    <React.Fragment>
      <button type="primary" className="addpost" onClick={showModal}>
        <i style={{ color: "green" }} className="fas fa-plus"></i>
        Add wall post
      </button>
      <Modal
        title="Add wall post"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="nest-messages">
          <Form.Item
            name={["user", "name"]}
            label="Title"
            rules={[{ required: true }]}
          >
            <Input
              value={titletext}
              onChange={(t) => settitletext(t.target.value)}
            />
          </Form.Item>

          <Form.Item name={["user", "introduction"]} label="Text">
            <Input.TextArea
              value={posttext}
              onChange={(p) => setposttext(p.target.value)}
            />
          </Form.Item>
          <h6 style={{ fontWeight: "bold", textAlign: "center" }}>
            Hint: Create links by starting URL with "http://" or "https://"
          </h6>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button type="" htmlType="submit" onClick={doPost}>
              <i style={{ color: "green" }} class="fas fa-check"></i> Save Wall
              Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default Addpost;
