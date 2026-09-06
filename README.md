# Edge-Space-ML Radar

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)

## Abstract
Edge-Space-ML Radar is a specialized analytical dashboard that catalogs and evaluates entities at the intersection of aerospace engineering and machine learning. By quantifying domain-specific metrics—such as low-level hardware acceleration, computer vision pipeline efficiency, and aerospace applicability—it provides researchers and practitioners with an interactive, data-driven directory to navigate startups, academic programs, and open-source ecosystems.

## Architecture & Pipeline
The application employs a client-side computational architecture to dynamically process and visualize multi-dimensional entity data. 
- **Data Layer:** Entity data is structured using strict TypeScript interfaces (`SpaceMLEntity`), ensuring type safety and consistency across academic, industrial, and open-source categories.
- **Processing Engine:** A Euclidean distance-based matching algorithm computes proximity scores in a 3D feature space (Hardware, Vision, Aerospace) against dynamic user-defined target vectors.
- **Visualization Pipeline:** The computed metrics are fed into responsive Recharts modules (e.g., multi-axial scatter plots) and customized DOM components, utilizing React state hooks for real-time rerendering upon threshold adjustments.

## Tech Stack
* **Framework:** Next.js (v16.2.9)
* **UI Library:** React (v19.2.4)
* **Styling:** Tailwind CSS (v4)
* **Language:** TypeScript
* **Visualization:** Recharts
* **Iconography:** Lucide-React

## Getting Started

Follow these steps to deploy the application locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd space-ml-radar
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to interact with the radar dashboard.
