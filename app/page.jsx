"use client"
import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '@/Authentication/CheckAuth';
import Sidebar from './sidebar/sidebar';



function page() {
  const router = useRouter();
  useEffect(() => {
    if(!checkAuthentication()){

      return router.push('/login');
    }
  }, [checkAuthentication()]);

 

 


  return (
    <div className=''>
      <Sidebar/>
      
    </div>
  )
}

export default page
