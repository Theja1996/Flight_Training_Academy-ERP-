import React, { useEffect, useState } from "react";
import {
  Row,
  Space,
  Select,
  Menu,
  Button,
  Dropdown,
  Form,
  Input,
  Collapse,
  Typography,
  Upload,
  Divider,
  Table,
} from "antd";
import {
  FaArrowCircleRight,
  FaEllipsisV,
  FaPencilAlt,
  FaPlus,
  FaRegFilePdf,
  FaSave,
} from "react-icons/fa";
import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import Grading from "./Grading";

export default function Briefing() {
  const { Title } = Typography;
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  const { Panel } = Collapse;
  const { TextArea } = Input;
  const [viewmod, setViewmod] = useState("view");

  const edit = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaPencilAlt style={{ color: "#1394e4" }} /> Edit
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <RiCloseLine style={{ color: "#fd0c04" }} /> Remove
      </Button>
    </Menu>
  );
  const pdf = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFilePdf /> PDF - Compact
      </Button>
    </Menu>
  );
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      bordered: false,
      render: (text, record) => (
        <Button
          //  onClick={()=>handleProfile(record) }
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.name}
        </Button>
      ),
    },

    {
      title: "Modified",
      dataIndex: "modified",
    },
    {
      title: (
        <Button
          //   onClick={(record) => handleEdit(record)}
          type="text"
          icon={<FaSave style={{ color: "#1394e4" }} />}
        />
      ),
      dataIndex: "sign",
      render: (text, record) => <BiError style={{ color: "#f1a42f" }} />,
    },
    {
      title: "",
      dataIndex: "other",
      render: (text, record) => (
        <Dropdown
          overlay={edit}
          //   onClick={() => handleEdit(record)}
        >
          <FaEllipsisV style={{ color: "#1394e4" }} />
        </Dropdown>
      ),
    },
  ];

  //   if (loading) {
  //     return "...Loading";
  //   }
  return (
    <>
      <Modal
        title="Add attachment"
        visible={isModalVisible}
        footer={false}
        onCancel={handleCancel}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Attachment"
          name="attachment"
          rules={[{ required: true }]}
        >
          <Upload>
            <Button icon={<FaPlus style={{ color: "#38b863" }} />}>
              Choose document
            </Button>
          </Upload>
        </Form.Item>
        <Divider />
        <Space direction="horizontal">
          <Form.Item name="add">
            <Button
              style={{ backgroundColor: "#38b863", color: "#ffffff" }}
              icon={<TiTick />}
            >
              Add attachment
            </Button>
          </Form.Item>
          <Form.Item name="add">
            <Button icon={<AiOutlineClose />} onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Space>
      </Modal>

      <Modal
        title="Edit attachment"
        visible={isModalVisible}
        footer={false}
        onCancel={handleCancel}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Attachment"
          name="attachment"
          rules={[{ required: true }]}
        >
          <Upload>
            <Button icon={<FaPlus style={{ color: "#38b863" }} />}>
              Choose document
            </Button>
          </Upload>
        </Form.Item>
        <Divider />
        <Space direction="horizontal">
          <Form.Item name="add">
            <Button
              style={{ backgroundColor: "#38b863", color: "#ffffff" }}
              icon={<TiTick />}
            >
              Save attachment
            </Button>
          </Form.Item>
          <Form.Item name="add">
            <Button icon={<AiOutlineClose />} onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Space>
      </Modal>

      <Form>
        <Row style={{ marginTop: "20px" }} justify="space-between">
          <Space direction="horizontal">
            <Form.Item style={{ marginLeft: "300px" }}>
              <Title level={3}>Custom lesson</Title>
            </Form.Item>

            <Form.Item style={{ marginLeft: "700px" }}>
              <Dropdown overlay={pdf} trigger={["click"]}>
                <Button>
                  <DownloadOutlined style={{ color: "#000000" }} />
                  Export as <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
          </Space>
        </Row>

        <Space direction="vertical">
          <Form.Item name="position" label="Position" style={{ float: "left" }}>
            <Select defaultValue="Select.." style={{ width: 300 }}>
              <Option value=""></Option>
            </Select>
          </Form.Item>
          <Form.Item name="title" label="Title" style={{ marginLeft: "25px" }}>
            <Input />
          </Form.Item>
        </Space>

        <Collapse style={{ width: "77%", marginLeft: "300px" }}>
          <Panel
            header={
              <header
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "18px",
                  marginTop: -5,
                }}
              >
                Attachments
              </header>
            }
            key="1"
            style={{
              borderRadius: "4px",
              backgroundColor: " #E6E6E6",
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              // height: "40px",
            }}
          >
            <Table
              columns={columns}
              pagination={false}
              //  dataSource={}
              size="small"
              draggable={true}
            />
          
          </Panel>
        </Collapse>
        <Form.Item style={{marginLeft:"-550px", marginTop: "5px" }}>
              <Button onClick={showModal}>
                <FaPlus style={{ color: "#38b863" }} />
                Add attachment
              </Button>
            </Form.Item>
        <Collapse
          style={{ width: "77%", marginLeft: "300px"}}
          defaultActiveKey={["1"]}
        >
          <Panel
            header={
              <header
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "18px",
                  marginTop: -5,
                }}
              >
                Briefing comment
              </header>
            }
            key="1"
            style={{
              borderRadius: "4px",
              backgroundColor: " #E6E6E6",
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              // height: "40px",
            }}
          >
            <Form.Item>
              <TextArea rows={4}  bordered={false}  />
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>

      <Divider />
      <Row justify="end" style={{marginLeft:"1180px"}}> 
      <Button
                type="text"
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "20px",
                  fontStyle: "italic",
         
                }}
                onClick={() => setViewmod("grading")}
              >
                Grading
                <FaArrowCircleRight
                  style={{ color: "#1394e4", fontSize: "24px" }}
                /> 
               
               </Button></Row>
               {/* {viewmod === "view" ? <Grading /> : null} */}
    </>
  );
}
