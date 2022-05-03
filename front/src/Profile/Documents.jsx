import React, { useEffect, useState } from "react";
import { Row, Space, Select, Table, Button, Input,Upload ,Form,Checkbox} from "antd";
import { Header } from "antd/lib/layout/layout";
import { CheckOutlined, InboxOutlined, PlusOutlined } from "@ant-design/icons";

export default function Documents() {
  const [loading, setLoading] = useState(true);
  const [createfolder, setcreatefolder] = useState(false);
  const [createdocument, setcreatedocument] = useState(false);
  const [documents, setdocuments] = useState(false);
  const [foldername, setfoldername] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);
  const folderdata = [];

  const doFolder = () => {
    setcreatefolder(true);
  };
  const doDocument = () => {
    setcreatedocument(true);
  };
  const showDocuments = () => {
    setdocuments(true);

    setcreatefolder(false);

    setcreatedocument(false);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const dofolder = () => {
    if (foldername !== "") {
      const obj = {
        key: folderdata.length,
        firstName: (
          <>
            <i className="fas fa-folder-open"></i> {foldername}
          </>
        ),
        lastName: foldername && new Date().toString().slice(0, 24),
        icon: <i className="fas fa-ellipsis-v"></i>,
      };
      folderdata.push(obj);

      setcreatefolder(false);
      setdocuments(true);
    } else {
      alert("do a specific folder name");
    }
  };
 

  const columns_documents = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Modified",
      dataIndex: "modified",
    },

    {
      title: "",
    },
  ];

//  if (loading) {
//     return "...Loading";
//   }
  return (
    <>
      <Row  justify="center" style={{ marginTop: 5, width: "100%" }}>
      <Space direction="vertical" style={{  width: "100%" }}>
    <Table
                title={() => (
                  <Header
                    style={{
                      borderRadius: "4px",
                      width: "100%",
                      backgroundColor: " #E6E6E6",
                      height: 35,
                      border: " #ccc 1px solid",
                      backgroundImage:
                        "linear-gradient(white, white 25%, #e6e6e6)",
                        float:"left"
                    }}
                  >
                    <Row
                      justify="space-between "
                      style={{ marginTop: 5, width: "100%" }}
                    >
                      <h3 style={{ fontWeight: "bold" }}>Documents</h3>
                    </Row>
                  </Header>
                )}
                columns={columns_documents}
                size="small"
              />
                
              <Row justify="space-between">
                <Space>
                  <Button onClick={doFolder}>
                    <PlusOutlined style={{ color: "green" }} />
                    New folder
                  </Button>
                  <Button onClick={doDocument}>
                    <PlusOutlined style={{ color: "green" }} />
                    New document
                  </Button>
                </Space>{" "}
              </Row>

              <Row>
                {createdocument ? (
                  <>
                    <Header
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        backgroundColor: " #E6E6E6",
                        height: 35,
                        border: " #ccc 1px solid",
                        backgroundImage:
                          "linear-gradient(white, white 25%, #e6e6e6)",
                        marginTop: "10px",
                      }}
                    >
                      <Row
                        justify="space-between "
                        style={{ marginTop: 5, width: "100%" }}
                      >
                        <a onClick={showDocuments}>
                          <h3 style={{ fontWeight: "bold", color: "#08c" }}>
                            Documents/
                          </h3>{" "}
                        </a>
                      </Row>
                    </Header>

                    <Row justify="center">
                      <Form style={{ width: "100%", marginTop: "10px" }}>
                        <Space direction="vertical">
                          <Form.Item
                            name="new_document_name"
                            label="Name"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            name="Visible_to_user"
                            valuePropName="checked"
                            style={{ textAlign: "start", marginLeft: "60px" }}
                          >
                            <Space direction="vertical">
                              <Checkbox>Visible to user</Checkbox>
                              <Checkbox>Visible to other</Checkbox>
                            </Space>
                          </Form.Item>
                          <Space direction="horizontal" size="large">
                            <Form.Item
                              name="upload"
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              style={{ marginLeft: "60px" }}
                            >
                              <Upload
                                name="logo"
                                action="/upload.do"
                                listType="picture"
                              >
                                <Button
                                  icon={
                                    <PlusOutlined style={{ color: "green" }} />
                                  }
                                >
                                  Choose document
                                </Button>
                              </Upload>
                            </Form.Item>

                            <Form.Item name="dragger">
                              <Upload.Dragger name="files" action="/upload.do">
                                <InboxOutlined />

                                <p>or drop here</p>
                              </Upload.Dragger>
                            </Form.Item>
                          </Space>
                          <Form.Item
                            shouldUpdate={true}
                            style={{ textAlign: "left", marginLeft: "60px" }}
                          >
                            {() => (
                              <Button
                                loading={loadingBtn}
                                type="primary"
                                htmlType="submit"
                                onClick={dofolder}
                              >
                                <CheckOutlined /> Create Document
                              </Button>
                            )}
                          </Form.Item>
                        </Space>
                      </Form>
                    </Row>
                  </>
                ) : (
                  ""
                )}

                {createfolder ? (
                  <>
                    <Header
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        backgroundColor: " #E6E6E6",
                        height: 35,
                        border: " #ccc 1px solid",
                        backgroundImage:
                          "linear-gradient(white, white 25%, #e6e6e6)",
                        marginTop: "10px",
                        
                      }}
                    >
                      <Row
                        justify="space-between "
                        style={{ marginTop: 5, width: "100%" }}
                      >
                        <a onClick={showDocuments}>
                          <h3 style={{ fontWeight: "bold", color: "#08c" }}>
                            Documents/
                          </h3>
                        </a>
                      </Row>
                    </Header>
                    <Row justify="center">
                      <Form style={{ width: "100%", marginTop: "10px" }}>
                        <Space direction="vertical">
                          <Form.Item
                            name="new_folder_name"
                            label="Name"
                            rules={[{ required: true }]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            name="Visible_to_user"
                            valuePropName="checked"
                            style={{ textAlign: "start", marginLeft: "60px" }}
                          >
                            <Space direction="vertical">
                              <Checkbox>Visible to user</Checkbox>
                              <Checkbox>Visible to other</Checkbox>
                            </Space>
                          </Form.Item>

                          <Form.Item
                            shouldUpdate={true}
                            style={{ marginLeft: "20px" }}
                          >
                            {() => (
                              <Button
                                loading={loadingBtn}
                                type="primary"
                                htmlType="submit"
                                onClick={dofolder}
                              >
                                <CheckOutlined /> Create Folder
                              </Button>
                            )}
                          </Form.Item>
                        </Space>
                      </Form>
                    </Row>
                  </>
                ) : (
                  ""
                )}
              </Row>
              </Space>
              </Row>
    </>
  );
}
