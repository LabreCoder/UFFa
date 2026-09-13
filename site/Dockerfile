FROM node:20-alpine

WORKDIR /app

# Instala dependências aproveitando cache de camadas
COPY package*.json ./
RUN npm install

# Copia todo o código do projeto (incluindo a pasta .figma)
COPY . .

# Porta que o Vite usará dentro do container
EXPOSE 3000

# Inicia o servidor do Vite
CMD ["npm", "run", "dev"]