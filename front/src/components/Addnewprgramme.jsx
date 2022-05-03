// import React, { useState } from "react";
// import { CheckOutlined, DownOutlined } from "@ant-design/icons";

// import {
//   Divider,
//   Row,
//   Space,
//   Button,
//   Menu,
//   Dropdown,
//   DatePicker,
//   Checkbox,
//   Col,
//   Select
// } from "antd";
// import "antd/dist/antd.css";
// import programeList from "../utils/Programme.json";
// import Form from "antd/lib/form/Form";

// export default function Newprogramme(props){

//   const [loading, setLoading] = useState(false);
//   const { Option } = Select;

// return (
//   <>
//     <Row justify="center">
//       <Space direction="vertical">
//         <h3 style={{fontweight:"bold"}}>Add new program</h3>

//         <Form>
//           <Form.Item
//             label="Program"
//             name="programme"
//             //  style={{ paddingLeft: "25px" }}
//           >
//             <Select
//               style={{
//                 width: 200,

//                 alignItems: "start",
//               }}
//               // onChange={handleChange1}
//             >
//               {programeList.map((pl) => (
//                 <Option value={pl.value}>{pl.value}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//         </Form>

//         <Button
//           loading={loading}
//           style={{
//             backgroundColor: "#5cb85c",
//             color: "white",
//             borderRadius: "4px",
//           }}
//           htmlType="submit"
//         >
//           <CheckOutlined /> Add new program
//         </Button>
//       </Space>
//     </Row>
//   </>
// );

// }

import { Modal, Button, Row, Space } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { CheckOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Input, InputNumber } from "antd";
//import programeList from "../utils/Programme.json";
import { Label } from "semantic-ui-react";
import Form from "antd/lib/form/Form";

export default function Newprogramme() {
  const { Option } = Select;
  const [visible, setvisible] = useState(false);
  const [loading, setLoading] = useState(false);
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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <React.Fragment>
      <button type="primary" className="addpost" onClick={showModal}>
        <PlusOutlined />
        Add New Programme
      </button>
      <Modal
        title="Add New Programme"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="programme">
          <div className="prograss-dropdown">
            <Label>Programme</Label>
            <Select
              defaultValue="Choice a Programme"
              style={{ width: 300 }}
              onChange={handleChange}
            >
              <Option value=""></Option>
              <Option value="BAK">BAK</Option>
              <Option value="CPL IR(A)">CPL IR(A)</Option>
              <Option value="CPL/IR RENAWEL">CPL/IR RENAWEL</Option>
              <Option value="CPL MODULAR">CPL MODULAR</Option>
              <Option value="CPL MODULAR(A)">CPL MODULAR(A)</Option>
              <Option value="CPL RENEVAL">CPL RENEVAL</Option>
              <Option value="FI(A)">FI(A)</Option>
              <Option value="FI(A) BRIDGED">FI(A) BRIDGED</Option>
              <Option value="MACC/Assessment">MACC/Assessment</Option>
              <Option value="ME">ME</Option>
              <Option value="ME CPL">ME CPL</Option>
              <Option value="ME-IR(DGCA/INDIA)">ME-IR(DGCA/INDIA)</Option>
              <Option value="ME IR-For me Rated">ME IR-For me Rated</Option>
              <Option value="ME-IR(MCAA)">ME-IR(MCAA)</Option>
              <Option value="ME-IR(MCAA)_CLONE">ME-IR(MCAA)_CLONE</Option>
              <Option value="MER BRIDGED">MER BRIDGED</Option>
              <Option value="PPL(A)">PPL(A)</Option>
              <Option value="PPL RENEWAL">PPL RENEWAL</Option>
              <Option value="TIME BUILDING">TIME BUILDING</Option>
            </Select>
          </div>
          <div style={{ marginTop: 5 }}>
            <Form>
              <Form.Item wrapperCol={{ offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  <CheckOutlined />
                  Add new programme
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}
