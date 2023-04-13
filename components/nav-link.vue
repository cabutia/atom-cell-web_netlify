<template>
    <li :class="[hasChildren ? 'menu-item-has-children' : '']">
        <NuxtLink :to="link ? link : '#'" v-if="!hasChildren" :target="blank ? '_blank' : '_self'">
            {{ label }}
        </NuxtLink>
        <a v-else :href="link ? link : '#'" :target="blank ? '_blank' : '_self'">
            {{ label }}
        </a>
        <ul v-if="hasChildren" class="axil-submenu">
            <li v-for="child in children">
                <a :href="child.link ? child.link : '#'" :target="child.blank ? '_blank' : '_self'">
                    {{ child.label }}
                </a>
            </li>
        </ul>
    </li>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    blank: {
        type: Boolean,
        required: false,
    },
    children: {
        type: Array as PropType<{label: string, link?: string, blank?: boolean}[]>,
        required: false
    }
})

const hasChildren: ComputedRef<boolean> = computed(() => {
    return !!(props.children && props.children.length > 0)
})
</script>