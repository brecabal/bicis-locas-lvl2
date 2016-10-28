var = 
function validateForm(){
	//validar los inputs nombre
    ingresoName = document.getElementById("name").value;
    if (ingresoName==null || ingresoName.length==0) {
        alert("Ingrese nombre");
        return false;
    }

    alphaName = document.getElementById("name").value;
    if (/[0-9]/.test(alphaName)) {
        alert("Ingrese solo letras en nombre");
        return false;
    }
    //primera palabra con mayuscula para nombre
     mayusculaName = ingresoName.charAt(0);
    if (!(/[A-Z]/.test(mayusculaName))){
        alert("Ingrese primera letra con mayúscula");
        return false;
    }
    //para apellido 
    ingresoLastName = document.getElementById("lastname").value;
    if (ingresoLastName==null || ingresoLastName.length==0) {
        alert("Ingrese apellido");
        return false;
    }

    alphaLastName = document.getElementById("lastname").value;
    if (/[0-9]/.test(alphaLastName)) {
        alert("Ingrese solo letras en apellido");
        return false;
    }
    
    mayusLastName = ingresoLastName.charAt(0);
    if (!(/[A-Z]/.test(mayusLastName))){
        alert("Ingrese primera letra con mayúscula");
        return false;
    }

    //validar email
    correctEmail = document.getElementById("input-email").value;
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correctEmail))) {
         alert("Por favor ingresa un Email válido");
         return false;
    }

    //validar password
    passCorrect = document.getElementById("input-password").value;
    if (passCorrect.length<6 || passCorrect=="password" || passCorrect==123456 || passCorrect==098754) {
        alert("Ingrese una contraseña válida");
        return false;
    }
    
    //validar seleccion de bici --envolver en funciones

    selectBike= document.querySelector('select').value;
    if (selectBike == 0) {
        alert("Elige una opción");
        return false;
    }
//function span(){
	
}
}
validateForm();
