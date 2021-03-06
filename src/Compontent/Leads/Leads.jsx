import React from "react";
import {useSelector} from 'react-redux';
function Leads() {
  const projectteamLead=useSelector(state=>state.Projectreducer);
  console.log("Leads",projectteamLead);
  return (
    <div className="page-wrapper">
      {/* <!-- Page Content --> */}
      <div className="content container-fluid">
        {/* <!-- Page Header --> */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Leads</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.php">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Leads</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Page Header --> */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-nowrap custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Lead Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Project</th>
                    <th>Assigned Staff</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="#" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="#">Wilmer Deluna</a>
                      </h2>
                    </td>
                    <td>wilmerdeluna@example.com</td>
                    <td>9876543210</td>
                    <td>
                      <a href="project-view.php">Hospital Administration</a>
                    </td>
                    <td>
                      <span className="badge bg-inverse-success">Working</span>
                    </td>
                    <td>10 hours ago</td>
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
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil m-r-5"></i> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-trash-o m-r-5"></i> Delete
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
    </div>
  );
}

export default Leads;
