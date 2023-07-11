import { Route, Routes } from "react-router-dom"
import { BuscadorPage, ContractorPage, HomePage, NewRegister, SideBarPage } from "../contractor/page"
import { Navbar } from "../contractor/components"

export const AppRouter = () => {
  return (
    <>
          <div className="flex">
            <SideBarPage/>
            <div className="flex flex-col w-full">
              <Navbar/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/nuevo-contratista" element={<ContractorPage/>}/>
                  <Route path="/nuevo-registro" element={<NewRegister/>}/>
                  <Route path="/busqueda" element={<BuscadorPage/>}/>
              </Routes>
            </div>
          </div>
    </>
  )
}
