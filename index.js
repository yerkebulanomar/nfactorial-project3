const article = `<div class="news">
<div class="left">
  <div class="top">
    <img id="avatar" src="/assets/istockphoto-1220827245-612x612.jpg" class="img-ava" alt="avatar1" />
    <h5 id="authors-name"></h5>
    <h5 class="grey-text">in</h5>
    <h5 id="topics name"></h5>
    <h5>&nbsp·&nbsp</h5>
    <h5 id="published_date" class="grey-text"></h5>
  </div>
  <div class="text">
    <a href=""><h2 id="article-name"></h2></a>
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
    console.log(data.results);
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
