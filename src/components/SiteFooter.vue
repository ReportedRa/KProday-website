<script>
</script>

<template>
    <footer>
        <div class="cont-footer">
            <div class="cont-name">
                <span class="name">KP<span class="next-name">roday</span></span>
            </div>
            <div class="cont-text">
                <div class="text">
                    <a href="#">Политика конфиденциальности</a>
                </div>
                <div class="text">
                    <a href="#">Политика cookie</a>
                </div>
                <div class="text">
                    <a href="#">Отправить запрос</a>
                </div>
                <div class="text">
                    <a href="#">О компании</a>
                </div>
            </div>
            <div class="cont-pay">
                <div class="pay-img">
                    <img src="../assets/footer/visa.svg" alt="">
                </div>
                <div class="pay-img">
                    <img src="../assets/footer/mastercard.svg" alt="">
                </div>
                <div class="pay-img">
                    <img src="../assets/footer/applepay.svg" alt="">
                </div>
                <div class="pay-img">
                    <img src="../assets/footer/paypal.svg" alt="">
                </div>
            </div>
            <div class="cont-socials">
                <div class="social-img">
                    <a href="#"><img src="../assets/footer/email.svg" alt=""></a>
                </div>
                <div class="social-img">
                    <a href="#"><img src="../assets/footer/instagram.svg" alt=""></a>
                </div>
                <div class="social-img">
                    <a href="#"><img src="../assets/footer/telegram.svg" alt=""></a>
                </div>
                <div class="social-img">
                    <a href="#"><img src="../assets/footer/tel.svg" alt=""></a>
                </div>
                <div class="social-img">
                    <a href="#"><img src="../assets/footer/whatsapp.svg" alt=""></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: #131217;
    height: 100%;
}

.cont-footer {
    background-color: #131217;
    border-top: 1px solid #363637;
    display: flex;
    padding: 20px 94px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.name {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 41px;
    text-align: center;
    color: #5dff94;
}

.next-name {
    color: #fff;
}

.cont-pay {
    display: flex;
    gap: 30px;
}

.cont-text {
    display: flex;
    gap: 30px;
}

.cont-text a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
}

.cont-text a:hover {
    color: #a4fdc2;
}

.cont-socials {
    display: flex;
    gap: 3px;
}
</style> 