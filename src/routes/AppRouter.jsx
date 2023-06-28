import { Route, Routes } from "react-router-dom"
import { ContractorPage, PedidoCompraPage, SideBarPage } from "../contractor/page"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<SideBarPage/>}/>
            <Route path="/nuevo-contratista" element={<ContractorPage/>}/>
            <Route path="/pedido-compra" element={<PedidoCompraPage/>}/>
        </Routes>
    </>
  )
}
