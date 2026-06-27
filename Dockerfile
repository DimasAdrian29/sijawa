# Stage 1: Build aplikasi React + Vite
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json dan install dependency terlebih dahulu (memanfaatkan cache layer)
COPY package*.json ./
RUN npm install

# Copy seluruh source code dan lakukan build
COPY . .
RUN npm run build

# Stage 2: Serve menggunakan Nginx
FROM nginx:alpine
# Copy hasil build Vite (biasanya masuk folder 'dist') ke folder Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy konfigurasi custom Nginx kita tadi
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]