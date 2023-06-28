import { Link } from "react-router-dom"

export const SideBarPage = () => {
  return (
    <>
      <div className="flex justify-between mx-5">

        <Link to="/nuevo-contratista">contratistas</Link>
        <Link to="/nuevo-contrato">nuevo contrato</Link>
        <Link to="/pedido-compra ">pedido compra</Link>
      </div>
    
    </>
  )
}
