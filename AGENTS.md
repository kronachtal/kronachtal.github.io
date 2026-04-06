# kronachtal.github.io — Agent Instructions

## Project Overview

Static website for **Ferienwohnung Kronachtal**, a German vacation rental apartment in the Franconian Forest (Frankenwald). Hosted on GitHub Pages at the domain defined in `CNAME`.

All user-facing content is in **German**.

## Tech Stack

- **Bootstrap 5** (Agency theme v7.0.5) — layout, components, navbar
- **jQuery** — DOM manipulation and plugin glue
- **Bootstrap Datepicker 1.9.0** — date inputs in the contact form (`dd.mm.yyyy` format, `language: "de"`)
- **jQuery Validation** — client-side form validation
- **SimpleLightbox 2.1.0** — photo lightbox in the gallery section
- **Font Awesome 5** — icons
- No build system, bundler, or package manager — plain static files

## File Structure

```
index.html          # Main single-page site
impressum.html      # Legal notice (Impressum) + privacy policy (Datenschutz)
CNAME               # Custom domain for GitHub Pages
assets/
  favicon.ico
  img/wohnung/      # Apartment photos (cropped variants included)
css/
  styles.css        # Primary styles (Bootstrap-based Agency theme)
  montserrat.css    # Self-hosted Montserrat font
  roboto.css        # Self-hosted Roboto Slab font
  datepicker.css / datepicker.min.css
js/
  scripts.js        # All custom JS (datepicker init, form validation, fetch submit)
fonts/              # Local font files
```

## Page Sections (index.html)

| Anchor | Section |
|--------|---------|
| `#portfolio` | Bilder — apartment photo gallery |
| `#ausstattung` | Ausstattung — amenities list |
| `#lage` | Lage — location / map |
| `#contact` | Kontakt — booking inquiry form |

## Contact Form

- Validated with jQuery Validation plugin; all error messages are in German
- Submitted via `fetch()` to the `form.action` URL (async, no page reload)
- Shows `#submitSuccessMessage` or `#submitErrorMessage` based on response
- Required fields: `name`, `email`, `phone`, `gaeste` (guest count), `message`, `anreise` (arrival date), `abreise` (departure date), `agree` (checkbox)
- Date fields use the Bootstrap Datepicker in `dd.mm.yyyy` format

## Conventions

- **Language**: All copy and UI text must remain in German
- **No build step**: Edit HTML/CSS/JS directly; changes are immediately deployable
- **Bootstrap utility classes**: Prefer Bootstrap utilities over custom CSS where possible
- **Images**: Apartment images live in `assets/img/wohnung/`; filenames follow the pattern `<Room>-Bild-<n>-cropped.jpg`
- **Hidden items**: Gallery items with `class="d-none"` are intentionally hidden; do not remove them without confirming intent
- **Fonts**: Self-hosted via `css/montserrat.css` and `css/roboto.css` to avoid external Google Fonts requests

## Amenities (for reference)

Up to 4 guests · 2 bedrooms with boxspring beds · Smart TV per bedroom · Fully equipped kitchen · Coffee machine & kettle · Dishwasher · Bathroom with bathtub · WiFi · Non-smoking · Free parking
