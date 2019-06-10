var Calculadora={
 ope1: 0,
 num1:0,

 estado:1,
 operador:0,
 punto:false,
 signoNegativo:false,

 suma: function(){
     return ope1+ope2;
 },
 resta: function(){
    return ope1-ope2;
},
multiplicacion: function(){
    return ope1*ope2;
},
division: function(){
    return ope1/ope2;
},
limpiar:function(){
    document.getElementById('display').innerHTML='0';
    Calculadora.ope1=0;

}





};



document.getElementById('on').onclick=Calculadora.limpiar;
function punto(){
    if(!Calculadora.punto){
        Calculadora.punto=true;
        document.getElementById('display').innerHTML=Calculadora.ope1.toString() + '.';
    }
}
function signoNegativo(){
    if(!Calculadora.signoNegativo){
        if(Calculadora.ope1!=0){
            Calculadora.signoNegativo=true;
            document.getElementById('display').innerHTML= '-' + document.getElementById('display').innerHTML;
            Calculadora.ope1= -1*Calculadora.ope1;
        }
    }else{
        Calculadora.signoNegativo=false;
        Calculadora.ope1=-1*Calculadora.ope1;
        document.getElementById('display').innerHTML=Calculadora.ope1;
    }
}
function operador(ope){
    Calculadora.operador=ope;
    Calculadora.num1=Calculadora.ope1;
    document.getElementById('display').innerHTML='';
}
function clickTecla(numero ){

    if(Calculadora.ope1!=0 && document.getElementById('display').innerHTML.length>0 ){

        var tama=document.getElementById('display').innerHTML.length;
        if(tama<8){
            document.getElementById('display').innerHTML=document.getElementById('display').innerHTML + numero.toString();
            Calculadora.ope1 =document.getElementById('display').innerHTML + numero.toString();
        }

    }  else{
        document.getElementById('display').innerHTML= numero;
        Calculadora.ope1 = numero;
    }
    
}
function igual(){
    var num2=Calculadora.ope1;
    var resul=0;

    switch(Calculadora.operador){
        case 1:
            resul=Calculadora.num1+num2;
        break;
        case 2:
            resul=Calculadora.num1-num2;
        break;
        case 3:
            resul=Calculadora.num1*num2;
        break;
        case 4:
            resul=Calculadora.num1/num2;
        break;
    }
    document.getElementById('display').innerHTML=resul;
    Calculadora.ope1=resul;
}

//document.getElementsByClassName('tecla').onclick=Calculadora.clickTecla;