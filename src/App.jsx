import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Shop } from "./pages/Shop"
import { Suspense } from "react"

export const App = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </Suspense>
      
    </>
  )
}