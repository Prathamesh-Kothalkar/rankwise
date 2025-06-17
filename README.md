# 🎓 RankWise (Guess My College)

**RankWise** is a web application that helps students discover colleges based on their entrance exam percentile, category, preferred branch, and location. It is designed to simplify the college search and counseling process using historical data and intelligent filtering.

An AI-powered college predictor web app for MHT-CET aspirants to find best-fit colleges based on rank, category, and past cutoffs.

🔗 Live: [https://www.guessmycollege.in](https://www.guessmycollege.in)

---

## 🚀 Tech Stack

- **Frontend:** Next.js (TypeScript)
- **Styling:** Tailwind CSS, shadcn/ui
- **Package Manager:** pnpm
- **Backend:** Node.js API routes, Google Search API, Gemini GenAI
- **Database:** PostgreSQL (hosted on Aiven.io)
- **Cache**: Redis for caching summaries
- **Deployment:** 
   [Vercel](https://vercel.com/)


---

## 📦 Key Features

- 🔍 **College Predictor**  
  Instantly find colleges based on MHT-CET score, category, region, and branch preferences.

- 🧠 **AI-Powered Summarization**  
  Uses **Gemini** + **Google Programmable Search API** to summarize top college info using GenAI.

- ⚡ **Redis Caching**  
  Speeds up repeated queries by caching search results in Redis.

- 📄 **Export Options**  
  Users can download result lists as **CSV or PDF** with one click.

- 🛡️ **SEO Optimized**  
  Includes `sitemap.xml`, `robots.txt`, meta tags, and Open Graph data for improved Google indexing.

- 🖼️ **Responsive UI**  
  Built using **Tailwind CSS** and **shadcn/ui** for seamless performance across all screen sizes.

- 🧾 **Legal Pages**  
  Includes **Privacy Policy**, **Terms & Conditions**, and **About Us** pages for compliance.

---

### 👨‍🎓 Student Interface

Users can:

- 🎯 Enter **MHT-CET percentile** 
- 🏷️ Select **category/reservation** type
- 🧑‍🔬 Choose preferred **branch** (e.g., CS, IT, AI/DS)
- 📍 Filter by **region/location** (Mumbai, Pune, etc.)
- 📋 View matching colleges sorted by **cutoff closeness**
- ⭐ **Bookmark** preferred colleges
- 📁 **Export results** as CSV or PDF

---

### 🛠️ Admin Panel

Admins can:

- 📤 **Upload Excel data** of past cutoffs
- 🔐 Use a **secured dashboard** to manage college data
- 👥 View the **list of all registered users**
- 📊 Track app usage and submission patterns *(planned feature)*



### 🔐 Auth System
- Register and login pages with modern responsive UI

---

## 🛠️ Getting Started

### 1. Clone the Repository

- ```git clone https://github.com/Prathamesh-Kothalkar/rankwise.git```
- ```cd rankwise```
### 2. Install Dependencies
- ```pnpm install```
### 3. Run the Development Server
- ```pnpm dev```
Visit ```http://localhost:3000``` to view the app.
--- 
- 🧪 Planned Enhancements
- 🔒 Secure authentication and admin access
- 🧠 AI-based percentile prediction and cutoff suggestion
- 🌐 Multi-language support
- 📱 PWA support
---
🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change or improve.
---
🌟 Show Your Support
If you found this project helpful, please consider giving it a ⭐ on GitHub!
