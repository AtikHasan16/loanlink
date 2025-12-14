# 🏦 LoanLink - Microloan Request & Approval Tracker

LoanLink is a comprehensive web-based platform designed to bridge the gap between microfinance institutions and borrowers. It streamlines the entire loan lifecycle—from application and verification to approval and repayment tracking—replacing chaotic manual processes with a unified, digital solution.

---

## 🔗 Live Links

- **🌐 Live Website**: [Visit Now](https://loanlink-app.netlify.app/)
- **📂 Server Repository**: [Server GitHub Link](https://github.com/AtikHasan16/server-loanlink)
- **📂 Client Repository**: [Client GitHub Link](https://github.com/AtikHasan16/loanlink.git)

---

## 🛠️ Technology Stack

### **Frontend**

- **React 19** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI 5** - Component library built on Tailwind
- **React Router 7** - Client-side routing
- **TanStack React Query 5** - Data fetching & caching
- **Motion 12** - Smooth animations
- **Axios** - HTTP client for API requests
- **React Icons 5** - Icon library

### **Backend**

- **Node.js & Express 5** - Server framework
- **MongoDB 7** - NoSQL database
- **CORS** - Cross-origin resource sharing

### **Authentication & Tools**

- **Firebase** - Email/Password & Google authentication + JWT with HttpOnly Cookies
- **React Hook Form** - Form management & validation
- **SweetAlert2** - Beautiful popup alerts
- **React Chart.js 2** - Data visualization
- **React Spinners** - Loading indicators

---

## ✨ Key Features

### 🌍 General

- **Responsive Design** - Fully optimized for Mobile, Tablet, and Desktop using Tailwind CSS
- **Theme Toggle** - Seamless Dark/Light mode switching
- **Secure Authentication** - Firebase (Email/Password & Google) + JWT (HttpOnly Cookie) for private routes
- **Smooth Animations** - UI transitions using Motion library
- **Error Handling** - User-friendly error pages and notifications

### 👤 Borrower (User)

- **Personal Dashboard** - View applied loans and track current status
- **Loan Application** - Easy-to-use form with auto-filled user data
- **Payment Integration** - Secure payment processing for application fees
- **Application Withdrawal** - Option to cancel pending applications
- **Loan History** - View past applications and approval status

### 👔 Manager (Loan Officer)

- **Loan Product Management** - Add, update, and delete loan products
- **Application Review** - Approve or Reject loan applications with comments
- **Manager Dashboard** - Overview of total, pending, and approved loans
- **Analytics** - Visual charts and statistics for better decision-making
- **Bulk Operations** - Efficient management of multiple applications

### 🛡️ Admin

- **User Management** - Manage user roles (Promote to Manager, Suspend Users)
- **System Oversight** - Visualize all data via comprehensive tables and charts
- **Content Control** - Toggle which loans appear on the Home page
- **Audit Logs** - Track system activities and changes
- **Statistics Dashboard** - Overall platform metrics and insights

---

## 📦 NPM Packages Used

| Package                 | Version   | Purpose                      |
| ----------------------- | --------- | ---------------------------- |
| `react`                 | ^19.2.0   | UI library                   |
| `react-dom`             | ^19.2.0   | React DOM rendering          |
| `react-router`          | ^7.10.1   | Client-side routing          |
| `axios`                 | ^1.13.2   | HTTP requests to backend     |
| `firebase`              | ^12.6.0   | Authentication handling      |
| `@tanstack/react-query` | ^5.90.12  | Data fetching & caching      |
| `react-hook-form`       | Latest    | Form management & validation |
| `tailwindcss`           | ^4.1.17   | CSS framework                |
| `daisyui`               | ^5.5.8    | Component library            |
| `react-icons`           | ^5.5.0    | Icon library                 |
| `motion`                | ^12.23.25 | Animations                   |
| `chart.js`              | ^4.5.1    | Chart library                |
| `react-chartjs-2`       | ^5.3.1    | React wrapper for Chart.js   |
| `react-spinners`        | ^0.17.0   | Loading spinners             |

### Backend Packages

| Package   | Version | Purpose               |
| --------- | ------- | --------------------- |
| `express` | ^5.2.1  | Server framework      |
| `mongodb` | ^7.0.0  | Database driver       |
| `cors`    | ^2.8.5  | Cross-origin requests |
| `dotenv`  | ^17.2.3 | Environment variables |

---

## 🔑 Admin & Manager Credentials (For Testing)

> **Note to Examiner**: Please use these credentials to test the role-based dashboards.

| Role    | Email                  | Password     |
| ------- | ---------------------- | ------------ |
| Admin   | `admin@loanlink.com`   | `Admin123`   |
| Manager | `manager@loanlink.com` | `Manager123` |

---

## 🚀 Environment Variables

### Client Setup

Create a `.env.local` file in the `client-loanlink` folder with the following variables:

```bash
# API Configuration
VITE_API_URL=http://localhost:5000

# Firebase Configuration
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_sender_id
VITE_appId=your_firebase_app_id

# Payment Gateway
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Server Setup

Create a `.env` file in the `server-loanlink` folder:

```bash
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string
DB_NAME=loanlink

# Server Port
PORT=5000

# JWT Secret
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=7d

# Firebase Admin SDK (Optional)
FIREBASE_PROJECT_ID=your_firebase_project_id
```

---

## ⚡ How to Run Locally

### 1. **Clone the Repository**

```bash
git clone https://github.com/AtikHasan16/loanlink.git
cd loanlink
```

### 2. **Setup Client**

Navigate to the client folder:

```bash
cd client-loanlink
```

Install dependencies:

```bash
npm install
```

Create `.env.local` file and add environment variables (see above).

Run the development server:

```bash
npm run dev
```

The client will be available at `http://localhost:5173` (or the port shown in terminal).

### 3. **Setup Server**

Navigate to the server folder (in a new terminal):

```bash
cd server-loanlink
```

Install dependencies:

```bash
npm install
```

Create `.env` file and add environment variables (see above).

Start the server:

```bash
node index.js
```

The server will be running at `http://localhost:5000`.

---

## 📂 Project Structure

### Client Structure

```
client-loanlink/
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Hero.jsx
│   ├── Contexts/           # React Context for state management
│   │   ├── Context/
│   │   │   └── AuthContext.jsx
│   │   └── Provider/
│   │       └── AuthProvider.jsx
│   ├── Firebase/           # Firebase configuration
│   │   └── firebase.config.js
│   ├── Hooks/              # Custom React hooks
│   ├── Layouts/            # Page layouts
│   │   ├── DashboardLayout.jsx
│   │   └── HomeLayout.jsx
│   ├── Pages/              # Page components
│   │   ├── Dashboard/
│   │   ├── Home/
│   │   ├── Error/
│   │   └── Loading/
│   ├── Routers/            # Route configuration
│   │   └── Router.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── public/                 # Static assets
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

### Server Structure

```
server-loanlink/
├── index.js               # Server entry point
├── client.js              # Database client setup
└── package.json
```

---

## 🔐 Security Features

✅ **Secure Authentication**

- Firebase email/password authentication
- Google OAuth integration
- JWT stored in HttpOnly cookies (CSRF protection)

✅ **Protected Routes**

- Role-based access control (Borrower, Manager, Admin)
- Private route guards
- Automatic redirect for unauthorized users

✅ **Data Protection**

- CORS configuration for trusted origins
- Environment variables for sensitive data
- Secure API endpoints

---

## 🐛 Development & Debugging

### Build for Production

```bash
cd client-loanlink
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📞 Support & Future Development

This project is actively maintained and ready for further development. For:

- **Feature requests** - Discuss with me for implementation planning
- **Bug fixes** - Report issues and I'll help resolve them
- **Enhancements** - Ask for guidance on new features
- **Deployment** - I can assist with Firebase Hosting or Vercel deployment
- **Database optimization** - Help with MongoDB indexing and queries

---

## 📝 Notes for Deployment

1. **Firebase Hosting** - Deploy client to Firebase for free hosting
2. **Vercel** - Alternative option for client deployment
3. **Railway/Render** - Deploy Node.js server with MongoDB
4. **Environment Variables** - Always use production variables before deploying
5. **HTTPS** - Ensure all production URLs use HTTPS

---

## 📄 License

This project is open source and available under the ISC License.

---

## 👨‍💻 Author

**Developed with ❤️ by MD Atik Hasan**

- GitHub: [@AtikHasan16](https://github.com/AtikHasan16)
- Email: [Your Email]
- Portfolio: [Your Portfolio Link]

---

## 🙏 Acknowledgments

- Special thanks to all contributors and testers
- Built with modern React and Node.js best practices
- Inspired by real-world microfinance challenges

---

**Happy Coding! 🚀**
