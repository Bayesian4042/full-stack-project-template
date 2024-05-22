'use client';
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import createUser from "./create-user";

export default function Component() {
  const [formData, setFormData] = useState({ email: "", password: "" , role: "user"});
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    setMessage("");
    try {
        const dataForm: any = {email: formData.email, password: formData.password};

        const response: any = await createUser(dataForm);
  
        const access_token: any = response['access_token'];
        const user: any = response['user'];
        setMessage("User created successfully!");
      } catch (error) {
        setMessage("Failed to create user");
        console.error(error);
      }
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
              <p className="text-red-500">{message}</p>
            </div>
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
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                name="role"
                className="block w-full py-2 px-3 border border-gray-300 bg-white text-sm rounded-md shadow-sm focus:outline-none sm:text-sm"
                value={formData.role}
                onChange={(e:any) => handleChange(e)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
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