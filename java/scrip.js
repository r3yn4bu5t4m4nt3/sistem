
function funcionVerificar(){
    var a, par, impar;
    a = parseFloat(document.getElementById("num1").value);
    if(a/2==0){
        par=a;
        document.getElementById("verificar1").textContent="el numero es: PAR";
    }else if(a/2==0){
        impar=a;
        document.getElementById("verificar1").textContent="el numero es: IMPAR";
    }else{
        document.getElementById("verificar1").textContent="el numero es: NEUTRO";
    }
}
function funcionNumMayor(){
    var x, y, z, may=0;
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    z = parseFloat(document.getElementById("num3").value);
    if( x > y && x>z){
        may=x;
    }else if( y > z ){
        may=y;
    }else{
        may=z;
    }
    document.getElementById("verificar").textContent="El numero mayor es: "+may;
}