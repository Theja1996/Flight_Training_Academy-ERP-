import {
  BarsOutlined,
  CaretDownOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileTextOutlined,
  PlusOutlined,
  SearchOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Table } from "antd";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React from "react";


import "../theoryComponent/Theory.css";

export default function Theory() {
  const pdf = () => (
    <Menu>
      <Menu.Item key="0">
        <Button>
          <FilePdfOutlined />
          PDF..
        </Button>
      </Menu.Item>
      <Menu.Item key="0">
        <Button>
          <FileExcelOutlined />
          XML
        </Button>
      </Menu.Item>
      <Menu.Item key="0">
        <Button>
          <FileTextOutlined />
          CSV (Excel)
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
  
  
      <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            <Button
              style={{ borderStyle: "inset" }}
              icon={<i class="fas fa-arrow-alt-circle-left"></i>}
              style={{ color: "lightskyblue" }}
            ></Button>
            <Button style={{ borderStyle: "inset" }}>Today</Button>
            <Button
              style={{ borderStyle: "inset" }}
              icon={<i class="fas fa-arrow-alt-circle-right"></i>}
              style={{ color: "lightskyblue" }}
            ></Button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button style={{ borderStyle: "inset" }} type="">
              <Dropdown overlay={pdf} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <DownloadOutlined /> Export as <CaretDownOutlined />
                </a>
              </Dropdown>
            </Button>
            <h3>
              {new Date().getMonth() + 1} {new Date().getFullYear()}
            </h3>
          </div>
        </div>
        <div style={{ marginTop: 40 }} className="table1">
          <h2 style={{ fontWeight: "bold", display: "flex", gap: 5 }}>
            Class theory - Completed
          </h2>
          <table className="fl-table">
            <thead>
              <tr>
                <th className="date-cell">Date</th>
                <th className="team-cell">Class</th>
                <th>Category</th>
                <th className="theory-lecture-subject-cell">Subject</th>
                <th className="duration-cell">Duration</th>
                <th className="small-instructor-cell">Inst.</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/292356">20.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/292356/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/292356?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/292309">19.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>EX 15</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">1:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/28232"
                    data-original-title="Rehan  - Rehan  Rauf"
                  >
                    Rehan{" "}
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/292309/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/292309?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/292310">19.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>EX 17</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">1:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/28232"
                    data-original-title="Rehan  - Rehan  Rauf"
                  >
                    Rehan{" "}
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/292310/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/292310?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/292271">19.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/292271/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/292271?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/291987">17.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/291987/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/291987?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/291484">16.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/291484/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/291484?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/291195">15.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/291195/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/291195?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/290769">14.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/290769/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/290769?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/290009">10.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>EX 18</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">1:15</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/16817"
                    data-original-title="AMIR - Aamir Saeed Ansari"
                  >
                    AMIR
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/290009/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/290009?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/290092">10.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/290092/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/290092?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/290005">09.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>SID and STAR</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">1:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/16809"
                    data-original-title="BALA - Bala Thanupriyan"
                  >
                    BALA
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/290005/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/290005?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/289852">09.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell">
                  Lower winds and humidity
                </td>
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/289852/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/289852?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/289359">08.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/289359/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/289359?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/289123">07.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/289123/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/289123?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/288960">06.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/288960/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/288960?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/288494">03.09.2020</a>
                </td>
                <td className="team-cell">2020 JUL-PPL Batch 01</td>
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell">
                  Metar, TAF, sigmet, low and hig level charts, airmet, volmet
                  and ATIS
                </td>
                <td className="duration-cell">3:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/16953"
                    data-original-title="ABID - Abid Bashir"
                  >
                    ABID
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/288494/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/288494?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/288483">03.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Electrics DC/AC</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/288483/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/288483?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/288254">02.09.2020</a>
                </td>
                <td className="team-cell">2020 JUL-PPL Batch 01</td>
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell">
                  Air masses and fronts{" "}
                </td>
                <td className="duration-cell">3:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/16953"
                    data-original-title="ABID - Abid Bashir"
                  >
                    ABID
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/288254/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/288254?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/288190">02.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Electrics DC/AC</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/288190/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/288190?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/287915">01.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>EX 17</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">1:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/28232"
                    data-original-title="Rehan  - Rehan  Rauf"
                  >
                    Rehan{" "}
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/287915/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/287915?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="odd">
                <td className="date-cell">
                  <a href="/theory_lectures/287916">01.09.2020</a>
                </td>
                <td className="team-cell">2020 JUL-PPL Batch 01</td>
                <td>Meteorology </td>
                <td className="theory-lecture-subject-cell">
                  Visibility and aircraft icing{" "}
                </td>
                <td className="duration-cell">3:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/16953"
                    data-original-title="ABID - Abid Bashir"
                  >
                    ABID
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/287916/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/287916?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
              <tr className="even">
                <td className="date-cell">
                  <a href="/theory_lectures/287954">01.09.2020</a>
                </td>
                <td className="team-cell" />
                <td>Electrics DC/AC</td>
                <td className="theory-lecture-subject-cell" />
                <td className="duration-cell">6:00</td>
                <td className="small-instructor-cell">
                  <a
                    rel="twipsy"
                    data-placement="left"
                    target="_blank"
                    href="/users/36974"
                    data-original-title="HASHEL - Hashel  Fernando"
                  >
                    HASHEL
                  </a>
                </td>
                <td className="table-btn">
                  <a href="/theory_lectures/287954/edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="table-btn">
                  <a
                    data-confirm="Are you sure you would like to delete this class theory?"
                    rel="nofollow"
                    data-method="delete"
                    href="/theory_lectures/287954?date=2020.09.21"
                  >
                    <i
                      className="fas fa-times-circle fl-danger"
                      aria-hidden="true"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td>Total</td>
                <td />
                <td />
                <td />
                <td className="total">98:15</td>
                <td />
                <td />
                <td />
              </tr>
            </tfoot>
          </table>
          ;
          {/* <Table>
            <ColumnGroup title="Class theory - Completed">
              <Column title="Date" dataIndex="firstName" key="firstName" />
              <Column title="Class" dataIndex="lastName" key="lastName" />
              <Column title="Category" dataIndex="lastName" key="lastName" />
              <Column title="Subject" dataIndex="lastName" key="lastName" />
              <Column title="Duration" dataIndex="lastName" key="lastName" />
              <Column title="Inst" dataIndex="lastName" key="lastName" />

              <Column
                title=""
                dataIndex="icon"
                key="icon"
                // onClick={}
              ></Column>
              <Column
                title=""
                dataIndex="icon"
                key="icon"
                // onClick={}
              ></Column>
            </ColumnGroup>
          </Table> */}
        </div>
      </div>
    </div>
  );
}
