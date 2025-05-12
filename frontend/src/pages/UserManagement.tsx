import React from 'react';
import UserTable from '@/components/UserTable';
import { Plus, Search } from 'lucide-react';

const mockUsers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    title: 'Senior Developer',
    status: 'Active' as const,
    joined: 'Jan 12, 2023'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    title: 'Product Manager',
    status: 'Active' as const,
    joined: 'Mar 4, 2023'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    title: 'UX Designer',
    status: 'Pending' as const,
    joined: 'Apr 15, 2023'
  },
  {
    id: '4',
    name: 'Emily Chen',
    email: 'emily.c@example.com',
    title: 'Marketing Specialist',
    status: 'Active' as const,
    joined: 'May 22, 2023'
  },
  {
    id: '5',
    name: 'James Wilson',
    email: 'james.w@example.com',
    title: 'Data Analyst',
    status: 'Suspended' as const,
    joined: 'Feb 8, 2023'
  }
];

const UserManagement = () => {
  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">User Management</h2>
        <button className="btn btn-primary d-flex align-items-center gap-1">
          <Plus size={16} /> Add User
        </button>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-6 col-lg-8">
          <div className="position-relative">
            <Search 
              className="position-absolute ms-2 top-50 translate-middle-y text-secondary"
              size={16}
            />
            <input
              className="form-control ps-4"
              placeholder="Search users..."
            />
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <select className="form-select" defaultValue="all">
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <select className="form-select" defaultValue="newest">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <UserTable users={mockUsers} />

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="text-muted">Showing 1-5 of 24,532 users</div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" disabled>
            Previous
          </button>
          <button className="btn btn-outline-secondary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
