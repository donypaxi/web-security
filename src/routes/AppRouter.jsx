import { Route, Routes } from "react-router-dom"
import { ContractorPage, NewContract, PedidoCompraPage, SideBarPage } from "../contractor/page"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<SideBarPage/>}/>
            <Route path="/nuevo-contratista" element={<ContractorPage/>}/>
            <Route path="/pedido-compra" element={<PedidoCompraPage/>}/>
            <Route path="/nuevo-contrato" element={<NewContract/>}/>
        </Routes>
    </>
  )
}
