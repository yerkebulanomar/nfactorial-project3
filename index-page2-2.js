const contentSecondPage2 = [
  {
    id: 2,
    avatarImg: "/assets/Aytekin Tank.jpeg",
    authorName: "Aytekin Tank",
    date: "Dec 28",
    readingTime: "7 min read",
    title: "The power of doing nothing at all",
    summary:
      "The old crocodile was floating at the river’s edge when a younger crocodile swam up next to him, “I’ve heard from many that you’re the fiercest hunter in all of the river bottoms. Please, teach me your ways....",
    articleImg: "/assets/do nothing.jpeg",
    subheader: "Doing what matters vs. busy-bragging",
    text: `You don’t necessarily have to ban family and friends to retreat into a Think Week, though. Take me as an example.
  
          Every year, I take at least a full week off from my company and head back to my hometown to help my parents with the olive harvest.
          
          
          All thoughts of startup growth or conversion rates slip away when you’re picking olives. It’s meditative and calming.
          
          I know that olive picking won’t land me at the top of TechCrunch, but it’s a personal measure of success. And somehow, some of my best ideas come to me during this period.
          
          For someone who can’t take an entire week off of work once a year to do nothing, I recommend taking a slightly different approach — embracing the digital sabbath.
          
          On either Saturday or Sunday, force yourself to step away from all forms of technology — a practice known as a digital sabbath.
          
          Shut off your smartphone and hide it in your closet. Powerdown the laptop and slide it under your bed. And, try with all your might to refrain from binge-watching Netflix.
          
          Give your brain space to think by stepping away from the daily grind and doing nothing. Your mind will have time to stumble upon new ideas and further process old ones.
          
          You may find the success that results from this practice to be similar to that of the old crocodile at the beginning of this article.
          
          While we tell ourselves we can achieve more by scrambling, sometimes it’s better to close our eyes and just float.
          
          And, wait, until the wildebeest shows up`,
    likes: 234,
    comments: 123,
  },
];

const articlePageTwo = `<div class="news-page">
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

const pageTwoArticle2 = document.getElementById("pageTwoArticle2");

contentSecondPage2.forEach((item) => {
  let newArticle = articlePageTwo.replace(
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

  pageTwoArticle2.innerHTML += newArticle;
});
