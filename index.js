console.log("Você toca algum instrumento?");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim().toLowerCase();
  let instrumentos;

  if (entrada == "sim" || entrada == "s") {
    console.log("Qual?");
  } else if(!instrumentos){
    instrumentos = entrada;
    if (instrumentos == "guitarra") {
        console.log("Você é bom com os dedos");
    } else if (instrumentos == "trompete") {
        console.log("Quanto fôlego");
    } else if (instrumentos == "bateria") {
        console.log("Você tem um bom ritmo");  
    }
    process.exit();
  } else {
    console.log("Deveria aprender");
    process.exit();
  }
});