# Use official Node.js image
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile || pnpm install

# Copy the rest of the source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Run Next.js in development mode (has built-in hot reload)
CMD ["pnpm", "dev"]