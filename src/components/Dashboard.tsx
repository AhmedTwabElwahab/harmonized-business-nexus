import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Package, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreHorizontal,
  FileText,
  Clock,
  CheckCircle
} from "lucide-react";
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
import { Progress } from "@/components/ui/progress";

const metrics = [
  {
    title: "Total Revenue",
    value: "$54,231",
    change: "+12.3%",
    trend: "up",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Active Customers",
    value: "1,248",
    change: "+8.1%",
    trend: "up", 
    icon: Users,
    color: "text-info"
  },
  {
    title: "Pending Orders",
    value: "23",
    change: "-4.2%",
    trend: "down",
    icon: Package,
    color: "text-warning"
  },
  {
    title: "Monthly Growth",
    value: "18.7%",
    change: "+2.4%",
    trend: "up",
    icon: TrendingUp,
    color: "text-primary"
  }
];

const recentInvoices = [
  {
    id: "#00005",
    customer: "Quon Saunders",
    amount: "$345.00",
    status: "paid",
    date: "14/07/2025"
  },
  {
    id: "#00004", 
    customer: "POS Client",
    amount: "$172.50",
    status: "paid",
    date: "11/07/2025"
  },
  {
    id: "#00003",
    customer: "POS Client", 
    amount: "$278.25",
    status: "paid",
    date: "11/07/2025"
  },
  {
    id: "#00002",
    customer: "Ahmed Hassan",
    amount: "$485.75",
    status: "pending",
    date: "10/07/2025"
  },
  {
    id: "#00001",
    customer: "Sarah Mohamed",
    amount: "$198.50",
    status: "overdue",
    date: "08/07/2025"
  }
];

const projects = [
  {
    name: "Website Redesign",
    progress: 75,
    status: "In Progress",
    dueDate: "Aug 15, 2024"
  },
  {
    name: "Mobile App Development",
    progress: 40,
    status: "In Progress", 
    dueDate: "Sep 30, 2024"
  },
  {
    name: "Database Migration",
    progress: 90,
    status: "Review",
    dueDate: "Jul 25, 2024"
  }
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;
          
          return (
            <Card key={metric.title} className="erp-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendIcon className={`mr-1 h-3 w-3 ${
                    metric.trend === "up" ? "text-success" : "text-destructive"
                  }`} />
                  <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                    {metric.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <Card className="erp-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Invoices</CardTitle>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="erp-table-header">
                  <TableHead>Invoice</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.customer}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge className={`erp-status-${invoice.status}`}>
                        {invoice.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card className="erp-card">
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">Due: {project.dueDate}</p>
                  </div>
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">{project.progress}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              <span>New Invoice</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>Add Customer</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Package className="h-6 w-6" />
              <span>Add Product</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Clock className="h-6 w-6" />
              <span>Time Tracking</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}