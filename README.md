<center>

![](https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif)

# 💱 Cotação Diária do Dólar 💱

Este é um bot do Telegram que fornece a cotação do dólar em real, com os valores em tempo real.

</center>

## 🔺 Funcionalidades

- Exibir a cotação do dólar de compra e venda para o dia anterior.
- Disponibilizar links para acompanhar a cotação em tempo real.
- Oferecer comandos de ajuda e informações sobre o bot.

#### Caso na execução
##### Caso 1
Caso na execução do bot, o terminal retorne o erro: 
```bash
error: [polling_error] {"code":"ETELEGRAM","message":"ETELEGRAM: 404 Not Found"}
```
Isso se deve ao fato de que você pulou uma das etapas de configuração, e não adicionou o token do seu bot na constante ```TOKEN_BOT``` , dentro do arquivo ```.env``` 

##### Caso 2
Caso o container esteja rodando, sem demonstrar erro, verifique os logs com o comando: ```docker logs <id do container>```, verifique a saída, caso esteja com o erro:
```bash
error: [polling_error] {"code":"ETELEGRAM","message":"ETELEGRAM: 404 Not Found"}
```
verifique o caso 1

## ⚙️ Comandos

- `/dolar`: Exibe a cotação do dólar de compra e venda atual
- `/ajuda`: Fornece informações sobre como usar o bot e explicações sobre o dólar de compra e venda.
- `/start`: Mostra a mensagem de boas-vindas do bot.

## 🧑‍💻 Tecnologias Utilizadas
<center>

[![Linguagens](https://skillicons.dev/icons?i=nodejs,docker,bash)]()

</center>

- Node.js
- Biblioteca `node-telegram-bot-api`
- API do AWESOMEAPI para obter a cotação do dólar em tempo real

## ⚙️🧑‍💻 Configuração Manual

1. Obtenha um token de bot do Telegram.
2. Adicione o token em `TOKEN_BOT` no arquivo `.ENV`
3. Instale as dependências do projeto com `npm install`.
4. Execute o bot com `npm start`.
**Observação:** Toda a questão de rodar o projeto, instalar dependências, é automatizado quando se usa um container, veja o tutorial em [Configuração Automatizada](#Configuração Automatizada) 

## ⚙️💻 Configuração Automatizada
(Os passos a seguir é feito por meio de containers)

1. Obtenha um token de bot do Telegram
2. Adicione o token em `TOKEN_BOT` no arquivo `.ENV`
3. Dê as permissões de execução ao arquivo `deploy.sh` com o comando `chmod +x deploy.sh`
4. Rode o comando `./deploy.sh` para executar a automação de criação da imagem e execução a mesma automaticamente
**Observação:** Lembre-se de adicionar o token em `.env`, caso contrario, o projeto irá rodar normalmente, porém, irá mostrar erro no terminal/logs e não terá a ação dentro do bot no telegram

## 📲 Acessar o bot funcionando
Use o bot no telegram com: https://t.me/cotacaoAtualBot

## 📁 Repositorios
Código fonte: https://github.com/devJunr/CotacaoAtualBot | Imagem para container: https://hub.docker.com/r/devjunr/cotacaoatualbot_telegram_bot 

## 📁 Contato

Se você precisar de ajuda ou tiver alguma dúvida, entre em contato com o administrador do bot, @adrjun , no telegram.


## 📁 Historico de Versões
#### v1.2.0-abeee33
Nesta versão, implementou uma atualização de segurança, o container agora roda sem previlegios de usuário root, isso ajuda a reduzir a superficie de ataque e protege o ambiente de possiveis explorações.

#### v1.1.0-ab22dc
Na versão, otimizei o sistema de listagem de mensagens para o chat bot, melhorando o visual das mensagens no chat

## 🔨 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
![](https://user-images.githubusercontent.com/74038190/226190894-18e959ba-d458-4a94-ac44-790190f2a947.gif)
<center>

⌨️ com ❤️ por [Adriano Jr](https://github.com/devjunr) 😊

</center>