import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Menu, Dropdown, Space, Button, Row, Col, Anchor, Link } from "antd";

import { Badge } from "antd";
import {
  FaCaretDown,
  FaEnvelope,
  FaFileInvoice,
  FaLock,
  FaPencilAlt,
  FaRegImage,
  FaRegQuestionCircle,
  FaSyncAlt,
  FaUserAlt,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Avatar from "antd/lib/avatar/avatar";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Addpost from "./Addpost";
import Profile from "../Profile/Profile";
import TitleBar from "./TitleBar";
import Newprogramme from "../Profile/Programs/Addnewprgramme";
import Income from "../Profile/Reports/Income";
import Rowdata from "./Rowdata";
import Logbook from "../Profile/Reports/Logbook";
import Editimage from "../Profile/Settings/Editimage";
import AddCertificate from "../Profile/CertificateWarnings/AddCertificate";

import Editrequirments from "../Profile/Settings/Editrequirments";
import Addlinkuser from "./Addlinkuser";
import Adminlinkuser from "./Adminlinkuser";
import LogingSample from "./LoginSamle";
import Logbookprofile from "../logbookComponent/Logbook";
import Userclass from "../classComponent/Userclass";
import Crew from "../crew/crewComponent/Crew";
import Staff from "../staff/staffComponent/Staff";
import Instructor from "../instructor/instructorComponents/Instructor";
import Administrator from "../Administrators/administratorComponent/Administrator";
import Renter from "../renters/renterComponent/Renter";
import Guest from "../guests/guestComponent/Guest";
import Userwarning from "../warningComponent/Userwarning";
import Theory from "../theoryComponent/Theory";
import Classtheory from "../Profile/Theory/ClassTheory/Classtheory";

import Operation from "../operationComponent/Operation";
import HomeDocument from "../documentComponent/HomeDocument";
import AircraftList from "../ReportsComponent/AircraftreportComponent/AircraftList";
import AirportReport from "../ReportsComponent/AircraftreportComponent/AirportComponent/Airport";
import BookingStatistic from "../ReportsComponent/AircraftreportComponent/BookingStatisticComponent/BookingStatistic";
import BookingCancel from "../ReportsComponent/AircraftreportComponent/BookingcancelComonent/BookingCancel";
import AdminPage from "../AdminPage/AdminPage";
import { AppContext } from "./Contaxt";
import InstructorLinkuser from "./InstructorLinkuser";
import CreateClass from "../classComponent/CreateClassPage/CreateClass";
import EditClass from "../classComponent/EditClass";

import CreateInstructor from "../instructor/CreateInstructorPage/CreateInstructor";
import CreateCrew from "../crew/CreateCrewPage/CreateCrew";
import CreateStaff from "../staff/CreateStaffPage/CreateStaff";
import CreateAdministrator from "../Administrators/CreateAdministratorPage/CreateAdministrator";
import CreateRenter from "../renters/CreateRenterPage/CreateRenter";


import CreateGuest from "../guests/CreateGuestPage/CreateGuest";

import CreateBookingComponent from "../CreateBookingComponent/CreateBookingComponent";
import OverviewComponent from "../OverviewComponent/OverviewComponent";

import AccountSetting from "../AdministrationPage/AccountSettingComponent/AccountSetting";


import Airport from "../AdministrationPage/AccountSettingComponent/AirportComponent/Airport";
import CreateAirport from "../AdministrationPage/AccountSettingComponent/AirportComponent/CreateAirport/CreateAirport";
import CancelReason from "../AdministrationPage/AccountSettingComponent/CancelReasonComponent/CancelReason";
import CreateCancelReason from "../AdministrationPage/AccountSettingComponent/CancelReasonComponent/CreateCancelReason/CreateCancelReason";
import ClassRoom from "../AdministrationPage/AccountSettingComponent/ClassRomComponent/ClassRoom";
import CreateClassRoom from "../AdministrationPage/AccountSettingComponent/ClassRomComponent/CreateClassRoom/CreateClassRoom";
import Customers from "../AdministrationPage/AccountSettingComponent/CustomersComponent/Customers";
import CreateCustomers from "../AdministrationPage/AccountSettingComponent/CustomersComponent/CreateCustomers/CreateCustomer";
import BookingFilter from "../AdministrationPage/AccountSettingComponent/BookingFilterComponent/BokkingFilter";
import FilterCertificateWarning from "../AdministrationPage/AccountSettingComponent/FilterCertificateWarningComponent/FilterCertificateWarning";
import FilterMaintanenceWarning from "../AdministrationPage/AccountSettingComponent/FilterMaintanenceWarningComponent/FilterMaintanenceWarning";
import FiterGroundSchool from "../AdministrationPage/AccountSettingComponent/FilterGroundSchool/FilterGroundSchool";
import MasterCertificateList from "../AdministrationPage/AccountSettingComponent/MasterCertificateList/MasterCertificateList";
import CreateCertificate from "../AdministrationPage/AccountSettingComponent/MasterCertificateList/CreateCertificate/CreateCertificate";
import MasterMaintanenceList from "../AdministrationPage/AccountSettingComponent/MasterMaintanenceList/MasterMaintanenceList";
import CreateMaintenence from "../AdministrationPage/AccountSettingComponent/MasterMaintanenceList/CreateMaintenence/CreateMaintenence";
import Operations from "../AdministrationPage/AccountSettingComponent/Operations/Operations";
import CreateOperations from "../AdministrationPage/AccountSettingComponent/Operations/CreateOperations/CreateOperations";
import CreatePrograms from "../AdministrationPage/AccountSettingComponent/Programs/CreatePrograms/CreatePrograms";
import Programs from "../AdministrationPage/AccountSettingComponent/Programs/Programs";
import RenterRequirment from "../AdministrationPage/AccountSettingComponent/RenterRequirmentComponent/RenterRequirment";
import TheoryCourse from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/TheoryCourse";
import CreateTheory from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/CreateTheory/CreateTheory";
import PPLAtheory from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/CreatePPLAtheory/PPLAtheory";
import ATPLAtheory from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/CreateATPLAtheory/ATPLAtheory";
import BAKtheory from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/CreateBAKtheory/BAKtheory";
import CPLtheory from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/createCPLtheory/CPLtheory";
import IRtheory from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/CreateIRtheory/IRtheory";
import FuelReport from "../ReportsComponent/AircraftreportComponent/FuelReportComponent/FuelReport";
import FlightLoggerAnalitics from "../ReportsComponent/AircraftreportComponent/FlightLoggerAnaliticsComponent/FlightLoggerAnalitics";
import InvoiceReport from "../ReportsComponent/AircraftreportComponent/InvoiceReport/InvoiceReport";
import ProductionReport from "../ReportsComponent/AircraftreportComponent/ProductionReportComponent/ProductionReport";
//import RawDataTheoryReport from "../ReportsComponent/AircraftreportComponent/RowDataTheoryreport/RawDataTheoryReport"
import RawDataTheoryReport from "../Profile/Reports/RawDataTheoryReport";

//import RawDataFlightrepot from "../ReportsComponent/AircraftreportComponent/RowDataFlightreport/RawDataFlightrepot"
import RawDataFlightrepot from "../Profile/Reports/RawDataFlightrepot";
import FolderCreate from "../documentComponent/FolderCreate/FolderCreate";
import DocumentCreate from "../documentComponent/DocumentCreate/DocumentCreate";
import Searching from "./Search";
import { Layout } from "antd";
import Students from "../student/StudentsComponent/Students";




import Atpl from "../Profile/Theory/atpl";
import Activities from "../Activities/Activities";



import CreateStudent from "../student/CreateStudentPage/CreateStudent";
import EditStudent from "../student/EditStudent";
import EditInstructor from "../instructor/instructorComponents/EditInstructor";
import EditCrew from "../crew/crewComponent/EditCrew";
import EditStaff from "../staff/staffComponent/EditStaff";
import EditAdministrator from "../Administrators/administratorComponent/EditAdministrator";
import EditRenter from "../renters/renterComponent/EditRenter";
import EditGuest from "../guests/guestComponent/EditGuest";
import UpdateProgram from "../AdministrationPage/AccountSettingComponent/Programs/UpdateProgram";




import ColorPicker from "./ColorPicker/ColorPicker";
import ColorPicker1 from "./ColorPicker/ColorPicker1";

// =====================Administration============================= 
import Aircraft from "../AdministrationPage/AccountSettingComponent/AircraftComponent/Aircraft";
import CreateAircraft from "../AdministrationPage/AccountSettingComponent/AircraftComponent/CreateAircraft/CreateAircraft";
import UpdateAircraft from "../AdministrationPage/AccountSettingComponent/AircraftComponent/UpdateAircraft";
import UpdateAirport from "../AdministrationPage/AccountSettingComponent/AirportComponent/UpdateAirport"
import UpdateClassRoom from "../AdministrationPage/AccountSettingComponent/ClassRomComponent/UpdateClassRoom"
import UpdateCustomers from "../AdministrationPage/AccountSettingComponent/CustomersComponent/UpdateCustomers"
import UpdateOperations from "../AdministrationPage/AccountSettingComponent/Operations/UpdateOperations"
import UpdateCancelReason from "../AdministrationPage/AccountSettingComponent/CancelReasonComponent/UpdateCancelReason"
import UpdateMasterMaintanenceList from "../AdministrationPage/AccountSettingComponent/MasterMaintanenceList/UpdateMasterMaintanenceList"
import UpdateMasterCertificateLists from "../AdministrationPage/AccountSettingComponent/MasterCertificateList/UpdateMasterCertificateLists"
import UpdateTheoryCourse from "../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/UpdateTheoryCourse"
import TheoryCategory from '../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/CreateTheory/TheoryCategory'
import AirportProfile from "../AdministrationPage/AccountSettingComponent/AirportComponent/AirportProfile"
import AircraftReport from '../ReportsComponent/AircraftreportComponent/AircraftReport'
import CustomLesson from '../Profile/Programs/CustomLesson/CustomLesson'
import AddClasstheory from "../Profile/Theory/ClassTheory/AddClasstheory";
import EditableTable from "../TestingPages/EditableTable";
import AddProgressTest from "../Profile/Theory/ProgressTests/AddProgressTest";
import AddTheoryRelease from "../Profile/Theory/TheoryReleases/AddTheoryRelease";
import AddSittingGroup from "../Profile/Theory/Exams/AddSittingGroup";
import AddSitting from "../Profile/Theory/Exams/AddSitting";
import AddExtraTheory from "../Profile/Theory/ExtraTheory/AddExtraTheory";
import AddTypeQuestionnaire from "../Profile/Theory/TypeQuestionnaire/AddTypeQuestionnaire";
import ExtraLesson from "../Profile/Programs/ExtraLesson/ExtraLesson";
import ProfileAircraft from "../Profile/Aircraft/Profile";
import Air from "./Test";
const { Header, Content, Footer } = Layout;

export default function LayoutPage() {
  const history = useHistory();

  function doLogout() {
    history.push("/Login");
  }
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const uesrss = (
    <Menu style={{ backgroundColor: "#144364", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaUserAlt style={{ color: "white" }} />
          {/* <Anchor affix={false} > <Link href="/Profile" title=" My profile" style={{ color: "white", fontWeight: "bold" }} /> My profile</Anchor> */}

          <a href="/Profile" style={{ color: "white", fontWeight: "bold" }}>
            My profile
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaFileInvoice style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            My logbook
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaSyncAlt style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Sync with calender
          </a>
        </Space>
      </Button>
      <br></br> <Menu.Divider style={{ color: "white" }} />
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaPencilAlt style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Edit info
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaLock style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Edit password
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaRegImage style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Edit image
          </a>
        </Space>
      </Button>
      <Menu.Divider />
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FiLogOut style={{ color: "white" }} />
          <a
            href="#"
            onClick={doLogout}
            style={{ color: "white", fontWeight: "bold" }}
          >
            Log out
          </a>
        </Space>
      </Button>
    </Menu>
  );

  const help = (
    <Menu style={{ backgroundColor: "#144364", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaUserAlt style={{ color: "white" }} />
          <a
            href="#"
            target="blank"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Help center
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaFileInvoice style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Get support
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaSyncAlt style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Refresher training
          </a>
        </Space>
      </Button>
      <br></br> <Menu.Divider style={{ color: "white" }} />
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <FaPencilAlt style={{ color: "white" }} />
          <a href="#" style={{ color: "white", fontWeight: "bold" }}>
            Software updates
          </a>
        </Space>
      </Button>
    </Menu>
  );

  const menu = (
    <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/users" style={{ color: "white" }}>
            Students
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Userclass" style={{ color: "white" }}>
            Classes
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Instructor" style={{ color: "white" }}>
            Instructors
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Crew" style={{ color: "white" }}>
            Crew
          </a>
        </Space>
      </Button>
      <br></br>{" "}
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Staff" style={{ color: "white" }}>
            Staff
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Administrator" style={{ color: "white" }}>
            Administrators
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Renter" style={{ color: "white" }}>
            Renters
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Guest" style={{ color: "white" }}>
            Guests
          </a>
        </Space>
      </Button>
    </Menu>
  );

  const certificate = (
    <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Userwarning" style={{ color: "white" }}>
            Certificate warning..
          </a>
        </Space>
      </Button>
    </Menu>
  );

  const booking = () => (
    <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/bookings" style={{ color: "white" }}>
            create booking
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            Overview
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            weekly overview
          </a>
        </Space>
      </Button>{" "}
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            monthly overview
          </a>
        </Space>
      </Button>{" "}
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            Request aircraft rental
          </a>
        </Space>
      </Button>{" "}
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            Approve aircraft rental
          </a>
        </Space>
      </Button>{" "}
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            Request simulator rental
          </a>
        </Space>
      </Button>{" "}
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/overview" style={{ color: "white" }}>
            Approve simulator rental
          </a>
        </Space>
      </Button>
    </Menu>
  );

  const administration = (
    <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/AccountSetting" style={{ color: "white" }}>
            Account setting
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/plane" style={{ color: "white" }}>
            Aircraft
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/airport " style={{ color: "white" }}>
            Airports
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/cancelReason" style={{ color: "white" }}>
            Cancellation Reasons
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/classRoom" style={{ color: "white" }}>
            Classrooms
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Customer" style={{ color: "white" }}>
            Customers
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/booking_filters" style={{ color: "white" }}>
            Filters-booking
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/account-settings/certificate-warning-filters" style={{ color: "white" }}>
            Filters-certificate warnings
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/FiterGroundSchool" style={{ color: "white" }}>
            Filters- Ground school warnings
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/FilterMaintanenceWarning" style={{ color: "white" }}>
            maintanence warnings
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/MasterCertificateList" style={{ color: "white" }}>
            Master certificate List
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/maintenance_type" style={{ color: "white" }}>
            Master maintenance list
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/operation" style={{ color: "white" }}>
            Opreations
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/Programs" style={{ color: "white" }}>
            Programms
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/renter_configuration" style={{ color: "white" }}>
            Renter Requiments
          </a>
        </Space>
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/theory_courses" style={{ color: "white" }}>
            Theory cources
          </a>
        </Space>
      </Button>
      <br></br>
    </Menu>
  );

  const repots = (
    <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/planes/report" style={{ color: "white" }}>
            Aircraft reports
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/airports/report" style={{ color: "white" }}>
            Airports reports
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/BookingStatistic" style={{ color: "white" }}>
            Booking Statictics
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/cancelled_booking_report" style={{ color: "white" }}>
            Cancelation Report
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/FlightLoggerAnalitics" style={{ color: "white" }}>
            FlightLogger Analitics
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="FuelReport" style={{ color: "white" }}>
            Fuel report
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/InvoiceReport" style={{ color: "white" }}>
            Invoice Report
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/ProductionReport" style={{ color: "white" }}>
            Production report
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/RawDataFlightrepot" style={{ color: "white" }}>
            Raw-data flight report
          </a>
        </Space>
      </Button>
      <br></br>

      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <Space>
          <a href="/RawDataTheoryReport" style={{ color: "white" }}>
            Raw-data theory report
          </a>
        </Space>
      </Button>
      <br></br>
    </Menu>
  );
  return (
    <div>
      <Layout   style={{
            backgroundColor: " #ffffff",
         
          }}>
      < >
        <Header
          style={{
            backgroundColor: " #093A5D",
         
          }}
        >
          <Row align="middle">
          <Col span={12}>
            <Button
              justify="space-between "
              style={{ fontSize: "20px" }}
              type="text"
            >
              <a href="#" style={{ color: "white" }}>
                Asian Academy of Aeronautics
              </a>
            </Button>
          </Col>
          <Col span={6} offset={4}>
            <Space>
              <Badge size="small" count={5}>
                <FaEnvelope style={{ color: "white", fontSize: "19px" }} />
                <a href="#" />
              </Badge>
              <Avatar
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFvYxp0IqMV9A/company-logo_200_200/0/1519952520890?e=2159024400&v=beta&t=jNBNgJd3x3Y6X4pgToJzFOAFq3UGU7ykY3E08jtdedQ"
                size="small"
              />
              <Dropdown overlay={uesrss} trigger={["click"]}>
                <Button type="text">
                  <FaCaretDown style={{ color: "white" }} />
                </Button>
              </Dropdown>
            </Space>
            <Dropdown overlay={help} trigger={["click"]}>
              <Button type="text">
                <FaRegQuestionCircle
                  style={{ color: "white", fontSize: "19px" }}
                />
              </Button>
            </Dropdown>
          </Col></Row>
        </Header>

        <Header
          style={{
            backgroundColor: "  #3683C8 ",
         
     
          }}
        ><Row align="middle">
          <Col span={8} offset={4}>
            <Space>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button
                  type="text"
                  style={{ color: "white", fontSize: "14px" }}
                >
                  <Space>
                    Users <FaCaretDown style={{ color: "#8cccec" }} />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown overlay={certificate} trigger={["click"]}>
                <Button
                  type="text"
                  style={{ color: "white", fontSize: "14px" }}
                >
                  <Space>
                    warnings <FaCaretDown style={{ color: "#8cccec" }} />
                  </Space>
                </Button>
              </Dropdown>
              <Button type="text">
                <Space>
                  <a
                    href="/activities/overview"
                    
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    Activities
                  </a>
                </Space>
              </Button>
              <Dropdown overlay={booking} trigger={["click"]}>
                <Button
                  type="text"
                  style={{ color: "white", fontSize: "14px" }}
                >
                  <Space>
                    Booking <FaCaretDown style={{ color: "#8cccec" }} />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown overlay={administration} trigger={["click"]}>
                <Button
                  type="text"
                  style={{ color: "white", fontSize: "14px" }}
                >
                  <Space>
                    Administration
                    <FaCaretDown style={{ color: "#8cccec" }} />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown overlay={repots} trigger={["click"]}>
                <Button
                  type="text"
                  style={{ color: "white", fontSize: "14px" }}
                >
                  <Space>
                    Reports
                    <FaCaretDown style={{ color: "#8cccec" }} />
                  </Space>
                </Button>
              </Dropdown>
              <Button type="text">
                <Space>
                  <a
                    href="/HomeDocument"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                  
                    Documants
                  </a>
                </Space>
              </Button>
            </Space>
          </Col></Row>
        </Header>
      </>

      <div>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <BrowserRouter>
            <Switch>
         
              <Route path="/Register" component={Register} />

              <Route path="/Home" component={Home} />

              <Route path="/Addpost" component={Addpost} />

              {/* <Route path="/Profile" component={Profile} /> */}

              <Route path="/Income" component={Income} />

              <Route path="/Rowdata" component={Rowdata} />

              <Route path="/Logbook" component={Logbook} />

            
              <Route path="/AddCertificate" component={AddCertificate} />
              
              <Route path="/teams/:key/theory_lectures/new" component={AddClasstheory} />
              <Route path="/users/:key/Progress_test" component={AddProgressTest} />
              <Route path="/teams/:key/team_theory_releases/new" component={AddTheoryRelease} />
              <Route path="/sitting_groups/:key/sittings/new" component={AddSitting} />
              <Route path="/users/:key/sitting_groups/new" component={AddSittingGroup} />
              <Route path="/users/:key/special_theory_lectures/new" component={AddExtraTheory} />
              <Route path="/users/:key/team_type_questionnaires/new" component={AddTypeQuestionnaire} />
              {/* <Route path="/users/:key/user_programs/user_lectures/new" component={CustomLesson} /> */}
              <Route path="/CustomLesson" component={CustomLesson} />
              {/* <Route path="/users/:key/user_programs/user_custom_lectures/new" component={ExtraLesson} /> */}
              <Route path="/ExtraLesson" component={ExtraLesson} />
              
              <Route path="/user/:key/edit" component={EditStudent} />
              <Route path="/user/:key/avatar/new" component={Editimage} />
              <Route path="/user/:key/certificate/edit" component={Editrequirments} />

              <Route path="/EditInstructor" component={EditInstructor} />

              <Route path="/EditCrew" component={EditCrew} />

              <Route path="/EditStaff" component={EditStaff} />

              <Route path="/EditAdministrator" component={EditAdministrator} />

              <Route path="/EditRenter" component={EditRenter} />

              <Route path="/EditGuest" component={EditGuest} />
              
              <Route path="/Addlinkuser" component={Addlinkuser} />

              <Route path="/Adminlinkuser" component={Adminlinkuser} />

              <Route
                path="/InstructorLinkuser"
                component={InstructorLinkuser}
              />

              <Route path="/LogingSample" component={LogingSample} />

              <Route path="/Logbookprofile" component={Logbookprofile} />
              <Route path="/user/new" component={CreateStudent} />

              <Route path="/users" component={Students} />
              <Route path="/user/:key" component={Profile} />
              <Route path="/programs/:key/edit" component={UpdateProgram} />
              <Route path="/plane/:key/edit" component={UpdateAircraft} />
              <Route path="/airports/:key/edit" component={UpdateAirport} />
              <Route path="/ClassRooms/:key/edit" component={UpdateClassRoom} />
              <Route path="/Customers/:key/edit" component={UpdateCustomers} />
              <Route path="/Operations/:key/edit" component={UpdateOperations} />
              <Route path="/CancelReasons/:key/edit" component={UpdateCancelReason} />
              <Route path="/maintenance_types/:key/edit" component={UpdateMasterMaintanenceList} />
              <Route path="/MasterCertificateLists/:key/edit" component={UpdateMasterCertificateLists} />
              <Route path="/theory_courses/:key/edit" component={UpdateTheoryCourse} />
              <Route path="/theory_courses/subject_categories/new" component={TheoryCategory} />
              <Route path="/airportss/:key" component={AirportProfile} />
              <Route path="/planess/:key/aircraft_report" component={AircraftReport} />
              
             
           
              
              
              

             

            


              <Route path="/Atpl " component={Atpl} />

            
              
              <Route path="/Userclass" component={Userclass} />

              <Route path="/Instructor" component={Instructor} />

              <Route path="/Crew" component={Crew} />

              <Route path="/Staff" component={Staff} />

              <Route path="/Administrator" component={Administrator} />

              <Route path="/Renter" component={Renter} />

              <Route path="/Guest" component={Guest} />

              <Route path="/Userwarning" component={Userwarning} />

              <Route path="/Theory" component={Theory} />

              <Route path="/Classtheory" component={Classtheory} />
              
        

              <Route path="/HomeDocument" component={HomeDocument} />

              <Route path="/planes/report" component={AircraftList} />

              <Route path="/airports/report" component={AirportReport} />

              <Route path="/BookingStatistic" component={BookingStatistic} />

              <Route path="/cancelled_booking_report" component={BookingCancel} />

              <Route path="/AdminPage" component={AdminPage} />

          

              <Route path="/CreateClass" component={CreateClass} />

              <Route path="/EditClass" component={EditClass} />

              <Route path="/CreateInstructor" component={CreateInstructor} />

              <Route path="/CreateCrew" component={CreateCrew} />

              <Route path="/CreateStaff" component={CreateStaff} />

              <Route path="/activities/overview" component={Activities} />

            
              
              <Route
                path="/CreateAdministrator"
                component={CreateAdministrator}
              />

              <Route path="/CreateRenter" component={CreateRenter} />
              
     
              <Route path="/CreateGuest" component={CreateGuest} />

              <Route path="/AccountSetting" component={AccountSetting} />
               {/* =====================Administration=============================  */}
              <Route path="/plane" component={Aircraft} />

              <Route path="/planes/new" component={CreateAircraft} />
              <Route path="/planes/:key" component={ProfileAircraft} />
              <Route path="/airport" component={Airport} />

        
              <Route path="/CancelReasons/new" component={CreateCancelReason} />
              
              <Route path="/cancelReason" component={CancelReason} />

              <Route path="/Customers/new" component={CreateCustomers} />

              <Route path="/Operations/new" component={CreateOperations} />
              <Route path="/maintenance_types/new" component={CreateMaintenence} />
              <Route path="/theory_courses/new" component={CreateTheory} />
              <Route path="/airports/new" component={CreateAirport} />
              <Route
                path="/CreateCancelReason"
                component={CreateCancelReason}
              />

              <Route path="/classRoom" component={ClassRoom} />

              <Route path="/classRooms/new" component={CreateClassRoom} />

              <Route path="/Customer" component={Customers} />

              <Route path="/CreateCustomers" component={CreateCustomers} />

              <Route path="/booking_filters" component={BookingFilter} />

              <Route
                path="/FilterMaintanenceWarning"
                component={FilterMaintanenceWarning}
              />

              <Route
                path="/account-settings/certificate-warning-filters"
                component={FilterCertificateWarning}
              />

              <Route path="/FiterGroundSchool" component={FiterGroundSchool} />

              <Route
                path="/MasterCertificateList"
                component={MasterCertificateList}
              />

              <Route path="/MasterCertificateLists/new" component={CreateCertificate} />

              <Route
                path="/maintenance_type"
                component={MasterMaintanenceList}
              />

              <Route path="/CreateMaintenence" component={CreateMaintenence} />

              <Route path="/operation" component={Operations} />

              {/* <Route path="/CreateOperations" component={CreateOperations} /> */}

              <Route path="/Programs" component={Programs} />

              <Route path="/CreatePrograms" component={CreatePrograms} />

              <Route path="/renter_configuration" component={RenterRequirment} />

              <Route path="/theory_courses" component={TheoryCourse} />


              <Route path="/PPLAtheory" component={PPLAtheory} />

              <Route path="/ATPLAtheory" component={ATPLAtheory} />

              <Route path="/BAKtheory" component={BAKtheory} />

              <Route path="/CPLtheory" component={CPLtheory} />

              <Route path="/IRtheory" component={IRtheory} />

              <Route
                path="/FlightLoggerAnalitics"
                component={FlightLoggerAnalitics}
              />

              <Route path="/FuelReport" component={FuelReport} />

              <Route path="/InvoiceReport" component={InvoiceReport} />

              <Route path="/ProductionReport" component={ProductionReport} />

              <Route
                path="/RawDataFlightrepot"
                component={RawDataFlightrepot}
              />

              <Route
                path="/RawDataTheoryReport"
                component={RawDataTheoryReport}
              />

              <Route path="/FolderCreate" component={FolderCreate} />

              <Route path="/DocumentCreate" component={DocumentCreate} />

              <Route path="/TitleBar" component={TitleBar} />

              <Route path="/Search" component={Searching} />

              {/* <Route path="user/:key/user_programs/new" component={Newprogramme} /> */}
              <Route path="/Newprogramme/:studentKey" component={Newprogramme} />

              {/* Booking Module */}
              <Route path="/bookings" component={CreateBookingComponent} />

              <Route path="/overview" component={OverviewComponent} />

           
         

             

              //Testing
              <Route path="/colorPicker" component={ColorPicker1} />
              <Route path="/testingEditTable" component={EditableTable} />
<Route path="/air" component={Air}/>
            {/* End of booking module */}
              <Route path="/" component={Login} />
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      </div>

      {/* <BackTop>
              <div className="go-to-top">
                <UpOutlined />
              </div>
            </BackTop> */}

      <Footer style={{ textAlign: "center" }}>
      2022©ILT 
      </Footer>
      </Layout>
    </div>
  );
}
