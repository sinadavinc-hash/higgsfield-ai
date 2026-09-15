# Higgsfield AI Studio

AI Image & Video Generator with Gemini Integration using Higgsfield Tools Suite.

## Features

- 🤖 **Gemini AI Integration** - Smart chat interface
- 🎨 **54+ Higgsfield Tools** - Image, video, and creative tools
- 👤 **Random User Generation** - New user each session for extended credits
- 📱 **Responsive Web App** - Works on all devices
- 💾 **Save & Export** - Download generated content
- 🎬 **Real-time Preview** - Instant media preview

## Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn
- Gemini API Key
- Higgsfield API Key

### Installation

```bash
git clone https://github.com/sinadavinc-hash/higgsfield-ai.git
cd higgsfield-ai
npm install
```

### Configuration

1. Copy `.env.local` and add your API keys:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_key_here
NEXT_PUBLIC_HIGGSFIELD_API_KEY=your_key_here
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
higgsfield-ai/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       ├── gemini/
│       ├── higgsfield/
│       └── users/
├── components/
│   ├── Chat/
│   ├── Tools/
│   └── Gallery/
├── lib/
│   ├── gemini.ts
│   ├── higgsfield.ts
│   └── randomUser.ts
├── public/
├── .env.local
├── package.json
├── tsconfig.json
└── README.md
```

## Available Tools

- Image Generation (11+ models)
- Video Generation (7+ models)
- Upscaling & Enhancement
- Face Swap & Effects
- And 50+ more!

## API Routes

- `/api/gemini` - Gemini chat endpoint
- `/api/higgsfield` - Higgsfield tools endpoint
- `/api/users` - Random user generation
- `/api/gallery` - Save/retrieve generated content

## License

MIT
