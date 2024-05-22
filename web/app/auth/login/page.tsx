'use client';
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="Vercel"
          className="mx-auto h-12 w-auto"
          height="38"
          src="https://opengig.work/favicon.ico"
          style={{
            aspectRatio: "48/48",
            objectFit: "cover",
          }}
          width="38"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                autoComplete="email"
                className="mt-1"
                id="email"
                name="email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-500"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                autoComplete="current-password"
                className="mt-1"
                id="password"
                name="password"
                required
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button className="w-full" type="submit">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-400 dark:text-gray-500">
        © 2024 Opengig Inc. All rights reserved.
      </footer>
    </div>
  );
}
