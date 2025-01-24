# Cotação Diária do Dólar

Este é um bot do Telegram que fornece a cotação diária do dólar em real, com os valores de fechamento do dia anterior para compras e vendas.

## Funcionalidades

- Exibir a cotação do dólar de compra e venda para o dia anterior.
- Disponibilizar links para acompanhar a cotação em tempo real.
- Oferecer comandos de ajuda e informações sobre o bot.

## Avisos de construção do código

```js
var mes = date.getMonth() + 1;
var dia = date.getDate()-1;
```
A variável "mes" é atribuída com o resultado da soma de 1 ao valor retornado pelo método "getMonth()" da instância "date". Isso se deve ao fato de que o método "getMonth()" retorna um valor entre 0 e 11, onde 0 representa janeiro e 11 representa dezembro. Portanto, é necessário adicionar 1 à variável "mes" para obter o mês correto.
Já a variável "dia" é atribuída com o resultado da subtração de 1 do valor retornado pelo método "getDate()" da instância "date". Isso se deve ao fato de que a API disponibiliza apenas a cotação de fechamento do dia anterior, portanto, é necessário subtrair 1 da variável "dia" para obter o dia correto.

#### Caso na execução
Caso na execução do bot, o terminal retorne o erro: 
```bash
error: [polling_error] {"code":"ETELEGRAM","message":"ETELEGRAM: 404 Not Found"}
```
Isso se deve ao fato de que você pulou uma das etapas de configuração, e não adicionou o token do seu bot na constante ```TOKEN_BOT´´´ , dentro do arquivo ```app.js``` 
## Comandos

- `/cotacao`: Exibe a cotação do dólar de compra e venda para o dia anterior.
- `/ajuda`: Fornece informações sobre como usar o bot e explicações sobre o dólar de compra e venda.
- `/start`: Mostra a mensagem de boas-vindas do bot.

## Tecnologias Utilizadas

- Node.js
- Biblioteca `node-telegram-bot-api`
- API do Banco Central do Brasil (BCB) para obter a cotação do dólar

## Configuração

1. Obtenha um token de bot do Telegram.
2. Substitua o valor de `TOKEN_BOT` no código pelo seu token.
3. Instale as dependências do projeto com `npm install`.
4. Execute o bot com `node app.js`.

## Acessar o bot funcionando
Use o bot no telegram com: t.me/CotacaoAtualBot

## Contato

Se você precisar de ajuda ou tiver alguma dúvida, entre em contato com o administrador do bot, @adrjun , no telegram.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
