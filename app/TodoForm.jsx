"use client"
import React from 'react'
import { toast } from 'react-toastify';

function TodoForm() {
  const notify = () => toast("Hello coders it was easy!");
  return (
    <div>
      hii
      <button onClick={notify}>Click me!</button>
    </div>
  )
}

export default TodoForm
