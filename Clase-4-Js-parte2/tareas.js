// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor 
  //definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y 
  //usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const nuevoGato = {
    nombre: nombre,
    edad: edad,
    meow: () => "Meow!"  // funcion flecha
    // meow: function() {
    //   return "Meow!";
    // }
  }
  return nuevoGato;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  // crear una propiedad
  objeto[property]=null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  
  // invocar un metodo de un objeto atenti con los () fuera de los []
  objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  // delete objeto[unaPropiedad];
  objeto[unaPropiedad]=undefined;
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo 
  //con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const nuevoUsuario={
    nombre: nombre,
    email: email,
    password: password
  }
  return nuevoUsuario;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email){
    return true;
  }
  return false;
}

//9

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") 
  //tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]){return true;} return false;
}

//10
function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la 
  //propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password===password){
    return true;
  }
  return false;
}

//11

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el 
  //objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password=nuevaPassword;
  return usuario;
}

//12
function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  usuarios.map(arreglo => arreglo['esPremium']=true);
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
/*

ME AYUDO VER EL OBJETO ORIGINAL
CADA OBJETO POST TIENE UNA PROPIEDAD LIKES
EL OBJETO POST NO ESTA NOMBRADO POR LO TANTO
suma += usuario.posts[posteos].POST['likes'];
NO FUNCIONA!!

const user = {
      usernombre: 'Jhon Doe',
      password: 'JavaScript es genial!',
      posts: [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10
        },
        {
          id: '2',
          title: 'Soy Henry!',
          likes: 100
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99
        },
      ],
    };


*/
  let suma=0;
  for(let posteos=0; posteos<usuario.posts.length; posteos++) {
    /// recorro los posts
    suma += usuario.posts[posteos]['likes'];
  }
  return suma;
}

//15 PASSED (HASTA ACÁ)

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" 
  //("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  /*
  const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
  }; */

    const productos = {
      calcularPrecioDescuento: function() {
        let precios = Number(this.precio);
        let porcentajeDeDescuentos = Number(this.porcentajeDeDescuento);
        return precios - (precios * porcentajeDeDescuentos)
      }
    }    
    return producto;
  }
  


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
