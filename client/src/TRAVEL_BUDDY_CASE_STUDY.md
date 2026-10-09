# Travel Buddy: A Smart Travel Companion & Expense Management Platform

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)

**Final Year Project · BS Computer Science · Karachi Institute of Economics and Technology · 2026 · Team of 4**

> Source code is private (university project). A live walkthrough or demo is available on request.

## Pitch

Travel Buddy helps people travel together safely and fairly. It matches travellers with compatible companions, lets groups plan trips and chat in real time, keeps travel documents in one place, and is being extended with automatic expense splitting, transport booking and hotel reservations.

## The problem

- Finding a compatible travel companion is hard, and travelling alone raises safety concerns
- Group trips lack coordination
- Working out "who owes whom" after a trip is manual and causes disputes

## The solution

One MERN-stack platform with rule-based partner matching, real-time chat, safety features, a document vault and checklist, and (in FYP 2) an expense splitter and booking modules.

## Architecture

| Layer | Technology | Role |
|---|---|---|
| Frontend | React.js (SPA) | Trip dashboard and chat update instantly without page reloads |
| Backend | Node.js, Express.js | REST APIs, MVC structure, JWT-protected routes, custom middleware |
| Database | MongoDB, Mongoose | Users, trips, messages, document vault, expenses |
| Real-time | Socket.io | 1-to-1 and trip group chat |
| Auth & security | JWT, bcrypt | Protected routes, hashed passwords |
| Email & OTP | Brevo API | Email verification and OTP delivery |
| Automation | Node-Cron | Scheduled reminders until required travel documents are uploaded |

## Feature status

### Completed: FYP 1 (~70% of scope)

| Module | What it does |
|---|---|
| Authentication & security | Email OTP signup and login, JWT authentication, hashed passwords |
| Profile & preferences | Interests, budget range, travel style, visited destinations, profile visibility |
| Trip creation | Public or private trips with destination, dates and budget, plus member invites |
| Partner matching | Weighted scoring: destination (high), date overlap (medium), budget and interests (low), giving a 0 to 100% compatibility score |
| Real-time chat | 1-to-1 and group chat per trip with Socket.io |
| Safety & trust | Ratings and reviews, block and report, emergency contact details |
| Document vault | Upload CNIC, driving licence, tickets and hotel vouchers, with Node-Cron email reminders |
| Pre-trip checklist | Customisable packing and task list |

### In progress: FYP 2

| Module | What it will do |
|---|---|
| Expense splitter | Equal, percentage and custom splits, live balances, balance history, net settlement |
| Debt simplification | "Who owes whom" with the fewest payments |
| Transport management | Vehicle booking with a visual seat map, with costs added to the trip budget automatically |
| Hospitality integration | Date-based availability and capacity checks, bookings inside the itinerary |

### Added after jury feedback

| Module | What it will do |
|---|---|
| Hotel and rent-a-car portals | Owners register and enter their own details, inventory and services |
| Inter-city timings | Bus company and train timings shown while planning a trip |

## What makes it different

Splitwise handles expenses, Couchsurfing connects travellers, TripAdvisor offers reviews. Travel Buddy combines partner matching, trip planning, group chat, safety features and expense splitting in one platform.

## Resume bullets (edit the verbs to match what you personally built)

- Co-developed **Travel Buddy**, a MERN-stack travel companion platform (team of 4), as a BS Computer Science final year project
- Built a rule-based partner matching engine that scores destination, date overlap and budget/interests into a 0 to 100% compatibility score
- Implemented real-time 1-to-1 and group chat with **Socket.io**
- Secured the app with email OTP (**Brevo API**), **JWT**-protected routes and hashed passwords
- Automated document reminder emails with **Node-Cron**
- Designed REST APIs with **Express** (MVC) and a **MongoDB** schema for users, trips, messages, documents and expenses

## Short version (LinkedIn or CV)

**Travel Buddy (Final Year Project, 2026):** MERN-stack platform that matches travel partners, supports real-time trip chat, stores travel documents with automated reminders, and is being extended with an expense splitter and transport and hotel booking. Team of 4. Tech: React, Node.js, Express, MongoDB, Socket.io, JWT, Brevo, Node-Cron.
