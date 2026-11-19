# IPSM Tanzania — Render Deployment

This is a plain HTML/CSS/JavaScript static website and can be deployed as a Render Static Site.

## Recommended Render settings
- Service type: Static Site
- Build Command: leave blank
- Publish Directory: `.`
- Branch: `main`

Render provides an `onrender.com` URL after deployment and supports HTTPS/TLS and custom domains.

## Important
The application page currently uses the Netlify Forms markup from the earlier version. Render hosts the pages but does not provide Netlify Forms processing. Before using the application form for real admissions, replace that form submission with a backend/API or another approved form service.

The document upload page intentionally keeps sensitive document fields disabled until secure storage and access controls are configured. Do not collect national IDs, passports, or birth certificates through an unprotected public form.
