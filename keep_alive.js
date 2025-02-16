const axios = require("axios");

const API_URL = "https://gat-backend-strapi.onrender.com/admin";

const keepAlive = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(`[${new Date().toLocaleString()}] API está ativa! Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleString()}] Erro ao acessar API:`, error.message);
  }
};

// Executa a cada 5 minutos (300.000 ms)
setInterval(keepAlive, 300000);

console.log("Monitoramento iniciado...");
