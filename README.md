# Gerar chave Signature Shopee

Para facilitar a automação a Shopee disponibiliza por meio de API, várias funcionalidades, como pegar link de produtos, imagens
Atenção: É necessário solicitar sua API SHOPEE através do link: https://affiliate.shopee.com.br/open_api

# Acesse sua VPS e instale o Node.js (se não tiver):
sudo apt update && sudo apt install nodejs npm -y
# Crie um diretório e entre nele:
mkdir shopee-sign && cd shopee-sign
# Baixe o conteúdo deste projeto dentro da pasta recém criada
Só são 2 arquivos, o _server.js_ e o _package.json_
# Inicialize o projeto:
npm init -y
# Instale o módulo express e crypto:
npm install express crypto cors
# Inicie o servidor:
node server.js

# Após o projeto começar a rodar faça um get passando os parâmetros via HTTP Request

Method: POST<br>
URL: http://SEU-IP:3000/generate-signature<br>
Body Formato JSON:
{
  "appID": "seu appID",
  "senha": "sua Senha"
}

# Se tudo correr bem ele retornará o json contendo o TIMESTAMP e SIGNATURE

# Para obter informações de endpoints e como utilizar a API acesse:

https://affiliate.shopee.com.br/open_api/home
