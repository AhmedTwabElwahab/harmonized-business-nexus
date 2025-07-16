import { BarChart3, FileText, TrendingUp, Calendar, Download, Filter } from "lucide-react";
import { ERPLayout } from "@/components/ERPLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reportCategories = [
  {
    title: "Financial Reports",
    description: "Revenue, expenses, profit & loss statements",
    icon: TrendingUp,
    reports: [
      "Profit & Loss Statement",
      "Balance Sheet", 
      "Cash Flow Statement",
      "Revenue Analysis"
    ]
  },
  {
    title: "Sales Reports",
    description: "Sales performance, customer analysis, trends",
    icon: BarChart3,
    reports: [
      "Sales Performance",
      "Customer Analysis",
      "Product Sales Report",
      "Regional Sales"
    ]
  },
  {
    title: "HR Reports",
    description: "Employee analytics, payroll, attendance",
    icon: FileText,
    reports: [
      "Employee Performance",
      "Payroll Summary",
      "Attendance Report",
      "Department Analysis"
    ]
  },
  {
    title: "Inventory Reports",
    description: "Stock levels, movement, valuation",
    icon: Calendar,
    reports: [
      "Stock Level Report",
      "Inventory Valuation",
      "Product Movement",
      "Low Stock Alert"
    ]
  }
];

export default function Reports() {
  return (
    <ERPLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate insights and reports across all business modules</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="thisMonth">
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thisWeek">This Week</SelectItem>
                <SelectItem value="thisMonth">This Month</SelectItem>
                <SelectItem value="lastMonth">Last Month</SelectItem>
                <SelectItem value="thisQuarter">This Quarter</SelectItem>
                <SelectItem value="thisYear">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="erp-button-primary gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Report Categories */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.title} className="erp-card">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle>{category.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.reports.map((report) => (
                          <Button
                            key={report}
                            variant="ghost"
                            className="w-full justify-start h-auto p-2"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            {report}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="financial">
            <Card className="erp-card">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Financial Reports</h3>
                  <p className="text-muted-foreground mb-4">Access detailed financial statements and analysis</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <Button variant="outline" className="h-16">
                      Profit & Loss
                    </Button>
                    <Button variant="outline" className="h-16">
                      Balance Sheet
                    </Button>
                    <Button variant="outline" className="h-16">
                      Cash Flow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales">
            <Card className="erp-card">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sales Analytics</h3>
                  <p className="text-muted-foreground mb-4">Track sales performance and customer insights</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <Button variant="outline" className="h-16">
                      Sales Dashboard
                    </Button>
                    <Button variant="outline" className="h-16">
                      Customer Report
                    </Button>
                    <Button variant="outline" className="h-16">
                      Product Analysis
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operations">
            <Card className="erp-card">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Operational Reports</h3>
                  <p className="text-muted-foreground mb-4">Monitor inventory, HR, and project metrics</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <Button variant="outline" className="h-16">
                      Inventory Report
                    </Button>
                    <Button variant="outline" className="h-16">
                      HR Analytics
                    </Button>
                    <Button variant="outline" className="h-16">
                      Project Status
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ERPLayout>
  );
}