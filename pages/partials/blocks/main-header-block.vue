<script lang="ts" setup>
const config = useAppConfig()
const contactLink = computed(() => config?.whatsappLink || '#')
const mapLink = computed(() => config?.mapLink || '#')
</script>

<template>
    <div class="axil-main-slider-area main-slider-style-1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-sm-6">
                    <div class="main-slider-content">
                        <div class="slider-content-activation-one">
                            <div class="single-slide slick-slide" data-sal="slide-up" data-sal-delay="400"
                                data-sal-duration="800">
                                <span class="subtitle">
                                    <i class="fas fa-badge-percent"></i>
                                    Descuentos en efectivo
                                </span>
                                <h1 class="title">
                                    10% OFF en todas tus compras
                                </h1>
                                <div class="slide-action">
                                    <div class="shop-btn">
                                        <a :href="contactLink" class="axil-btn btn-bg-white">
                                            <i class="fab fa-whatsapp"></i>
                                            Contactanos
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-slide slick-slide">
                                <span class="subtitle"><i class="fas fa-fire"></i>
                                    Promo inauguración
                                </span>
                                <h1 class="title">Funda + Templado</h1>
                                <div class="slide-action">
                                    <div class="shop-btn">
                                        <a :href="contactLink" target="_blank" class="axil-btn btn-bg-white">
                                            <i class="fab fa-whatsapp"></i>
                                            Contactanos
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="single-slide slick-slide">
                                <span class="subtitle">
                                    <i class="fas fa-location"></i>
                                    Vení a visitarnos!
                                </span>
                                <h1 class="title">
                                    Lamadrid 1666, Villa Ballester
                                </h1>
                                <div class="slide-action">
                                    <div class="shop-btn">
                                        <a :href="mapLink" target="_blank" class="axil-btn btn-bg-white">
                                            <i class="fas fa-location"></i>
                                            Dirección
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-sm-6">
                    <div class="main-slider-large-thumb">
                        <div class="slider-thumb-activation-one axil-slick-dots">
                            <div class="single-slide slick-slide" data-sal="slide-up" data-sal-delay="600"
                                data-sal-duration="1500">
                                <img src="/assets/images/slide-2.png" alt="Product">
                                <div class="product-price">
                                    <span class="price-amount">SIN</span>
                                    <span class="text">LIMITE</span>
                                </div>
                            </div>
                            <div class="single-slide slick-slide">
                                <img src="/assets/images/slide-1.png" alt="Product">
                                <div class="product-price">
                                    <span class="text">Desde</span>
                                    <span class="price-amount">$800.00</span>
                                </div>
                            </div>
                            <div class="single-slide slick-slide">
                                <img src="/assets/images/slide-3.png" alt="Product">
                                <div class="product-price">
                                    <span class="text">Ir</span>
                                    <span class="price-amount">
                                        <span class="fas fa-map"></span>
                                    </span>
                                </div>
                            </div>
                            <!-- <div class="single-slide slick-slide">
                                <img src="/assets/images/product/product-39.png" alt="Product">
                                <div class="product-price">
                                    <span class="text">From</span>
                                    <span class="price-amount">$49.00</span>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1"><img src="/assets/images/others/shape-1.png" alt="Shape"></li>
            <li class="shape-2"><img src="/assets/images/others/shape-2.png" alt="Shape"></li>
        </ul>
    </div>
</template>