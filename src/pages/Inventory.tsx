import { useState } from "react";
import { Plus, Search, Filter, Download, Package, AlertTriangle, TrendingUp } from "lucide-react";
import { ERPLayout } from "@/components/ERPLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inventoryStats = [
  {
    title: "Total Products",
    value: "2,847",
    change: "+12%",
    icon: Package,
    color: "text-info"
  },
  {
    title: "Low Stock Items",
    value: "23",
    change: "-8%",
    icon: AlertTriangle,
    color: "text-warning"
  },
  {
    title: "Total Value",
    value: "$187,420",
    change: "+15.2%",
    icon: TrendingUp,
    color: "text-success"
  }
];

const products = [
  {
    id: "PRD001",
    name: "Wireless Headphones",
    category: "Electronics",
    stock: 145,
    minStock: 20,
    price: "$89.99",
    status: "In Stock"
  },
  {
    id: "PRD002", 
    name: "Office Chair",
    category: "Furniture",
    stock: 8,
    minStock: 10,
    price: "$299.99",
    status: "Low Stock"
  },
  {
    id: "PRD003",
    name: "Coffee Maker",
    category: "Appliances", 
    stock: 0,
    minStock: 5,
    price: "$129.99",
    status: "Out of Stock"
  },
  {
    id: "PRD004",
    name: "Notebook Set",
    category: "Stationery",
    stock: 250,
    minStock: 50,
    price: "$12.99",
    status: "In Stock"
  },
  {
    id: "PRD005",
    name: "Desk Lamp",
    category: "Electronics",
    stock: 15,
    minStock: 20,
    price: "$45.99",
    status: "Low Stock"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "In Stock":
      return <Badge className="erp-status-paid">In Stock</Badge>;
    case "Low Stock":
      return <Badge className="erp-status-pending">Low Stock</Badge>;
    case "Out of Stock":
      return <Badge className="erp-status-overdue">Out of Stock</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <ERPLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Inventory Management</h1>
            <p className="text-muted-foreground">Manage your products, stock levels, and warehouse operations</p>
          </div>
          <Button className="erp-button-primary gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inventoryStats.map((stat) => {
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

        {/* Products Table */}
        <Card className="erp-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <CardTitle>Products</CardTitle>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-32">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Furniture">Furniture</SelectItem>
                    <SelectItem value="Appliances">Appliances</SelectItem>
                    <SelectItem value="Stationery">Stationery</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="erp-table-header">
                  <TableHead>Product ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Min Stock</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.minStock}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}