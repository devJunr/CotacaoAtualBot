const TOKEN_BOT = "<YOUR TOKEN TELEGRAM BOT ";
var apiBcb = "https://economia.awesomeapi.com.br/json/all/USD-BRL";

async function obterCotacao() {
    try {
        const respAPI = await fetch(apiBcb);
        if (respAPI.status === 200) {
            const obj = await respAPI.json();
            const cotacao = obj.USD;
            return {
                bid: parseFloat(cotacao.bid).toFixed(2),
                ask: parseFloat(cotacao.ask).toFixed(2),
                high: parseFloat(cotacao.high).toFixed(2),
                low: parseFloat(cotacao.low).toFixed(2),
                create_date: cotacao.create_date,
            };
        }
        return null;
    } catch (error) {
        console.error("Erro ao obter cotação:", error);
        return null;
    }
}

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN_BOT, { polling: true });
bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
  const texto = msg.text;
});

bot.on('text',async (msg) => {
  const compra = await obterCotacao();
  const venda = await obterCotacao();
  const chatId = msg.chat.id;
  const texto = msg.text;

  if (texto === '/start') {
    bot.sendMessage(chatId, `👋 Olá! Eu sou um bot que fornece a cotação diária do dólar em real, com os valores de fechamento do dia anterior para compras e vendas.\n\n💡 Para saber a cotação atual, digite /dolar.\n\n🛠️ Comandos disponíveis:\n- /dolar: Ver a cotação atual em tempo real\n- /ajuda: Para obter mais informações sobre como usar o bot\n\n📱 Criado e administrado por @adrjun`);
  }

  if(texto === '/dolar'){
    try {
        const cotacao = await obterCotacao();
        if (cotacao) {
            bot.sendMessage(chatId, `📅 Última atualização em: ${cotacao.create_date}\n💵 Valor de compra atual do Dólar: R$ ${cotacao.bid}\n💵 Valor de venda atual do Dólar: R$ ${cotacao.ask}\n\n📊Oscilação do dia\n- Maior valor registrado hoje: R$${cotacao.high}\n- Menor valor registrado hoje: R$${cotacao.low}\n\nVocê já pode acompanhar a cotação em tempo real diretamente aqui! Para mais informações sobre o mercado, acesse o Banco Central em https://www.bcb.gov.br.\n🔍 Para mais detalhes ou ajuda, digite /ajuda .\n🔄 Para consultar a cotação novamente, digite /dolar .`);
            
        } else {
            bot.sendMessage(chatId, `❌ Não foi possível obter a cotação do dólar no momento. Tente novamente mais tarde.`);
        }
    } catch (error) {
        console.error("Erro ao obter cotação:", error);
        bot.sendMessage(chatId, `❌ Ocorreu um erro ao obter a cotação. Tente novamente mais tarde.`);
        bot.sendMessage(7925045673, ` Aconteceu um erro no bot, código: ${error}`)
    }
  }
  
  if (texto === '/ajuda') {
    bot.sendMessage(chatId, `🤖 Como usar o bot:\n\n- Para obter a cotação atual do dólar para compras e vendas, digite o comando /dolar.\n- Se você deseja ver a mensagem inicial do bot novamente, digite /start.\n- Para visualizar essas opções de ajuda a qualquer momento, digite /ajuda.\n\n📣 Contato: Se precisar de ajuda ou quer mandar uma sugestão, envie uma mensagem para @adrjun.\n\n🔍 O que são o Dólar de Compra e o Dólar de Venda?\n\n💰 O dólar de compra é o valor pelo qual um banco ou instituição financeira compra dólares de um cliente, enquanto o dólar de venda é o valor pelo qual o banco vende dólares para o cliente. Em geral, o dólar de venda é mais alto do que o de compra devido à margem de lucro do banco ou instituição financeira.\n\nExemplo: Se o dólar de compra for R$ 4,50 e o de venda for R$ 4,70, isso significa que o banco tem um spread de R$ 0,20 por dólar vendido.`);
    }
});
