# Cotação Diária do Dólar

Este é um bot do Telegram que fornece a cotação do dólar em real, com os valores em tempo real.

## Funcionalidades

- Exibir a cotação do dólar de compra e venda para o dia anterior.
- Disponibilizar links para acompanhar a cotação em tempo real.
- Oferecer comandos de ajuda e informações sobre o bot.

#### Caso na execução
Caso na execução do bot, o terminal retorne o erro: 
```bash
error: [polling_error] {"code":"ETELEGRAM","message":"ETELEGRAM: 404 Not Found"}
```
Isso se deve ao fato de que você pulou uma das etapas de configuração, e não adicionou o token do seu bot na constante ```TOKEN_BOT´´´ , dentro do arquivo ```app.js``` 
## Comandos

- `/dolar`: Exibe a cotação do dólar de compra e venda atual
- `/ajuda`: Fornece informações sobre como usar o bot e explicações sobre o dólar de compra e venda.
- `/start`: Mostra a mensagem de boas-vindas do bot.

## Tecnologias Utilizadas

- Node.js
- Biblioteca `node-telegram-bot-api`
- API do AWESOMEAPI para obter a cotação do dólar em tempo real

## Configuração

1. Obtenha um token de bot do Telegram.
2. Substitua o valor de `TOKEN_BOT` no código pelo seu token.
3. Instale as dependências do projeto com `npm install`.
4. Execute o bot com `node app.js`.

## Acessar o bot funcionando
Use o bot no telegram com: https://t.me/cotacaoAtualBot

## Repositorios
Código fonte: https://github.com/devJunr/CotacaoAtualBot | Imagem para container: https://hub.docker.com/r/devjunr/cotacaoatualbot_telegram_bot 

## Contato

Se você precisar de ajuda ou tiver alguma dúvida, entre em contato com o administrador do bot, @adrjun , no telegram.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
