import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  FaUsers,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaChartPie,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch Users Data
  const { data: users = [] } = useQuery({
    queryKey: ["users-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Fetch Loan Products Data
  const { data: loans = [] } = useQuery({
    queryKey: ["loans-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loans");
      return res.data;
    },
  });

  // Fetch All Applications (Assuming endpoint exists for admin to see all)
  // If this endpoint doesn't support 'all' without params, we might need to adjust,
  // but standard REST implies GET /loanApplication returns list.
  const { data: applications = [] } = useQuery({
    queryKey: ["applications-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loanApplication");
      return res.data;
    },
  });

  // --- Statistics Calculation ---

  // 1. User Stats
  const totalUsers = users.length;
  const adminCount = users.filter((u) => u.role === "admin").length;
  const managerCount = users.filter((u) => u.role === "manager").length;
  const userCount = users.filter((u) => u.role === "user").length;

  const userRoleData = [
    { name: "Admins", value: adminCount },
    { name: "Managers", value: managerCount },
    { name: "Users", value: userCount },
  ];

  // 2. Financial Stats (from Applications)
  const totalFunding = applications.reduce(
    (sum, app) => sum + (parseFloat(app.loanAmount) || 0),
    0
  );
  const totalApplications = applications.length;

  // 3. Application Status Stats
  const pendingApps = applications.filter(
    (app) => app.status === "pending"
  ).length;
  const approvedApps = applications.filter(
    (app) => app.status === "approved"
  ).length;
  const rejectedApps = applications.filter(
    (app) => app.status === "rejected"
  ).length;

  const statusData = [
    { name: "Pending", value: pendingApps },
    { name: "Approved", value: approvedApps },
    { name: "Rejected", value: rejectedApps },
  ];

  // 4. Loan Categories (from Products)
  // Count how many products are in each category
  const categoryCounts = loans.reduce((acc, loan) => {
    const cat = loan.category || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const categoryData = Object.keys(categoryCounts).map((key) => ({
    name: key,
    value: categoryCounts[key],
  }));

  // Colors for Charts (DaisyUI / Custom Palette)
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <div className="w-full bg-accent/5 min-h-screen p-4 md:p-8 font-jost text-base-content jost">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Admin Dashboard Overview
      </h1>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Total Users */}
        <div className="bg-accent shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl transition-all border-l-4 border-primary">
          <div className="p-4 bg-primary/10 rounded-full text-primary">
            <FaUsers size={24} />
          </div>
          <div>
            <p className="text-sm opacity-70 font-semibold">Total Users</p>
            <h2 className="text-3xl font-bold">{totalUsers}</h2>
          </div>
        </div>

        {/* Total Applications */}
        <div className="bg-accent shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl transition-all border-l-4 border-primary">
          <div className="p-4 rounded-full text-primary bg-primary/10">
            <FaHandHoldingUsd size={24} />
          </div>
          <div>
            <p className="text-sm opacity-70 font-semibold">
              Total Applications
            </p>
            <h2 className="text-3xl font-bold">{totalApplications}</h2>
          </div>
        </div>

        {/* Total Loan Products */}
        <div className="bg-accent shadow-xl rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl transition-all border-l-4 border-info">
          <div className="p-4 bg-info/10 rounded-full text-info">
            <FaChartPie size={24} />
          </div>
          <div>
            <p className="text-sm opacity-70 font-semibold">Active Products</p>
            <h2 className="text-3xl font-bold">{loans.length}</h2>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart 1: User Role Distribution */}
        <div className="bg-accent p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-center">
            User Roles Distribution
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="99%" height="100%">
              <PieChart>
                <Pie
                  data={userRoleData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {userRoleData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Application Status */}
        <div className="bg-accent p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-center">
            Application Status Overview
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="99%" height="100%">
              <BarChart
                data={statusData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8">
                  {statusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
