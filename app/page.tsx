import Image from 'next/image'
import HomePage from "@/app/componentes/HomePage";
import Header from "@/app/componentes/Header";
import Boody from "@/app/componentes/Boody";
import Main from "@/app/componentes/Main";
import Footer from "@/app/componentes/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header/> 
      
        <Boody/>
        <Main/>
        <Footer/>
    </main>
  )
}
