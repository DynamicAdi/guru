import React, {Suspense, lazy} from "react"
import Loader from "./global/loader/loader"
import RenderAllComponents from "./Render"

function App({backend}) {
  return (
    <Suspense fallback={<Loader />}>
      <RenderAllComponents backend={backend} />
    </Suspense>
  )
}

export default App
