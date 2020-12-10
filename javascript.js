function mudaFoto (foto)
	{
		document.getElementById("icone").src = foto;
	}


var realtamanho = new Number();
var realtamanho = 14;
	function tamanhoreal(){
		document.getElementById("conteudo").style.fontSize=realtamanho+'px';
	}
	
	function fonte(e){
		var elemento=document.getElementById("conteudo");
		var atual=elemento.style.fontSize;
		if (e == 'w'){
			atual = parseInt(atual)+2+'px';

		}else if (e =='x'){
			atual = parseInt(atual)-2+'px';

		}else if (e == 'y'){
			atual = realtamanho+'px';

		}

			elemento.style.fontSize=atual;
}

function caracteres(){
	var max=new Number();
	max = 200;
	var atual = document.getElementById('mensagem').value.length;
	var valor = new Number();
	valor=max-atual;
	if (valor > 0){
		if (valor == 1){valor=0}
		document.getElementById('caracterrestante').innerHTML=valor+' Caracteres Restantes';
		document.getElementById('caracterrestante').style.color='black';
		document.getElementById('botaoenviar').disabled='';
	}else{
		document.getElementById('botaoenviar').disabled='disabled';
		document.getElementById('caracterrestante').style.color='red';
	}
}