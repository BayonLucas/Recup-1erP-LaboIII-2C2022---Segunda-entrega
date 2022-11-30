const setError = (input, mensaje) =>{
    const $small = input.nextElementSibling;
    input.classList.add("inputError");
    if($small){
        $small.textContent = mensaje || `${input.name} requerido`;
    }
}    
const clearError = (input) =>{
    const $small = input.nextElementSibling;
    if($small && $small.textContent !== ""){
        input.classList.remove("inputError")
        $small.textContent = "";
    }
}    
const validarLogitudMinima = (input, minimo) =>{
    return input.value.trim().length >= minimo;
}
const validarLogitud = (input, min, max) =>{
    const text = input.value.trim();
    return text.length >= min && text.length <= max;
}
    

        


// regexr.com //Pagina de reguladores de expresiones




export const validarImportes = (e) =>{
    const input = e.target;
    
    const value = input.value;
    ((isNaN(value)) || value>50000 || value<1)? setError(input, "Solo se admiten caracteres numericos entre 0 y 50000 inclusive") : clearError(input);
}
export const validarTexto = (e) => {
    const input = e.target;
    const pattern = /^([a-zA-Z0-9])\w+/g;
    const text = input.value.trim();

    let message = "";

    if(text.length !== 0){
        if(!validarLogitud(input, 5,25)){
            message = message + "El campo debe contener entre 4 y 25 caracteres. ";
            console.log(input + " - Mensaje: " + message);
        }
        
        if(!pattern.test(text)){
            message = message + "Solo se admiten caracteres alfabeticos.";
            console.log(input, " - Mensaje: ", message);
        }
        if(message !== ""){
            setError(input, message);
        }
        else{
            clearError(input);
        }
    }
}

export const validarCampoVacio = (e) => {
    const input = e.target;
    const value = input.value.trim();
    if(input.nextElementSibling.textContent === ""){
        if(!value){
            setError(input);
        }else{
            clearError(input);
        }    
    }
};
export const validarSelectVacio = (e) => {
    const input = e.target;
    if(input.value === "-1"){
        setError(input);
    }else{
        clearError(input);
    }  
};
export const validarFecha = (e) => {
    const input = e.target;
    if(input.value === ""){
        setError(input);
    }else{
        clearError(input);
    }  
}


