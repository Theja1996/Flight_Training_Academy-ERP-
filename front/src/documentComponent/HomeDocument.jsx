import {
  BarsOutlined,
  PlusOutlined,
  SearchOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

import "../documentComponent/HomeDocument.css";

export default function HomeDocument() {
  // const doFolder = () => {
  //   window.location = "/doFolder";
  // };

  // const doDocument = () => {
  //   window.location = "/doDocument";
  // };

  return (
    <div>
   
      <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            <Button
              // onClick={doFolder}
              style={{ borderStyle: "inset" }}
              icon={<PlusOutlined />}
            >
              <a href="/FolderCreate"> New Folder</a>
            </Button>
            <Button
              // onClick={doDocument}
              style={{ borderStyle: "inset" }}
              icon={<PlusOutlined />}
            >
              <a href="/DocumentCreate"> New Document</a>
            </Button>

            <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<SearchOutlined />}
            />
          </div>
        </div>
        <div style={{ marginTop: 20 }} className="table1">
          <h3>Documents</h3>

          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper form-inline no-footer"
          >
            <table
              className="datatable fl-table dataTable no-footer"
              id="DataTables_Table_0"
              role="grid"
            >
              <thead>
                <tr role="row">
                  <th
                    className="name sorting"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Name: activate to sort column ascending"
                    style={{ width: 476 }}
                  >
                    Name
                  </th>
                  <th
                    className="hidden-phone modified sorting"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Modified: activate to sort column ascending"
                    style={{ width: 278 }}
                  >
                    Modified
                  </th>
                  <th
                    className="hidden-phone members sorting"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Members: activate to sort column ascending"
                    style={{ width: 98 }}
                  >
                    Members
                  </th>
                  <th
                    className="actions no-sort sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    aria-label
                    style={{ width: 22 }}
                  />
                </tr>
              </thead>
              <tbody>
                <tr className="odd" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/7215">
                        A/C PERFORMANCE SPECIFICATIONS
                      </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2019-04-07T17:02:39+05:00"
                  >
                    <span>07.04.2019 17:02</span>
                  </td>
                  <td className="hidden-phone" data-sort={33}>
                    <a
                      title="Active administrators
Active instructors"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=7215"
                    >
                      33 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=7215"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=7215"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/7215"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/7215/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/7215/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/7215"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/3350">ATPL Ground School </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2018-01-29T15:29:19+05:00"
                  >
                    <span>29.01.2018 15:29</span>
                  </td>
                  <td className="hidden-phone" data-sort={104}>
                    <a
                      title="Active administrators
Active crew
Active instructors
Active staff
Active students"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=3350"
                    >
                      104 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=3350"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=3350"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/3350"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/3350/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/3350/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/3350"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="odd" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/12497">BAK</a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2020-07-01T14:01:38+05:00"
                  >
                    <span>
                      01.07.2020 14:01 by{" "}
                      <a target="_blank" href="/users/16793">
                        HEM
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={21}>
                    <a
                      title="Active administrators
2020 JUL-BAK Batch 01
2020 JUL-PPL Batch 01
Isha  - Mariyam Isha  Shareef
Nasru   -  Ibrahim Nasru   Ali"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=12497"
                    >
                      21 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=12497"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=12497"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/12497"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/12497/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/12497/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/12497"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/3288">Check List</a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2018-01-15T12:58:14+05:00"
                  >
                    <span>15.01.2018 12:58</span>
                  </td>
                  <td className="hidden-phone" data-sort={104}>
                    <a
                      title="Active administrators
Active crew
Active instructors
Active staff
Active students"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=3288"
                    >
                      104 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=3288"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=3288"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/3288"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/3288/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/3288/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/3288"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="odd" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/4377">IF Documents</a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2018-07-31T12:49:55+05:00"
                  >
                    <span>31.07.2018 12:49</span>
                  </td>
                  <td className="hidden-phone" data-sort={103}>
                    <a
                      title="Active administrators
Active instructors
Active students"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=4377"
                    >
                      103 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=4377"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=4377"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/4377"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/4377/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/4377/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/4377"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/3283">Mass &amp; Balance</a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2018-01-15T12:49:08+05:00"
                  >
                    <span>15.01.2018 12:49</span>
                  </td>
                  <td className="hidden-phone" data-sort={104}>
                    <a
                      title="Active administrators
Active crew
Active instructors
Active staff
Active students"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=3283"
                    >
                      104 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=3283"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=3283"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/3283"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/3283/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/3283/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/3283"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="odd" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/3324">POH</a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2018-01-21T10:26:41+05:00"
                  >
                    <span>21.01.2018 10:26</span>
                  </td>
                  <td className="hidden-phone" data-sort={104}>
                    <a
                      title="Active administrators
Active crew
Active instructors
Active renters
Active staff
Active students"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=3324"
                    >
                      104 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=3324"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=3324"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/3324"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/3324/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/3324/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/3324"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/12498">PPL</a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2020-06-29T18:57:21+05:00"
                  >
                    <span>
                      29.06.2020 18:57 by{" "}
                      <a target="_blank" href="/users/16792">
                        JOEL
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={19}>
                    <a
                      title="Active administrators
2020 JUL-BAK Batch 01
2020 JUL-PPL Batch 01"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=12498"
                    >
                      19 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=12498"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=12498"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/12498"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/12498/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/12498/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/12498"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="odd" role="row">
                  <td>
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fas fa-folder-open" aria-hidden="true" />
                    </span>
                    <span>
                      <a href="/document_folders/13485">student information </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone"
                    data-sort="2020-09-06T11:26:27+05:00"
                  >
                    <span>
                      06.09.2020 11:26 by{" "}
                      <a target="_blank" href="/users/16792">
                        JOEL
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={236}>
                    <a
                      title="Active administrators
Active instructors
Active staff
Active students
Standby students"
                      rel="tooltip"
                      href="/document_shares?document_folder_id=13485"
                    >
                      236 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_folder_id=13485"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_folder_id=13485"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/document_folders/13485"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/document_folders/13485/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/document_folders/13485/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Please note that this folder has content which will also be deleted.

Are you sure you want to delete this folder?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/document_folders/13485"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" id="document_19594" role="row">
                  <td className data-path="/documents/19594/cloning_status">
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fal fa-file-alt fa-2x" aria-hidden="true" />
                    </span>
                    <span>
                      <a target="_blank" href="/documents/19594">
                        Air ex plans
                      </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone modified"
                    data-sort="2018-01-21T10:23:41+05:00"
                  >
                    <span>
                      21.01.2018 10:23 by{" "}
                      <a target="_blank" href="/users/16792">
                        JOEL
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={104}>
                    <a
                      title="Active administrators
Active crew
Active instructors
Active staff
Active students"
                      rel="tooltip"
                      href="/document_shares?document_id=19594"
                    >
                      104 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_id=19594"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_id=19594"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/documents/19594"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/documents/19594/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/documents/19594/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Are you sure you want to delete this document?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/documents/19594"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="odd" id="document_21553" role="row">
                  <td className data-path="/documents/21553/cloning_status">
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fal fa-file-alt fa-2x" aria-hidden="true" />
                    </span>
                    <span>
                      <a target="_blank" href="/documents/21553">
                        PATTER A AND B
                      </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone modified"
                    data-sort="2018-05-05T15:51:10+05:00"
                  >
                    <span>
                      05.05.2018 15:51 by{" "}
                      <a target="_blank" href="/users/16803">
                        ASAD
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={31}>
                    <a
                      title="Active administrators
Active crew
Active staff"
                      rel="tooltip"
                      href="/document_shares?document_id=21553"
                    >
                      31 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_id=21553"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_id=21553"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/documents/21553"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/documents/21553/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/documents/21553/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Are you sure you want to delete this document?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/documents/21553"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" id="document_19595" role="row">
                  <td className data-path="/documents/19595/cloning_status">
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fal fa-file-alt fa-2x" aria-hidden="true" />
                    </span>
                    <span>
                      <a target="_blank" href="/documents/19595">
                        Recommendation for skill test
                      </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone modified"
                    data-sort="2018-01-21T10:25:19+05:00"
                  >
                    <span>
                      21.01.2018 10:25 by{" "}
                      <a target="_blank" href="/users/16792">
                        JOEL
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={30}>
                    <a
                      title="Active administrators
Active crew"
                      rel="tooltip"
                      href="/document_shares?document_id=19595"
                    >
                      30 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_id=19595"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_id=19595"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/documents/19595"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/documents/19595/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/documents/19595/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Are you sure you want to delete this document?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/documents/19595"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="odd" id="document_20278" role="row">
                  <td className data-path="/documents/20278/cloning_status">
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fal fa-file-alt fa-2x" aria-hidden="true" />
                    </span>
                    <span>
                      <a target="_blank" href="/documents/20278">
                        RT GAN
                      </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone modified"
                    data-sort="2018-02-23T23:50:22+05:00"
                  >
                    <span>
                      23.02.2018 23:50 by{" "}
                      <a target="_blank" href="/users/16793">
                        HEM
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={19}>
                    <a
                      title="Active administrators"
                      rel="tooltip"
                      href="/document_shares?document_id=20278"
                    >
                      19 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_id=20278"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_id=20278"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/documents/20278"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/documents/20278/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/documents/20278/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Are you sure you want to delete this document?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/documents/20278"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr className="even" id="document_21228" role="row">
                  <td className data-path="/documents/21228/cloning_status">
                    <span className="cloning-content">
                      <span className="sr-only">Cloning in progress</span>
                    </span>
                    <span className="wrap-icon">
                      <i className="fal fa-file-alt fa-2x" aria-hidden="true" />
                    </span>
                    <span>
                      <a target="_blank" href="/documents/21228">
                        SCANNED MEDICAL EXAMPLE
                      </a>
                    </span>
                  </td>
                  <td
                    className="hidden-phone modified"
                    data-sort="2018-04-16T13:12:38+05:00"
                  >
                    <span>
                      16.04.2018 13:12 by{" "}
                      <a target="_blank" href="/users/16793">
                        HEM
                      </a>
                    </span>
                  </td>
                  <td className="hidden-phone" data-sort={104}>
                    <a
                      title="Active administrators
Active crew
Active instructors
Active renters
Active staff
Active students"
                      rel="tooltip"
                      href="/document_shares?document_id=21228"
                    >
                      104 members
                    </a>
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-center"
                        data-toggle="dropdown"
                        title="Actions"
                        rel="tooltip"
                        href="#"
                      >
                        <i className="fas fa-ellipsis-v" aria-hidden="true" />
                      </a>
                      <ul className="dropdown-menu pull-right">
                        <li>
                          <a
                            title="Share"
                            href="/document_shares?document_id=21228"
                          >
                            <i className="fas fa-share" aria-hidden="true" />
                            Share
                          </a>
                        </li>
                        <li>
                          <a
                            title="Move"
                            href="/document_mover?document_id=21228"
                          >
                            <i className="fas fa-sitemap" aria-hidden="true" />
                            Move
                          </a>
                        </li>
                        <li>
                          <a
                            title="Press to copy to clipboard"
                            data-clipboard-text="https://aaoa.flightlogger.net/documents/21228"
                            data-placement="left"
                            className="copy-to-clipboard"
                            href="#"
                          >
                            <i
                              className="far fa-clipboard"
                              aria-hidden="true"
                            />
                            Copy link
                          </a>
                        </li>
                        <li>
                          <a
                            title="Clone"
                            rel="nofollow"
                            data-method="post"
                            href="/documents/21228/clone"
                          >
                            <i className="far fa-clone" aria-hidden="true" />
                            Clone
                          </a>
                        </li>
                        <li>
                          <a title="Edit" href="/documents/21228/edit">
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            title="Delete"
                            data-confirm="Are you sure you want to delete this document?
This can not be undone!"
                            rel="nofollow"
                            data-method="delete"
                            href="/documents/21228"
                          >
                            <i
                              className="fas fa-times-circle fl-danger"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
