import { useState } from "react";
import { Plus, Users, DollarSign, Clock, Calendar, UserCheck, UserX } from "lucide-react";
import { ERPLayout } from "@/components/ERPLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const hrStats = [
  {
    title: "Total Employees",
    value: "128",
    change: "+5.2%",
    icon: Users,
    color: "text-info"
  },
  {
    title: "Present Today",
    value: "115",
    change: "+2.1%",
    icon: UserCheck,
    color: "text-success"
  },
  {
    title: "On Leave",
    value: "8",
    change: "-1.5%",
    icon: UserX,
    color: "text-warning"
  },
  {
    title: "Monthly Payroll",
    value: "$485,220",
    change: "+8.3%",
    icon: DollarSign,
    color: "text-primary"
  }
];

const employees = [
  {
    id: "EMP001",
    name: "Ahmed Hassan",
    position: "Software Engineer",
    department: "IT",
    salary: "$85,000",
    status: "Active",
    joinDate: "2023-01-15"
  },
  {
    id: "EMP002",
    name: "Sarah Mohamed",
    position: "Marketing Manager",
    department: "Marketing",
    salary: "$75,000",
    status: "Active",
    joinDate: "2022-08-20"
  },
  {
    id: "EMP003",
    name: "Omar Ali",
    position: "Accountant",
    department: "Finance",
    salary: "$65,000",
    status: "Active",
    joinDate: "2023-03-10"
  },
  {
    id: "EMP004",
    name: "Fatima Nour",
    position: "HR Specialist",
    department: "HR",
    salary: "$60,000",
    status: "On Leave",
    joinDate: "2022-11-05"
  },
  {
    id: "EMP005",
    name: "Khaled Youssef",
    position: "Sales Representative",
    department: "Sales", 
    salary: "$55,000",
    status: "Active",
    joinDate: "2024-01-08"
  }
];

const attendance = [
  {
    date: "16/07/2024",
    present: 115,
    absent: 8,
    late: 5,
    total: 128
  },
  {
    date: "15/07/2024",
    present: 120,
    absent: 6,
    late: 2,
    total: 128
  },
  {
    date: "14/07/2024",
    present: 118,
    absent: 7,
    late: 3,
    total: 128
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="erp-status-paid">Active</Badge>;
    case "On Leave":
      return <Badge className="erp-status-pending">On Leave</Badge>;
    case "Inactive":
      return <Badge className="erp-status-overdue">Inactive</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function HR() {
  return (
    <ERPLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">HR & Payroll</h1>
            <p className="text-muted-foreground">Manage employees, attendance, payroll, and human resources</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Attendance
            </Button>
            <Button className="erp-button-primary gap-2">
              <Plus className="h-4 w-4" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hrStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="erp-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className={stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}>
                      {stat.change}
                    </span>
                    {" "}from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* HR Tabs */}
        <Tabs defaultValue="employees" className="space-y-4">
          <TabsList>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="payroll">Payroll</TabsTrigger>
          </TabsList>

          <TabsContent value="employees">
            <Card className="erp-card">
              <CardHeader>
                <CardTitle>Employee Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="erp-table-header">
                      <TableHead>Employee ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Salary</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>{getStatusBadge(employee.status)}</TableCell>
                        <TableCell>{employee.joinDate}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance">
            <Card className="erp-card">
              <CardHeader>
                <CardTitle>Daily Attendance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="erp-table-header">
                      <TableHead>Date</TableHead>
                      <TableHead>Present</TableHead>
                      <TableHead>Absent</TableHead>
                      <TableHead>Late</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Attendance Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendance.map((day) => (
                      <TableRow key={day.date}>
                        <TableCell className="font-medium">{day.date}</TableCell>
                        <TableCell className="text-success">{day.present}</TableCell>
                        <TableCell className="text-destructive">{day.absent}</TableCell>
                        <TableCell className="text-warning">{day.late}</TableCell>
                        <TableCell>{day.total}</TableCell>
                        <TableCell>{Math.round((day.present / day.total) * 100)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payroll">
            <Card className="erp-card">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Payroll Management</h3>
                  <p className="text-muted-foreground mb-4">Process monthly payroll and manage employee salaries</p>
                  <Button className="erp-button-primary">Process Payroll</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ERPLayout>
  );
}