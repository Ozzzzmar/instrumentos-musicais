let instrumentCorda = "violão";
let instrumentSopro = "trompete";
let instrumentpercuss = "bateria";

console.log("Você toca algum instrumento?");

process.stdin.on("data", function(data){
    let entrada = data.toString().trim();
    
    if(entrada == "não" || entrada == "nao" || entrada == "n"){
        console.log("Deveria aprender");
        process.exit();
    }else{
        console.log("Qual?");
        
    }
    
    
        

});

