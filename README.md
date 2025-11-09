# VFilms Website

A React-based portfolio website featuring horizontal scroll navigation and contact form with API integration.

## Tech Stack

- React 18.2.0
- React Scripts 5.0.1
- Axios

## Installation

```bash
npm install
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Features

- Horizontal scroll navigation
- Responsive design
- Contact form with API integration
- Form validation (email & empty fields)
- Sections: Hero, About Team, About Us, Services, Portfolio, Contact

## API Integration

**Endpoint:** `https://vernanbackend.ezlab.in/api/contact-us/`  
**Method:** POST  
**Required Fields:** name, email, phone, message

### Form Validation
- Empty form submission not allowed
- Email validation at front-end
- Success message displayed on 200 response

## Responsive Design

Tested and optimized for:
- 480p (Mobile)
- 720p
- 1080p
- 2732x2048 (iPad)
- 1440x823 (MacBook)

## Project Structure

```
src/
├── components/     # React components
├── assets/        # Images and icons
├── App.js         # Main application
└── index.js       # Entry point
```

## License

Private

