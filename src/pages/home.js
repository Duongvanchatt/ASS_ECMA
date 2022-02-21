import Footer from "../components/footer";
import Header from "../components/header";
import content_home from "../components/content_home";

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
            ${Footer.render()}
        </div>
            
        `;
    },
};
export default HomePage;