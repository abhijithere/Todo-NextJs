import React from 'react'
import '../styles/globals.css'

function Loader() {
  return (
    <div className='h-screen w-screen flex  justify-center items-center'>
<div class="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
</div>
</div>
  )
}

export default Loader
