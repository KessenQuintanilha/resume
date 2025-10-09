# deploy.ps1
# Script para build + deploy automático do Angular para GitHub Pages

# Configurações
$repoUrl = "https://github.com/kessenquintanilha/resume.git"
$baseHref = "https://kessenquintanilha.github.io/resume/"

Write-Host "==============================="
Write-Host "  Iniciando deploy do Angular  "
Write-Host "==============================="

# 1. Limpa cache do gh-pages
Write-Host "Limpando cache do gh-pages..."
npx gh-pages-clean

# 2. Build do Angular
Write-Host "Gerando build de produção..."
ng build --configuration production --base-href $baseHref

# 3. Deploy para gh-pages
Write-Host "Enviando arquivos para a branch gh-pages..."
npx gh-pages -d dist/curriculo_online/browser -b gh-pages -r $repoUrl

Write-Host "==============================="
Write-Host "     🎉  Deploy concluído! 🎉      "
Write-Host "==============================="
