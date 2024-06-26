# Match with my local Node Version
FROM node:16-alpine

# Build
RUN apk add git

RUN git pull
WORKDIR /app
COPY package*.json /app/
RUN npm install --global pm2
# Dependency Install
RUN npm install
 
COPY . /app

RUN npm run build

# PORT (8080) Expose
EXPOSE 3000

# START
CMD ["pm2-runtime", "start", "ecosystem.json"]