const scroll_bar_div = `
            <div class="progress-container">
                <div class="progress-bar" id="myBar"></div>
            </div>`;

const scroll_bar_script = `<script src="scripts/scroll_bar.js"></script>`;

export default class Header {
    static games() {
        return {
            title: "Games ",
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static books() {
        return {
            title: "Books ",
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static movies() {
        return {
            title: "Movies ",
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static tvshows() {
        return {
            title: "TVShows ",
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static privacy() {
        return {
            title: "Privacy and Terms of Use ",
            navbar_privacy_active: true,
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static blog() {
        return {
            title: "Blog ",
            navbar_blog_active: true,
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static blogPost(blogPostTitle: string) {
        return {
            title: blogPostTitle,
            navbar_blog_active: true,
            scroll_bar_div,
            scroll_bar_script: `<script src="../scripts/scroll_bar.js"></script>`,
            use_disqus: true,
            disqus_comments: `<div id="disqus_thread"></div>
                <script>
                    (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://galhardo-app.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                    })();
                </script>`,
            disqus_script: `<script id="dsq-count-scr" src="//galhardo-app.disqus.com/count.js" async></script>`,
        };
    }

    static contact() {
        return {
            title: "Contact ",
            navbar_contact_active: true,
        };
    }

    static plans(headTitle: string) {
        return {
            title: headTitle,
            navbar_pricing_active: true,
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static profile(headTitle: string) {
        return {
            title: headTitle,
            scroll_bar_div,
            scroll_bar_script,
        };
    }

    static shop() {
        return {
            title: "Shop ",
            navbar_shop_active: true,
        };
    }

    static about() {
        return {
            title: "About Galhardo APP",
            navbar_about_active: true,
        };
    }
}
