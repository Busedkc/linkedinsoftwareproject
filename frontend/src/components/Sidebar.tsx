import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Briefcase, 
  BarChart, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const navItems = [
  { title: 'Dashboard',          icon: LayoutDashboard, path: '/' },
  { title: 'User Management',    icon: Users,           path: '/users' },
  { title: 'Content Moderation', icon: MessageSquare,   path: '/content' },
  { title: 'Job Listings',       icon: Briefcase,       path: '/jobs' },
  { title: 'Analytics',          icon: BarChart,        path: '/analytics' },
  { title: 'Settings',           icon: Settings,        path: '/settings' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? '4rem' : '16rem';

  return (
    <div
      className="bg-white border-end vh-100 d-flex flex-column"
      style={{ width: sidebarWidth, transition: 'width 0.3s' }}
    >
      {/* Header */}
      <div className="flex-grow-1 overflow-auto">
        <div className="p-3 mb-4">
          {!collapsed && <h5 className="mb-0">Admin Portal</h5>}
        </div>

        {/* Navigation Links */}
        <nav className="nav flex-column px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center py-2 px-2 mb-1 rounded 
                 ${isActive ? 'bg-light text-primary fw-medium' : 'text-secondary'}`
              }
            >
              <item.icon size={20} className={collapsed ? 'mx-auto' : 'me-2'} />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Collapse Button */}
      <div className="p-3 border-top">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-sm btn-light d-flex align-items-center justify-content-center w-100"
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <>
              <ChevronLeft size={20} className="me-1" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
