import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return /*html*/`<!-- login -->
        <section class="content row">
            <div class="textlogin">
                <h1>IVY</h1>
                <p>MODA</p>
            </div>
            <div class="boxlogin">
                <div class="boxlogin-tieude">
                    <h1>LOGIN</h1>
                </div>
                <form id="formSignin">
                <div class="boxlogin-input">
                    <label for=""><i class='far fa-address-card'></i> Email</label><br>
                    <input type="text" id="email" placeholder="Nhập email..."><br><br>
   
                    <label for=""><i class='fas fa-key'></i> Mật khẩu</label><br>
                    <input type="text" id="password" placeholder="Nhập mật khẩu...">
   
                    <div class="btn1">
                       <button class="btn-dangnhap">Đăng nhập</button>
                    </div>
                    <div class="textend">
                        <p>Bạn chưa có tài khoản?<a href="dangki.html" style="font-weight: bold;"> Đăng kí</a></p>
                    </div>
                    <div class="textend">
                       <p><a href="quenmatkhau.html" style="font-weight: bold;">Quên mật khẩu?</a></p>
                   </div>
                </div>
            </div>
        </form>
        </section>`;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call API login
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin/dashboard";
                    } else {
                        document.location.href = "/#/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
                // console.log(error.response.data);
            }
        });
    },
};
export default Signin;