<script>
import ProductsCard from './ProductsCard.vue'
import AdvertisementComponent from './AdvertisementComponent.vue'
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
export default {
    components: {
        ProductsCard,
        AdvertisementComponent,
        SiteHeader,
        SiteFooter
    },
    methods: {
        gameGetIDChild(ID) {
            console.log(ID)
            this.$emit('getIDBy', ID)
        },
    }
}
</script>

<template>
    <site-header></site-header>
    <main>
        <div class="cont-main">
            <advertisement-component></advertisement-component>
            <div class="cont-games">
                <span>Игры и приложения</span>
            </div>
            <products-card @getID="gameGetIDChild"></products-card>
        </div>
    </main>
    <site-footer></site-footer>
</template>

<style>
main {
    background-color: #131217;
}

.cont-main {
    background-color: #131217;
}

.cont-games {
    padding: 20px 94px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
}

.cont-games span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(1.5rem, 0.9565rem + 0.8696vw, 2rem);
    color: #fff;
}
</style>