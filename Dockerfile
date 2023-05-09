FROM nginx
COPY dist/blog-application/ /usr/share/nginx/html/

FROM node
RUN npm install -g json-server
WORKDIR db
COPY db.json .
ENTRYPOINT ["json-server", "--port", "8080", "--host", "0.0.0.0", "--watch", "db.json"]