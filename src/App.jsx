import React, {Suspense, lazy} from "react"
import Loader from "./global/loader/loader"
import RenderAllComponents from "./Render"

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RenderAllComponents />
    </Suspense>
  )
}

export default App
