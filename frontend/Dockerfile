FROM node:20-alpine

WORKDIR /app

# 1) Instalar dependencias del proyecto
COPY package*.json ./
RUN npm install

# 2) (Extra de seguridad) Instalar vite globalmente
RUN npm install -g vite

# 3) Copiar el resto del código
COPY . .

EXPOSE 3000

# 4) Levantar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
