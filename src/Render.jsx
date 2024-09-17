import React, {Suspense, lazy} from "react"
import Loader from "./global/loader/loader"

const Navbar = lazy(() => import("./global/navbar"))
const Render = lazy(() => import("./render/index"))
const About = lazy(() => import("./components/about"))
const PopularItems = lazy(() => import("./components/popularItems"))
const Testmonials = lazy(() => import("./components/testmonials"))
const Footer = lazy(() => import("./global/footer"))

function RenderAllComponents() {
  return (
    <>
    <Navbar />
    <Render />
    <About />
    <PopularItems />
    <Testmonials />
    <Footer />
    </>
  )
}

export default RenderAllComponents;
