import React, { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: string | number;
    positive: boolean;
  };
  className?: string;
}

const DashboardCard = ({ title, value, icon, change, className }: DashboardCardProps) => {
  return (
    <div className={`card shadow-sm h-100 ${className || ''}`}>
    <div className="card-body">
      <div className="d-flex justify-content-between mb-2">
        <h6 className="card-subtitle text-muted">{title}</h6>
        <div className="bg-linkedin-light p-2 rounded-circle text-linkedin">
          {icon}
        </div>
      </div>
      <div className="card-content">
        <h3 className="fw-bold mb-1">{value}</h3>
        {change && (
          <p className={`small mb-0 ${change.positive ? 'text-success' : 'text-danger'}`}>
            {change.positive ? '↑' : '↓'} {change.value}
            <span className="text-muted ms-1">from last month</span>
          </p>
        )}
      </div>
    </div>
  </div>
);
};

export default DashboardCard;
