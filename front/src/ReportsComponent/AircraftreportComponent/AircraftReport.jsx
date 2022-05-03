import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import {
  Divider,
  Row,
  Space,
  Button,
  Menu,
  Dropdown,
  DatePicker,
  Checkbox,
  Col,
  Table,
  Select,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { FaRegFileCode, FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import { getAll } from "../../utils/APIUtils";

export default function AircraftReport(props) {
    const { Option,  } = Select;
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  const [aircraftList, setaircraftList] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    getAll("Aircraft")
      .then((result) => setaircraftList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  function onstartdate(date, dateString) {
    setstartdate(dateString);
    console.log(date, dateString, startdate);
  }

  function onenddate(date, dateString) {
    setenddate(dateString);
    console.log(enddate, dateString);
  }

  const pdf = (
    <Menu>
      
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFilePdf /> PDF
      </Button>   <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileCode /> XML
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileExcel /> CSV (Excel)
      </Button>
     
    </Menu>
  );
  			
														
  const columns_Flights= [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Departure ",
      dataIndex: "departure",
    },
    {
      title: "Block",
      dataIndex: "block",
    },
    {
      title: "Airborne",
      dataIndex: "airborne",
    },
    {
      title: "Tacho",
      dataIndex: "tacho",
    },
    {
        title: "FS + T & G",
        dataIndex: "fstng",
      },
      {
        title: "Arrival",
        dataIndex: "arrival",
      },
    {
      title: "Ins/Crew",
      dataIndex: "ins_Crew",
    },

    {
        title: "Stu/Ren/Cus",
        dataIndex  : "Stu_Ren_Cus ",
     
    },

    {
      title: "Flight ID ",
      dataIndex: "flight_id",
    },
  

   
    {
      title: "Fuel coefficient",
      dataIndex: "fuel_coefficient",
    },
   

    {
      title: "Calculated fuel",
      dataIndex: "Calculated_fuel",
    },
  
  ];
  
					
  const columns_Landings= [
    {
      title: "Airport",
      dataIndex: "airport",
    },
    {
      title: "Full stop",
      dataIndex: "full_stop",
    },
    {
      title: "Touch and go ",
      dataIndex: "touch_Go",
    },
    {
      title: "Approach",
      dataIndex: "approach",
    },
    {
      title: "Airborne",
      dataIndex: "airborne",
    },
    {
      title: "Go-around",
      dataIndex: "go_Around",
    },
    {
        title: "Total",
        dataIndex: "total",
      },]
  return (
    <>
      <Header
        style={{
          backgroundColor: " #ffffff",
          height: 35,
          marginTop: "20px",
          width: "100%",
        }}
       
      >
        <Row >
          <Col>
          <Select  style={{ width: 100 ,float:"left"}} >
          {aircraftList.map((pl) => (
                  <Option value={pl.callSign}>{pl.callSign}</Option>
                ))}
     
      

  
  
  </Select>
          </Col>
        </Row>
      </Header>
      <Divider style={{ marginTop: "25px" }} />

      <Row justify="space-between" style={{ margin: "15px" }}>
        <Col>
          <Space size="small" direction="horizontal">
            <Space direction="vertical">
              <DatePicker onChange={onstartdate} placeholder="Start date" />
            </Space>
            -
            <Space direction="vertical">
              <DatePicker onChange={onenddate} placeholder="End date" />
            </Space>
            <Button type="default">
              <SearchOutlined />
              Find report
            </Button>
          </Space>
        </Col>

        <Col>
          <Space>
            <Dropdown overlay={pdf} trigger={["click"]}>
              <Button>
                <DownloadOutlined style={{ color: "#000000" }} />
                Export as <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>

      <Row justify="center">
       
        <Table
  style={{ width: "100%" ,margin:"20px"}}
            title={() => 'Header'}
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
                <h3 style={{ fontWeight: "bold" }}>Flights</h3>
              </Row>
            </Header>
          )}
          columns={columns_Flights}
          size="small"        
        />
      </Row>

      <Row justify="center">
       
       <Table
 style={{ width: "100%" ,margin:"20px"}}
           title={() => 'Header'}
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
               <h3 style={{ fontWeight: "bold" }}>Landings</h3>
             </Row>
           </Header>
         )}
         columns={columns_Landings}
         size="small"        
       />
     </Row>
    </>
  );
}
