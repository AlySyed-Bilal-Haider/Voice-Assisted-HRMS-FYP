import React from "react";
import Adddesignation from "./Adddesignation";
function Designations() {
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Designations</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Designations</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_designation"
                    >
                      <i className="fa fa-plus" /> Add Designation
                    </a>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th style={{ width: 30 }}>#</th>
                          <th>Designation </th>
                          <th>Department </th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>sr</td>
                          <td>Designation</td>
                          <td>Department</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_designation"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_designation"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
            {/* Add Designation Modal */}
            <Adddesignation />
            {/* /Add Designation Modal */}
            {/* Edit Designation Modal */}
            {/* <?php include_once("includes/modals/designation/edit_designation.php");?> */}
            {/* /Edit Designation Modal */}
            {/* Delete Designation Modal */}
            {/* <?php include_once("includes/modals/designation/delete_designation.php");?> */}
            {/* /Delete Designation Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Designations;