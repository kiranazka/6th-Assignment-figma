
import Achievement from "@/component/Achivement/Achivement";
// import CourseCategory from "@/component/CourseCategory/Course";
import CustomerTestimonial from "@/component/CustomerTestimomial/CustomerTestimomial";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Hero from "@/component/Hero/Hero";
import Navbar from "@/component/Navbar/Navbar";



export default function Home() {
  return (
    <div>
     <Header/>
      <Navbar/>
     <Hero/>
   <Achievement/>
   {/* <CourseCategory/> */}
   <CustomerTestimonial/>
     <Footer/>
    </div>
    

  )
}