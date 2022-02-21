import Footer from "../components/footer";
import Header from "../components/header";
const Cart = {
     render() {
        return /* html */`
        ${Header.render()}
        <section class="cart">
         <div class="container">
             <div class="cart-top-wrap">
                <div class="cart-top">
                    <div class="cart-top-cart cart-top-item">
                       <i class="fa fa-shopping-cart"></i>
                    </div>
                    <div class="cart-top-adress cart-top-item">
                       <i class="fa fa-map-marker-alt"></i>
                    </div>
                    <div class="cart-top-payment cart-top-item">
                        <i class="fas fa-money-check-alt"></i>
                    </div>
                </div>
             </div>
         </div>

         <div class="container">
             <div class="cart-content row">
                 <div class="cart-content-left">
                      <table>
                          <tr>
                              <th>Sản phẩm</th>
                              <th>Tên sản phẩm</th>
                              <th>Màu</th>
                              <th>Size</th>
                              <th>Số lượng</th>
                              <th>Tiền</th>
                              <th>Xóa</th>
                          </tr>

                          <tr>
                              <td><img src="image/sp1.jpg" alt=""></td>
                              <td><p>Đầm voan xếp ánh kim MS 41T0057</p></td>
                              <td><img src="image/spcolor.png" alt=""></td>
                              <td><p>L</p></td>
                              <td><input type="number" value="1" min="1"></td>
                              <td><p>190.000 <sup>đ</sup></p></td>
                              <td><span>X</span></td>
                        </tr>
                        <tr>
                            <td><img src="image/sp2.jpg" alt=""></td>
                            <td><p>Đầm voan xếp ánh kim MS 41T0057</p></td>
                            <td><img src="image/spcolor.png" alt=""></td>
                            <td><p>L</p></td>
                            <td><input type="number" value="1" min="1"></td>
                            <td><p>190.000 <sup>đ</sup></p></td>
                            <td><span>X</span></td>
                      </tr>
                      </table>
                 </div>
                 <div class="cart-content-right">
                             <table>
                                 <tr>
                                     <th colspan="2">TỔNG TIỀN GIỎ HÀNG</th>
                                 </tr>
                                 <tr>
                                     <td>TỔNG SẢN PHẨM</td>
                                     <td>2</td>
                                 </tr>
                                 <tr>
                                     <td>TỔNG TIỀN HÀNG</td>
                                     <td><p>190.000 <sup>đ</sup></p></td>
                                 </tr>
                                 <tr>
                                     <td>TẠM TÍNH</td>
                                     <td><p  style="color: black; font-weight: bold;">190.000 <sup>đ</sup></p></td>
                                 </tr>
                             </table>
                    <div class="cart-content-right-text">
                            <p>Bạn sẽ được miễn phí ship khi đơn hàng của bạn có tổng giá trị trên 2.000.000 đ</p>
                            <p style="color: red; font-weight: bold;">Mua thêm 110.000đ để được miễn phí SHIP</p>
                    </div>
                    <div class="cart-content-right-button">
                        <button>TIẾP TỤC MUA SẮM</button>
                        <button>THANH TOÁN</button>
                    </div>
                    <div class="cart-content-right-dangnhap">
                        <p>TÀI KHOẢN IVY</p><br>
                        <p>Hãy <a href="" style="color:chocolate; font-weight: bold;">Đăng nhập</a> tài khoản của bạn để tích điểm thành viên.</p>
                    </div>
                 </div>
             </div>
         </div>
     </section>
    ${Footer.render()}
        `;
    },
    // afterRender(id) {
    //     const btnAddToCart = document.querySelector("#btnAddToCart");
    //     btnAddToCart.addEventListener("click", async () => {
    //         const { data } = await get(id);
    //         addToCart({ ...data, quantity: 1 }, () => {
    //             console.log("được gọi sau khi add to cart nè");
    //         });
    //     });
    // },
};
export default Cart;