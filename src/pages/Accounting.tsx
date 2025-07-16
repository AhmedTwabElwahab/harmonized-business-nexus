import { useState } from "react";
import { Plus, Calculator, TrendingUp, TrendingDown, PieChart, BarChart3 } from "lucide-react";
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

const accountingStats = [
  {
    title: "Total Revenue",
    value: "$542,180",
    change: "+12.5%",
    icon: TrendingUp,
    color: "text-success"
  },
  {
    title: "Total Expenses",
    value: "$298,450",
    change: "+5.2%",
    icon: TrendingDown,
    color: "text-destructive"
  },
  {
    title: "Net Profit",
    value: "$243,730",
    change: "+18.7%",
    icon: Calculator,
    color: "text-primary"
  },
  {
    title: "Accounts Receivable",
    value: "$85,920",
    change: "-3.1%",
    icon: PieChart,
    color: "text-warning"
  }
];

const transactions = [
  {
    id: "TXN001",
    date: "16/07/2024",
    description: "Customer Payment - Invoice #00005",
    type: "Credit",
    amount: "$345.00",
    account: "Accounts Receivable",
    status: "Completed"
  },
  {
    id: "TXN002",
    date: "15/07/2024", 
    description: "Office Supplies Purchase",
    type: "Debit",
    amount: "$125.50",
    account: "Office Expenses",
    status: "Completed"
  },
  {
    id: "TXN003",
    date: "14/07/2024",
    description: "Monthly Rent Payment",
    type: "Debit",
    amount: "$2,500.00",
    account: "Rent Expense",
    status: "Completed"
  },
  {
    id: "TXN004",
    date: "13/07/2024",
    description: "Sales Revenue - POS",
    type: "Credit",
    amount: "$1,250.75",
    account: "Sales Revenue",
    status: "Completed"
  },
  {
    id: "TXN005",
    date: "12/07/2024",
    description: "Utility Bill Payment",
    type: "Debit",
    amount: "$320.80",
    account: "Utilities",
    status: "Pending"
  }
];

const accounts = [
  {
    code: "1000",
    name: "Cash",
    type: "Asset",
    balance: "$45,280.50",
    status: "Active"
  },
  {
    code: "1200",
    name: "Accounts Receivable",
    type: "Asset", 
    balance: "$85,920.00",
    status: "Active"
  },
  {
    code: "2000",
    name: "Accounts Payable",
    type: "Liability",
    balance: "$32,450.75",
    status: "Active"
  },
  {
    code: "3000",
    name: "Owner's Equity",
    type: "Equity",
    balance: "$125,000.00",
    status: "Active"
  },
  {
    code: "4000",
    name: "Sales Revenue",
    type: "Revenue",
    balance: "$542,180.00",
    status: "Active"
  },
  {
    code: "5000",
    name: "Operating Expenses",
    type: "Expense",
    balance: "$298,450.00",
    status: "Active"
  }
];

const getTransactionBadge = (type: string) => {
  return type === "Credit" ? 
    <Badge className="erp-status-paid">Credit</Badge> : 
    <Badge className="erp-status-pending">Debit</Badge>;
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
    case "Active":
      return <Badge className="erp-status-paid">{status}</Badge>;
    case "Pending":
      return <Badge className="erp-status-pending">{status}</Badge>;
    case "Failed":
    case "Inactive":
      return <Badge className="erp-status-overdue">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Accounting() {
  return (
    <ERPLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Accounting & Finance</h1>
            <p className="text-muted-foreground">Manage your financial records, transactions, and accounting operations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Reports
            </Button>
            <Button className="erp-button-primary gap-2">
              <Plus className="h-4 w-4" />
              New Transaction
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accountingStats.map((stat) => {
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

        {/* Accounting Tabs */}
        <Tabs defaultValue="transactions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="accounts">Chart of Accounts</TabsTrigger>
            <TabsTrigger value="reconciliation">Bank Reconciliation</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions">
            <Card className="erp-card">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="erp-table-header">
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Account</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{getTransactionBadge(transaction.type)}</TableCell>
                        <TableCell className="font-medium">{transaction.amount}</TableCell>
                        <TableCell>{transaction.account}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accounts">
            <Card className="erp-card">
              <CardHeader>
                <CardTitle>Chart of Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="erp-table-header">
                      <TableHead>Account Code</TableHead>
                      <TableHead>Account Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accounts.map((account) => (
                      <TableRow key={account.code}>
                        <TableCell className="font-medium">{account.code}</TableCell>
                        <TableCell>{account.name}</TableCell>
                        <TableCell>{account.type}</TableCell>
                        <TableCell className="font-medium">{account.balance}</TableCell>
                        <TableCell>{getStatusBadge(account.status)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reconciliation">
            <Card className="erp-card">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Bank Reconciliation</h3>
                  <p className="text-muted-foreground mb-4">Reconcile your bank statements with your accounting records</p>
                  <Button className="erp-button-primary">Start Reconciliation</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ERPLayout>
  );
}