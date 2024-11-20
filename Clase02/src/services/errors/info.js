export const generateUserErrorInfo = (user)=>{
    return `Una o más propiedades son invalidas. Requiere:
    * first_name: Debe ser un string, se recibió: ${user.first_name}
    * last_name: Debe ser un string, se recibió: ${user.last_name}
    * email: Debe ser un string, se recibió: ${user.email}`
}