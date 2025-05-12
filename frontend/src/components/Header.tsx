import React from 'react';
import { Bell, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-bottom shadow-sm p-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="me-4 text-linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </div>
          <div className="position-relative">
            <Search className="position-absolute ms-2 top-50 translate-middle-y text-secondary" size={16} />
            <input 
              type="text" 
              className="form-control ps-4" 
              placeholder="Search..." 
              style={{ width: '16rem' }}
            />
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link position-relative p-1">
            <Bell size={20} className="text-secondary" />
            <span className="position-absolute top-0 end-0 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New notifications</span>
            </span>
          </button>
          <div className="d-flex align-items-center">
            <span className="me-2 d-none d-sm-block">Admin User</span>
            <div className="d-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '40px', height: '40px' }}>
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;