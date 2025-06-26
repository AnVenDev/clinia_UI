# ClinaAI – Intelligent Healthcare Platform (Frontend + Appwrite + AI Modules)

**ClinaAI** is an advanced platform designed to simplify and enhance healthcare operations through intelligent appointment scheduling, multimodal communication, and the integration of cutting-edge AI technologies, including **Machine Learning (ML)**, **Deep Learning (DL)**, **Natural Language Processing (NLP)**, and **Large Language Models (LLM)**.

This repository contains the **frontend application**, developed in **Next.js**, with a **multi-role interface** (patients, doctors, secretaries, administrators) and integrated with **Appwrite** for authentication, data management, and file storage.  
It also connects to external AI microservices for language and voice understanding.

---

## 🔑 Key Features

- Secure authentication via Appwrite (email, magic link, OTP)
- Personalized dashboards for each user role
- Intelligent medical calendar and appointment scheduling
- Automated reminders via WhatsApp and voice (text-to-speech)
- Integration with NLP-based chatbot and voicebot for patient support
- Upload and management of medical documents using Appwrite Storage
- AI modules for:
  - Sentiment and emotion detection in patient communication
  - Clinical note summarization and entity extraction (NER)
  - Psychological triage and mental health analysis via LLMs
  - Symptom classification and condition suggestion

---

## 🧠 AI Technologies Used (external microservices)

- LLMs (BERT, BioBERT, LLaMA) via Hugging Face or custom endpoints
- NLP pipelines for document parsing, summarization, anonymization
- Voice analysis with Whisper / pyannote-audio (planned)
- PyTorch and Transformers-based APIs served via FastAPI

These services are **external to the frontend** and connect via secure API calls.

---

## 🧱 Project Structure

The project is organized for modularity and scalability:

- `lib/`: Appwrite SDK configuration  
- `hooks/`: Custom React hooks for authentication, user logic, appointments  
- `pages/`: Public and protected views for each role  
- `components/`: Reusable UI components  
- `utils/`: Formatting, API calls, helpers  
- External: AI microservices for NLP and voice accessible via API

---

## 📦 Requirements

- Node.js (version 18 or higher)
- A running Appwrite
- Configure .env.local
- Run the development server: npm run dev

---

## 📌 Notes

- AI-powered features (chatbot, summarizer, emotion analysis) are managed by external microservices not included in this repository.
- You are free to connect to your own AI models or use existing endpoints (e.g., OpenAI, Hugging Face Spaces, or custom FastAPI servers).

---

## 📜 License

MIT License: you are free to use, modify, and adapt this project for commercial and non-commercial purposes.

---

## ✨ Author

Developed by Andrea Venè, combining technology, empathy, and AI to redefine healthcare experiences.
