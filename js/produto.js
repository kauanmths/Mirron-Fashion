//	JavaScript	"puro"
var	inputTamanho	=	document.querySelector("#tamanho")
var	outputTamanho	=	document.querySelector("#valortamanho")
function	mostraTamanho(){
					outputTamanho.value	=	inputTamanho.value
	}
	inputTamanho.oninput	=	mostraTamanho