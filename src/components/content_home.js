const content_home = {
    render() {
        return /*html*/ `
            <!-- sanphamdcmuanhieunhat -->
        <center><h1 style="font-size: 25px;">SẢN PHẨM ĐƯỢC MUA NHIỀU NHẤT</h1></center>
        <div class="sp row">
            <div class="category-right-content-item">
                <img src="./img/sp1.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp2.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp3.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp4.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp1.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp2.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp3.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
            <div class="category-right-content-item">
                <img src="./img/sp4.jpg" alt="">
                <a href="product.html"><h1>ĐẦM THUN ÔM TAY LỠ MS 42B9022</h1></a>
                <p>790.000<sup>đ</sup></p>
            </div>
        </div>
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
export default content_home;