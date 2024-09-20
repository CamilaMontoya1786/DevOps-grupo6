// En este JS se trae el compara el correo de la BD con el correo 
// ingresado por el usuario al olvidar la contraseña y compara ambos correos, 
// si estos correos son iguales entonces envia la contraseña al correo electronico del cliente

import GetUsers from "./GetUsers";
import SendEmail from "./SendEmail";

const ForgotPassword = (Email) => {

    const Users = GetUsers();
    let userFound = false; 
  
   
    for (const User of Users) {
      if (User.correo === Email) { 
        SendEmail(User.correo, "RECUPERACION DE CONTRASEÑA", `Tu contraseña es: ${User.password}`);
        userFound = true; 
        break; 
      }
    }
  
    if (!userFound) {
      console.log("No se encontró ningún usuario con este correo");
    }
  };
  
export default ForgotPassword

