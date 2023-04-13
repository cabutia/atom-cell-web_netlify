<script lang="ts" setup>
const config = useAppConfig()
</script>

<template>
    <div class="axil-mainmenu">
        <div class="container">
            <div class="header-navbar">
                <div class="header-brand">
                    <a href="/" class="logo logo-dark">
                        <img src="/assets/images/logo_web_light.png" alt="Site Logo">
                    </a>
                    <a href="/" class="logo logo-light">
                        <img src="/assets/images/logo_web_light.png" alt="Site Logo">
                    </a>
                </div>
                <div class="header-main-nav">
                    <!-- Start Mainmanu Nav -->
                    <nav class="mainmenu-nav">
                        <button class="mobile-close-btn mobile-nav-toggler"><i class="fas fa-times"></i></button>
                        <div class="mobile-nav-brand">
                            <a href="/" class="logo">
                                <img src="/assets/images/logo_web_light.png" alt="Site Logo">
                            </a>
                        </div>
                        <ul class="mainmenu">
                            <NavLink label="Inicio"/>
                            <NavLink label="Contacto" :link="config.whatsappLink" blank/>
                        </ul>
                    </nav>
                    <!-- End Mainmanu Nav -->
                </div>
                <NavbarActions/>
                
            </div>
        </div>
    </div>
</template>