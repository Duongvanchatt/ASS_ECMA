import Footer from "../../components/footer";
import Header from "../../components/header";
const DetailProduct = {
     render() {
        return /* html */`
        ${Header.render()}
        <section class="product">
        <div class="product-top row">
                <p>Trang chủ</p> <span>&#8594;</span>
                <p>Chi tiết sản phẩm</p><span></span>
            </div>
        <div class="container">
            <div class="product-content row">
                <div class="product-content-left row">
                    <div class="product-content-left-big-img">
                        <img src="./img/sp1.1.jpg" alt="">
                    </div>
                    <div class="product-content-left-small-img">
                        <img src="./img/sp1.1.jpg" alt="">
                        <img src="./img/sp1.2.jpg" alt="">
                        <img src="./img/sp1.3.jpg" alt="">
                        <img src="./img/sp1.4.jpg" alt="">
                    </div>
                </div>
                <div class="product-content-right">
                    <div class="product-content-right-name">
                        <h1>ÁO POLO SỢI MODAL CAO CẤP MS 57E2907</h1>
                        <p>MSP: 57E2907</p>
                    </div>
                    <div class="product-content-right-price">
                        <p>299.000<sup>đ</sup></p>
                    </div>
                    <div class="product-content-right-color">
                        <p><span style="font-weight: bold;">Màu sắc</span>:Xanh Tím Than <span
                                style="color:red;">*</span></p>
                        <div class="product-content-right-image">
                            <img src="./img/spcolor.png" alt="">
                        </div>
                    </div>
                    <div class="product-content-right-product-size">
                        <p style="font-weight: bold;">Size:</p>
                        <div class="size">
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span>XXL</span>
                        </div>
                    </div>
                    <div class="quantity">
                        <p style="font-weight: bold;">Số lượng:</p>
                        <input type="number" min="0" value="1">
                    </div>
                    <p style="color:red;">Vui lòng chọn size*</p>
                    <div class="product-content-right-button">
                        <button><i class="fas fa-cart-plus"></i>
                            <p>MUA HÀNG</p>
                        </button>
                        <button>
                            <p>TÌM TẠI CỬA HÀNG</p>
                        </button>
                    </div>
                    <div class="product-content-right-icon">
                        <div class="product-content-right-icon-item">
                            <i class="fas fa-phone"></i>
                            <p>Hotline</p>
                        </div>
                        <div class="product-content-right-icon-item">
                            <i class="fas fa-comments"></i>
                            <p>Comments</p>
                        </div>
                        <div class="product-content-right-icon-item">
                            <i class="fas fa-envelope"></i>
                            <p>Mail</p>
                        </div>
                    </div>
                    <div class="product-content-right-qr">
                        <img src="./img/qrcode2.png" alt="">
                    </div>
                    <div class="product-content-right-bottom">
                        <div class="product-content-right-bottom-top">
                            &#8744;
                        </div>
                        <div class="product-content-right-bottom-big">
                            <div class="product-content-right-bottom-title">
                                <p>Đầm cổ tròn, tay sát nách. Eo chiết có đỉa và đai rời cùng màu đi kèm. Tùng váy xếp
                                    ly đều với độ dài qua gối. Cài bằng khóa kéo ẩn sau lưng.<br><br>
    
                                    Điểm nhấn chính là một chiếc dây vải thắt nơ ở eo sẽ tạo được sự thu hút cho người
                                    đối diện. Và mẫu đầm kẻ được triển khai trên nền vải voan kẻ, phối chút ánh kim
                                    (nhũ) bắt sáng, độ thoáng mát, thấm hút mồ hôi cực tốt, thân thiện với làn da, thâm
                                    mỹ cao, thoải mái khi mặc. Một item vừa trẻ trung, thanh lịch lại hack dáng vô cùng
                                    hiệu quả, giúp các quý cô có thể tự tin rằng một cô nàng xinh đẹp đang đi dạo phố
                                    hay làm việc.
    
                                    <br><br><b>Màu sắc: Trắng - Đen - Tím Lavender</b>
                                </p>
                            </div>
                        </div>
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
export default DetailProduct;