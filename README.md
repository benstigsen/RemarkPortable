## RemarkPortable

A simple and portable way of using **[Remark](https://github.com/gnab/remark)**, that doesn't require an internet connection. Decluttered `index.html` to make it easier to get an overview.

Also included all necessary files in the repo for easy setup after downloading / cloning.

---

### Getting Started

1. Download or clone this repo (you can also use the **[releases](https://github.com/BenTearzz/RemarkPortable/releases)** page).
2. Write your markdown in the `<textarea>`, in `index.html`
3. That's it... now you just open `index.html` in a browser and it should work.

---

If you want to write your presentation in a seperate file, replace the following in `index.html`:

`<script>var slideshow = remark.create();</script>`

with:

`<script>var slideshow = remark.create({sourceUrl: 'title-of-file.md'});</script>`

Now you can also delete the `<textarea>` to shorten the HTML code even more.

---

For customization you can customize `style.css` to your needs. More customization options can be found on the **[Remark Wiki](https://github.com/gnab/remark/wiki/Formatting)**.

---

### Fonts

The fonts included (Ubuntu Mono, Yanone Kaffeesatz and Droid Serif) are all from Google Fonts, which are free to use, as stated **[here](https://fonts.google.com/about)**

>All the fonts in our catalog are free and open source, making beautiful type accessible to anyone for **any** project.
