# Faizan's Portfolio - PowerShell Setup Script

Write-Host "🚀 Setting up Faizan's Portfolio Website" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check if Node.js is installed
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check Node.js version
$nodeVersion = (node -v).Substring(1).Split('.')[0]
if ([int]$nodeVersion -lt 18) {
    Write-Host "❌ Node.js version 18+ is required. Current version: $(node -v)" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Node.js $(node -v) detected" -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Copy assets if they exist
if (Test-Path "faizanpic.jpg") {
    Copy-Item "faizanpic.jpg" "public/faizanpic.jpg"
    Write-Host "✅ Profile image copied to public directory" -ForegroundColor Green
}

if (Test-Path "Resume - Faizan_Azhar_Software_Eng.pdf") {
    Copy-Item "Resume - Faizan_Azhar_Software_Eng.pdf" "public/Resume - Faizan_Azhar_Software_Eng.pdf"
    Write-Host "✅ Resume copied to public directory" -ForegroundColor Green
}

# Build the project to check for issues
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Setup complete! Next steps:" -ForegroundColor Cyan
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host "1. Run 'npm run dev' to start development server" -ForegroundColor White
    Write-Host "2. Open http://localhost:3000 in your browser" -ForegroundColor White
    Write-Host "3. Customize your data in src/lib/data.ts" -ForegroundColor White
    Write-Host "4. Deploy to Azure Static Web Apps when ready" -ForegroundColor White
    Write-Host ""
    Write-Host "Happy coding! 🚀" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}
