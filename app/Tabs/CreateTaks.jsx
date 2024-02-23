"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
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



function CreateTaks() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submithandle = async (e) => {
    alert("hii")
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();
      alert(data.message)

      if (!data.success) return alert(data.message);

      alert(data.message);
      
      setTitle("");
      setDescription("");
    } catch (error) {
      return alert(error);
    }
  }

  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2  border-dashed rounded-lg border-gray-700">
          <div class="grid grid-cols-1 gap-4 mb-4">
            <div class="flex items-center justify-center h-96 max-[1000px]:h-60 rounded bg-gray-900 gap-4">
              <p class="text-2xl  flex gap-3">
                <svg class="w-12 h-12  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z" />
                </svg>
              </p>
              <AlertDialog  >
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className='bg-blue-500 text-white p-7 hover:bg-blue-400 rounded-full'>Show Dialog</Button>
                </AlertDialogTrigger>

                <AlertDialogContent className=' border-gray-800 bg-black border-b-4 border-b-blue-400'>
                  <AlertDialogHeader className=''>
                    <AlertDialogTitle className='text-green-400'>Add Your Tasks</AlertDialogTitle>
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
                    <AlertDialogCancel className='bg-red-500 text-white'>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='text-white' onClick={submithandle}>Add Task</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default CreateTaks
