//Lista de anuncios
const listaAnuncios = JSON.parse(localStorage.getItem("anuncios"));
listaAnuncios.sort((a,b) => {
    if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
});

const contenedor = document.getElementById("anuncios-container");

function crearTarjeta(titulo, descripcion, especie, precio, raza, fechaNacimiento, vacunas, sextuple, rabia, tosP) {
    const newCard = document.createElement("div");
    
    const _titulo = document.createElement("h3");
    // _titulo.textContent = "Titulo: " + titulo;
    _titulo.textContent = titulo;
    
    const _descripcion = document.createElement("p");
    _descripcion.textContent = "Descripcion: " + descripcion;
    
    const _precio = document.createElement("p");
    _precio.textContent = "Precio: $" + precio;

    const _especie = document.createElement("p");
    _especie.textContent = "Especie: " + especie;
    
    const _imgraza = document.createElement("img");
    _imgraza.setAttribute("src", "./img/animal.png");
    _imgraza.setAttribute("height", "25px");
    
    const _raza = document.createElement("p");
    _raza.textContent = "Raza: " + raza;
    
    const _div = document.createElement("div");
    _div.setAttribute("id", "card-Especificaciones");
    
    const _imgNacimiento = document.createElement("img");
    _imgNacimiento.setAttribute("src", "./img/ciguena.png");
    _imgNacimiento.setAttribute("height", "25px");
    
    const _fechaNacimiento = document.createElement("p");
    _fechaNacimiento.textContent = "Fecha Nacimiento: " + fechaNacimiento;
    
    const _imgvacunas = document.createElement("img");
    _imgvacunas.setAttribute("src", "./img/jeringuilla.png");
    _imgvacunas.setAttribute("height", "25px");
    
    const _vacunas = document.createElement("p");
    _vacunas.textContent = "Vacunas: " + vacunas;
    
    const _divVacunas = document.createElement("div");
    if(vacunas === "Si"){
      _divVacunas.setAttribute("id", "card-Vacunas");

      const _sextuple = document.createElement("p");
      _sextuple.textContent = "Sextuple: " + sextuple;
      const _rabia = document.createElement("p");
      _rabia.textContent = "Rabia: " + rabia;
      const _tosP = document.createElement("p");
      _tosP.textContent = "Tos de las Perreras: " + tosP;

      _divVacunas.appendChild(_sextuple);
      _divVacunas.appendChild(_rabia);
      _divVacunas.appendChild(_tosP);
    }




    const _divBtn = document.createElement("div");
    _divBtn.setAttribute("id", "card-btn");




    
    _div.appendChild(_imgraza);
    _div.appendChild(_raza);
    _div.appendChild(_imgNacimiento);
    _div.appendChild(_fechaNacimiento);
    _div.appendChild(_imgvacunas);
    _div.appendChild(_vacunas);

    
    
    const _btnVerAnuncio = document.createElement("input");
    _btnVerAnuncio.setAttribute("type", "button");
    _btnVerAnuncio.setAttribute("value", "Ver Anuncio");
    
    _divBtn.appendChild(_btnVerAnuncio);    
    
    newCard.appendChild(_titulo);
    newCard.appendChild(_descripcion);
    newCard.appendChild(_especie);
    newCard.appendChild(_precio);
    newCard.appendChild(_div);
    if(_divVacunas.hasChildNodes){
      newCard.appendChild(_divVacunas);
    }
    newCard.appendChild(_divBtn);
    newCard.classList.add("card");    

    return newCard;
}

listaAnuncios.forEach((elemento) => {
    
    const $nuevaTarjeta = crearTarjeta(elemento.titulo, elemento.descripcion, elemento.especie, elemento.precio, elemento.raza, elemento.fechaNacimiento, elemento.vacunas, elemento.sextuple, elemento.rabia, elemento.tos);

    contenedor.appendChild($nuevaTarjeta);
});