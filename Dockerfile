FROM node:18-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY index.html .
COPY tailwind.config.js .
COPY postcss.config.js .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
