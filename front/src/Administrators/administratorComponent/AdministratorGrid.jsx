import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Card, Space, Row, Divider, Button } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
export default function AdministratorGrid(props) {
  let history = useHistory();
  const gridStyle = {
    width: "140px",

    textAlign: "center",
    background:
      "url(https://media-exp1.licdn.com/dms/image/C4D0BAQFvYxp0IqMV9A/company-logo_200_200/0/1519952520890?e=2159024400&v=beta&t=jNBNgJd3x3Y6X4pgToJzFOAFq3UGU7ykY3E08jtdedQ)",
    color: "white",

    marginBottom: 30,
    marginLeft: "15px",
    position: "relative",
    display: " block",

    lineHeight: 1,
    height: "180px",

    objectFit: "cover",
    verticalAlign: "top",
    border: "false",
  };
  const metaStyle = {
    backgroundColor: "#333",

    marginTop: "120px",
    width: "142px",
    height: "50px",
    justifyContent: "space-between",
    flexDirection: "column",
    marginLeft: -24,
  };
  function handleProfile(data){   

    history.push({
    pathname: '/Profile',
    state: { detail: data }})
  }
  return (
    <>
      
        <Row justify="space-between ">
          <Header
            style={{
              width: "100%",
              backgroundColor: " #ffffff",
              height: 35,
              marginTop: "15px",
            }}
          >
            <Row justify="space-between " style={{ marginTop: "15px" }}>
              <h3 style={{ fontWeight: "bold",fontSize:"24px" }}>Administrator</h3>
          
            </Row>
          </Header>

          <Divider />
          <Space size="large" direction="vertical">
            <Card bordered={false}>
              {props.Administratordata.map((item) => (
                <Card.Grid style={gridStyle}>
                  <Card style={metaStyle}>
                    <Space size="-10px" direction="vertical">
                      {/* <Link to={item.user_First_name}   style={{fontSize:"12px"}}>{item.user_First_name}</Link> */}

                      <Link 
                        type="link"
                        style={{ fontSize: "12px", color: "white" }}
                        onClick={()=>handleProfile() } 
                      
                      >
                        {item.user_First_name} {item.user_Last_name}
                      </Link >
                      
                      <Link
                        href={item.phone}
                        style={{ fontSize: "12px", color: "white"}}
                      >
                        {item.phone}
                      </Link>
                    </Space>
                  </Card>
                </Card.Grid>
               ))}
            </Card>
          </Space>
        </Row>
    
    </>
  );
}
