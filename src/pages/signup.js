import { signup } from "../api/user";

const SignUp = {
    render() {
        return /*html*/`<!-- dangki -->
        <section class="content row">
            <div class="textdangki">
                <h1>IVY</h1>
                <p>MODA</p>
            </div>
            <div class="boxdangki">
                <div class="boxdangki-tieude">
                    <h1>ĐĂNG KÍ</h1>
                </div>
                <form id="formSignup">
                <div class="boxdangki-input">
                   <label for=""><i class='fas fa-user-alt'></i> Họ tên</label><br>
                   <input type="text" id="username" placeholder="Nhập họ tên..."><br><br>
   
                    <label for=""><i class='far fa-address-card'></i> Email</label><br>
                    <input type="text" id="email" placeholder="Nhập email..."><br><br>
   
                    <label for=""><i class='fas fa-key'></i> Mật khẩu</label><br>
                    <input type="text" id="password" placeholder="Nhập mật khẩu..."><br><br>
   
                    <div class="btn2">
                       <button class="btn-dangki">Đăng kí</button>
                    </div>
                </div>
            </div>
            </form>
        </section>
   <!-- end dangki -->`;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default SignUp;