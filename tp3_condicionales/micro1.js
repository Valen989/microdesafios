let perfil = "Invitado";


if (perfil == "") {
   console.log("Debe especificar el perfil del usuario");
}

else if (perfil == "invitado" || perfil ==  "INVITADO" || perfil == "Invitado") {
   console.log("Usted solo tiene permisos de consultar datos");
}

else if (perfil == "administrador"|| perfil == "ADMINISTRADOR" || perfil == "Administrador") {
   console.log("Usted tiene todos los priviliegios de uso del sistema"); 
}

else if (perfil == "asistente" || perfil == "ASISTENTE" || perfil == "Asistente") {
   console.log("Usted solo tiene permiso de registrar, modificar y consultar datos"); 
}

else {
   console.log("Debe especificar un perfil valido");
}


switch (perfil) {
   case "":
      mensaje = "Debe especificar el perfil del usuario"
      break;
  case  "administrador" :
   case "ADMINISTRADOR" :
   case "Administrador":
     mensaje = "Usted tiene todos los privilegios de uso del sistema"
     break;
  case  "asistente":
    case "ASISTENTE":
      case "Asistente":
  mensaje = "Usted solo tiene permiso de registrar, modificar y consultar datos"
     break;
  case "invitado":
  case "INVITADO":
   case  "Invitado":
     mensaje = "Usted solo tiene permisos de consultar datos"
     break;
  default: 
    mensaje = "Debe especificar un perfil valido"
     break;
 }



console.log(mensaje);
