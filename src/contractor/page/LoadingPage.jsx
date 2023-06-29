import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { starLoadingContract, starLoadingContractor } from "../../store/contractor/thunks"

export const LoadingPage = () => {
    const dispatch =useDispatch()
    useEffect(() => {
        
        dispatch(starLoadingContractor())
        dispatch(starLoadingContract())
    }, [])
    
  return (
    <>
    </>
  )
}
