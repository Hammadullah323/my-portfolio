// Naya project add karna ho to is array mein ek aur object paste karo.
// myRole: apna role likho (jaise 'Frontend (React) and UI design'). Khali chhoda to site par nahi dikhega.

export const projects = [
  {
    id: 'travel-buddy',
    title: 'Travel Buddy',
    subtitle: 'A Smart Travel Companion & Expense Management Platform',
    type: 'Final Year Project · BS Computer Science · KIET · 2026',
    team: 'Team of 4',
    myRole: 'Backend Developer (MERN Stack)',
    status: [
      { label: 'FYP 1: core modules completed (~70% of scope)', done: true },
      { label: 'FYP 2: in progress', done: false },
    ],
    problem:
      'Travellers struggle to find compatible companions, coordinate group trips, feel unsafe travelling alone, and waste time working out "who owes whom" after the trip.',
    solution:
      'One MERN-stack platform that matches travellers with a rule-based scoring engine, lets them plan trips and chat in real time, keeps their travel documents in one place, and (in FYP 2) splits expenses and books transport and stays.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      
      'Socket.io',
      'JWT',
      'bcrypt',
      'Brevo API',
      'Node-Cron',
    ],
    flow: [
      { name: 'React SPA', detail: 'Trip dashboard and chat update instantly without page reloads' },
      { name: 'Express REST API', detail: 'MVC structure, JWT-protected routes, custom middleware' },
      { name: 'MongoDB (Mongoose)', detail: 'Users, trips, messages, document vault, expenses' },
    ],
    services: [
      { name: 'Socket.io', detail: 'Real-time 1-to-1 and trip group chat' },
      { name: 'Brevo API', detail: 'Email verification and OTP delivery' },
      { name: 'Node-Cron', detail: 'Scheduled email reminders for missing travel documents' },
    ],
    highlights: [
      'Rule-based partner matching: destination (high weight), date overlap (medium), budget and interests (low), giving a 0 to 100% compatibility score',
      'Real-time chat with Socket.io for 1-to-1 and per-trip group rooms',
      'Email OTP signup and login with JWT-protected routes and hashed passwords',
      'Automated background reminders with Node-Cron until the mandatory travel documents are uploaded',
      'Safety layer: ratings and reviews, block and report, emergency contact details',
    ],
    features: {
      done: [
        {
          title: 'Authentication & Security',
          text: 'Signup and login with email OTP (Brevo API), JWT authentication to protect routes, and bcrypt-hashed passwords.',
        },
        {
          title: 'Profile & Travel Preferences',
          text: 'Travel interests, budget range, travel style, visited destinations and profile visibility controls.',
        },
        {
          title: 'Trip Creation & Itinerary',
          text: 'Create public or private trips with destination, dates and budget, and invite other travellers to join.',
        },
        {
          title: 'Partner Matching Engine',
          text: 'Weighted scoring on destination, date overlap and budget/interests to suggest the most compatible travel partners.',
        },
        {
          title: 'Real-Time Chat',
          text: 'Instant 1-to-1 and trip group chat powered by Socket.io, without refreshing the page.',
        },
        {
          title: 'Safety & Trust',
          text: 'User ratings and reviews, block and report, and emergency contact details.',
        },
        {
          title: 'Travel Document Vault',
          text: 'Upload and keep CNIC, driving licence, tickets and hotel vouchers in the app so soft copies are available during the trip. Node-Cron emails reminders until the required documents are uploaded.',
        },
        {
          title: 'Smart Pre-Trip Checklist',
          text: 'Customisable to-do list for packing and tasks so nothing is forgotten before departure.',
        },
      ],
      wip: [
        {
          title: 'Smart Expense Splitter',
          text: 'Add expenses and split bills equally, by percentage or custom amounts, with live balances, balance history and net settlement tracking.',
        },
        {
          title: 'Debt Simplification',
          text: 'Algorithm that answers "who owes whom" with the fewest payments, so the final net balance reaches zero.',
        },
        {
          title: 'Transport Management',
          text: 'Real-time vehicle booking with a visual seat-selection map. Booked seats update the shared trip budget automatically.',
        },
        {
          title: 'Hospitality Integration',
          text: 'Date-based availability and capacity checks for restaurants and accommodation, booked directly inside the shared itinerary.',
        },
      ],
      jury: [
        {
          title: 'Hotel & Rent-a-Car Portals',
          text: 'Separate modules where hotel and car-rental owners register and enter their own details, inventory and services.',
        },
        {
          title: 'Inter-City Bus & Train Timings',
          text: 'Timings of well-known inter-city bus companies and trains shown to users while they plan their trip.',
        },
      ],
    },
    differentiators:
      'Existing apps cover one piece each: Splitwise for expenses, Couchsurfing for connecting travellers, TripAdvisor for reviews. Travel Buddy combines partner matching, trip planning, group chat, safety features and expense splitting in one platform.',
    sdgs: ['Decent Work and Economic Growth', 'Sustainable Cities and Communities'],
  },
]
