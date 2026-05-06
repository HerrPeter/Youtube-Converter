# 🎥 YouTube Downloader & OCR Calendar Generator (Frontend)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## 📌 Overview

This project is the frontend web application built using Angular that connects to a backend server to:

- Download YouTube videos and playlists
- Select audio-only or full video downloads
- Upload schedule images for OCR processing
- Generate downloadable calendar (.ics) files

## 🚀 Features

- Video and playlist downloads
- Audio-only or full video options
- OCR calendar generation
- Passcode validation

## 🛠 Tech Stack

- Angular
- TypeScript
- Angular HttpClient
- Vercel (used for Continuous App Integration/Deployment)

## 📂 Project Structure

frontend/
├── src/
├── assets/
├── environments/
├── angular.json
└── yarn.lock

## ⚙️ Installation

npm install

## ▶️ Run

ng serve

App runs at http://localhost:4200

## 🔗 Backend

Make sure backend is running at: https://monkfish-witty-unlikely.ngrok-free.app
Make sure backend calendar cloud server is running at: https://ytdlp-api-c74offy3ga-uw.a.run.app

## Dev Notes

- Popups cannot be blocked (in development)
