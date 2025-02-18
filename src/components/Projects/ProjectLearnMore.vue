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
    <div class="container">
    <div class="icon-container">
        <router-link to="/projects" class="name">
     <v-icon name="co-arrow-circle-left" class="icon" color="#4b7ced"/>
    </router-link>
    </div>
    <div class="about">
        <div v-for="paragraph, index in data" :key="index">
            <h1>{{ paragraph.header }}</h1>
            <p v-html="paragraph.body"></p>
            <br>
        </div>
    </div>
</div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}
.icon-container {
    padding-top: 4.5rem;
    padding-left: 11%;
    padding-right: 1.5%;
}
.icon {
    transform: scale(3);
    transition: transform 0.5s ease, color 0.5s ease;
    transition: color 0.5s ease;
}

.icon:hover {
    color: var(--text-dark-soft);
    cursor: pointer;
}
.about {
    display: flex;
    flex-direction: column;
    padding: 4em 12% 0 1.3em;
}

.about h1 {
    color: var(--alainblue);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
}

.about p{
    font-size: 1.3rem;
}

@media (max-width: 768px) {
    .icon {
        transform: scale(2.5);
    }
}

@media (max-width: 480px) {
    .icon {
        transform: scale(2);
    }
}

</style>