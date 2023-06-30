import { Route, Routes } from "react-router-dom"
import { BuscadorPage, ContractorPage, HomePage, NewContractPage, PedidoCompraPage, SideBarPage } from "../contractor/page"

export const AppRouter = () => {
  return (
    <>
          <div className="flex">
            <SideBarPage/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/nuevo-contratista" element={<ContractorPage/>}/>
                <Route path="/pedido-compra" element={<PedidoCompraPage/>}/>
                <Route path="/nuevo-contrato" element={<NewContractPage/>}/>
                <Route path="/busqueda" element={<BuscadorPage/>}/>
            </Routes>
          </div>
    </>
  )
}
