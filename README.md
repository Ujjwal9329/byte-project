# ByteSpark - Premium Skincare E-Commerce

**ByteSpark** is a modern, full-stack e-commerce application designed for premium skincare products. It features a stunning, high-performance frontend with 3D elements and smooth animations, backed by a robust RESTful API.

## 🚀 Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: React Router DOM

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Payment Gateway**: [Razorpay](https://razorpay.com/)
- **Authentication**: JWT (JSON Web Tokens)

---

## 📂 Project Structure

```bash
byte-project/
├── backend/                # Server-side logic
│   ├── server.js           # Main entry point
│   ├── seeder.js           # Database seeder
│   └── package.json
├── frontend/               # Client-side application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Full page components
│   │   ├── data/           # Static data (products.js)
│   │   └── context/        # React Context (Cart, Auth)
│   ├── public/             # Static assets (images, videos)
│   └── package.json
└── package.json            # Root configuration
```

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas URL)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Ujjwal9329/byte-project.git
    cd byte-project
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd ../frontend
    npm install
    ```

### Environment Configuration

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bytespark
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

---

## 🏃‍♂️ Running the Project

To run the application, you need to start both the backend server and the frontend development server.

**1. Start the Backend**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

**2. Start the Frontend** (in a new terminal)
```bash
cd frontend
npm run dev
# Client runs on http://localhost:5173
```

---

## 🤝 Contribution Guidelines

We welcome contributions to **ByteSpark**! Please follow these steps to maintain the project structure and code quality:

1.  **Fork & Clone**: Fork the repo and clone it locally.
2.  **Create a Branch**: Always work on a separate branch for new features or bug fixes.
    ```bash
    git checkout -b feature/amazing-new-feature
    ```
3.  **Code Style**:
    - Use meaningful variable and function names.
    - Keep components small and reusable.
    - Use directory aliases (if configured) or relative paths consistently.
4.  **Commits**: Use clear, descriptive commit messages.
    - `feat: Add new user profile page`
    - `fix: Resolve layout issue on mobile`
    - `docs: Update API documentation`
5.  **Pull Request**: Push your changes and open a Pull Request (PR) to the `main` branch. Provide a detailed description of your changes.

---

## 📝 License

This project is licensed under the [ISC](https://opensource.org/licenses/ISC) License.
