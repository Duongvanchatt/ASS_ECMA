import Navigo from "navigo";
// import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
// import AdminNewsPage from "./pages/admin/posts";
// import AdminAddPost from "./pages/admin/posts/add";
// import AdminEditPost from "./pages/admin/posts/edit";
import DetailPage from "./pages/detail";
import DetailProduct from "./pages/detail";
import HomePage from "./pages/home";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ProductsPage from "./pages/products";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // nếu userId === 1 thì tôi mới render
        if (userId === 1) {
            done();
        } else {
            // ngược thì lại redirect về trang chủ
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/detail": () => print(Detail),
    "/cart": () => print(Cart),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProduct, data.id),
});

router.resolve();