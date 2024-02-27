"use client"
import React, { useEffect, useState } from 'react'
import AllTasks from '../Tabs/AllTasks';
import CreateTaks from '../Tabs/CreateTaks';
import CompleteTasks from '../Tabs/CompleteTasks';
import IncompleteTasks from '../Tabs/IncompleteTasks';
import { removecookieweb } from '@/Authentication/RemoveCookie';
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '@/Authentication/CheckAuth';
import Spinner from '../Spinner';
import Loader from '../Loader';
import { toast } from "react-toastify";




function Sidebar() {
   const router = useRouter();


    const [selectedTab, setSelectedTab] = useState('all');
    const [user,setuser]=useState([]);
    const [loading,setloading]=useState(true)
    const [open , setopen]=useState(false)

    const logoutHandler = async () => {
      try {
        const res = await fetch("/api/auth/logout");
  
        const data = await res.json();
  
        if (!data.success) toast.error(data.message, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         });


  
       
        removecookieweb();
  
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


        router.refresh()



      } catch (error) {
        return toast.error(error, {
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
    };
  useEffect(() => {
    if(!checkAuthentication()){

      return router.push('/login');
    }
  }, [logoutHandler]);

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

            setuser(data.user);

            setloading(false)
            

           
         } catch (error) {
            console.log(error)
         }
      }
      datafetch();
    }, [loading]);

    // Function to handle tab change
    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };
  
    // Render the component based on the selected tab
    const renderComponent = () => {
      switch (selectedTab) {
        case 'all':
          return <AllTasks />;
        case 'create':
          return <CreateTaks />;
        case 'complete':
          return <CompleteTasks />;
        case 'incomplete':
          return <IncompleteTasks />;
        default:
          return null;
      }
    };
  

  return (
    <>
      
{
   loading?<Loader/>:(
      <>
      <div className='flex justify-end mr-5 '>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex  items-center  p-2 mt-2 ms-3 text-sm  rounded-lg sm:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" onClick={()=>open?setopen(false):setopen(true)}>
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
      </div>
      

<aside id="default-sidebar" class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${open?"translate-x-0":"-translate-x-full"} -translate-x-full sm:-translate-x-0 `} aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto  bg-gray-800">

   <div className='flex flex-col justify-center items-center mb-16'>
        <svg class="w-20 h-20  transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z" clip-rule="evenodd"/>
  </svg>
  <h1 className='text-green-400 font-semibold mt-2 text-xl'>{user && user.name}</h1>
  <p className='text-sm mt-2 text-red-300'>{user && user.email}</p>
        </div>
      <ul class="space-y-3 font-medium ">
       
         <li>
            <div  class="flex items-center p-2 rounded-lg text-white  hover:bg-[#4ade8021]  hover:border-r-2 hover:border-r-green-400 group">
               <svg class="w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </div>
         </li>
         <li>
            <div class="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group" onClick={() => handleTabChange('all')}>
               <svg class="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">All Task</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">all</span>
            </div>
         </li>
         <li>
            <div class="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group" onClick={() => handleTabChange('create')}>
               <svg class="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Create Task</span>
            </div>
         </li>
         <li>
            <div class="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group" onClick={() => handleTabChange('complete')}>
            <svg class="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9"/>
  </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Completed</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium  rounded-full bg"></span>
            </div>
         </li>
         
         <li>
            <div class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group" onClick={() => handleTabChange('incomplete')}>
            <svg class="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-3 5h3m-6 0h0m3 4h3m-6 0h0m1-13v4h4V3h-4Z"/>
  </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Incomplete task</span>
            </div>
         </li>
         <li>
            <div  class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap" onClick={logoutHandler}>Logout</span>
            </div>
         </li>

         
      </ul>
   </div>
</aside>
{loading?  <Spinner/>:renderComponent()}
      </>
   )
}

    </>
  )
}

export default Sidebar
