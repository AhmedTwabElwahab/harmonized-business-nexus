import { useState } from "react";
import { Plus, FolderKanban, Calendar, Clock, Users } from "lucide-react";
import { ERPLayout } from "@/components/ERPLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const projectStats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2",
    icon: FolderKanban,
    color: "text-primary"
  },
  {
    title: "Completed This Month",
    value: "8",
    change: "+3",
    icon: Clock,
    color: "text-success"
  },
  {
    title: "Team Members",
    value: "24",
    change: "+1",
    icon: Users,
    color: "text-info"
  },
  {
    title: "On Schedule",
    value: "75%",
    change: "+5%",
    icon: Calendar,
    color: "text-warning"
  }
];

const projects = [
  {
    id: "PRJ001",
    name: "Website Redesign",
    client: "Tech Solutions Ltd",
    progress: 75,
    status: "In Progress",
    dueDate: "Aug 15, 2024",
    budget: "$25,000",
    teamSize: 5
  },
  {
    id: "PRJ002",
    name: "Mobile App Development",
    client: "StartUp Inc",
    progress: 40,
    status: "In Progress",
    dueDate: "Sep 30, 2024",
    budget: "$45,000",
    teamSize: 8
  },
  {
    id: "PRJ003",
    name: "Database Migration",
    client: "Enterprise Corp",
    progress: 90,
    status: "Review",
    dueDate: "Jul 25, 2024",
    budget: "$15,000",
    teamSize: 3
  },
  {
    id: "PRJ004",
    name: "E-commerce Platform",
    client: "Retail Business",
    progress: 25,
    status: "Planning",
    dueDate: "Nov 20, 2024",
    budget: "$65,000",
    teamSize: 12
  },
  {
    id: "PRJ005",
    name: "Security Audit",
    client: "Financial Services",
    progress: 100,
    status: "Completed",
    dueDate: "Jul 10, 2024",
    budget: "$20,000",
    teamSize: 4
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return <Badge className="erp-status-paid">Completed</Badge>;
    case "In Progress":
      return <Badge className="erp-status-pending">In Progress</Badge>;
    case "Review":
      return <Badge className="erp-status-pending">Review</Badge>;
    case "Planning":
      return <Badge variant="secondary">Planning</Badge>;
    case "On Hold":
      return <Badge className="erp-status-overdue">On Hold</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Projects() {
  return (
    <ERPLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Project Management</h1>
            <p className="text-muted-foreground">Track and manage your projects, teams, and deliverables</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Timeline
            </Button>
            <Button className="erp-button-primary gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectStats.map((stat) => {
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
                    <span className="text-success">
                      {stat.change}
                    </span>
                    {" "}this month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="erp-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Due Date</p>
                    <p className="font-medium">{project.dueDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Budget</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {project.teamSize} members
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Actions */}
        <Card className="erp-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FolderKanban className="h-6 w-6" />
                <span>New Project</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span>Schedule Meeting</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Clock className="h-6 w-6" />
                <span>Time Tracking</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>Team Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ERPLayout>
  );
}