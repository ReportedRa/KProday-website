<script>
export default {
    data() {
        return {
            adsImage: ["/src/assets/ads/cs2adv.svg", "/src/assets/ads/pubgadv.svg", "/src/assets/ads/dota2adv.svg "]
        }
    }
}
</script>

<template>
    <div class="cont-adv">
        <div class="adv" v-for="ads in adsImage">
            <img :src="ads" alt="" class="adv-img">
        </div>
    </div>
</template>

<style>
.cont-adv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 82px;
}

.adv {
    display: flex;
    justify-content: center;
}

.adv-img {
    height: 100%;
    width: 95%;
    border-radius: 14px;
}
</style>