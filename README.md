### 🚀 **Getting Started: Launching the Project**  

Welcome to our A/B Testing project using **GrowthBook**! Follow these simple steps to set up and run the project locally.  

---

## **📌 Prerequisites**
Before starting, make sure you have:  
✅ **Node.js 18+** installed  
✅ **Package manager** (`npm`, `yarn`, `pnpm`, or `bun`)  

---

## **⚡ Step 1: Install Dependencies**
First, install all necessary packages:  

```sh
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## **🚀 Step 2: Run the Development Server**
Start the project using your preferred package manager:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Now open **[http://localhost:3000](http://localhost:3000)** in your browser. 🎉  

---

## **🔧 Step 3: Configure GrowthBook**
To enable A/B testing, **add your GrowthBook API Key** in `growthbookProvider.tsx`:

```tsx
import { GrowthBook } from "@growthbook/growthbook-react";

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io", // API Host
  clientKey: "your-key-here", // 🔑 Your SDK API Key
  enableDevMode: process.env.NODE_ENV !== "production",
});
```
📌 **Replace** `"your-key-here"` with your actual **GrowthBook SDK API Key** (found in **GrowthBook → Settings → API Keys**).  

---