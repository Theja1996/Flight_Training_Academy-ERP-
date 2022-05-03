import React, { useEffect, useState } from "react";
import { Row, Table, BackTop, Button } from "antd";
import { FaPencilAlt, FaArrowCircleUp } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { VscFiles } from "react-icons/vsc";
import { Header } from "antd/lib/layout/layout";
import { useHistory } from "react-router-dom";
import { addMany, getAll } from "../../utils/APIUtils";

export default function InstructorList(props) {
  let history = useHistory();
  const [selectionType, setSelectionType] = useState("checkbox");
  const [selectedrows, setSelectedrows] = useState([]);
  const [getInstructordata, setgetInstructordata] = useState([]);
  function handleEdit(data) {
    history.push({
      pathname: "/EditCrew",
      state: { detail: data },
    });
  }

  function handleProfile(data) {
    history.push({
      pathname: "/Profile",
      state: { detail: data },
    });
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "user_First_name",
      key: "user_First_name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.user_First_name.localeCompare(b.user_First_name),

      render: (rData, record) => (
        <Button
          onClick={() => handleProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {" "}
          {record.callsign+" " + record.user_First_name + "-" + record.user_Last_name}
        </Button>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
    },

    {
      title: "Post code",
      dataIndex: "post_code",
    },

    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (rData, record) => <a href="tel:+9607703319"> {record.phone}</a>,
    },

    {
      title: "Email",
      dataIndex: "email",
      render: (rData, record) => (
        <a href="mailto:isha.shareef@aaa-fta.com"> {record.email}</a>
      ),
    },
    {
      title: "	User Reference",
      dataIndex: "user_reference",
    },
    {
      title: "CAA Ref.",
      dataIndex: "caa_ref_number",
    },
    {
      title: "	Warnings",
      dataIndex: "warnings",
      render: () => (
        <Row>
          <VscFiles style={{ fontSize: 20, color: "rgb(222, 13, 13)" }} />
          <BiEnvelope style={{ fontSize: 18, color: " #40CF40" }} />
        </Row>
      ),
    },

    {
      title: "",
    },

    {
      title: "",
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt style={{ color: "#1394e4" }} />}
        />
      ),
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedrows(selectedRows);
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
 
  return (
    <>
      <div>
       

        <Row justify="center">
          <Table
            tableLayout="auto"
            rowSelection={{
            //  type: selectionType,
           // ...rowSelection,
            type: "checkbox",
              onChange: (selectedRowKeys, selectedRows) => {
                let srList = [...props.selectedTablerows];
            
                srList = [...srList, ...selectedRows];
                props.setSelectedTablerows(srList);
                console.log(
                  `selectedRowKeys: ${selectedRowKeys}`,
                  "selectedRows: ",
                  selectedRows
                );
              },
              getCheckboxProps: (record) => ({
                disabled: record.name === "Disabled User",
                name: record.name,
              }),
            }}
            //   rowSelection={{
            //     type: "checkbox",
            //     onChange: (selectedRowKeys, selectedRows) => {
            //       let srList = [...props.selectedTablerows];
            //       srList = srList.filter((sr) => sr.programme !== pl);
            //       srList = [...srList, ...selectedRows];
            //       props.setSelectedTablerows(srList);
            //       console.log(
            //         `selectedRowKeys: ${selectedRowKeys}`,
            //         "selectedRows: ",
            //         selectedRows
            //       );
            //     },
            //     getCheckboxProps: (record) => ({
            //       disabled: record.name === "Disabled User",
            //       name: record.name,
            //     }),
            //   }}
            style={{ width: "100%" }}
            pagination={false}
            size="small"
            title={() => (
              <Header
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  backgroundColor: " #E6E6E6",
                  height: 35,
                  border: " #ccc 1px solid",
                  backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                  float:"left",
                }}
              >
                <Row
                  justify="space-between "
                  style={{ marginTop: 5, width: "100%" }}
                >
                  <h3 style={{ fontWeight: "bold" }}> Instructors</h3>
                 
                </Row>
              </Header>
            )}
            dataSource={props.instructordata}
            columns={columns}
          />
          <BackTop
            style={{ fontSize: 20, color: "#1394e4", marginRight: "-110px" }}
          >
            <FaArrowCircleUp />
          </BackTop>
        </Row>
         {/* ))}     */}
      </div>
    </>
  );
}
