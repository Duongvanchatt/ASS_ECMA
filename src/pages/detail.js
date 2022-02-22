import { get } from "../api/post";
import Footer from "../components/footer";
import Header from "../components/header";
const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
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
                            <img src="${data.img}" alt="">
                        </div>                       
                    </div>
                    <div class="product-content-right">
                        <div class="product-content-right-name">
                            <h1>${data.title}</h1>
                        </div>
                        <div class="product-content-right-price">
                            <p>${data.price}<sup>đ</sup></p>
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
                                    <p>${data.desc}</p> 
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
};
export default DetailPage;