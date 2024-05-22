'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

const Analytics = () => {
  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Users</CardTitle>
                  <CardDescription>The total number of registered users on the platform.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className="text-4xl font-bold">2,345</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Active Users</CardTitle>
                  <CardDescription>The number of users who have been active in the last 30 days.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className="text-4xl font-bold">1,234</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>New Signups</CardTitle>
                  <CardDescription>The number of new users who have signed up in the last 30 days.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className="text-4xl font-bold">456</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                  <CardDescription>The percentage of visitors who have signed up as users.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <div className="text-4xl font-bold">12%</div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>A summary of the latest user activity on the platform.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                              <AvatarFallback>JP</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">John Doe</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">john@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Signed up</TableCell>
                        <TableCell>2 hours ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Jane Doe</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">jane@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Created a new project</TableCell>
                        <TableCell>4 hours ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">John Smith</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">john@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Invited a new team member</TableCell>
                        <TableCell>6 hours ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                              <AvatarFallback>JJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Jane Johnson</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">jane@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Deployed a new feature</TableCell>
                        <TableCell>8 hours ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
  );
}

export default Analytics;