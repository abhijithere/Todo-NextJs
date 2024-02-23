"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

function AllTasks() {
  return (
    <>
    <div class="p-4 sm:ml-64">
        
   <div class="p-4 border-2  border-dashed rounded-lg border-gray-700">
      <div class="grid grid-cols-3 gap-6 mb-4 max-[1000px]:grid-cols-1">
         <div class="flex items-center justify-center h-56 rounded bg-gray-900 border-b-4 border-b-green-400">
            <div class="text-2xl text-gray-500 p-4 flex flex-col gap-2">
               <p className='text-lg text-red-300'>Hello World</p>
               <p className='text-sm text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, iste.</p>
                <p className='text-sm mt-1   text-emerald-200'>19/06/2024</p>
                <div className='mt-3 flex justify-between items-center'>
                    <Button className='rounded-full bg-green-500 text-white hover:bg-green-600'>Completed</Button>
                    <div className='flex gap-2'>
                    <svg className="w-6 h-6 hidde text-blue-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>  </svg>
    <svg class="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
  </svg>

                    </div>
                    
                </div>
            </div>
            
         </div>
         <div class="flex items-center justify-center h-56 rounded bg-gray-900">
            <p class="text-2xl text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-56 rounded bg-gray-900">
            <p class="text-2xl text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-56 rounded bg-gray-900">
            <p class="text-2xl text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-56 rounded bg-gray-900">
            <p class="text-2xl text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-56 rounded bg-gray-900">
            <p class="text-2xl text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-56 rounded bg-gray-900">
            <p class="text-2xl text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
     
      
   </div>
</div>
      
    </>
  )
}

export default AllTasks
