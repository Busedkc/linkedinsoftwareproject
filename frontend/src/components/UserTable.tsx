import React from 'react';
import { Edit, Trash } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  status: 'Active' | 'Pending' | 'Suspended';
  joined: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
          case 'Active': return 'bg-success';
          case 'Pending': return 'bg-warning text-dark';
          case 'Suspended': return 'bg-danger';
          default: return 'bg-secondary';
        }
      };
    
      return (
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center bg-linkedin-light text-linkedin rounded-circle me-3" style={{ width: '40px', height: '40px', fontWeight: 500 }}>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="fw-medium">{user.name}</div>
                          <div className="text-muted small">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.title}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.joined}</td>
                    <td>
                      <div className="d-flex justify-content-end gap-2">
                        <button className="btn btn-sm btn-outline-secondary">
                          <Edit size={16} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
    export default UserTable;