# Install from base nodejs image
FROM node:erbium

WORKDIR /www

ENV RUNTIME dev

EXPOSE 3000

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn global add nodemon
RUN yarn

# Bundle app source
COPY . .

CMD yarn dev


