FROM nginx:latest
COPY . /usr/share/nginx/html
EXPOSE 7200
# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]