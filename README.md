# Business Contact Website (sample)

This is a small static website that lists all contact details for your business and includes a simple contact form.

Files
- `index.html` — main page with placeholders for your business details and the contact form.
- `styles.css` — basic responsive styling.
- `script.js` — client-side validation and a mailto fallback. If you set a form `action`, the script will POST the form to that endpoint.

How to use / edit
1. Open `index.html` in a text editor and replace placeholders like `Surya Laxmi Developers and Construction`, the address, phone, and email.
2. To receive form submissions without a server, use Formspree (https://formspree.io/) or Netlify Forms and set the form `action` attribute in `index.html` to the provided endpoint.

- Government contracting notes
- Add your GSTIN (GST Identification Number) and any relevant business classifications in the `Certifications & Registrations` section.
- Provide 2-3 concise past performance entries in the `Past Performance` section with agency names and contract years.
- Place a PDF capability statement in the project folder (e.g., `capability-statement.pdf`) and link to it from `index.html` for procurement officers to download.
- Make sure your procurement contact email is monitored or routed to the right contracts inbox.

Quick preview (PowerShell):

```powershell
# From this project folder (Node.js and npm installed):
# Install a tiny static server the first time (optional)
npx http-server -c-1 -p 8000
# Open the site in your browser
Start-Process "http://localhost:8000"
```

Notes & next steps
- Add a real embedded map iframe (Google Maps / OpenStreetMap) in the map section of `index.html`.
- Replace social links with your real profiles.
- For production form handling, connect to Formspree, Netlify Forms, or add a small server endpoint (Node/Python) to accept submissions.

If you want, I can:
- Pre-fill the page with your real business details if you provide them.
- Add a logo, favicon, or a deploy config for GitHub Pages / Netlify.
