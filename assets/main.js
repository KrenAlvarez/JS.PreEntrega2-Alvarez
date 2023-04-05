//Variables acceso del usuario
let user = prompt("Ingrese un nombre de usuario");
let pass = prompt("Ingrese una contrasena");
let ingreso = false;

//Array de productos
const productos = [
    { nombre:"Brocha", precio: 800 },
    { nombre:"Pinceles pro", precio: 1600 },
    { nombre:"Pinceles basico", precio: 1000 },
    { nombre:"Paleta", precio: 2500 },
    { nombre:"Giftcard", precio: 5000 },
  ];
let carrito = [];

  
//Usuario
if (user != "" && pass != ""){
    alert("Usuario creado correctamente👏🏾");
    ingreso = true;


function saludo(usuario){
    alert("Bienvenido" + "|a 👋🏼" + " " + usuario);
}
saludo(user);

//Carrito
let seleccion = prompt('Desea comprar algun producto? \n🅰Ingrese "si" para acceder al catalogo.\n🅱Ingrese "no" para salir.');
  
while(seleccion !="si" && seleccion!= "no"){
    alert('Por favor ingrese "si" o "no"')
    seleccion = prompt('▪Si desea acceder al catalogo escriba "si"\n▪Si desea salir ingrese "no"')
  }
  
  if (seleccion == "si") {
      alert("Accediendo al catalogo")
      let todosLosProductos = productos.map((productos) => productos.nombre + " " + " $" + productos.precio)
      alert(todosLosProductos.join("\n"))
  } else if (seleccion == "no") {
      alert("Gracias por su visita!\nLe esperamos pronto!👋🏼")
  }
  
  while (seleccion!= "no") {
      let productos = prompt("Agregue un producto al 🛒\n🚨Tenga en cuenta el uso de mayusculas y minusculas!");
      let precio = 0;
  
      if (productos == ("Brocha") || productos == ("Pinceles pro")|| productos == ("Pinceles basico") || productos == ("Paleta")|| productos == ("Giftcard")) {
          switch (productos) {
            case "Brocha":
              precio = 800;
              break;
            case "Pinceles pro":
              precio = 1600;
              break;
            case "Pinceles basico":
              precio = 1000;
              break;
            case "Paleta":
              precio = 2500;
              break;
            case "Giftcard":
              precio = 5000;
              break;
  
            default:
              break;
          }
      let unidades = parseFloat(prompt("Cuantas unidades desea agregar a su carrito?"))    
      carrito.push({productos, unidades, precio})
      console.log(carrito);
      }else{
          alert("No tenemos ese producto😖")
      }
  
      seleccion = prompt('Desea agregar mas productos?\n🅰Ingrese "si" para continuar.\n🅱Ingrese "no" para salir.')
  
      while (seleccion === "no") {
          alert("Gracias por su compra")
          carrito.forEach((carritoFinal) =>{
              alert(`producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, total por producto: ${carritoFinal.unidades * carritoFinal.precio}`);
          })
      break;    
      }
  }
  
  const total = carrito.reduce((acc, el,) => acc + el.precio * el.unidades, 0)
  alert(`El total a pagar por su compra es: ${total}💸`)

}else {
    alert("Datos incorrectos🤦🏾‍♂️");
}  