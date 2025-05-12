import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  users: number;
  posts: number;
  applications: number;
}

const data: DataPoint[] = [
  { name: 'Mon', users: 4000, posts: 2400, applications: 2400 },
  { name: 'Tue', users: 3000, posts: 1398, applications: 2210 },
  { name: 'Wed', users: 2000, posts: 9800, applications: 2290 },
  { name: 'Thu', users: 2780, posts: 3908, applications: 2000 },
  { name: 'Fri', users: 1890, posts: 4800, applications: 2181 },
  { name: 'Sat', users: 2390, posts: 3800, applications: 2500 },
  { name: 'Sun', users: 3490, posts: 4300, applications: 2100 },
];

const ActivityChart = () => {
  return (
    <div className="card shadow-sm mb-4">
    <div className="card-header bg-white border-bottom-0">
      <h5 className="card-title mb-0">Weekly Activity</h5>
    </div> 
    <div className="card-body">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#0077B5" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="posts" stroke="#00a0dc" />
            <Line type="monotone" dataKey="applications" stroke="#313335" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
