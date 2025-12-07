# Mangai Girls Hostel Portfolio

A modern, full-stack web application for a girls' hostel featuring user authentication, room booking with payment integration, and contact form functionality.

## 🚀 Tech Stack

### Frontend
- **HTML5** - Structure and content
- **CSS3** - Styling with custom design system
- **JavaScript (Vanilla)** - Interactive functionality
- **Razorpay Checkout** - Payment gateway integration

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database for user data
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email service for contact form
- **Bcrypt** - Password hashing
- **Razorpay SDK** - Payment processing
- **dotenv** - Environment variable management

## 📋 Features

- ✨ Modern, responsive UI with smooth animations
- 🔐 User authentication (signup/login) with secure password hashing
- 💳 Integrated payment gateway for room bookings (Razorpay)
- 📧 Functional contact form with email notifications
- 🏠 Room showcase with detailed information
- 📱 Mobile-friendly design
- 🎨 Custom design system with CSS variables

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- Gmail account (for contact form emails)
- Razorpay account (for payments)

### 1. Clone the Repository
```bash
git clone https://github.com/Kiruthick-07/Mangai_Girls_Hostel_Portfolio.git
cd Mangai_Girls_Hostel_Portfolio
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd Server_Side
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `Server_Side` directory:

```env
PORT=5000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
MONGO_URI=your_mongodb_connection_string

# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=rkiruthick55@gmail.com
```

**Getting the credentials:**

1. **MongoDB URI**: 
   - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Get your connection string from the cluster

2. **Razorpay Keys**:
   - Sign up at [Razorpay](https://razorpay.com/)
   - Get your test/live API keys from the dashboard

3. **Gmail App Password**:
   - Enable 2-Factor Authentication on your Gmail
   - Go to Google Account → Security → App passwords
   - Generate a new app password for "Mail"
   - Use the 16-character password in `EMAIL_PASS`

### 3. Run the Application

#### Start the Backend Server
```bash
cd Server_Side
node server.js
```

The server will start on `http://localhost:5000`

#### Access the Frontend
Open your browser and navigate to:
```
http://localhost:5000/index.html
```

The backend serves the frontend files automatically!

## 📁 Project Structure

```
Mangai_Girls_Hostel_Portfolio/
├── Assets/                  # Images and media files
├── Server_Side/            # Backend code
│   ├── models/            # MongoDB schemas
│   │   └── User.js       # User model
│   ├── .env              # Environment variables (not in git)
│   ├── server.js         # Main server file
│   └── package.json      # Backend dependencies
├── index.html             # Main landing page
├── login.html            # Login page
├── signin.html           # Signup page
├── style.css             # Main stylesheet
├── login.css             # Auth pages stylesheet
├── script.js             # Frontend JavaScript
└── README.md             # This file
```

## 🔌 API Endpoints

### Authentication
- `POST /signup` - Register new user
- `POST /login` - User login

### Payments
- `POST /order` - Create Razorpay order

### Contact
- `POST /contact` - Send contact form email

## 🎯 Usage

1. **Browse Rooms**: View available room types and pricing
2. **Sign Up**: Create an account with email and password
3. **Login**: Access your account
4. **Book Room**: Click "Book This Room" (requires login) → Opens payment gateway
5. **Contact**: Fill out the contact form to send inquiries

## 🔒 Security Features

- Password hashing with bcrypt
- Environment variables for sensitive data
- CORS enabled for API security
- MongoDB connection with authentication

## 🤝 Contributing

This is a portfolio project. Feel free to fork and customize for your own use!

## 📝 License

ISC

## 👤 Author

**Kiruthick**
- GitHub: [@Kiruthick-07](https://github.com/Kiruthick-07)

## 📧 Contact

For inquiries: rkiruthick55@gmail.com
