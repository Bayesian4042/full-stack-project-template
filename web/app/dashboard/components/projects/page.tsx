import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge, BriefcaseIcon, CalendarIcon, UserIcon } from 'lucide-react'
import React from 'react'

export const ProjectPage = () => {
  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Courses</h1>
                <Button>New Course</Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course A</CardTitle>
                    <CardDescription>This is a description of Course A.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-5 w-5" />
                        <span>Web App</span>
                      </div>
                      <Badge >Active</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>Due: 2023-06-30</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-5 w-5" />
                        <span>3 members</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Course B</CardTitle>
                    <CardDescription>This is a description of Course B.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-5 w-5" />
                        <span>Mobile App</span>
                      </div>
                      <Badge >In Progress</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>Due: 2023-09-15</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-5 w-5" />
                        <span>5 members</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Course C</CardTitle>
                    <CardDescription>This is a description of Project C.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-5 w-5" />
                        <span>API</span>
                      </div>
                      <Badge >Overdue</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>Due: 2023-05-01</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-5 w-5" />
                        <span>2 members</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
  )
}
