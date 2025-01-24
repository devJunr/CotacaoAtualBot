const TOKEN_BOT = "<YOUR TOKEN TELEGRAM BOT>";
var date = new Date();
var ano = date.getFullYear();
var mes = date.getMonth() + 1;
var dia = date.getDate()-1;
var urlAPI_Bcb = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27";
var urlAPI_Date = mes+"-"+dia+"-"+ano;
var apiBcb = urlAPI_Bcb+urlAPI_Date+"%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda";

async function obterCotacao() {
    try {
        const respBcb = await fetch(apiBcb);
        if (respBcb.status === 200) {
            const obj = await respBcb.json();
            if (obj.value && obj.value.length > 0) {
                const cotacao = obj.value[0];
                return {
                    cotacaoCompra: cotacao.cotacaoCompra.toFixed(2),
                    cotacaoVenda: cotacao.cotacaoVenda.toFixed(2),
                };
            }
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
  console.log('BOT ATIVO!');
  const compra = await obterCotacao();
  const venda = await obterCotacao();
  const chatId = msg.chat.id;
  const texto = msg.text;

  if (texto === '/start') {
    bot.sendMessage(chatId, `👋 Olá! Eu sou um bot que fornece a cotação diária do dólar em real, com os valores de **fechamento do dia anterior** para compras e vendas.\n\n💡 Para saber a cotação atual, digite /cotacao.\n\n🛠️ Comandos disponíveis:\n- /cotacao: Ver a cotação do fechamento do dia anterior\n- /ajuda: Para obter mais informações sobre como usar o bot\n\n📱 Criado e administrado por @adrjun`);
  }

  if(texto === '/cotacao'){
    try {
        const cotacao = await obterCotacao();
        if (cotacao) {
            bot.sendMessage(chatId, `Fechamento do dólar para o dia: ${dia}/${mes}/${ano}\n💵 Cotação do Dólar:\n📥 Compra: R$ ${cotacao.cotacaoCompra} - 📤 Venda: R$ ${cotacao.cotacaoVenda}\n\n💡 **Impacto do Dólar**: O valor do dólar afeta diretamente os preços de produtos importados e até o custo de viagens internacionais. O mercado de câmbio pode ser influenciado por diversos fatores, como mudanças na taxa de juros e decisões econômicas do governo.\n\n📊 🔗 Para mais informações sobre o mercado e acompanhar a cotação em tempo real, visite Banco Central: https://www.bcb.gov.br.\nPara obter mais detalhes ou ajuda, digite /ajuda. Para consultar a cotação novamente, basta digitar /cotacao.`);
        } else {
            bot.sendMessage(chatId, `❌ Não foi possível obter a cotação do dólar no momento. Tente novamente mais tarde.`);
        }
    } catch (error) {
        console.error("Erro ao obter cotação:", error);
        bot.sendMessage(chatId, `❌ Ocorreu um erro ao obter a cotação. Tente novamente mais tarde.`);
        
    }
  }
  
  if (texto === '/ajuda') {
    bot.sendMessage(chatId, `🤖 **Como usar o bot**:\n\n- Para obter a cotação diária do dólar para compras e vendas, digite o comando /cotacao.\n- Se você deseja ver a mensagem inicial do bot novamente, digite /start.\n- Para visualizar essas opções de ajuda a qualquer momento, digite /ajuda.\n\n📣 **Contato**: Se precisar de ajuda, envie uma mensagem para @adrjun.\n\n🔍 **O que são o Dólar de Compra e o Dólar de Venda?**\n\n💰 O **dólar de compra** é o valor pelo qual um banco ou instituição financeira compra dólares de um cliente, enquanto o **dólar de venda** é o valor pelo qual o banco vende dólares para o cliente. Em geral, o dólar de venda é mais alto do que o de compra devido à margem de lucro do banco ou instituição financeira.\n\nExemplo: Se o dólar de compra for R$ 4,50 e o de venda for R$ 4,70, isso significa que o banco tem um spread de R$ 0,20 por dólar vendido.`);
    }
});
