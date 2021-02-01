FROM nginx:1.15-alpine
COPY build /usr/local/nginx/html
# COPY conf /etc/nginx/
WORKDIR /usr/local/nginx/html