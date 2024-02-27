"use client";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import '../../styles/globals.css';
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { setcookieweb } from "@/Authentication/Setcookie";
import { checkAuthentication } from "@/Authentication/CheckAuth";






// Define your form schema using Zod


function Page() {

  
  
  const router = useRouter();



  useEffect(() => {
    if(checkAuthentication()){

      return router.push('/');
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    try {
      

       // Make POST request
       const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) {  //In emitter
        toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      }
      if(data.success){
        router.push('/');

        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
  
          setcookieweb("akahghabjakaka");

          setFormData(
            {
              email: "",
              password: "",
            }
          )
      }

    } catch (error) {
      toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });;
    }
  };

 


  return (
    <>
  <div className="flex justify-center items-center h-screen bg-slate-900">
        <Card className="mx-auto max-w-lg border-[hsl(216,31%,20%)] border-r-2 rounded-2xl p-4 min-h-[400px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-green-300">Login</CardTitle>
            <CardDescription>Enter your email and password credintials to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="m@example.com" required type="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" required type="password" value={formData.password} onChange={handleChange} />
                {errors.password && <Label className="text-red-500 ">{errors.password.message}hiii</Label>}
              </div>
              <Button className="w-full rounded-md text-white" type="submit">
                Login
              </Button>
              <Label className='flex text-sm gap-2'>Dont Have any account ? <Link className="text-blue-400 underline" href={'/register'}>sign up</Link></Label>
              
            </form>
          </CardContent>
        </Card>
      </div>
  </>
  );
}

export default Page;
