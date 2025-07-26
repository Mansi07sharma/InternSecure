# 🛡️ InternSecure

> **Detect Fake & Unverified Internships**  
InternSecure is an AI-powered platform that helps users identify fake, suspicious, or scam internship offers. Whether you're a student, a fresher, or a job seeker, InternSecure empowers you to verify the legitimacy of internship postings and company backgrounds before you apply.

---

## 🚀 Features

- 🔍 **Internship Scam Analysis**
  - Paste any internship description and get an instant analysis using **Gemini AI**.
  - Output includes: real/fake/suspicious classification, scam score, and detailed security analysis.

- 🌐 **Company WHOIS Verification**
  - Enter a company's domain name to fetch registration details using the **WHOIS API**.
  - Includes registrar, creation date, expiry date, organization name, and more.

- 📊 **AI-Based Risk Score**
  - The platform assigns a scam/risk score to help users quickly gauge the credibility of an internship offer.

- 📄 **Detailed Report Generation**
  - Users get a clean report summarizing red flags, trust indicators, domain history, and verification status.

- ✅ **User-Friendly Interface**
  - Responsive and minimalist UI for fast, distraction-free analysis.

---

## 🛠️ Tech Stack

| Technology     | Description                              |
|----------------|------------------------------------------|
| **Next.js**    | React Framework for SSR and routing      |
| **React.js**   | UI library for building interactive views|
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Gemini API** | AI model used for internship analysis    |
| **WHOIS API**  | Retrieves domain registration information|

---

## 🧠 How It Works

1. **Enter** internship description → **Gemini API** analyzes and returns authenticity + scam score.
2. **Enter** company domain → **WHOIS API** fetches domain registration and credibility data.
3. The platform **combines** both sources to generate a comprehensive **Internship Risk Report**.

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Mansi07sharma/InternSecure.git
cd InternSecure

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
