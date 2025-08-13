#!/bin/bash

# FlowSounds MVP - Deployment Script
echo "🚀 FlowSounds MVP - Deployment Script"
echo "======================================"

# Build the application
echo "📦 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Next Steps:"
    echo "1. Go to https://netlify.com"
    echo "2. Sign up with GitHub (free)"
    echo "3. Drag and drop the 'dist' folder to deploy"
    echo "4. Get your live URL instantly!"
    echo ""
    echo "📁 Your built app is in the 'dist' folder"
    echo "🌐 Or use one of these commands:"
    echo ""
    echo "For Vercel:"
    echo "  npm install -g vercel && vercel"
    echo ""
    echo "For GitHub Pages:"
    echo "  npm install --save-dev gh-pages"
    echo "  npm run deploy"
    echo ""
    echo "For GCP Cloud Run:"
    echo "  Follow the steps in DEPLOYMENT.md"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
