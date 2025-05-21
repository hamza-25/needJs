export const gitIgnoreContent = () => {
    return `
# Node modules
node_modules/

# Environment variables
.env

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db

# Build/Cache folders
dist/
build/
.cache/

# IDE-specific
.vscode/
.idea/

# Coverage reports
coverage/

# Docker (optional)
*.local
docker-compose.override.yml
    `;
}