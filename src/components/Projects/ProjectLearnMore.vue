<script lang="ts">
import { defineComponent } from 'vue';

type Data = {
    header: string,
    body: string,
}

export default defineComponent({
    props: {
        data: {
            type: Array<Data>,
            required: true
        }
    }
})
</script>

<template>
    <div class="about">
        <div v-for="paragraph, index in data" :key="index">
            <h1>{{ paragraph.header }}</h1>
            <p v-html="paragraph.body"></p>
            <br>
        </div>
    </div>
</template>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    padding: 4em 15% 0 15%;
}

.about h1 {
    color: var(--alainblue);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
}

.about p{
    font-size: 1.3rem;
}

</style>