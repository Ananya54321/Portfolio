import Button from "./components/Button.jsx"
import React from "react"
import Navbar from "./components/Navbar.jsx"

const App = () => {

  return (
    <div className="bg-[#0075A7] w-full h-screen">
      <Navbar />
      <p className="rancho text-3xl md:text-5xl">Hello There, I'm Ananya!</p>
      <p className="pt-[1.5rem]">I am a full stack web developer who is passionate about creating impactful projects and finds peace in creating digital art. </p>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Button />
      </div>
    </div>
  )
}

export default App
