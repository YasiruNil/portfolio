FROM node:20-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install
EXPOSE 3000
# run command is used during the build phase,
# while CMD is used to specify the default command to run when the container starts.
CMD ["pnpm", "run", "dev"]