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
        <router-link to="/projects">
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
    transition: color 0.5s ease;
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
    .icon-container {
    padding-left: 1.5em;
}

    .container {
        flex-direction: column;
    }

    .icon {
        transform: scale(2.5);
    }

    .about {
        padding: 2em 1.5em 0 1.5em;
    }
}

@media (max-width: 480px) {
    .icon {
        transform: scale(2);
    }
    .about h1 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }

    .about p {
        font-size: 1.1rem;
        line-height: 1.5;
    }

    .about {
        padding: 1.5em 1em 0 1em;
    }
}

@media (max-width: 360px) {
    .about h1 {
        font-size: 1.6rem;
    }

    .about p {
        font-size: 1rem;
    }
}

</style>