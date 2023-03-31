<template>
    <div class="single-slide slick-slide" v-bind="attrs">
        <span class="subtitle"><i :class="icon"></i>
            {{ subtitle }}
        </span>
        <h1 class="title">{{ title }}</h1>
        <div class="slide-action">
            <div class="shop-btn">
                <a href="shop.html" class="axil-btn btn-bg-white">
                    <i v-if="ctaIcon" :class="ctaIcon"></i>
                    {{ ctaLabel }}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    first: {
        type: Boolean,
        required: false,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    ctaLabel: {
        type: String,
        required: false
    },
    ctaIcon: {
        type: String,
        required: false
    }
})

const attrs: ComputedRef<any> = computed(() => {
    if (props.first) return {
        'data-sal': 'slide-up',
        'data-sal-delay': '600',
        'data-sal-duration': '1500'
    }
    return {}
})
</script>