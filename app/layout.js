import Header from "./Header"
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const metadata = {
  title: 'Todo App',
  description: 'This Is a Todo App ',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="">
        <>
        <Header/>
        {children}
        <ToastContainer />


        </>
       </body>
    </html>
  )
}
