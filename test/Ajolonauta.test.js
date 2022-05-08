const Ajolonauta = require('./../app/Ajolonauta')

/* describe("Esto es una suite de pruebas", () => 
{
    test('Caso de prueba 1', () => 
    {
        //aqui se puede usar el codigo como se desea usar
        const result = 1+2
        //validar el resultado esperado
        expect(result).toBe(3);
    });
}) */

describe("1.- Probando la clase Ajolonauta", () => 
{
    test('Caso de prueba 1 : creación de un objeto', () => 
    {
        //aqui se puede usar el codigo como se desea usar
        woopa = new Ajolonauta("Woopa")
        //validar el resultado esperado
        expect(woopa.name).toBe("Woopa!!!"); 
    });   
})

