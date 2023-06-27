import { Route, Routes } from "react-router-dom"
import { ContractorPage } from "../contractor/page/ContractorPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<ContractorPage/>}/>
        </Routes>
    </>
  )
}
