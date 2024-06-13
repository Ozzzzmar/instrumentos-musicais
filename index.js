console.log("Você toca algum instrumento?");

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim();
  let instrumentos = data.toString().trim();

  if (entrada == "sim" || entrada == "s") {
    console.log("Qual?");
  } else if (instrumentos == "guitarra") {
    console.log("Você é bom com os dedos");
    process.exit();
  } else if (instrumentos == "trompete") {
    console.log("Quanto fôlego");
    process.exit();
  } else if (instrumentos == "bateria") {
    console.log("Você tem um bom ritmo");
    process.exit();
  } else {
    console.log("Deveria aprender");
    process.exit();
  }
});