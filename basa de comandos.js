var h = 0;
var m = 0;
var s = 0;
var d = 0;
var prazoDeTempo = document.getElementById("valor")
var valor = prazoDeTempo.value
var limpar = 0;

function iniciar(){
    var horas = document.getElementById("horas")
    var minutos = document.getElementById("minutos")
    var segundos = document.getElementById("segundos")
    var decimos = document.getElementById("decimos")

   limpar = setInterval(function(){
  horas.innerHTML = h < 10 ? '0' + h: h
  minutos.innerHTML = m < 10 ? '0' + m: m
  segundos.innerHTML = s < 10 ? '0' + s: s
  decimos.innerHTML = d < 10 ? '0' + d: d

  if(d < 9){ d += 1;}
  else if(s < 59){  d = 0; s += 1;} 
  else if(m < 59){d = 0; s = 0; m += 1;}
  else if(h < 59){d = 0; s = 0; m = 0; h += 1}

    }, 100)  
    
}
function pausar(){
clearInterval(limpar)
var mensagem = document.getElementById("mensagem1")
//document.write("seu tempo foi de " + m + " minutos "+ " e "+ s + " segundos" )
if(m,s > valor){
  mensagem.innerHTML ='PASSOU DO  TEMPO'

}else{
  mensagem.innerHTML = 'seu tempo foi de ' + m + ' minutos '+ " e "+ s + ' segundos'
}
}