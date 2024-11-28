import chai from 'chai'
import supertest from 'supertest'
const expect = chai.expect
const requester = supertest("http://localhost:8080")
describe("Testing Adoptme", () => {
    describe("Test de mascotas", () => {
        it("El endpoint /api/pets crea una mascota", async () => {
            const petMock = {
                name: "Patitas",
                specie: "Pez",
                birthDate: "10-10-2022"
            }
            const {
                statusCode,
                ok,
                _body
            } = await requester.post("/api/pets").send(petMock)
            console.log(statusCode)
            console.log(ok)
            console.log(_body)
            expect(_body.payload).to.have.property("_id")
        })

        /*it("El método PUT debe poder actualizar correctamente a una mascota determinada", async () => { // Supongamos que tienes el id de una mascota existente, y quieres actualizar su nombre 
            const petToUpdate = { name: "NewName" }; // Obtén el ID de una mascota existente (puedes obtenerlo del resultado de un POST anterior) 
            const existingPetId = "1234567890"; 
            const { statusCode, ok, _body } = await requester.put(`/api/pets/${existingPetId}`).send(petToUpdate); // Verifica que la actualización se haya realizado correctamente 
            expect(statusCode).to.equal(200); 
            expect(_body.payload).to.have.property("_id").to.equal(existingPetId); 
            expect(_body.payload).to.have.property("name").to.equal("NewName"); 
        });
        it("Intentar crear una mascota sin el campo nombre debe responder con un status 400", async () => { 
            const petWithoutName = { specie: "Parrot" }; 
            const { statusCode, ok, _body } = await requester.post(/api/pets).send(petWithoutName); 
            expect(statusCode).to.equal(400); 
        });//*/
    });

    describe("test usuarios", () => {
        let cookie
        it("Debe registrar un usuario", async function () {
            const mockUser = {
                first_name: "Coder",
                last_name: "House",
                email: "coder@house.com",
                password: "123"
            }
            const { _body } = await requester.post("/api/sessions/register").send(mockUser)
            expect(_body.payload).to.be.ok
        })
        it("Debe loguear correctamente al usuario y devolver la cookie", async function () {
            const mockUser = {
                email: "coder@house.com",
                password: "123"
            }
            const result = await requester.post("/api/sessions/login").send(mockUser)
            const cookieResult = result.headers["set-cookie"][0]
            expect(cookieResult).to.be.ok
            cookie = {
                name: cookieResult.split("=")[0],
                value: cookieResult.split("=")[1]
            }
     expect(cookie.name).to.be.ok.and.eql("coderCookie")
            expect(cookie.value).to.be.ok
        })
        it("Debe enviar la cookie que contiene el usuario y desestructurar éste correctamente", async function () {
            const { _body } = await requester.get("/api/sessions/current").set("Cookie", [`${cookie.name}=${cookie.value}`])
            expect(_body.payload.email).to.be.eql("coder@house.com")
        })
    })
})