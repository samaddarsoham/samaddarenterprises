# Samaddar Enterprises Website

A modern, responsive website for Samaddar Enterprises built with React, Vite, and JavaScript.

## Setting Up EmailJS for Contact Form

The contact form uses EmailJS to send emails. Follow these steps to set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template with the following variables:
   - `name` - Sender's name
   - `email` - Sender's email
   - `message` - Message content
   - `to_email` - Recipient email (this is set to samaddarsoham@gmail.com in the code)

4. Get your EmailJS credentials:
   - Service ID
   - Template ID
   - Public Key

5. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. Restart the development server after setting up the environment variables.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Responsive design for all devices
- Dark mode with black/yellow aesthetic
- GSAP/Framer Motion animations
- Contact form with EmailJS integration
- Floating call/WhatsApp buttons
