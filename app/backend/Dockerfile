FROM node:16.14-alpine
EXPOSE 3001
WORKDIR /app-backend
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]