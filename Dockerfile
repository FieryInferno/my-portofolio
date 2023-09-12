FROM node:18.17.1-slim
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]