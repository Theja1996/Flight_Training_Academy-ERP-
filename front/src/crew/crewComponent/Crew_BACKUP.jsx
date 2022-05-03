import React, { useEffect, useState } from "react";
import "../crewComponent/Crew.css";


import { SearchOutlined, TableOutlined, BarsOutlined } from "@ant-design/icons";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import firebase from "../Configue/Configue";
import Axios from "axios";
import ButtonOne from "../buttonComponents/ButtonOneComponent/ButtonOne";
import ButtonTwo from "../buttonComponents/ButtontwoComponent/ButtonTwo";
import { getAll } from "../utils/APIUtils";

export default function Crew() {
  const [crewData, setcrewData] = useState([]);
  const [getCrewdata, setgetCrewdata] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [fileurl, setfileurl] = useState();

  // const onFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   const storageref = firebase.storage().ref();
  //   const fileref = storageref.child(file.name);
  //   await fileref.put(file);
  //   setfileurl(await fileref.getDownloadURL());
  // };

  useEffect(() => {
    getAll("FlightCrew")
      .then((result) => setgetCrewdata(result), setLoading(false))
      .catch((error) => console.log(error));

    // const getCrewData = async () => {
    //   try {
    //     const res = await Axios.get("http://localhost:5000/api/getCrewData");
    //     setcrewData(res.data);
    //     console.log(crewData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getCrewData();
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }

  return (
    <div>
   
   
      <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            {/* <Button style={{ borderStyle: "inset" }} icon={<PlusOutlined />}>
              <a href="/CreateCrew"> Create Crew</a>
            </Button>
            <Button
              style={{ borderStyle: "inset" }}
              icon={<i class="fas fa-user-tie"></i>}
            >
              Deactivated crew
            </Button> */}
            <ButtonOne
              text={<a href="/CreateCrew">Create crew</a>}
              icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
            ></ButtonOne>

            <ButtonOne
              text={<a href="/">Deactivated crew</a>}
              icon={<i class="fas fa-user-tie"></i>}
            ></ButtonOne>
            {/* <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<TableOutlined />}
            />
            <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<BarsOutlined />}
            />
            <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<SearchOutlined />}
            /> */}
            <ButtonTwo
              icon={
                <a href="">
                  <TableOutlined />
                </a>
              }
            />
            <ButtonTwo
              icon={
                <a href="">
                  <BarsOutlined />
                </a>
              }
            />
            <ButtonTwo
              icon={
                <a href="">
                  <SearchOutlined />
                </a>
              }
            />
            {/* <input type="file" onChange={onFileChange} /> */}
          </div>
          <div>
            <h3>Total</h3>
          </div>
        </div>
        <div className="table1">
          <h3>Crew</h3>
          <p></p>
          <br />
          <br />

          <div>
            <div className="rowdata">
              {getCrewdata.map((item) => (
                <div className="span2">
                  <div className="user_box">
                    <a href="/users/18523">
                      <img src={item.picture} />
                    </a>
                    <div className="user_info">
                      <a href="/users/18523">
                        {item.firstname}
                        <br />
                        {item.firstname}- {item.lastname}
                      </a>
                      <br />
                      <a href="tel:9792040">{item.phoneNumber}</a>
                      &nbsp;
                    </div>
                  </div>
                </div>
              ))}
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16817">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/121038/large/Aamir.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16817">
                      AMIR
                      <br />
                      Aamir Ansari
                    </a>
                    <br />
                    <a href="tel:9193061">9193061</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16812">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/132908/passport/Airport_2BPass.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16812">
                      ANIL
                      <br />
                      Anil Joseph
                    </a>
                    <br />
                    <a href="tel:7650330">7650330</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16809">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/120771/large/C0746736-760D-477C-8D6B-B8E4B05DA115.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16809">
                      BALA
                      <br />
                      Bala Thanupriyan
                    </a>
                    <br />
                    <a href="tel:7667366">7667366</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/18960">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/137055/passport/WhatsApp_Image_2018-04-18_at_13.29.48__281_29.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/18960">
                      DAYAB
                      <br />
                      Dayab Noor
                    </a>
                    <br />
                    <a href="tel:7645270">7645270</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16806">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/237847/passport/2677B259-1576-4F63-B035-CFE02A56876F.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16806">
                      HARIS
                      <br />
                      Haris Mathath
                    </a>
                    <br />
                    <a href="tel:7975208">7975208</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16832">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/124159/large/WhatsApp_Image_2018-02-06_at_4.13.49_PM.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16832">
                      JAFRY
                      <br />
                      Muhammed Jafry
                    </a>
                    <br />
                    <a href="tel:7384741">7384741</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16792">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/large/Screen_Shot_2017-12-18_at_10.09.31.jpg?1513588224" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16792">
                      JOEL
                      <br />
                      Joel Samuel
                    </a>
                    <br />
                    <a href="tel:7642684">7642684</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16834">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/large/Screen_Shot_2017-12-18_at_10.09.31.jpg?1513588224" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16834">
                      KANEN
                      <br />
                      Kanen Srikaran
                    </a>
                    <br />
                    <a href="tel:9186188">9186188</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/17232">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/large/Screen_Shot_2017-12-18_at_10.09.31.jpg?1513588224" />
                  </a>
                  <div className="user_info">
                    <a href="/users/17232">
                      MAINTENANCE
                      <br />
                      AAA MAINTENANCE
                    </a>
                    <br />
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16818">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/124618/large/WhatsApp_Image_2018-02-08_at_10.17.45_AM.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16818">
                      MELVIN
                      <br />
                      Melvine John
                    </a>
                    <br />
                    <a href="tel:9193469">9193469</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16814">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/121327/large/9ABA9416-7545-47A5-A1C7-757BAFE3273C.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16814">
                      NITHIN
                      <br />
                      Nithin William
                    </a>
                    <br />
                    <a href="tel:9192824">9192824</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16816">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/124539/large/WhatsApp_Image_2018-02-07_at_4.09.43_PM.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16816">
                      PEDRO
                      <br />
                      Pedro Hartz
                    </a>
                    <br />
                    <a href="tel:7535492">7535492</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/28232">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/large/Screen_Shot_2017-12-18_at_10.09.31.jpg?1513588224" />
                  </a>
                  <div className="user_info">
                    <a href="/users/28232">
                      Rehan
                      <br />
                      Rehan Rauf
                    </a>
                    <br />
                    <a href="tel:+9609986881">+9609986881</a>
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="span2">
                <div className="user_box">
                  <a href="/users/16804">
                    <img src="https://d3pnebxvzlkgv3.cloudfront.net/Account/93/profile_image/125157/large/photo_sds.jpg" />
                  </a>
                  <div className="user_info">
                    <a href="/users/16804">
                      SDS
                      <br />
                      Suranjan Silva
                    </a>
                    <br />
                    <a href="tel:7599149">7599149</a>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
