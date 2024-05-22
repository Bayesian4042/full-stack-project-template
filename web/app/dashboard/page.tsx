/**
 * v0 by Vercel.
 * @see https://v0.dev/t/61tIFu6dO2v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <nav className="bg-gray-900 text-white w-64 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <BookIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">Learning Dashboard</h1>
        </div>
        <div className="space-y-2">
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-4 py-2 rounded" href="#">
            <HomeIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-4 py-2 rounded" href="#">
            <BookIcon className="w-5 h-5" />
            <span>Web Development</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-4 py-2 rounded" href="#">
            <BookIcon className="w-5 h-5" />
            <span>Data Science</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-4 py-2 rounded" href="#">
            <BookIcon className="w-5 h-5" />
            <span>Machine Learning</span>
          </Link>
        </div>
      </nav>
      <main className="flex-1 bg-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Current Course Progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">72%</div>
                <PercentIcon className="w-8 h-8 text-gray-500" />
              </div>
              <Progress className="mt-4" value={72} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Lessons</CardTitle>
              <CardDescription>Next 3 lessons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Introduction to React</div>
                    <div className="text-sm text-gray-500">Lesson 5 - 1 hour 30 mins</div>
                  </div>
                  <Button size="sm" variant="outline">
                    Start
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">State Management in React</div>
                    <div className="text-sm text-gray-500">Lesson 6 - 2 hours</div>
                  </div>
                  <Button size="sm" variant="outline">
                    Start
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Routing in React</div>
                    <div className="text-sm text-gray-500">Lesson 7 - 1 hour 45 mins</div>
                  </div>
                  <Button size="sm" variant="outline">
                    Start
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Completed Modules</CardTitle>
              <CardDescription>4 modules completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Introduction to HTML</div>
                    <div className="text-sm text-gray-500">Module 1 - 2 hours</div>
                  </div>
                  <CheckIcon className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">CSS Fundamentals</div>
                    <div className="text-sm text-gray-500">Module 2 - 3 hours</div>
                  </div>
                  <CheckIcon className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">JavaScript Basics</div>
                    <div className="text-sm text-gray-500">Module 3 - 4 hours</div>
                  </div>
                  <CheckIcon className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Introduction to React</div>
                    <div className="text-sm text-gray-500">Module 4 - 6 hours</div>
                  </div>
                  <CheckIcon className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Learning Goals</CardTitle>
              <CardDescription>Track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Become proficient in React</div>
                    <div className="text-sm text-gray-500">Deadline: June 30, 2023</div>
                  </div>
                  <Progress className="w-32" value={80} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Learn advanced JavaScript concepts</div>
                    <div className="text-sm text-gray-500">Deadline: August 15, 2023</div>
                  </div>
                  <Progress className="w-32" value={60} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Understand web development best practices</div>
                    <div className="text-sm text-gray-500">Deadline: September 30, 2023</div>
                  </div>
                  <Progress className="w-32" value={90} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
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


function PercentIcon(props: any) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}