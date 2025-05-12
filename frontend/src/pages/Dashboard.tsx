import React from 'react';
import DashboardCard from '../components/DashboardCard';
import ActivityChart from '../components/ActivityChart';
import { Users, MessageSquare, Briefcase, BarChart } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Users', 
      value: '24,532', 
      icon: <Users size={20} />,
      change: { value: '12%', positive: true } 
    },
    { 
      title: 'New Posts', 
      value: '2,845', 
      icon: <MessageSquare size={20} />,
      change: { value: '5%', positive: true } 
    },
    { 
      title: 'Job Applications', 
      value: '1,257', 
      icon: <Briefcase size={20} />,
      change: { value: '3%', positive: false } 
    },
    { 
      title: 'Engagement Rate', 
      value: '24%', 
      icon: <BarChart size={20} />,
      change: { value: '2%', positive: true } 
    }
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">Dashboard</h2>
      <div className="row g-4 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <DashboardCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              change={stat.change}
            />
          </div>
        ))}
      </div>
      
      <ActivityChart />

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Recent Registrations</h5>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {[1, 2, 3, 4].map((_, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-linkedin-light text-linkedin rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                      {['JD', 'AM', 'TS', 'RK'][index]}
                    </div>
                    <div>
                      <div className="fw-medium">
                        {['John Doe', 'Alice Miller', 'Tom Smith', 'Rachel Kim'][index]}
                      </div>
                      <div className="text-muted small">Joined {['2', '3', '4', '5'][index]} hours ago</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Popular Job Listings</h5>
            </div>
            <div className="card-body">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="card mb-2">
                  <div className="card-body py-2">
                    <div className="fw-medium">
                      {['Senior React Developer', 'Product Manager', 'UI/UX Designer', 'Data Scientist'][index]}
                    </div>
                    <div className="text-muted small">
                      {['Google', 'Microsoft', 'Apple', 'Amazon'][index]} • 
                      {[' San Francisco', ' Seattle', ' Cupertino', ' New York'][index]} • 
                      {[' 245', ' 180', ' 132', ' 98'][index]} applications
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;