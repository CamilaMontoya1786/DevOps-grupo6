// En este JS se trae la informacion de los usuarios desde la BD (creo que desaparecera pronto este archivo 
// porque creo que ya hay uno que hace lo mismo)

const User = () =>{};

const usuarios = [
    { id: 1, correo: 'usuario1@example.com', password: 'password1' },
    { id: 2, correo: 'usuario2@example.com', password: 'password2' },
    { id: 3, correo: 'usuario3@example.com', password: 'password3' }
];


function GetUsers() {

    // SELECT id, correo, password FROM usuarios;

    return usuarios;
}

export default GetUsers