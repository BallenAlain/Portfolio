<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'ExperienceCard',
    props: {
        company: {
            type: String,
            required: true,
            default: "n/a"
        },
        product: {
            type: String,
            required: true,
            default: "n/a"
        },
        imagePath: {
            type: String,
            required: true,
            default: "n/a"
        },
    }
})
</script>

<template>
    <div class="card">
        <div class="card-content">
            <h1>{{ company }}</h1>
            <p>{{ product }}</p>
            <a href="" class="learn-more">Learn more</a>
        </div>
        <div class="image">
            image here: {{ imagePath }}
        </div>
    </div>
</template>

<style scoped>
    .card {
        box-sizing: border-box;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        gap:350px;
        margin-top: 100px;
        padding-left: 100px;
    }
    .card-content {
        width:500px;
        background-color:aqua;
        border-radius: 5px;
        text-align: left;
    }

    .card-content h1 {
        font-size: 30px;
        margin-bottom: 10px;
    }

    .card-content p {
        font-size: 12px;
        margin-bottom: 20px;
        color:var(--text-dark);
    }

</style>