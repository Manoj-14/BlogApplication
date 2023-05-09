FROM nginx
COPY dist/blog-application/ /usr/share/nginx/html/

FROM node
RUN npm install -g json-server
WORKDIR db
COPY db.json .
ENTRYPOINT ["json-server", "--port", "3000", "--host", "52.205.213.5", "--watch", "db.json"]