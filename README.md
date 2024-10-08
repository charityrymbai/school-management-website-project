# **How to setup Project locally**

-    Install the required dependencies

```bash
   npm install
```

-    Add .env file in the apps/web with the following contents so that all the backend requests goes to this url 'http://127.0.0.1:8787'. Change this url according to your needs

```bash
VITE_REACT_APP_API_URL=http://127.0.0.1:8787
```

-    Add .env file consisting of a postgres connection string of the following format in the apps/backend

```bash
DATABASE_URL="POSTGRES CONNECTION STRING"
```

-    As this project is using Prisma, after every change to the DB we do the following commands
-    migrating the database

```bash
npx prisma migrate dev --name NAME_OF_MIGRATION
```

-    Generate the prisma Client

```bash
npx prisma generate --no-engine
```

### Additional

#### Linting

-    run the following

```bash
npm run lint
```

#### Formatting using Prettier

-    run the following

```bash
npm run format
```

# **Techstack used**

## Build Orchestrator

-    Turbo Repo

## FrontEnd

### Build Framework

-    Vite

### Libraries

-    React

### Styling Framework

-    Tailwind CSS

## Backend

Backend is deployed using Cloudflare Workers - Serverless functions

### Framework Used

-    Hono

### Input Validation Library

-    Zod

### Authentication

-    Hono/jwt middleware

## Database

-    Postgres

### Deploying

#### Backend

-    Create account in cloudflare workers

-    run the following in apps/backend to login to account

```bash
wrangler login
```

-    run the following to deploy to worker

```bash
npm run deploy
```

### Frontend

-    While deploying the frontend make sure to include environment variables in whatever deploying service you're using to include the following

```bash
VITE_REACT_APP_API_URL=<ACTUAL_BACKEND_LINK>

```

## **Website Outline for School Management [Expected outline to built]**

#### **1. Home Page**

-    **Header**
     -    School logo
     -    Navigation menu (Home, About, Contact, Login)
-    **Main Banner**
     -    Welcome message
     -    Key features summary
-    **Quick Links**
     -    Links to student and teacher login portals
     -    Announcements and news
-    **Footer**
     -    Contact information
     -    Social media links
     -    Privacy policy and terms of service

#### **2. User Authentication**

-    **Login Page**
     -    Option for student and teacher login
     -    Forgot password link
-    **Registration Page (if required)**
     -    Separate forms for students and teachers
     -    Validation for student IDs and teacher credentials

#### **3. Student Dashboard**

-    **Overview**
     -    Welcome message with student name
     -    Quick summary (attendance, grades, library books, fees)
-    **Fees Management**
     -    Current fee status
     -    Online payment portal (integration with payment gateways)
     -    Payment history
-    **Grades**
     -    View current grades
     -    Download report cards
-    **Attendance**
     -    Monthly attendance record
     -    Detailed view (days absent/present)
-    **Library Records**
     -    Current borrowed books
     -    Due dates and fines
     -    Book search and reservation
-    **Additional Features**
     -    Notifications (assignments, exams, events)
     -    Timetable (class schedule)
     -    Communication portal (messaging system with teachers)
     -    Downloadable resources (syllabus, notes, assignments)

#### **4. Teacher Dashboard**

-    **Overview**
     -    Welcome message with teacher name
     -    Quick summary (leave balance, upcoming classes)
-    **Leave Management**
     -    Current leave balance
     -    Apply for leave
     -    Leave application status
-    **Student Management**
     -    View and update student grades
     -    Attendance marking and reports
     -    Manage student remarks and notes
-    **Library Records**
     -    View personal borrowed books
     -    Due dates and fines
-    **Additional Features**
     -    Class management (scheduling, lesson plans)
     -    Notifications (school announcements, events)
     -    Communication portal (messaging system with students and parents)
     -    Resource sharing (upload notes, assignments)

#### **5. Admin Panel (for school administrators)**

-    **User Management**
     -    Add, edit, delete student and teacher accounts
     -    Role and permissions management
-    **Fees Management**
     -    Track overall fee collection
     -    Generate fee reports
-    **Grades and Attendance**
     -    Monitor and audit grades and attendance records
     -    Generate academic reports
-    **Library Management**
     -    Manage library inventory
     -    Oversee book lending records
-    **Leave Management**
     -    Approve/reject teacher leave applications
-    **Notifications and Announcements**
     -    Publish school-wide announcements
     -    Manage event calendar

#### **6. Contact Page**

-    **Contact Form**
     -    For general inquiries
-    **School Address and Map**
     -    Physical location with Google Maps integration
-    **Administrative Contacts**
     -    Key contact details for various departments

#### **7. About Page**

-    **School Information**
     -    Mission, vision, and history
-    **Administration**
     -    Profiles of key administrative staff
-    **Achievements**
     -    School accolades and awards

#### **8. Help and Support**

-    **FAQs**
     -    Commonly asked questions and answers
-    **User Guides**
     -    How-to guides for using the website features
-    **Support Contact**
     -    Technical support contact information

### **Additional Considerations**

-    **Mobile Responsiveness**
     -    Ensure the website is accessible on mobile devices
-    **Security**
     -    Implement robust security measures to protect user data
-    **User Feedback**
     -    Option for users to submit feedback on website usability
