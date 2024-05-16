const main = document.querySelector('main');
const view = document.querySelector('#view-btn');

view.addEventListener('click', function(){
    view.innerHTML = ''
    main.innerHTML += `
    <section class="blog-one blog">
    <div class="wrapper">
        <article class="article-blog-one">
            <img src="./images/blog-image-03.png" alt="blog-image">
            <time datetime="2018-07-07">July 23, 2022</time>
            <h1 class="article-blog-title">Blog one</h1>
            <p class="article-blog-text">I'm exited to start a new learning journey as a Scrimba
                Bootcamp student! After several months of learning in
                the Frontend Developer Career Path.
            </p>     
        </article>
    </div>
</section>
<!-- Section Blog Two -->
<section class="blog-two blog">
    <div class="wrapper">
        <article class="article-blog-two">
            <img src="./images/blog-image-01.png" alt="blog-image">
            <time datetime="2018-07-07">July 23, 2022</time>
            <h1 class="article-blog-title">Blog two</h1>
            <p class="article-blog-text">
              I'm exited to start a new learning journey as a Scrimba
              Bootcamp student! After several months of learning in
              the Frontend Developer Career Path.    
            </p>     
        </article>
    </div>
</section>
<!-- Section Blog Three -->
<section class="blog-three blog">
    <div class="wrapper">
        <article class="article-blog-three">
            <img src="./images/blog-image-02.png" alt="blog-image">
            <time datetime="2018-07-07">July 23, 2022</time>
            <h1 class="article-blog-title">Blog three</h1>
            <p class="article-blog-text">I'm exited to start a new learning journey as a Scrimba
                Bootcamp student! After several months of learning in
                the Frontend Developer Career Path.
            </p>     
        </article>
    </div>
</section>
    `
})