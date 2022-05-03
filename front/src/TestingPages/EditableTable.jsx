// import React, { useContext, useState, useEffect, useRef } from "react";
// import {
//   Table,
//   Input,
//   Button,
//   Popconfirm,
//   Form,
//   Rate,
//   Dropdown,
//   Radio,
// } from "antd";
// import "./EditTable.css";
// import { FaChartLine, FaEllipsisV, FaFlag } from "react-icons/fa";
// import { BiError } from "react-icons/bi";
// const EditableContext = React.createContext(null);

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       inputRef.current.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     const values = form.getFieldsValue();
//     console.log(values);

//     // if (["as", "st", "s", "us", "no"].includes(dataIndex)){
//     //     let others=["as", "st", "s", "us", "no"].filter(o=>0!==dataIndex)
//     //     others.forEach(o => form.setFieldsValue({
//     //         [o]: false,
//     //       }))
//     // }

//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };

//   const save = async () => {
//     try {
//       toggleEdit();
//       const values = await form.validateFields();
//       handleSave({ ...record, ...values });
//     } catch (errInfo) {
//       console.log("Save failed:", errInfo);
//     }
//   };

//   let childNode = children;

//   if (editable) {
//     if (["name", "comment"].includes(dataIndex)) {
//       childNode = (
//         <Form.Item
//           style={{
//             margin: 0,
//           }}
//           name={dataIndex}
//           //   rules={[
//           //     {
//           //       required: true,
//           //       message: `${title} is required.`,
//           //     },
//           //   ]}
//         >
//           <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//         </Form.Item>
//       );
//     } else if (["as", "st", "s", "us", "no"].includes(dataIndex)) {
//       childNode = (
//         <Form.Item
//           style={{
//             margin: 0,
//           }}
//           name={dataIndex}
//           valuePropName="checked"
//         >
//           <Radio ref={inputRef} onPressEnter={save} onBlur={save} />
//         </Form.Item>
//       );
//     }
//   }

//   return <td {...restProps}>{childNode}</td>;
// };

// export default function (props) {
//   const [dataSource, setDataSource] = useState([
//     {
//       key: "0",
//       name: "Edward King",
//       as: false,
//       st: false,
//       s: true,
//       us: false,
//       no: false,
//       comment: "London, Park Lane no. ",
//     },
//     {
//       key: "1",
//       name: "Edward King",
//       as: false,
//       st: false,
//       s: true,
//       us: false,
//       no: false,
//       comment: "London, Park Lane no. ",
//     },
//   ]);

//   const [count, setCount] = useState(2);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       bordered: false,
//       render: (text, record) => (
//         <Button
//           //  onClick={()=>handleProfile(record) }
//           style={{ color: "#1394e4" }}
//           type="link"
//         >
//           {record.name}
//         </Button>
//       ),
//       editable: true,
//     },
//     {
//       title: <Button type="text" icon={<FaChartLine />} />,
//       dataIndex: "sign",
//       render: (text, record) => <BiError style={{ color: "#f1a42f" }} />,
//       editable: true,
//     },
//     {
//       title: "AS",
//       dataIndex: "as",
//       editable: true,
//     },
//     {
//       title: "ST",
//       dataIndex: "st",
//       editable: true,
//     },

//     {
//       title: "S",
//       dataIndex: "s",
//       editable: true,
//     },

//     {
//       title: "US",
//       dataIndex: "us",
//       editable: true,
//     },
//     {
//       title: "NO",
//       dataIndex: "no",
//       editable: true,
//     },

//     {
//       title: (
//         <Rate count={1} character={<FaFlag />} style={{ color: "#f82121" }} />
//       ),
//       dataIndex: "sign",
//       render: (text, record) => <FaFlag style={{ color: "#f1a42f" }} />,
//       editable: true,
//     },
//     {
//       title: "Comment",
//       dataIndex: "comment",
//       editable: true,
//     },
//     {
//       title: "",
//       dataIndex: "other",
//       render: (text, record) => (
//         <Dropdown
//         //   overlay={edit}
//         //   onClick={() => handleEdit(record)}
//         >
//           <FaEllipsisV style={{ color: "#1394e4" }} />
//         </Dropdown>
//       ),
//     },
//   ];

//   const handleDelete = (key) => {
//     const dataSource1 = [dataSource];
//     setDataSource(dataSource1.filter((item) => item.key !== key));
//   };
//   const handleAdd = () => {
//     const newData = {
//       key: count,
//       name: "Edward King",
//       as: false,
//       st: false,
//       s: true,
//       us: false,
//       no: false,
//       comment: "London, Park Lane no. ",
//     };
//     setDataSource([...dataSource, newData]);
//     setCount(count + 1);
//   };
//   const handleSave = (row) => {
//     const newData = [dataSource];
//     const index = newData.findIndex((item) => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, { ...item, ...row });
//     setDataSource(newData);
//   };

//   const components = {
//     body: {
//       row: EditableRow,
//       cell: EditableCell,
//     },
//   };
//   const columns1 = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }

//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave: handleSave,
//       }),
//     };
//   });
//   return (
//     <div>
//       <Button
//         onClick={handleAdd}
//         type="primary"
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         Add a row
//       </Button>
//       <Table
//         components={components}
//         rowClassName={() => "editable-row"}
//         bordered
//         dataSource={dataSource}
//         columns={columns1}
//       />
//     </div>
//   );
// }

import React from "react";
import { FaChartLine, FaFlag } from "react-icons/fa";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Button, Rate, Form, Input } from "antd";

import { PlusOutlined } from "@ant-design/icons";
const EditTable = () => {
  return (
    <Form>
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
                    {" "}
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
                        <Input placeholder="First Name" />
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
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Item
                        {...restField}
                        name={[name, "first3"]}
                        fieldKey={[fieldKey, "first3"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default EditTable;
