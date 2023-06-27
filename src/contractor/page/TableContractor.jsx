import { useSelector } from "react-redux"

export const TableContractor = () => {

    const {contratistas}=useSelector(state=> state.contractor)
    console.log(contratistas)
  return (
    <>
        {contratistas.map((contratista) => (
            <div key={contratista.id}>
                <div>{contratista.datos}</div>
                <div>{contratista.razon}</div>
                <br />
            </div>
            )
        )}
    
    </>
  )
}
