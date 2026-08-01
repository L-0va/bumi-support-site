# Bumi Support Site

A deliberately homemade, Clemson-orange-and-purple late-’90s-style support page. Click the enormous Bumi to rotate through six photos and receive one of 26 short emotional-support or motivational quotes from scientists, engineers, astronauts, and other inspiring people.

The palette uses Clemson Orange (`#F56600`), Regalia (`#522D80`), and Diploma (`#2E1A47`) from [Clemson’s official brand guide](https://www.clemson.edu/brand/color/).

It uses plain HTML, CSS, and JavaScript. There are no accounts, trackers, ads, analytics, remote services, or databases.

## Bumi photos

The six supplied photos are saved as `bumi-1.png` through `bumi-6.jpeg`. Every click advances to the next photo and loops back to the first.

To swap one later, replace that file while keeping its filename. CSS automatically crops different photo shapes into the square Bumi frame.

## Edit the quotes

Open `script.js` and find `const quotes`. Each entry has the quote text and its author. Keep quotation marks around both values and a comma between entries.

## Quote sources

Every displayed line was checked against one of these sources:

- [Stephen Hawking — University of Cambridge](https://www.cam.ac.uk/stories/stephen-hawking)
- [Jane Goodall — Jane Goodall Institute](https://janegoodall.org/news/eatmeatless-for-people-other-animals-and-the-environment/)
- [Mae Jemison — Google Arts & Culture](https://artsandculture.google.com/project/black-history-and-culture)
- [Katherine Johnson — NASA](https://www.nasa.gov/press-release/nasa-statements-on-katherine-johnson-s-medal-of-freedom)
- [Margaret Hamilton — Smithsonian American Women’s History Museum](https://womenshistory.si.edu/blog/women-apollo)
- [Michael Faraday — Perimeter Institute](https://perimeterinstitute.ca/news/faraday-present-day)
- [Helen Keller on optimism — American Foundation for the Blind](https://www.afb.org/about-afb/history/helen-keller/books-essays-speeches/optimism-1903)
- [Helen Keller on courage — American Foundation for the Blind](https://afb.org/about-afb/history/helen-keller/helen-keller-quotes/helen-keller-quotes-optimism)
- [Sally Ride — NASA History Division](https://www.nasa.gov/wp-content/uploads/2023/01/NewsNotes-33-3-Fall-2016.pdf)
- [Fred Rogers — Fred Rogers Institute](https://www.fredrogersinstitute.org/resources/the-way-its-supposed-to-be)
- [Maya Angelou — National Portrait Gallery](https://npg.si.edu/blog/memoriam-maya-angelou)
- [Bekah Sosland Siegfriedt — NASA](https://science.nasa.gov/people-of-nasa/10-things-humans-of-nasa/)
- [Adriana Ocampo — NASA](https://science.nasa.gov/people/adriana-ocampo/)
- [Veronica Pruneda — NASA](https://www.nasa.gov/missions/artemis/veronica-pruneda/)
- [Judy Ballance — NASA](https://www.nasa.gov/people/judy-ballance/)
- [Audre Lorde — Poetry Foundation](https://www.poetryfoundation.org/articles/89445/dear-sister-outsider)
- [Malala Yousafzai — Malala Fund](https://malala.org/news-and-voices/malala-un-speech)
- [Pashtana — Malala Fund](https://malala.org/news-and-voices/even-without-a-classroom-i-still-dream)
- [Aazosh — Malala Fund](https://malala.org/news-and-voices/my-life-before-and-after-the-taliban-takeover)
- [Marie Curie — Nobel Prize](https://www.nobelprize.org/uploads/2025/04/annual-review-2024.pdf)
- [Sharon Williams — Stanford Medicine](https://med.stanford.edu/psychiatry/news/wim/williams.html)
- [Dado Banatao — Stanford](https://filamstaff.stanford.edu/dado-banatao-my-story-could-be-your-story)
- [Kristala Prather — MIT](https://energy.mit.edu/news/advancing-energy-efficient-biochemistry-and-training-tomorrows-scientists-and-engineers/)
- [Katie Bouman — Caltech Undergraduate Research Journal](https://curj.caltech.edu/2021/06/25/interview-with-professor-katie-bouman/)
- [L. Rafael Reif — MIT News](https://news.mit.edu/2022/convocation-class-2026-0830)

## Preview locally

In a terminal opened inside this folder, run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish with GitHub Pages

1. Create a new empty GitHub repository, such as `bumi-support-site`.
2. Open this folder in a terminal.
3. Commit and push the prepared repository:

```bash
git commit -m "Create Bumi Support Site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bumi-support-site.git
git push -u origin main
```

4. On GitHub, open **Settings → Pages**.
5. Choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.

The old-web direction follows the examples and principles in Sophie Koonin’s [Building a website like it’s 1999… in 2022](https://localghost.dev/blog/building-a-website-like-it-s-1999-in-2022/) while retaining modern accessibility and reduced-motion support.

The animated flame divider and its still reduced-motion fallback come from the same article’s [GeoCities flame example](https://localghost.dev/img/geocities/flames.gif).
