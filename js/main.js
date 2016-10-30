function validateForm(){
	 //validar los inputs nombre
	function name(){
	    ingresoName = document.getElementById("name").value;
	    if (ingresoName==null || ingresoName.length==0) {
	        var contiene = document.getElementsByClassName('name-container')[0];
	        var labs = document.createElement('span');
	        var nodoError = document.createTextNode('Debes llenar el campo');
	        labs.appendChild(nodoError);
	        contiene.appendChild(labs);   
	        return false;
	    }
		

	    alphaName = document.getElementById("name").value;
	    if (/[0-9]/.test(alphaName)) {
	        var contiene = document.getElementsByClassName('name-container')[0];
	        var labs = document.createElement('span');
	        var nodoError = document.createTextNode('Completa el recuadro solo con letras');
	        labs.appendChild(nodoError);
	        contiene.appendChild(labs);   
	        return false;
	    }
    //primera palabra con mayuscula para nombre
	    mayusculaName = ingresoName.charAt(0);
	    if (!(/[A-Z]/.test(mayusculaName))){
	        var contiene = document.getElementsByClassName('name-container')[0];
	        var labs = document.createElement('span');
	        var nodoError = document.createTextNode('La primera letra debe ser mayuscula');
	        labs.appendChild(nodoError);
	        contiene.appendChild(labs);   
	        return false;
	    }
	}
	name();
    //para apellido 
    function apellido(){
        ingresoLastName = document.getElementById("lastname").value;
        if (ingresoLastName==null || ingresoLastName.length==0) {
            var contien = document.getElementsByClassName('lastname-container')[0];
            var lab = document.createElement('span');
            var nodoErro = document.createTextNode('Debes llenar el campo');
            lab.appendChild(nodoErro);
            contien.appendChild(lab);
            return false;
        }
    
	    alphaLastName = document.getElementById("lastname").value;
	    if (/[0-9]/.test(alphaLastName)) {
	        var contiene = document.getElementsByClassName('lastname-container')[0];
	        var labs = document.createElement('span');
	        var nodoError = document.createTextNode('Debes llenar el campo solo con letras');
	        labs.appendChild(nodoError);
	        contiene.appendChild(labs);
	        return false;
	    }
    
	    mayusLastName = ingresoLastName.charAt(0);
	    if (!(/[A-Z]/.test(mayusLastName))){
	       var contiene = document.getElementsByClassName('lastname-container')[0];
	        var labs = document.createElement('span');
	        var nodoError = document.createTextNode('La primera letra debe ser mayuscula');
	        labs.appendChild(nodoError);
	        contiene.appendChild(labs);
	        return false;
	    }
    }
    apellido();

    //validar email
    function mail(){
	    correctEmail = document.getElementById("input-email").value;
	    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correctEmail))) {
	        var contiene = document.getElementsByClassName('email-container')[0];
	        var labs = document.createElement('span');
	        var nodoError = document.createTextNode('Ingresa una dirección válida');
	        labs.appendChild(nodoError);
	        contiene.appendChild(labs);
	        return false;
	    }
	}
	mail();

    //validar password
    function password(){
	    passCorrect = document.getElementById("input-password").value;
	    if (passCorrect.length<6 || passCorrect=="password" || passCorrect==123456 || passCorrect==098754) {
	        var conti = document.getElementsByClassName('form-group')[0];
			var la = document.createElement('span');
			var nodoE = document.createTextNode('Debes completar este campo');
			la.appendChild(nodoE);
			conti.appendChild(la);
	        return false;
	    }
    }
    password();
    
    //validar seleccion de bici no me funciona
    /*selectBike = document.getElementByClassName('form-control').value;
    if(selectBike === null || selectBike === 0){
        alert("Elige una opción");
        return false;
    } puede ser esa tbn otra forma ninguna me funciona*/ 
    function bici(){
	    selectBike= document.querySelector('select').value;
	    if (selectBike == 0) {
	        var nuevaClass = document.getElementsByClassName('form-group input-box')[1].classList.add('seleccion'); 
			var contenedor = document.getElementsByClassName('seleccion')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Debes elegir un tipo de bicicleta');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);	
	    	return false;
    	}
  	}
  
    bici();

}

