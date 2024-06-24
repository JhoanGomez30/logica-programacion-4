const btn_enviar = document.getElementById("button-addon2");
const contenedor = document.getElementById("response_js")

btn_enviar.addEventListener("click", (e) =>{
    if (e.target.id === "button-addon2") { 
        const numeroInput = document.getElementById("input_numero"); 
        const inputValue = numeroInput.value; 

        if (isNaN(parseInt(inputValue))) {
            console.log("Ingrese un numero válido");
        } else {
            fibonacci(inputValue); 
        }
    }
})


const fibonacci = (numero) =>{
    
    let a = 0;
    let b = 1;
    let c = 0;

    contenedor.innerHTML = "<p>El numero 1 es: 0</p> "+
                                "<p>El numero 2 es: 1</p>";

    for(let i = 2; i< numero; i++){
        c= a+b;
        a = b;
        b = c;
        
        contenedor.innerHTML+=`<p>El numero ${i+1} es: ${c}</p>`
    } 
}

