FROM node
RUN npm install -g json-server
ENTRYPOINT ["json-server", "--watch", "db.json"]
COPY dist/blog-application/ /usr/share/nginx/html/