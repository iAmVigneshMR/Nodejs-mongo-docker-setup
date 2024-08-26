FROM node
# FROM cgr.dev/chainguard/node:latest
WORKDIR /home
COPY package.json /
RUN npm install
COPY ./src src
CMD ["npm", "start"]