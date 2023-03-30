<script lang="ts" setup>
import TopCampaign from './partials/top-campaign.vue';
import TopHeader from './partials/top-header.vue';
import MainNavbar from './partials/main-navbar.vue';
import MainHeaderBlock from './partials/blocks/main-header-block.vue';
import BrowseByCategory from './partials/blocks/browse-by-category.vue';
import CountdownCampaign from './partials/blocks/countdown-campaign.vue';
import ExploreProducts from './partials/blocks/explore-products.vue';
import Testimonials from './partials/blocks/testimonials.vue';
import NewArrivals from './partials/blocks/new-arrivals.vue';
import MostSold from './partials/blocks/most-sold.vue';
import WhyChoose from './partials/blocks/why-choose.vue';
import ProductPoster from './partials/blocks/product-poster.vue';
import Newsletter from './partials/blocks/newsletter.vue';
import Footer from './partials/footer.vue';
import ServiceArea from './partials/blocks/service-area.vue';
import GeneralSearchModal from './partials/general-search-modal.vue';
import ProductQuickViewModal from './partials/product-quick-view-modal.vue';
import Cart from './partials/cart.vue';
import OfferPopupModal from './partials/offer-popup-modal.vue';

useHead({
  script: [
    { src: '/assets/js/main.js', body: true }
  ],
  bodyAttrs: {
    class: 'sticky-header newsletter-popup-modal'
    // class: 'sticky-header newsletter-popup-modal active-dark-mode'
  }
})

const config = useAppConfig();
</script>

<template>
    <a href="#top" class="back-to-top" id="backto-top"><i class="fal fa-arrow-up"></i></a>
    <header class="header axil-header header-style-1">
        <TopCampaign/>
        <!-- <TopHeader/> -->
        <!-- Start Mainmenu Area  -->
        <div id="axil-sticky-placeholder"></div>
        <MainNavbar/>
        <!-- End Mainmenu Area -->
    </header>

    <main class="main-wrapper">
        <MainHeaderBlock/>
        <!-- <BrowseByCategory/> -->
        <CountdownCampaign/>
        <!-- <ExploreProducts/> -->
        <Testimonials/>
        <!-- <NewArrivals/> -->
        <!-- <MostSold/> -->
        <WhyChoose/>
        <ProductPoster/>
        <Newsletter/>
    </main>
    <ServiceArea/>
    <Footer/>

    <!-- Global stuff -->
    <GeneralSearchModal/>
    <ProductQuickViewModal/>
    <Cart/>
    <OfferPopupModal v-if="config.showOffer"/>
    <div class="closeMask"></div>
</template>