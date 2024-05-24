function dividirnumeros(a:number, b:number){
    try {
        if (b === 0)
            throw new Error("No es posible divir por cero")
        return a/b
    } catch(error) {
        if(error instanceof Error) console.log("Error: ",error.message)
        return -1
    }
    
}
console.log("*Ejemplo*")
console.log("resultado de dividir números",dividirnumeros(6, 5))
console.log("resultado de dividir números",dividirnumeros(6, 0))
console.log("")


function convertirNumeroATexto(numero) {
    try {
        if (typeof numero !== 'number')
            throw new Error("El argumento no es un número válido")
        return numero.toString()
    } catch(error) {
        if(error instanceof Error) console.log("Error: ",error.message)
        return -1
    }
}

console.log("*Ejercicio No.1*")
console.log("Resultado de convertir número a texto: ", convertirNumeroATexto(123))
console.log("")
console.log("Resultado de convertir número a texto: ", convertirNumeroATexto("abc"))
console.log("")
console.log("")


function obtenerElementoArreglo(arreglo, indice) {
    try {
        if (!Array.isArray(arreglo))
            throw new Error("El primer argumento no es un arreglo")
        if (indice < 0 || indice >= arreglo.length)
            throw new Error("El índice está fuera del rango del arreglo")
        return arreglo[indice];
    } catch(error) {
        if(error instanceof Error) console.log("Error: ",error.message)
        return -1
    }
}
console.log("*Ejercicio No.2*")
console.log("Resultado de obtener elemento del arreglo: ", obtenerElementoArreglo([1, 2, 3, 4, 5], 2))
console.log("")
console.log("Resultado de obtener elemento del arreglo: ", obtenerElementoArreglo([1, 2, 3, 4, 5], 10))
console.log("")
console.log("Resultado de obtener elemento del arreglo: ", obtenerElementoArreglo("no es un arreglo", 2))
console.log("")
console.log("")


function convertirNumeroaTexto(numero) {
    try {
        if (typeof numero !== 'number')
            throw new Error("El argumento no es un número válido")
        return numero.toString()
    } catch(error) {
        if(error instanceof Error) console.log("Error: ",error.message)
        return -1
    }
}

console.log("*Ejercicio No.3*")
console.log("Resultado de convertir número a texto: ", convertirNumeroaTexto(456))
console.log("")
console.log("Resultado de convertir número a texto: ", convertirNumeroaTexto("xyz"))
console.log("")
console.log("")


function calcularAreaTriangulo(base: number, altura: number): number {
    try {
        if (base <= 0 || altura <= 0) {
            throw new Error("La base y la altura deben ser positivas")
        }
        return (base*altura)/2 
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error: ", error.message)
        }
        return -1
    }
}

console.log("*Ejercicio 4*")
console.log("resultado del área de un triángulo", calcularAreaTriangulo(10, 10))
console.log("")
console.log("resultado del área de un triángulo", calcularAreaTriangulo(-10, 10))
console.log("")
console.log("")


function leerArchivo(): void {
    const nombreArchivo = "archivo.txt";
    let archivo: any;

    try {
        archivo = abrirArchivo(nombreArchivo);
        console.log("Leído del archivo:", archivo.nombre);


    } catch (error) {
        console.log("Error al leer el archivo:", error.message)
    } finally {
        if (archivo) {
            cerrarArchivo(archivo)
        }
    }
}

function abrirArchivo(nombre: string) {
    console.log(`Abriendo archivo: ${nombre}`);
    return { nombre: nombre } 
}

function cerrarArchivo(archivo: any) {
    console.log(`Cerrando archivo: ${archivo.nombre}`)
}


function operacionCompleja(x: number, y: number): number {
    try {
        if (y === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return x / y;
    } catch (error) {
        console.log("Error en la operación:", error.message);
        return 0;
    }
}

function ejecutarOperacion(x: number, y: number): void {
    try {
        const resultado = operacionCompleja(x, y);
        console.log("Resultado:", resultado);
    } catch (error) {
        console.log("Error al ejecutar la operación:", error.message);
    }
}

