function sumar(a,b){
    //Verificar si se requieren 2 parametros
    if (arguments.length < 2){
        throw new Error("Se requieren 2 argumentos")
    }
    //Verificar si los argumentos son numeros
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Los argumentos deben ser numeros")
    }
    return a+b
}

function testSumar(){
    try {
        //Prueba 1: Verificar si se agregan 2 números
        const res1 = sumar(5, 3)
        if (res1 !== 8)
            console.error(`Prueba 1 Fallida: Se esperaba 8 pero se obtuvo ${res1}`)
        else
            console.log(`Prueba 1 Exitosa`)
        //console.assert(sumar(2,3) === 5, "La suma de 2

        //Prueba 2: Verificar si lanza un error cuando uno de los parametros no es un número
        let errorLanzado = false
        try {
            sumar(5, 'a')
        } catch (error) {
            errorLanzado = true
            if (error.message !== "Los argumentos deben ser numeros"){
                console.error(`Prueba 2 Fallida: Se esperaba un error con el mensaje`)
            }
        }
        if (!errorLanzado)
            console.error(`Prueba 2 Fallida: No se lando un error cuando se esperaba`)
        else
            console.log(`Prueba 2 Exitosa`)

        //Prueba 3: Verificar si lanza un error cuando se proporcionan 2 argumentos
        errorLanzado = false
        try {
            sumar(5) //Debe de lanzar error
        } catch (error) {
            errorLanzado = true
            if (error.message !== "Se requieren 2 argumentos")
                console.error(`Prueba 3 Fallida: Se esperaba un error con el mensaje "Se requieren 2 argumentos"`)
        }
        if (!errorLanzado)
            console.error(`Prueba 3 Fallida: No se lando un error cuando se esperaba`)
        else
            console.log(`Prueba 3 Exitosa`)

        
        //Adicional: Verificar la suma correcta con numeros validos
        const res3 = sumar(10, 20)
        if (res3 !== 30)
            console.error(`Prueba Adicional Fallida: Se esperaba 30 pero se obtuvo ${res3}`)
        else
            console.log(`Prueba Adicional Exitosa`)

    } catch (error) {
    }
}
testSumar()