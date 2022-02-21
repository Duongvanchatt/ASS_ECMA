import Footer from "../components/footer";
import Header from "../components/header";
import banner from "../components/banner";
import post from "../components/post";
import News from "../components/news";
const HomePage = {
   async render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <div id="header">
                ${Header.render()}
            </div>
            <main>
                <div class="news">
                    ${ await News.render()}
                </div>
            </main>
            <div class="banner">
                    ${banner.render()}
                </div>
            <div class="post">
            ${post.render()}
        </div>
            ${Footer.render()}
        </div>
            
        `;
    },
};
export default HomePage;