<template>
    <li :class="[hasChildren ? 'menu-item-has-children' : '']">
        <NuxtLink to="#" v-if="!hasChildren">
            {{ label }}
        </NuxtLink>
        <a v-else href="#">
            {{ label }}
        </a>
        <ul v-if="hasChildren" class="axil-submenu">
            <li v-for="child in children">
                <a href="#">
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
    children: {
        type: Array as PropType<{label: String}[]>,
        required: false
    }
})

const hasChildren: ComputedRef<boolean> = computed(() => {
    return !!(props.children && props.children.length > 0)
})
</script>