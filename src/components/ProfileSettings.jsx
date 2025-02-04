import React from "react";

const ProfileSettings = () => {
  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="account-tab"
            data-bs-toggle="tab"
            data-bs-target="#account"
            type="button"
            role="tab"
            aria-controls="account"
            aria-selected="true"
          >
            Account
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="password-tab"
            data-bs-toggle="tab"
            data-bs-target="#password"
            type="button"
            role="tab"
            aria-controls="password"
            aria-selected="false"
          >
            Password
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="account"
          role="tabpanel"
          aria-labelledby="account-tab"
        >
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Save</button>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="password"
          role="tabpanel"
          aria-labelledby="password-tab"
        >
          <form>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
