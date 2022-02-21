import Footer from "../components/footer";
import Header from "../components/header";
import content_home from "../components/content_home";
import banner from "../components/banner";
import post from "../components/post";
const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <div id="header">
                ${Header.render()}
            </div>
            <main>
                <div class="news">
                    ${content_home.render()}
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