import { useState } from "react";
import { Plus, FileText, Eye, Download, DollarSign, TrendingUp, Users, Clock } from "lucide-react";
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

const salesStats = [
  {
    title: "Total Sales",
    value: "$94,231",
    change: "+18.2%",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "New Customers",
    value: "156",
    change: "+12.5%",
    icon: Users,
    color: "text-info"
  },
  {
    title: "Pending Orders",
    value: "23",
    change: "-4.1%",
    icon: Clock,
    color: "text-warning"
  },
  {
    title: "Conversion Rate",
    value: "24.8%",
    change: "+3.2%",
    icon: TrendingUp,
    color: "text-primary"
  }
];

const invoices = [
  {
    id: "#INV-00005",
    customer: "Quon Saunders",
    amount: "$345.00",
    status: "paid",
    date: "14/07/2025",
    dueDate: "28/07/2025"
  },
  {
    id: "#INV-00004",
    customer: "POS Client",
    amount: "$172.50", 
    status: "paid",
    date: "11/07/2025",
    dueDate: "25/07/2025"
  },
  {
    id: "#INV-00003",
    customer: "Ahmed Hassan",
    amount: "$485.75",
    status: "pending",
    date: "10/07/2025",
    dueDate: "24/07/2025"
  },
  {
    id: "#INV-00002",
    customer: "Sarah Mohamed",
    amount: "$198.50",
    status: "overdue",
    date: "08/07/2025",
    dueDate: "22/07/2025"
  },
  {
    id: "#INV-00001",
    customer: "Tech Solutions Ltd",
    amount: "$1,250.00",
    status: "draft",
    date: "07/07/2025", 
    dueDate: "21/07/2025"
  }
];

const quotes = [
  {
    id: "#QTE-00012",
    customer: "Global Corp",
    amount: "$2,450.00",
    status: "pending",
    date: "15/07/2025",
    validUntil: "29/07/2025"
  },
  {
    id: "#QTE-00011",
    customer: "StartUp Inc",
    amount: "$890.00", 
    status: "accepted",
    date: "12/07/2025",
    validUntil: "26/07/2025"
  },
  {
    id: "#QTE-00010",
    customer: "Enterprise Ltd",
    amount: "$3,200.00",
    status: "rejected",
    date: "09/07/2025",
    validUntil: "23/07/2025"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "paid":
    case "accepted":
      return <Badge className="erp-status-paid">{status}</Badge>;
    case "pending":
    case "draft":
      return <Badge className="erp-status-pending">{status}</Badge>;
    case "overdue":
    case "rejected":
      return <Badge className="erp-status-overdue">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Sales() {
  return (
    <ERPLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Sales & Invoicing</h1>
            <p className="text-muted-foreground">Manage your sales orders, invoices, and customer relationships</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              New Quote
            </Button>
            <Button className="erp-button-primary gap-2">
              <Plus className="h-4 w-4" />
              New Invoice
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salesStats.map((stat) => {
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

        {/* Sales Tabs */}
        <Tabs defaultValue="invoices" className="space-y-4">
          <TabsList>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices">
            <Card className="erp-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Invoices</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="erp-table-header">
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell className="font-medium">{invoice.amount}</TableCell>
                        <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes">
            <Card className="erp-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Sales Quotes</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="erp-table-header">
                      <TableHead>Quote ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Valid Until</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell className="font-medium">{quote.id}</TableCell>
                        <TableCell>{quote.customer}</TableCell>
                        <TableCell className="font-medium">{quote.amount}</TableCell>
                        <TableCell>{getStatusBadge(quote.status)}</TableCell>
                        <TableCell>{quote.date}</TableCell>
                        <TableCell>{quote.validUntil}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="erp-card">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Orders Yet</h3>
                  <p className="text-muted-foreground mb-4">Start creating sales orders to track your business transactions</p>
                  <Button className="erp-button-primary">Create First Order</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ERPLayout>
  );
}