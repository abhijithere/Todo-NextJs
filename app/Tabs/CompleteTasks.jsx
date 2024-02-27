"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from "react-toastify";


function CompleteTask() {
   const [task, settask] = useState(["a", "b"]);
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
 
   const updateHandler = async (id) => {
      try {
         const res = await fetch(`/api/task/${id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
             },
               body:JSON.stringify({
                  title,
                  description,
                }),
         }
         )
         const data = await res.json();
         if (!data.success) return (toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
    );

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
   const changeIscompleted = async (id) => {
      try {
        const res = await fetch(`/api/iscompleted/${id}`, {
          method: "PUT",
        });
        const data = await res.json();
        if (!data.success) return (toast.error(data.message, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         })
 );
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


      } catch (error) {
         toast.error(error, {
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
   
   

   const deleteHandler = async (id) => {
      try {
         const res = await fetch(`/api/task/${id}`, {
            method: "DELETE",
         });
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
    ;

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
  
  
      } catch (error) {
         return toast.error(data.message, {
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

   const openpopup = (title,description)=>{

      setTitle(title)
      setDescription(description)

   }

   useEffect(() => {
      const datafetch = async () => {
         try {
            const res = await fetch("/api/mytask", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
            });

            const data = await res.json();


            settask(data.tasks)

         } catch (error) {
            console.log(error)
         }
      }

      datafetch()
   }, [task]);
   const completedTasks = task&&task.filter(task => task.isCompleted);
   return (
      <>
         <div class="p-4 sm:ml-64">

            <div class="p-4 border-2  border-dashed rounded-lg border-gray-700">
               <div class="grid grid-cols-3 gap-6 mb-4 max-[1000px]:grid-cols-1">
                  {
                     task &&  completedTasks.map((item ) => {
                        const createdAtDate = new Date(item.createdAt);
                        const formattedDate = `${createdAtDate.getDate()}/${createdAtDate.getMonth() + 1}/${createdAtDate.getFullYear()}`;

                        return (
                           
                              <div key={item.id} class="flex items-center justify-center h-56 rounded bg-gray-900 border-b-4 border-b-green-400">
                              <div class="text-2xl text-gray-500 p-4 flex flex-col gap-2  ">
                                 <p className='text-lg text-red-300'>{item.title}</p>
                                 <p className='text-sm text-slate-300  '>{item.description}</p>
                                 <p className='text-sm mt-1   text-emerald-200'>{formattedDate}</p>

                                 <div className='mt-3 flex justify-between items-center '>
                                    <Button onClick={()=>changeIscompleted(item._id)} className={`rounded-full  text-white  ${item.isCompleted ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-400"}`}>{item.isCompleted ? `Completed` : `inComplete`}</Button>
                                    <div className='flex gap-2 justify-center items-center'>
                                       
                                          <AlertDialog  >
                                             <AlertDialogTrigger asChild>
                                                <Button variant="outline" className='' onClick={()=>openpopup(item.title,item.description)}><svg className="w-6 h-6 hidde text-blue-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" /></svg></Button>
                                             </AlertDialogTrigger>

                                             <AlertDialogContent className=' border-gray-800 bg-black border-b-4 border-b-blue-400'>
                                                <AlertDialogHeader className=''>
                                                   <AlertDialogTitle className='text-green-400'>Update Your Tasks</AlertDialogTitle>
                                                   <AlertDialogDescription className='flex gap-4 flex-col'>
                                                      This action cannot be undone. This will permanently delete your
                                                      account and remove your data from our servers.
                                                      <Label htmlFor="text" className='text-red-500 mt-4  ' >Title *</Label>
                                 
                                                      <Input type="text" placeholder="Task Title" value={title}

                                                         onChange={(e) => setTitle(e.target.value)}
                                                         required
                                                         className='p-4 h-14 ' />
                                                      <Label htmlFor="text" className='text-red-500'>Description *</Label>
                                                      <Textarea placeholder="Type your Task Description here." value={description}
                                                         onChange={(e) => setDescription(e.target.value)}
                                                         required />
                                                   </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                   <AlertDialogCancel className='bg-red-500 text-white'>Close</AlertDialogCancel>
                                                   <AlertDialogAction className='text-white' onClick={()=>updateHandler(item._id)}>Update Task</AlertDialogAction>
                                                </AlertDialogFooter>
                                             </AlertDialogContent>
                                          </AlertDialog>

                                       
                                       <svg class="w-6 h-6 text-red-500 dark:text-white cursor-pointer" onClick={() => deleteHandler(item._id)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                       </svg>

                                    </div>

                                 </div>
                              </div>

                           </div>
                          
                           
      
                        )

                     })
                  }


               </div>


            </div>
         </div>

      </>
   )
}

export default CompleteTask
