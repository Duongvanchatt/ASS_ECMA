import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /*html*/ `
        <!-- header -->
        <header>
            <div class="logo">
            <img src="./img/logo.png" alt="">
            </div>
    
            <div class="menu">
                <li><a href="index.html">TRANG CHỦ</a>
                 <li><a href="category.html">NỮ</a></li>
                 <li><a href="">NAM</a></li>
                 <li><a href="">TRẺ EM</a></li>
                 <li><a href="">BÀI VIẾT</a></li>
            </div>
    
            <div class="orther">
                 <li><input type="text" placeholder="Tìm kiếm"></li>
                 <button class="btn">Search</button>
                 <li><a class="fas fa-cart-arrow-down" href=""></a></li>
                 <li><a class="fa fa-user" href="login.html"></a></li>
                 <li><a class="fa fa-shopping-bag" href="cart.html"></a></li>
            </div>
        </header>
    <!-- end header -->
    <!-- banner -->
        <section id="slider">
            <div class="aspect-ratio-169">
                <img src="./img/slide1.jpg" alt="">
                <img src="./img/slide2.jpg" alt="">
                <img src="./img/slide3.jpg" alt="">
            </div>
            <div class="dot-container">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </section><br><br>
    <!-- end banner -->
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        logout.addEventListener("click", () => {
            toastr.success("Logout thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;