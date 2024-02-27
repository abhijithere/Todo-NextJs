"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '@/Authentication/CheckAuth';
import Sidebar from './sidebar/sidebar';
import Loader from './Loader';



function Page() {
  const router = useRouter();
  const [loading,setloading]=useState(true);

  useEffect(() => {
    if(!checkAuthentication()){

      return router.push('/login');
    }
  }, []);

 useEffect(() => {
      const datafetch = async () => {

         try {
            const res = await fetch("/api/auth/me", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
            });

            const data = await res.json();
            setloading(false)
         } catch (error) {
            console.log(error)
         }
      }
      datafetch();
    }, [loading]);


 


  return (

    <div className=''>
      {
        loading?<Loader/>:<Sidebar/>
      }

      
      
    </div>
  )
}

export default Page
