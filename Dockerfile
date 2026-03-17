# ===== Stage 1: Build Vue (Vite) =====
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy semua source
COPY . .

# Build project (hasil ke dist/)
RUN pnpm build


# ===== Stage 2: Nginx =====
FROM nginx:alpine

# Copy hasil build ke nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]