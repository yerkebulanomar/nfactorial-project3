// const articlesFromAPI = [
//   {
//     id: 0,
//     avatar: "/assets/Ryan Holiday.png",
//     author: "Ryan Holiday",
//     topic: "Better humans",
//     published_date: "Jan 12",
//     title: "If You Only Read A Few Books In 2023, Read These",
//     abstract:
//       "It’d be wonderful if a new year magically marked a new beginning. But 2022, like all years, reminded us that the same things keep happening, that world events continue on in their own unpredictable way and that...",
//     section: "Stoicism",
//     readingTime: "9 min read",
//     textImage: "/assets/books article.jpg",
//     url: "/page2-0.html",
//     subheader:
//       "12 books that will help you meet the goals that matter for 2023",
//     likes: 230,
//     comments: 34,
//   },
//   {
//     id: 1,
//     avatar: "/assets/Samer Buna.jpeg",
//     author: "Samer Buna",
//     topic: "EdgeCoders",
//     published_date: "Jan 03",
//     title: "The Mistakes I Made As a Beginner Programmer",
//     abstract:
//       "Learn to identify them, make habits to avoid them — Update: This article is now part of my book “The Professional Programmer”. Read the updated version of this content, and more programming advice at...",
//     section: "IT",
//     readingTime: "29 min read",
//     textImage: "/assets/programming.jpeg",
//     url: "/page2-1.html",
//     subheader: "Think. Research. Plan. Write. Validate. Modify.",
//     likes: 213,
//     comments: 56,
//   },
//   {
//     id: 2,
//     avatar: "/assets/Aytekin Tank.jpeg",
//     author: "Aytekin Tank",
//     topic: "TheStartup",
//     published_date: "Dec 28",
//     title: "The power of doing nothing at all",
//     abstract:
//       "The old crocodile was floating at the river’s edge when a younger crocodile swam up next to him, “I’ve heard from many that you’re the fiercest hunter in all of the river bottoms. Please, teach me your ways....",
//     section: "Business",
//     readingTIme: "7 min read",
//     textImage: "/assets/do nothing.jpeg",
//     url: "/page2-2.html",
//     subheader: "Doing what matters vs. busy-bragging",
//     likes: 234,
//     comments: 123,
//   },
// ];

// articlesFromAPI.forEach((item) => {
//   let newArticle = article.replace(
//     `id="avatar" src=""`,
//     `id="avatar" src="${item.avatar}"`
//   );
//   newArticle = newArticle.replace(
//     `id="authors-name">`,
//     `id="authors-name">${item.author}`
//   );
//   newArticle = newArticle.replace(
//     `id="topics name">`,
//     `id="topics name">${item.topic}`
//   );
//   newArticle = newArticle.replace(
//     `id="published_date" class="grey-text">`,
//     `id="published_date" class="grey-text">${item.published_date}`
//   );
//   newArticle = newArticle.replace(
//     `id="article-name">`,
//     `id="article-name">${item.title}`
//   );
//   newArticle = newArticle.replace(
//     `id="article-abstract">`,
//     `id="article-abstract">${item.abstract}`
//   );
//   newArticle = newArticle.replace(
//     `id="button-text">`,
//     `id="button-text">${item.section}`
//   );
//   newArticle = newArticle.replace(
//     `id="readingTime" class="grey-text">`,
//     `id="readingTime" class="grey-text">${item.readingTime}`
//   );
//   newArticle = newArticle.replace(
//     `id="textImage" src=""`,
//     `id="textImage" src="${item.textImage}"`
//   );
//   newArticle = newArticle.replace(`href=""`, `url="${item.url}"`);

//   newArticle = newArticle.replace(`href=""><img`, `url="${item.url}"><img`);

//   articles.innerHTML += newArticle;
// });

const article = `<div class="news">
<div class="left">
  <div class="top">
    <img id="avatar" src="/assets/author.jpg" class="img-ava" alt="avatar1" />
    <h5 id="authors-name"></h5>
    <h5 class="grey-text">in</h5>
    <h5 id="topics name"></h5>
    <h5>&nbsp·&nbsp</h5>
    <h5 id="published_date" class="grey-text"></h5>
  </div>
  <div class="text">
    <h2 id="article-name"></h2>
    <p id="article-abstract"></p>
  </div>
  <div class="info-bottom">
    <div class="info">
      <button class="javascript">
        <p id="button-text"></p>
      </button>
      <h4 id="readingTime" class="grey-text">5 min read</h4>
      <h4>&nbsp·&nbsp</h4>
      <h4 class="grey-text selected">Selected for you</h4>
    </div>
    <div class="actions">
      <img
        class="img-action"
        src="/assets/LinkedIn.png"
        alt="LinkedIn" />
      <img
        class="img-action"
        src="/assets/Facebook Circled.png"
        alt="Facebook" />
      <img class="img-action" src="/assets/Twitter.png" alt="Twitter" />
    </div>
  </div>
</div>
<img id="textImage" src="" class="img-text" alt="image"/>
</div>`;

const articles = document.getElementById("articles");

const loadData = async () => {
  try {
    const url =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=usqYURJ7MmPm8ike76kWVwAUH5f2TtWq";
    const res = await fetch(url);
    console.log(res.ok);
    const data = await res.json();
    console.log(data.results.splice(0, 5));
    data.results.splice(0, 5).forEach((item) => {
      let newArticle = article.replace(
        `id="authors-name">`,
        `id="authors-name">${item.byline}`
      );

      newArticle = newArticle.replace(
        `id="topics name">`,
        `id="topics name">${item.des_facet[0]}`
      );
      newArticle = newArticle.replace(
        `id="published_date" class="grey-text">`,
        `id="published_date" class="grey-text">${item.published_date.substr(
          0,
          10
        )}`
      );
      newArticle = newArticle.replace(
        `id="article-name">`,
        `id="article-name">${item.title}`
      );
      newArticle = newArticle.replace(
        `id="article-abstract">`,
        `id="article-abstract">${item.abstract}`
      );
      newArticle = newArticle.replace(
        `id="button-text">`,
        `id="button-text">${item.subsection}`
      );
      newArticle = newArticle.replace(
        `id="textImage" src="`,
        `id="textImage" src="${item.multimedia[0].url}`
      );

      articles.innerHTML += newArticle;
    });
  } catch (err) {
    console.log(err);
  }
};

loadData();

// const clickedArticle = document.querySelector(".text");

// clickedArticle.addEventListener("click", function () {
//   openInNewTab("http://www.test.com");
// });
