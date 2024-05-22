# Použij oficiální Node.js image jako základ
FROM node:14

# Nastav pracovní adresář
WORKDIR /usr/src/app

# Zkopíruj package.json a package-lock.json do pracovního adresáře
COPY package*.json ./

# Nainstaluj závislosti
RUN npm install

# Zkopíruj zbytek aplikace do pracovního adresáře
COPY . .

# Exponuj port 80
EXPOSE 80

# Definuj příkaz pro spuštění aplikace
CMD ["node", "server.js"]
