import React from "react";
import "../operationComponent/Operation.css";


import { Button, Dropdown, Menu } from "antd";
import {
  CaretDownOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export default function Operation() {
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

        <div style={{ marginTop: 20 }} className="table1">
          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">FI Checkout </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
                <a
                  data-loadfull="true"
                  data-toggle="modal"
                  data-target="#choose-booking-id-modal"
                  className="btn"
                  href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
                >
                  <span id="new" />
                  <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                  Fly a fI checkout
                </a>
              </div>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">FERRY FLIGHT </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a Ferry flight
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">GROUND RUN </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr className="odd">
                      <td>
                        <a
                          data-remote="true"
                          href="/activities/738/trips/76350"
                        >
                          17.09.2020
                        </a>
                      </td>
                      <td>Asian Academy of Aeronautics</td>
                      <td></td>
                      <td>0.4</td>
                      <td>0:24</td>
                      <td>0:00</td>
                      <td>
                        <a target="_blank" href="/users/17232">
                          MAINTENANCE{" "}
                        </a>
                      </td>
                      <td class="to-top table-btn">
                        <a
                          title="Edit"
                          href="https://aaoa.flightlogger.net/activities/738/trips/76350/edit"
                        >
                          <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                        </a>
                      </td>

                      <td class="to-top table-btn">
                        <a
                          title="Delete"
                          data-confirm="Are you sure you want to delete the operation?"
                          rel="nofollow"
                          data-method="delete"
                          href="https://aaoa.flightlogger.net/activities/738/trips/76350"
                        >
                          <i
                            class="fas fa-times-circle fl-danger"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </td>
                    </tr>

                    <tr className="total">
                      <td>Total</td>
                      <td colspan="2"></td>
                      <td>0.4</td>
                      <td>0:24</td>
                      <td>0:00</td>
                      <td colspan="3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a Ground run
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">IPC </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a IPC
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">IRT </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a IRT
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">ME SKILL TEST </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a ME SKILL TEST
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">ME\IR PPC </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a ME\IR PPC
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">PPC ME </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a PPC ME
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">PPC SE </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a PPC SE
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">SCT </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a SCT
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">SKYDIVING </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a SKYDIVING
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">SCENIC FLIGHTS </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a SCENIC FLIGHTS
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">TIF FLIGHT </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                style={{ marginLeft: 15 }}
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a TIF FLIGHT
              </a>
            </div>
          </div>

          <div className="table-top">
            <div className="table1">
              <div className="span12">
                <div className="header1">
                  <h3 className="pull-left">
                    <a href="/activities/753">TEST-FLIGHT </a>
                  </h3>
                  <h4 className="pull-right">
                    0
                    <i className="fas fa-plane" aria-hidden="true" />
                  </h4>
                  <div className="clearfix" />
                </div>
                <table className="fl-table">
                  <tbody>
                    <tr>
                      <th className="duration-cell">Date</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th className="snug">Tacho</th>
                      <th className="snug">Block</th>
                      <th className="snug">Airborne</th>
                      <th className="small-instructor-cell">PIC</th>
                      <th className="to-top table-btn" />
                      <th className="to-top table-btn" />
                    </tr>
                    <tr>
                      <td colSpan={9}>There are no operations yet</td>
                    </tr>
                    <tr className="even">
                      <td>
                        <a
                          data-remote="true"
                          href="/activities/736/trips/76349"
                        >
                          17.09.2020
                        </a>
                      </td>
                      <td>Asian Academy of Aeronautics</td>
                      <td></td>
                      <td>0.3</td>
                      <td>0:18</td>
                      <td>0:08</td>
                      <td>
                        <a target="_blank" href="/users/16792">
                          JOEL
                        </a>
                      </td>
                      <td class="to-top table-btn">
                        <a
                          title="Edit"
                          href="https://aaoa.flightlogger.net/activities/736/trips/76349/edit"
                        >
                          <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                        </a>
                      </td>

                      <td class="to-top table-btn">
                        <a
                          title="Delete"
                          data-confirm="Are you sure you want to delete the operation?"
                          rel="nofollow"
                          data-method="delete"
                          href="https://aaoa.flightlogger.net/activities/736/trips/76349"
                        >
                          <i
                            class="fas fa-times-circle fl-danger"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr class="total">
                      <td>Total</td>
                      <td colspan="2"></td>
                      <td>0.3</td>
                      <td>0:18</td>
                      <td>0:08</td>
                      <td colspan="3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                data-loadfull="true"
                data-toggle="modal"
                data-target="#choose-booking-id-modal"
                className="btn"
                href="/bookings_choosers/728?action_type=new&offline=true&type=Activity"
              >
                <span id="new" />
                <i style={{ color: "green" }} class="fas fa-plus-circle"></i>
                Fly a TEST FLIGHT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
