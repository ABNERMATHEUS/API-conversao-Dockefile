# API-conversao-Dockefile
API de conversão de celsius e fahrenheit, vice e versa. Utilizando dockerfile. Também com deploy na Azure e disponível no dockerhub.

### Disponível no Docker Hub
`docker pull 100abner/api-conversao`

https://hub.docker.com/r/100abner/api-conversao

### Se for clonar do GitHub
`npm install`

`node index.js`

#### Rotas
##### Converter de fahrenheit para celsius
GET `/fahrenheit/{valor}/celsius`
##### Converter de celsius para fahrenheit 
GET `/celsius/{valor}/fahrenheit`



