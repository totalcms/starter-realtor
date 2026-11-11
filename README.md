# Valeria Montoya, Peninsula Real Estate

A real estate agent's website built on [Total CMS](https://totalcms.co), in English and Spanish. The demo agent is Valeria Montoya, a fictional agent selling homes in San Carlos, Belmont, San Mateo and Burlingame on the San Francisco Peninsula. Every page is filled with demo content, so the site works as soon as it's installed. Every template opens with a comment that explains what it does, so it's also a good site to learn from.

## What's in it

- **Listings that keep themselves current:** her own homes first, then other agents'. Mark a home Sold and it leaves the search, joins the recent sales, and moves the town's median price and the "sold in the last 12 months" figures.
- **Home search** by town, price, bedrooms, bathrooms and status, at an address a buyer can share.
- **The whole site in Spanish** at `/es/…`: every page, label and form, with an EN / ES switch on every page. (A few of Total CMS's own error messages, such as the one for an email that is already registered, are still in English.)
- **Private listings:** buyers join the private list, are signed in at once, and see homes that aren't on the open market yet.
- **Just-listed emails:** visitors join from any page; one Bulk Send tells them all about her newest home.
- **An A/B test** of the home page: half the visitors see a buyer-first version, half a seller-first one.
- **Neighborhood pages** with schools, commute, homes for sale and the median price of recent sales.
- **Open houses** that hide themselves once they're over, and **video tours**.
- **A home valuation form, showing requests and a contact form,** each saved in the admin and emailed to her.
- **A payment calculator** on every home for sale, which works without JavaScript too.
- **Other agents' homes from a CSV file,** through the admin's importer. A sample file is at `public/media/listings-sample.csv`.

## Install

With Composer:

```bash
composer create-project totalcms/starter-realtor mysite
cd mysite
npm install && npm run build
```

Point your web server's document root at `mysite/public/`, then visit the site. The setup wizard creates your admin account. Then open `/readme` on the site for a tour and a list of what to change before launch.

## Set up the scheduled job

The Just-listed email goes out through the job queue, which runs in the background. Add this line to the server's crontab so it runs every minute:

```
* * * * * cd /path/to/mysite && php vendor/bin/tcms jobs:process
```

Without it, the forms still save and email the agent, but a Bulk Send waits in the queue and never goes out.

## Make it yours

- **Agent details.** Sign in at `/admin` and open **Agent Info**: name, phone, email, office, license line, brokerage, the home page words, her story and portrait, and the mortgage and tax rates the calculator uses. Text fields have an English and a Spanish box.
- **Listings, towns and testimonials.** Each has its own collection. On a listing, **My Listing** puts it first and marks it as hers, **Featured** puts it on the home page and **Private** shows it only to the private list.
- **A login for the agent.** Give her an account in the `agent` access group. She can edit listings, towns, testimonials and Agent Info, read the leads and send the Just-listed email, but can't change settings, schemas or templates.
- **The Just-listed email.** In the **Mailer**, Just Listed always shows her newest listing that's for sale or coming soon. A template reaches each subscriber only once, so for the next home, Duplicate it and send the copy. `/readme` has the steps.
- **The A/B test.** The Home and Inicio pages in **Site Builder** each have `abPercent` in their Data: `0` shows only version A, `100` only version B.
- **Words in the templates.** Buttons, labels and form text are in `builder/strings/en_US.json` and `builder/strings/es.json`. The two files must have the same keys.
- **Colors and type.** `css/theme.css` holds the fonts, colors and the arch shape. `DESIGN.md` explains the whole design system.
- **Templates.** The pages, layouts and partials are Twig files in `builder/`.
- **CSS and JavaScript.** Edit `css/` and `js/`, then build them with `npm run build`. `public/assets/` is build output, so don't edit it. `FRONTEND.md` has the details.

## Spanish

Every page has a Spanish twin in Site Builder, with the same ID plus `-es` and `/es` in front of its address. Homes and towns need no twins: one record shows in both languages. If the agent works in English only, delete the `-es` pages: once Inicio (`home-es`) is gone, the EN / ES switch, the hreflang links and the Spanish sitemap turn themselves off. If she works in Spanish, have a fluent speaker read the Spanish before launch.

## Private listings and MLS rules

Rules such as NAR's Clear Cooperation Policy can limit marketing a home before it is on the MLS, and a page any registered visitor can see may count as public marketing. Have the agent check her own MLS's rules before she uses private listings for real.

## Photos

The demo photos and the video tour come from Pexels, and `CREDITS.md` credits each one. Replace them with the agent's own listing photos and headshot before the site goes live. The headshot is a stock portrait of a real person, and must not be used to suggest that person endorses anything.

## Going live

1. Set up email in the admin's settings (SMTP, and a From address the mail server may send from), so leads reach the agent and the Just-listed email can go out.
2. Add the scheduled job above.
3. Replace the demo testimonials with real ones. Never publish made-up reviews for a real agent.
4. Set **Site Environment** to **Production** in the admin's General settings. Production keeps error messages short for visitors and makes the template editor read-only.

## Requirements

PHP 8.2 or later with the intl extension (without it the Spanish pages fall back to English dates and text), Total CMS 3.6.9 or later, Node.js to build the CSS and JavaScript, a way to run a command every minute (cron), and a Total CMS Pro license for the domain you deploy to. The site uses custom collections, public registration and Bulk Send.
