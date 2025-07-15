#!/bin/bash

echo "🚀 Setting up Faizan's Portfolio Website"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Copy assets if they exist
if [ -f "faizanpic.jpg" ]; then
    cp faizanpic.jpg public/faizanpic.jpg
    echo "✅ Profile image copied to public directory"
fi

if [ -f "Resume - Faizan_Azhar_Software_Eng.pdf" ]; then
    cp "Resume - Faizan_Azhar_Software_Eng.pdf" "public/Resume - Faizan_Azhar_Software_Eng.pdf"
    echo "✅ Resume copied to public directory"
fi

# Build the project to check for issues
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
    echo ""
    echo "🎉 Setup complete! Next steps:"
    echo "=================================="
    echo "1. Run 'npm run dev' to start development server"
    echo "2. Open http://localhost:3000 in your browser"
    echo "3. Customize your data in src/lib/data.ts"
    echo "4. Deploy to Azure Static Web Apps when ready"
    echo ""
    echo "Happy coding! 🚀"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
