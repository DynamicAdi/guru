import React, {lazy} from "react"

const Navbar = lazy(() => import("./global/navbar"))
const Render = lazy(() => import("./render/index"))
const About = lazy(() => import("./components/about"))
const PopularItems = lazy(() => import("./components/popularItems"))
const Testmonials = lazy(() => import("./components/testmonials"))
const Footer = lazy(() => import("./global/footer"))

function RenderAllComponents({backend}) {
  return (
    <>
    <Navbar />
    <Render backend={backend}/>
    <About />
    <PopularItems backend={backend} />
    <Testmonials />
    <Footer />
    </>
  )
}

export default RenderAllComponents;
