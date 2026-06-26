# Maània Website — Setup & Customisation Guide

## Files in this folder
```
maania/
├── index.html            ← Home page
├── menu.html             ← Full menu
├── dessert-platters.html ← Dessert platters
├── savoury-platters.html ← Savoury platters
├── cakes.html            ← Cakes
├── contact.html          ← Contact page
├── style.css             ← All styles (single file)
├── script.js             ← Hamburger menu, scroll reveal, form validation
└── images/               ← CREATE this folder and put your photos here
```

---

## How to run it

1. Open the `maania` folder
2. Double-click `index.html` — it opens in your browser
3. That's it. No server needed.

> For the best experience (especially fonts), use a local server:
> - VS Code: install "Live Server" extension → right-click `index.html` → Open with Live Server
> - Or run: `python3 -m http.server 8000` in the folder, then visit http://localhost:8000

---

## How to replace placeholder images

### Step 1 — Create an `images` folder
Inside the `maania` folder, create a subfolder called `images`.

### Step 2 — Add your photos
Recommended filenames (you can use any, just update the HTML):

| Photo | Recommended filename |
|---|---|
| Brand logo (circular) | `images/logo.png` |
| Kachori & Aloo Bhaaji | `images/kachori-bhaaji.jpg` |
| New York Cheesecake | `images/ny-cheesecake.jpg` |
| Lotus Cheesecake | `images/lotus-cheesecake.jpg` |
| Chicken Lasagne | `images/chicken-lasagne.jpg` |
| Brownies | `images/brownies.jpg` |
| Story/kitchen photo | `images/story-photo.jpg` |
| Platter photos | `images/platter-small-1.jpg`, etc. |

### Step 3 — Replace placeholder divs in the HTML

Every placeholder looks like this:
```html
<div class="dish-img-placeholder">
  <span class="ph-icon">🥟</span>
  <span class="ph-text">Replace with kachori-bhaaji.jpg</span>
</div>
```

Replace it with:
```html
<img src="images/kachori-bhaaji.jpg" alt="Kachori and Bhaaji" class="dish-card-img" />
```

The comment above each placeholder in the HTML shows exactly what to write.

### Logo in hero circle
In `index.html`, find the `.hero-logo-placeholder` div and replace with:
```html
<img src="images/logo.png" alt="Maània logo" />
```

---

## How to update menu items

In `menu.html`, each dish follows this pattern:
```html
<div class="menu-item">
  <div class="menu-item-img-wrap">🥟</div>     ← change emoji or add <img>
  <div class="menu-item-info">
    <h4>Dish Name</h4>                          ← change name
    <p>Short description here.</p>              ← change description
  </div>
  <span class="menu-item-price">Rs. 850</span>  ← change price
</div>
```

To add a new dish, copy the entire `<div class="menu-item">...</div>` block and paste it inside the matching `.menu-items` div.

---

## How to update prices

Search for `Rs. ——` anywhere in the HTML files and replace with the actual price, e.g. `Rs. 750`.

---

## How to update contact details

All contact links use these values (already set):
- WhatsApp: `https://wa.me/923018233229`
- Instagram: `https://www.instagram.com/maaniabysmh`
- Email: `mailto:maaniabysmh@gmail.com`

To change any of these, do a Find & Replace (Ctrl+H) across all HTML files.

---

## Colours (to customise)

Open `style.css` and look for `:root` at the top:
```css
:root {
  --teal:      #2D7D6F;  /* main brand green */
  --gold:      #E8A020;  /* accent / tagline gold */
  --cream:     #FDFAF5;  /* warm background */
  --pale-blue: #E8F4F1;  /* light section tint */
  --warm-sand: #F5EFE6;  /* alternate section */
}
```
Change any hex value to update the whole site's colour scheme instantly.

---

## Fonts used
- **Dancing Script** — logo / brand name
- **Playfair Display** — section headings
- **Nunito** — body text

These load from Google Fonts automatically (internet required). If you want offline use, download them from fonts.google.com.

---

## Adding backend to the contact form

The form in `contact.html` currently shows a success message on submit (frontend only). To make it actually send emails:

**Option A — Formspree (free, no code needed)**
1. Sign up at formspree.io
2. Create a form, get your form ID
3. In `contact.html`, change `<form id="contactForm" novalidate>` to:
   `<form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">`
4. Remove `e.preventDefault()` from `script.js` for the submit handler

**Option B — EmailJS**
Good for keeping everything frontend-based. See emailjs.com for setup.

---

Enjoy your Maània website! 🌿
