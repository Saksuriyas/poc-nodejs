FROM 630725896053.dkr.ecr.ap-southeast-1.amazonaws.com/dtac-one-checkin-nodejs-template:latest

WORKDIR /app

COPY ["package.json", "package-lock.json*"]

COPY . .

CMD [ "node", "index.js" ]
