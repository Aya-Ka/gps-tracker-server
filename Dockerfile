FROM node:11

ADD . /code
WORKDIR /code
RUN npm install

# Environment variables which handle runtime behaviour.
ENV PORT 3000
ENV HOST 0.0.0.0

CMD ["npm", "start"]