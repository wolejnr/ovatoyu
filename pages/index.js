import MainLayout from '../components/layouts/MainLayout'
import Hero from '../components/Hero/Hero'
// import Features from "../components/Features/Features"
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      {/* <Features /> */}
      <About />
      <Contact />
    </MainLayout>
  )
}
