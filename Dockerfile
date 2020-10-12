FROM node:12

# App directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

RUN npm install nodemon -g

# Bundle app source code
COPY . .

EXPOSE 8000
CMD  nodemon -L --watch . server.js