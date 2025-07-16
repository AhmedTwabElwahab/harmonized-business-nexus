import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Receipt,
  FolderKanban,
  Calculator,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    description: "Overview & Analytics"
  },
  {
    title: "Inventory",
    icon: Package,
    href: "/inventory",
    description: "Stock & Warehouse Management"
  },
  {
    title: "HR & Payroll",
    icon: Users,
    href: "/hr",
    description: "Employee Management"
  },
  {
    title: "Sales & Invoicing",
    icon: Receipt,
    href: "/sales",
    description: "Orders & Billing"
  },
  {
    title: "Projects",
    icon: FolderKanban,
    href: "/projects",
    description: "Project Management"
  },
  {
    title: "Accounting",
    icon: Calculator,
    href: "/accounting",
    description: "Financial Management"
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/reports",
    description: "Analytics & Reports"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    description: "System Configuration"
  }
];

interface ERPSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function ERPSidebar({ collapsed, onToggle }: ERPSidebarProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href || 
           (href !== "/" && location.pathname.startsWith(href));
  };

  return (
    <div className={cn(
      "bg-card border-r border-border h-screen flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className={cn("flex items-center gap-2", collapsed && "justify-center")}>
          <Building2 className="h-8 w-8 text-primary" />
          {!collapsed && (
            <div>
              <h2 className="font-bold text-lg">ERP System</h2>
              <p className="text-xs text-muted-foreground">Business Management</p>
            </div>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onToggle}
          className="h-8 w-8 p-0"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 group",
                "hover:bg-muted/50",
                active && "erp-sidebar-active"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 flex-shrink-0",
                active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm font-medium truncate",
                    active ? "text-primary" : "text-foreground"
                  )}>
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.description}
                  </p>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        {!collapsed ? (
          <div className="text-center">
            <p className="text-xs text-muted-foreground">© 2024 ERP System</p>
            <p className="text-xs text-muted-foreground">v1.0.0</p>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-success rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
}