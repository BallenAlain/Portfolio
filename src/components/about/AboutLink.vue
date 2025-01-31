<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutLinks',
    props: {
        text: {
            type: String,
            required: true,
            default: "n/a",
        },
        name: {
            type: String,
            required: true,
            default: 'n/a',
        },
        link: {
            type: String,
            required: true,
            default: 'n/a',
        }
    }
})
</script>

<template>
    <span class="container">
        {{ text }}
    <a :href="link" target="_blank"><span class="link-name"> {{ name }} <v-icon name="hi-external-link" /></span>
        &nbsp;
    </a>
</span>
</template>

<style scoped>
.container {
    white-space: nowrap;
}

.link-name {
    color: var(--vt-c-black-soft);
    position: relative;
    transition: transform 0.3s ease;
    padding-bottom: 3px;
    font-size: clamp(0.2rem, 2vw, 1rem);
    background-image: linear-gradient(to right, var(--text-dark-soft) 0%, var(--text-dark-soft) 100%);
    background-size: 0% 2px;
    background-position: left bottom;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out, padding-left 0.5s ease;
}

.link-name:hover {
    background-size: 100% 2px;
    padding-left: 10px;
}

a {
    text-decoration: none;
}

@media (max-width: 720px) {
    .container {
    white-space: normal;
}
}
</style>