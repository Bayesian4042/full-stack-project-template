'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Analytics from "../../components/dashboard/analytics/page";
import withAuth from "../WithAuth";
import ProjectPage from "@/components/dashboard/projects/page";
import SettingsPage from "@/components/dashboard/settings/page";

const Dashboard = () => {
  const [tab, setTab] = useState("settings");

  const logoutUser = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="text-xl font-bold" href="#">
            Dashboard
          </Link>
          {/* <nav className="hidden md:flex gap-4">
            <Link className="hover:underline" href="#">
              Overview
            </Link>
            <Link className="hover:underline" href="#">
              Analytics
            </Link>
            <Link className="hover:underline" href="#">
              Projects
            </Link>
            <Link className="font-medium" href="#">
              Settings
            </Link>
          </nav> */}
        </div>
        <div className="flex items-center gap-4">
          <Button className="hidden md:block">
            Upgrade
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {/* <DropdownMenuItem>
                <Link href="#"> Settings </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
              <Button className="w-full" onClick={() => logoutUser()}>Logout</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="bg-gray-900 text-white p-6 w-64 hidden md:block">
          <nav className="space-y-2">
            {/* <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-800">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </div> */}
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-800">
              <LineChartIcon className="h-5 w-5" />
              <span onClick={() => setTab("analytics")}>Analytics</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-800" >
              <BriefcaseIcon className="h-5 w-5" />
              <span onClick={() => setTab("projects")}> Courses </span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-800">
              <SettingsIcon className="h-5 w-5" />
              <span onClick={() => setTab("settings")}> Settings </span>
            </div>
          </nav>
        </div>
        {tab == "projects" ? <ProjectPage /> : tab == "settings" ? <SettingsPage /> : tab == "analytics" ? <Analytics /> : null}
      </div>
      <footer className="bg-gray-900 text-white py-4 px-6 text-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p>© 2023 Dashboard. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="hover:underline" href="#">
              Terms
            </Link>
            <Link className="hover:underline" href="#">
              Privacy
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props: any ) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default Dashboard;