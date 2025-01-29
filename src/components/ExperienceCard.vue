<script lang="ts">
import { defineComponent } from 'vue';

interface skills {
    id: number,
    link: string,
    delay: number
}

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
        skillsIcon: {
            type: Array<skills>,
            required: true,

        }
    }
})
</script>

<template>
    <div class="card" v-motion-slide-visible-top :duration="500" :delay="300">
        <div class="card-content">
            <h1>{{ company }}</h1>
            <p>{{ product }}</p>
            <span v-for="skill in skillsIcon" :key="skill.id">
                <img :src=skill.link height="30" width="30" v-motion-slide-visible-once-left :duration="500" :delay=skill.delay>
                &nbsp; 
            </span> 
            <br>
            <a href="" class="learn-more">Learn more</a>
        </div>
        <div class="image" v-motion-slide-visible-left :duration="500" :delay="900">
            <img :src=imagePath height="500" width="300">
        </div>
    </div>
</template>

<style scoped>
    .card {
    position: relative; /* Needed for pseudo-element positioning */
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    flex-wrap: nowrap;
    gap: 350px;
    padding: 15em 100px 50em 100px;
}


    .card-content {
        width:500px;
        top:50%;
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