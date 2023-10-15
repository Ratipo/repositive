import Image from 'next/image'
import HomePage from "@/app/componentes/HomePage";
import Header from "@/app/componentes/Header";
import Boody from "@/app/componentes/Boody";
import Main from "@/app/componentes/Main";
import Api from "@/app/componentes/Api";
import Footer from "@/app/componentes/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header/> 
        <Boody/>
        <Api> </Api>
        <Main/>
        <Footer/>
    </main>
  )
}
