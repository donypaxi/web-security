export const filterRegister = (records,{numero,type,id,servicio,empresa}) => {
    return records.filter((registerItem)=>{
    
    const nombreEmpresa = registerItem.empresa.toString();
    const typeEmpresa = registerItem.type.toLowerCase();
    const numeroEmpresa = registerItem.numero.toLowerCase();
    const servicioEmpresa = registerItem.servicio.toLowerCase();
    return  nombreEmpresa.includes(empresa)
            && typeEmpresa.includes(type.toLowerCase())
            && numeroEmpresa.includes(numero.toLowerCase())
            && servicioEmpresa.includes(servicio.toLowerCase())
    })
}