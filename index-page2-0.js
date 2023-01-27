const content = [
  {
    id: 0,
    avatarImg: "/assets/Ryan Holiday.png",
    authorName: "Ryan Holiday",
    date: "Jan 12",
    readingTime: "9 min read",
    title: "If You Only Read A Few Books In 2023, Read These",
    summary:
      "It’d be wonderful if a new year magically marked a new beginning. But 2022, like all years, reminded us that the same things keep happening, that world events continue on in their own unpredictable way and that in the end, we control very little but our own actions and opinions.",
    articleImg: "/assets/books article.jpg",
    subheader:
      "12 books that will help you meet the goals that matter for 2023",
    text: `One of my favorite quotes — enough that I have it inscribed on the wall across the back of my bookstore — comes from the novelist Walter Mosley. “I’m not saying that you have to be a reader to save your soul in the modern world,” he said. “I’m saying it helps.”
            2023 stands before us promising nothing but the same difficulties and opportunities that last year and every year before it promised. Maybe even new and worse ones. What are you going to do about it? Will you be ready for it? Can you handle it?<br>
          <br>
          Books are an investment in yourself — investments that come in many forms: novels, nonfiction, how-to, poetry, classics, biographies. They help you think more clearly, be kinder, see the bigger picture, and improve at the things that matter to you. Books are a tradition that stretches back thousands of years and stretches forward to today, where people are still publishing distillations of countless hours of hard thinking on hard topics. Why wouldn’t you avail yourself of this wisdom?<br>
          <br>
          With that in mind, here are 12 books — some new, some old — that will help you meet the goals that matter for 2023, that will help you live better and be better.`,
    likes: 230,
    comments: 34,
  },
];

const code = `<div class="news-page">
<div class="top-part">
  <div class="top-left">
    <img id="imgAva" src="" alt="avatar" />
    <div class="text-info">
      <h3 id="author" class="authors-name"></h3>
      <div class="text-info-grey">
        <h5 id="date" class="grey-text date"></h5>
        <h5 class="grey-text">&nbsp·&nbsp</h5>
        <h5 id="readingTime" class="grey-text time-spent"></h5>
        <h5 class="grey-text">&nbsp·&nbsp</h5>
        <h5 class="grey-text for-whom">Member-only</h5>
      </div>
    </div>
  </div>
  <div class="top-right">
    <img
      class="social-media"
      src="/assets/LinkedIn.png"
      alt="LinkedIn" />
    <img
      class="social-media"
      src="/assets/Facebook Circled.png"
      alt="Facebook" />
    <img class="social-media" src="/assets/Twitter.png" alt="Twitter" />
  </div>
</div>
<div class="top-text">
  <h1 id="title" class="title"></h1>
  <h2 id="summary" class="summary"></h2>
</div>
<img id="imagePage" src="" class="page-image" alt="laptop" />
<div class="main">
  <h4 id="subheader" class="subheader"></h4>
  <p id="mainText" class="main-text"></p>
</div>
<div class="bottom-part">
  <div class="likes-comments">
    <img src="/assets/Heart.png" alt="heart" />
    <h5 id="likes" class="likes-number grey-text"></h5>
    <img src="/assets/Speech Bubble.png" alt="speech" />
    <h5 id="comment" class="comment-number grey-text"></h5>
  </div>
  <img class="bookmark" src="/assets/Bookmark.png" alt="bookmark" />
</div>
</div>`;

const article = document.getElementById("article");

content.forEach((item) => {
  let newArticle = code.replace(
    `id="imgAva" src="`,
    `id="imgAva" src="${item.avatarImg}"`
  );
  newArticle = newArticle.replace(
    `id="author" class="authors-name">`,
    `id="author" class="authors-name">${item.authorName}`
  );
  newArticle = newArticle.replace(
    `id="date" class="grey-text date">`,
    `id="date" class="grey-text date">${item.date}`
  );
  newArticle = newArticle.replace(
    `id="readingTime" class="grey-text time-spent">`,
    `id="readingTime" class="grey-text time-spent">${item.readingTime}`
  );
  newArticle = newArticle.replace(
    `id="title" class="title">`,
    `id="title" class="title">${item.title}`
  );
  newArticle = newArticle.replace(
    `id="summary" class="summary">`,
    `id="summary" class="summary">${item.summary}`
  );
  newArticle = newArticle.replace(
    `id="imagePage" src=""`,
    `id="imagePage" src="${item.articleImg}"`
  );
  newArticle = newArticle.replace(
    `id="subheader" class="subheader">`,
    `id="subheader" class="subheader">${item.subheader}`
  );
  newArticle = newArticle.replace(
    `id="mainText" class="main-text">`,
    `id="mainText" class="main-text">${item.text}`
  );
  newArticle = newArticle.replace(
    `id="likes" class="likes-number grey-text">`,
    `id="likes" class="likes-number grey-text">${item.likes}`
  );
  newArticle = newArticle.replace(
    `id="comment" class="comment-number grey-text">`,
    `id="comment" class="comment-number grey-text">${item.comments}`
  );

  article.innerHTML += newArticle;
});
