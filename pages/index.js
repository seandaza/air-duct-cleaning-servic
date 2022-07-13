import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Featured from "../Components/Featured"
import Step from "../Components/Step"
import Projects from "../Components/Projects"
import Clients from "../Components/Clients"
import Concepts from "../Components/Concepts"
import Banner from "../Components/Banner"
import Carousel from "../Components/Carousel"


export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Hero />
    <Featured />
    <Step />
    <Projects />
    <Carousel />
    <Clients />
    <Concepts />
    </>
  )
}
