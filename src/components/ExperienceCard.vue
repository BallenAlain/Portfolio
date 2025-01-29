<script lang="ts">
import { defineComponent } from 'vue';

interface skills {
    id: number,
    link: string,
    delay: number
}

document.addEventListener("scroll", () => {
    const pageTop: number = window.scrollY;
    const pageBottom: number = pageTop + window.innerHeight;
    const tags: NodeListOf<HTMLElement> = document.querySelectorAll(".tag");

    tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top + pageTop < pageBottom) {
            tag.classList.add("visible");
        } else {
            tag.classList.remove("visible");
        }
    });
});


export default defineComponent({
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
        productDetails: {
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
            required: true
        },
        path: {
            type: String,
            required: true
        }
    }
})
</script>

<template>
    <div class="card" v-motion-fade-visible>
        <div class="card-content" v-motion-slide-visible-top :duration="500" :delay="100">
            <h3 class="product">{{ product }}</h3>
            <h1 class="company">{{ company }}</h1>
            <p class="details">{{ productDetails }}</p>
            <br>
            <span v-for="skill in skillsIcon" :key="skill.id">
                <img :src=skill.link height="30" width="30" v-motion-slide-visible-once-left :duration="500"
                    :delay=skill.delay>
                &nbsp;
            </span>
            <br>
            <br>
            <a href="" class="learn-more"><router-link :to=path class="link">
                    Learn more
                </router-link></a>

        </div>
        <div class="order" v-motion-slide-visible-left :duration="500" :delay="200">
            <img class="image" :src=imagePath height="500" width="500">
        </div>
    </div>
</template>

<style scoped>
.product {
    font-size: 1em;
}

.link {
    text-decoration: none;
    color: white;
}

.card {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 2rem;
    padding: 10rem 5%;
    max-height: none;
    opacity: 0;
    transform: translate(0, 10vh);
    transition: all 1s;
}

.details {
    color: var(--text-dark-soft);
}

.company {
    color: var(--alainblue);
}

.card.visible {
    opacity: 1;
    transform: translate(0, 0);
}

.card:last-child {
    padding: 9rem 5%;
}

.card-content {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    text-align: left;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
    background-color: #4b7bed4b;
}

.card-content h1 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
}

.card-content h3 {
    font-size: clamp(1.2rem, 3vw, 2rem);
}

.card-content p {
    font-size: clamp(0.9rem, 2vw, 1rem);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.image {
    max-width: 100%;
    height: auto;
    padding: 1rem;
    cursor: pointer;
}


.learn-more {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--alainblue);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.learn-more:hover {
    background-color: #2a5eb3;
}

/* Skills icons */
.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
}

@media (max-width: 1250px) {
    .card {

        flex-wrap: nowrap;

        padding: 10rem 5%;
        /* Adjust padding to save space */

    }

    .card-content {
        padding: 1rem;
    }

    .image {

        max-width: 50%;
        /* Take the other half */

    }
}

@media (max-width: 768px) {
    .card {
        flex-direction: column;
        align-items: center;
        padding: 5rem 5%;
        gap: 1rem;
    }

    .card-content {
        text-align: center;
        padding: 1rem;
        border-top-left-radius: 0%;
        border-bottom-right-radius: 10%;
    }

    .image {
        max-width: 500px;
        max-height: 500px;
    }

    .order {
        order: -1;
    }

    .skills-container {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .card {
        padding: 3rem 5%;
    }

    .card-content h1 {
        font-size: 1.8rem;
    }

    .card-content h3 {
        font-size: 1.3rem;
    }

    .learn-more {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
}
</style>