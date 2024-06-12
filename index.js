console.log("Você toca algum instrumento?");

process.stdin.on("data", function(data){
    let entrada = data.toString().trim();
    if(entrada == "sim" || entrada == "s"){

    }

    if(entrada == não || entrada == "nao" || entrada == "n"){
        console.log("Deveria aprender");
    }

});