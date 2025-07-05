# 🧠 AI Alt Text Generator - Framer Plugin

A powerful Framer plugin that automatically generates accessible alt text for images using AI services like DeepSeek Vision, Hugging Face, and LLaVA.

## ✨ Features

- **Smart Image Detection**: Automatically scans your Framer canvas for images
- **AI-Powered Alt Text**: Generate descriptive alt text using multiple AI services
- **Multiple AI Services**: Support for DeepSeek Vision, Hugging Face, and LLaVA
- **Beautiful UI**: Modern, clean interface with loading states and error handling
- **Batch Processing**: Generate alt text for all images at once
- **Manual Editing**: Edit generated alt text before saving
- **Real-time Updates**: Changes are applied directly to your Framer canvas

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your Free API Key

Choose one of these free AI services:

#### Option 1: DeepSeek Vision (Recommended)
1. Visit [DeepSeek Console](https://platform.deepseek.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-`)

#### Option 2: Hugging Face
1. Visit [Hugging Face](https://huggingface.co/)
2. Create a free account
3. Go to Settings → Access Tokens
4. Create a new token
5. Copy the token

#### Option 3: LLaVA
1. Visit [LLaVA API](https://llava.ai/)
2. Sign up for an account
3. Get your API key from the dashboard

### 3. Development

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Pack Plugin

```bash
npm run pack
```

## 🎯 How to Use

1. **Open Framer**: Launch Framer and open your project
2. **Add Plugin**: Import the packed plugin into your Framer project
3. **Enter API Key**: Paste your API key in the plugin panel
4. **Select Service**: Choose your preferred AI service
5. **Scan Canvas**: Click "Scan Canvas" to detect images
6. **Generate Alt Text**: Use "Generate" for individual images or "Generate All" for batch processing
7. **Edit & Save**: Review and edit the generated alt text, then save

## 🔧 Configuration

### API Services Comparison

| Service | Free Tier | Quality | Speed | Setup |
|---------|-----------|---------|-------|-------|
| DeepSeek Vision | ✅ 1000 requests/month | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Easy |
| Hugging Face | ✅ 30,000 requests/month | ⭐⭐⭐⭐ | ⭐⭐⭐ | Easy |
| LLaVA | ✅ Limited | ⭐⭐⭐⭐ | ⭐⭐⭐ | Medium |

### Environment Variables

Create a `.env` file for development:

```env
DEEPSEEK_API_KEY=your_deepseek_key_here
HUGGINGFACE_API_KEY=your_huggingface_key_here
LLAVA_API_KEY=your_llava_key_here
```

## 🛠️ Development

### Project Structure

```
src/
├── main.tsx          # Plugin entry point
├── ui.tsx           # Main UI component
├── code.ts          # Framer plugin logic
├── api.ts           # AI service integrations
└── vite-env.d.ts    # TypeScript declarations
```

### Key Components

- **ImageItem**: Individual image component with alt text editing
- **AltTextPlugin**: Main plugin component with canvas integration
- **API Services**: Modular AI service integrations

### Adding New AI Services

1. Add the service function in `src/api.ts`
2. Update the service type in the UI
3. Add the service option to the dropdown

## 🐛 Troubleshooting

### Common Issues

**"No images found"**
- Make sure you have images on your Framer canvas
- Try refreshing the plugin

**"API Error"**
- Check your API key is correct
- Verify your API service is active
- Check your internet connection

**"Network error"**
- Ensure you have a stable internet connection
- Try switching to a different AI service

### Debug Mode

Enable debug logging by adding this to your browser console:

```javascript
localStorage.setItem('debug', 'true');
```

## 📝 License

MIT License - feel free to use this plugin in your projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section
2. Search existing issues
3. Create a new issue with details

## 🎉 Acknowledgments

- Framer for the amazing plugin API
- DeepSeek, Hugging Face, and LLaVA for their AI services
- The open-source community for inspiration

---

**Made with ❤️ for better web accessibility**
