FROM nginx:alpine

# default nginx 기본 페이지 제거. 
RUN rm -rf /usr/share/nginx/html/*

# copy source code to nginx html directory
COPY src/ /usr/share/nginx/html/

EXPOSE 80

