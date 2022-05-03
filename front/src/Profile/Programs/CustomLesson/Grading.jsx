import React, { useEffect, useState } from "react";
import {
  Row,
  Space,
  Select,
  Input,
  Button,
  Dropdown,
  Form,
  Collapse,
  Divider,

  Typography,
  Rate,
  Card,
  Radio,
} from "antd";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaChartLine,
  FaEllipsisV,
  FaFlag,
  FaInfoCircle,
  FaPencilAlt,
} from "react-icons/fa";
import Modal from "antd/lib/modal/Modal";
import { BiError } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { PlusOutlined } from "@ant-design/icons";

import { Icon, Label, Menu, Table } from "semantic-ui-react";
export default function Grading() {
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Panel } = Collapse;
  const [buttonText, setButtonText] = useState("PASSED");

  function handleClick() {
    if (buttonText === "PASSED") {
      setButtonText(
        <h3>
          REPETITION NEEDED <sup>PASSED</sup>
        </h3>
      );
    } else {
      setButtonText("PASSED");
    }
  }

  const edit = (
    <Menu>
      <Space direction="vertical">
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaPencilAlt style={{ color: "#1394e4" }} /> Edit
      </Button>
     
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <RiCloseLine style={{ color: "#fd0c04" }} /> Remove
      </Button></Space>
    </Menu>
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     bordered: false,
  //     render: (text, record) => (
  //       <Button
  //         //  onClick={()=>handleProfile(record) }
  //         style={{ color: "#1394e4" }}
  //         type="link"
  //       >
  //         {record.name}
  //       </Button>
  //     ),
  //   },
  //   {
  //     title: <Button type="text" icon={<FaChartLine />} />,
  //     dataIndex: "sign",
  //     render: (text, record) => <BiError style={{ color: "#f1a42f" }} />,
  //   },
  //   {
  //     title: "AS",
  //     dataIndex: "as",
  //   },
  //   {
  //     title: "ST",
  //     dataIndex: "st",
  //   },

  //   {
  //     title: "S",
  //     dataIndex: "s",
  //   },

  //   {
  //     title: "US",
  //     dataIndex: "us",
  //   },
  //   {
  //     title: "NO",
  //     dataIndex: "no",
  //   },

  //   {
  //     title: (
  //       <Rate count={1} character={<FaFlag />} style={{ color: "#f82121" }} />
  //     ),
  //     dataIndex: "sign",
  //     render: (text, record) => <FaFlag style={{ color: "#f1a42f" }} />,
  //   },
  //   {
  //     title: "Comment",
  //     dataIndex: "comment",
  //   },
  //   { 
  //     title: "",
  //     dataIndex: "other",
  //     render: (text, record) => (
  //       <Dropdown
  //         overlay={edit}
  //         //   onClick={() => handleEdit(record)}
  //       >
  //         <FaEllipsisV style={{ color: "#1394e4" }} />
  //       </Dropdown>
  //     ),
  //   },
  // ];

  // if (loading) {
  //   return "...Loading";
  // }
  const options = [
    { value: 'Apple' },
    { value: 'Pear' },
    {  value: 'Orange' },
  ];
  return (
    <>
      <Modal
        visible={isModalVisible}
        footer={false}
        onCancel={handleCancel}
        style={{ backgroundColor: "#3baee7" }}
      >
        <h4
          style={{ Color: "#4cbcf5", fontStyle: "italic", fontWeight: "bold" }}
        >
          PASSED:
        </h4>
        <p style={{ Color: "#4cbcf5", fontStyle: "italic" }}>
          Will mark the lesson green in the student syllabus.
        </p>

        <h4
          style={{ Color: "#4cbcf5", fontStyle: "italic", fontWeight: "bold" }}
        >
          REP NEEDED:
        </h4>
        <p style={{ Color: "#4cbcf5", fontStyle: "italic" }}>
          Will mark the lesson yellow and insert a repetition lesson in the
          student syllabus including all flagged exercises. A notification will
          be send to all repetition administrators.
        </p>
      </Modal>

      <Row style={{ marginTop: "20px" }}>
        <Space direction="vertical">
          <Collapse
            style={{ width: 1000, marginLeft: "300px" }}
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
                  Exercises
                </header>
              }
              key="1"
              style={{
                borderRadius: "4px",
                backgroundColor: " #E6E6E6",
                border: " #ccc 1px solid",
                backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                // height: "40px",
                width: "100%",
              }}
            >
               <Form 
    
    >
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>
                    <Button type="text" icon={<FaChartLine />} />
                  </Table.HeaderCell>
                  <Table.HeaderCell>AS</Table.HeaderCell>
                  <Table.HeaderCell>ST</Table.HeaderCell>
                  <Table.HeaderCell>S</Table.HeaderCell>
                  <Table.HeaderCell>US</Table.HeaderCell>
                  <Table.HeaderCell>NO</Table.HeaderCell>
                  <Table.HeaderCell>
                  
                    <Rate
                      count={1}
                      character={<FaFlag />}
                      style={{ color: "#f82121" }}
                    />
                  </Table.HeaderCell>
                  <Table.HeaderCell>Comment</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Table.Row>
                    <Table.Cell>
                      <Form.Item
                        {...restField}
                        name={[name, "first1"]}
                        fieldKey={[fieldKey, "first1"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                            {/* <Select style={{ width:400 }}> */}
                        {/* {children} */}
                      {/* </Select> */}
                      <Input />
                      </Form.Item>
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Item
                        {...restField}
                        name={[name, "first2"]}
                        fieldKey={[fieldKey, "first2"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                    
                      </Form.Item>
                    </Table.Cell>
                  
                    <Table.Cell>
                      <Form.Item
                        {...restField}
                        name={[name, "first3"]}
                        fieldKey={[fieldKey, "first3"]}
                      
                      >
                       
                         <Radio.Group>  <Radio value={1} /></Radio.Group>
                      </Form.Item>
                    </Table.Cell>
                    <Table.Cell> <Form.Item
                        {...restField}
                        name={[name, "first3"]}
                        fieldKey={[fieldKey, "first3"]}
                      
                      >
                        <Radio.Group>  <Radio value={2} /></Radio.Group>
                      </Form.Item></Table.Cell>
                    <Table.Cell> <Form.Item
                        {...restField}
                        name={[name, "first3"]}
                        fieldKey={[fieldKey, "first3"]}
                      
                      >
                      <Radio.Group>  <Radio value={3} /></Radio.Group>
                      </Form.Item></Table.Cell>   
                    <Table.Cell><Form.Item
                        {...restField}
                        name={[name, "first3"]}
                        fieldKey={[fieldKey, "first3"]}
                      
                      >
                      <Radio.Group>  <Radio value={4} /></Radio.Group>
                      </Form.Item></Table.Cell>
                    <Table.Cell><Form.Item
                        {...restField}
                        name={[name, "first3"]}
                        fieldKey={[fieldKey, "first3"]}
                      
                      >
                      <Radio.Group>  <Radio value={5} /></Radio.Group>
                      </Form.Item></Table.Cell>
                    <Table.Cell> <Form.Item
                        {...restField}
                        name={[name, "first1"]}
                        fieldKey={[fieldKey, "first1"]}
                       
                      >  <Rate count={1} character={<FaFlag />} style={{ color: "#f82121" }} /></Form.Item></Table.Cell>
                    <Table.Cell> <Form.Item
                        {...restField}
                        name={[name, "first1"]}
                        fieldKey={[fieldKey, "first1"]}
                       
                      >
                      <Input />
                      </Form.Item></Table.Cell>
                    <Table.Cell><Form.Item><Dropdown
           overlay={edit}
           //   onClick={() => handleEdit(record)}
         >
           <FaEllipsisV style={{ color: "#1394e4" }} />
         </Dropdown></Form.Item> </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Form.Item>
              <Button
              
                onClick={() => add()}
                style={{float:"left"}}
                icon={<PlusOutlined style={{ color:"#3ab864"}} />}
              >
                Add Exercises
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
            </Panel>
          </Collapse>
          <Row style={{ marginLeft: "300px" }}>
            <Space direction="horizontal" size="-10px">
              <Row style={{ width: 500 , borderWidth:  1, borderStyle: "solid", borderColor:"gray"   , justifyContent:"center"}}>
                <Row justify="center">
                  <Space direction="horizontal">
                    <h4 style={{ fontWeight: "bold", fontSize: "14px" }}>
                      LESSON STATUS
                    </h4>
                    <Button onClick={showModal} type="text">
                      <FaInfoCircle
                        style={{ color: "#2491f7", fontSize: "20px" }}
                      />
                    </Button>
                  </Space>
                </Row>
              </Row>
              <Row style={{ width: 500, borderWidth:  1, borderStyle: "solid", borderColor:"gray",justifyContent:"center"}}>
                <Row justify="center">
                  <Button type="default" onClick={() => handleClick("Next")}>
                    {buttonText}
                    {/* REPETITION NEEDED <sup>   PASSED</sup> */}
                  </Button>
                </Row>
              </Row>
            </Space>
          </Row>
        </Space>
      </Row>
      <Divider />
      <Row justify="space-between">
        <Space direction="horizontal">
          <Button
            type="text"
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "300px",
            }}
            //   onClick={() => setViewmod("view")}
          >
            <FaArrowCircleLeft style={{ color: "#1394e4", fontSize: "24px" }} />{" "}
            Briefing
          </Button>
          <Button
            type="text"
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "780px",
            }}
            //  onClick={() => setViewmod("view")}
          >
            Flight
            <FaArrowCircleRight
              style={{ color: "#1394e4", fontSize: "24px" }}
            />
          </Button>
        </Space>
      </Row>
    </>
  );
}
