const articlesFromAPI = [
  {
    id: 0,
    avatarImg: "/assets/Ryan Holiday.png",
    authorName: "Ryan Holiday",
    topicName: "Better humans",
    date: "Jan 12",
    title: "If You Only Read A Few Books In 2023, Read These",
    summary:
      "It’d be wonderful if a new year magically marked a new beginning. But 2022, like all years, reminded us that the same things keep happening, that world events continue on in their own unpredictable way and that...",
    button: "Stoicism",
    readingTime: "9 min read",
    articleImg: "/assets/books article.jpg",
    href: "/page2-0.html",
  },
  {
    id: 1,
    avatarImg: "/assets/Samer Buna.jpeg",
    authorName: "Samer Buna",
    topicName: "EdgeCoders",
    date: "Jan 03",
    title: "The Mistakes I Made As a Beginner Programmer",
    summary:
      "Learn to identify them, make habits to avoid them — Update: This article is now part of my book “The Professional Programmer”. Read the updated version of this content, and more programming advice at...",
    button: "IT",
    readingTime: "29 min read",
    articleImg: "/assets/programming.jpeg",
    href: "/page2-1.html",
  },
  {
    id: 2,
    avatarImg: "/assets/Aytekin Tank.jpeg",
    authorName: "Aytekin Tank",
    topicName: "TheStartup",
    date: "Dec 28",
    title: "The power of doing nothing at all",
    summary:
      "The old crocodile was floating at the river’s edge when a younger crocodile swam up next to him, “I’ve heard from many that you’re the fiercest hunter in all of the river bottoms. Please, teach me your ways....",
    button: "Business",
    readingTime: "7 min read",
    articleImg: "/assets/do nothing.jpeg",
    href: "/page2-2.html",
  },
];

const article = `<div class="news">
<div class="left">
  <div class="top">
    <img id="avatar" src="" class="img-ava" alt="avatar1" />
    <h5 id="authors-name"></h5>
    <h5 class="grey-text">in</h5>
    <h5 id="topics name"></h5>
    <h5>&nbsp·&nbsp</h5>
    <h5 id="date" class="grey-text"></h5>
  </div>
  <div class="text">
    <a href=""><h2 id="article-name"></h2></a>
    <p id="article-summary"></p>
  </div>
  <div class="info-bottom">
    <div class="info">
      <button class="javascript">
        <p id="button-text"></p>
      </button>
      <h4 id="readingTime" class="grey-text"></h4>
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
<a href=""><img id="articleImg" src="" class="img-text" alt="laptop" /></a>
</div>`;

const articles = document.getElementById("articles");

articlesFromAPI.forEach((item) => {
  let newArticle = article.replace(
    `id="avatar" src=""`,
    `id="avatar" src="${item.avatarImg}"`
  );
  newArticle = newArticle.replace(
    `id="authors-name">`,
    `id="authors-name">${item.authorName}`
  );
  newArticle = newArticle.replace(
    `id="topics name">`,
    `id="topics name">${item.topicName}`
  );
  newArticle = newArticle.replace(
    `id="date" class="grey-text">`,
    `id="date" class="grey-text">${item.date}`
  );
  newArticle = newArticle.replace(
    `id="article-name">`,
    `id="article-name">${item.title}`
  );
  newArticle = newArticle.replace(
    `id="article-summary">`,
    `id="article-summary">${item.summary}`
  );
  newArticle = newArticle.replace(
    `id="button-text">`,
    `id="button-text">${item.button}`
  );
  newArticle = newArticle.replace(
    `id="readingTime" class="grey-text">`,
    `id="readingTime" class="grey-text">${item.readingTime}`
  );
  newArticle = newArticle.replace(
    `id="articleImg" src=""`,
    `id="articleImg" src="${item.articleImg}"`
  );
  newArticle = newArticle.replace(`href=""`, `href="${item.href}"`);

  newArticle = newArticle.replace(`href=""><img`, `href="${item.href}"><img`);

  articles.innerHTML += newArticle;
});
