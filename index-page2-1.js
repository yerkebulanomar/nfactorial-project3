const content = [
  {
    id: 1,
    avatarImg: "/assets/Samer Buna.jpeg",
    authorName: "Samer Buna",
    date: "Jan 03",
    readingTime: "29 min read",
    title: "The Mistakes I Made As a Beginner Programmer",
    summary:
      "Learn to identify them, make habits to avoid them — Update: This article is now part of my book “The Professional Programmer”. Read the updated version of this content, and more programming advice at...",
    articleImg: "/assets/programming.jpeg",
    subheader: "Think. Research. Plan. Write. Validate. Modify.",
    text: `This point is not about using the object-oriented paradigm. The use of the encapsulation concept is always useful. Not using encapsulation often leads to harder-to-maintain systems.
  
          In an application, a feature should have only one place that handles it. That is usually the responsibility of a single object. That object should only reveal what is absolutely necessary for other objects of the application to use it. This is not about secrecy but rather about the concept of reducing dependencies between the different parts of an application. Sticking with these rules allows you to safely make changes in the internals of your classes, objects, and functions without worrying about breaking things on a bigger scale.<br><br>
          
          Conceptual units of logic and state should get their own classes. By class, I mean a blueprint template. This can be an actual Class object or a Function object. You might also identify it as a Module or a Package.
          
          Within a class of logic, self-contained pieces of tasks should get their own methods. Methods should do one thing and do that thing well. Similar classes should use the same method names.
          
          As a beginner programmer, I did not always have the instinct to start a new class for a conceptual unit and I often failed to identify what can be self-contained. If you see a “Util” class that has been used as a dumping ground for many things that do not belong together, that is a sign of newbie code. If you make a simple change and then discover that the change has a cascading effect and you need to do many changes elsewhere, that is another sign of newbie code.<br><br>
          
          Before adding a method to a class or adding more responsibilities to a method, think and question your instincts. You need time here. Do not skip or think that you will refactor that later. Just do it right the first time.
          
          The big idea here is that you want your code to have High Cohesion and Low Coupling, which is just a fancy term that means keep related code together (in a class) and reduce the dependencies between different classes.`,
    likes: 213,
    comments: 56,
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
