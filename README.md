# MetaCare - Medical Dashboard Application

MetaCare is a modern, responsive medical dashboard web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It provides a centralized platform for patients and doctors to monitor vital health signs, manage appointments, and track wellness metrics with clean visuals and intuitive navigation.

![MetaCare Dashboard]

## 🚀 Features

- 📊 **Medical Overview**: Displays interactive bubble charts for blood pressure, oxygen saturation, heart rate, hemoglobin, and PRQ levels.
- 📅 **Appointments**: Schedule and track appointments between patients and doctors.
- 💊 **Medication Module**: Expandable medication section for managing prescriptions.
- 🔔 **Notification System**: Real-time health and appointment alerts.
- 📈 **Health Scan & Report**: Scan health metrics via mobile and view summary reports.
- 🎯 **Wellness Score**: A simple, clear health score based on recent medical indicators.
- 💡 **Role-based UI**: Adaptable for both patients and doctors.

## 📁 Project Structure

/components
/dashboard # Charts, reports, and health modules
/layout # Sidebar, header
/ui # Reusable UI components (button, badge, avatar)
...
/lib
mock-data.ts # Sample user and notification data
utils.ts # Utility functions (e.g., cn for classnames)
...
app/
layout.tsx # Root layout with ThemeProvider
page.tsx # Home page (Dashboard)

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Zustand** (state management)
- **Mock Data** for demonstration

## 📦 Installation

```bash
git clone https://github.com/your-username/metacare-dashboard.git
cd metacare-dashboard
npm install
npm run dev
Then open http://localhost:3000 in your browser.


🧪 Testing
Testing is currently not included but can be added using:

Jest for unit testing

React Testing Library for component-level testing
```

Contributing
We welcome contributions! Fork the repo, create a feature branch, and submit a PR.

License
Licensed under MIT License.

Disclaimer: The health data visualizations are for demo purposes only and not intended for real medical diagnostics.
