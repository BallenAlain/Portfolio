<script setup lang="ts">
import { ref } from 'vue';
const photos = [
    "/assets/img1.png",
    "/assets/img2.jpg",
    "/assets/img3.jpg"
]

const selectedPhoto = ref<string | null>(null);

const openModal = (photo: string) => {
    selectedPhoto.value = photo;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    selectedPhoto.value = null;
    document.body.style.overflow = 'auto';
};
</script>

<template>
    <div class="photo-container">
        <div class="photo-gallery">
            <div class="column" v-for="photo in photos" :key="photo" @click="openModal(photo)">
                <div class="photo" >
                    <img :src="photo">
                </div>
            </div>
        </div>

        <div v-if="selectedPhoto" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <span class="close-btn" @click="closeModal">&times;</span>
                <img :src="selectedPhoto" class="modal-image">
            </div>
        </div>
    </div>
</template>

<style scoped>
.photo-container {
    padding: 40px 0;
    width: 500px;
    text-align: right;
}

.photo-gallery {
    display: inline-block;
    
}

.column {
    display:inline-block;
    padding:10px;
    transition: transform 0.3s ease;
}

.column:hover {
  cursor: pointer;
  transform: scale(1.03);

}

.photo img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
}

.column:nth-child(n) {
    height:12em;
    width: 15em;
}

.column:nth-child(3n) {
    height: 1em;
    width: 30em;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.modal-image {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 10px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}

.close-btn {
    position: absolute;
    top: -30px;
    right: -30px;
    color: white;
    font-size: 40px;
    cursor: pointer;
    transition: transform 0.2s;
}

.close-btn:hover {
    transform: scale(1.2);
}

@media (max-width:768px) {

    .photo-container {
        padding: 20px 0;
        text-align: center;
    }
    
    .photo-gallery {
        display: block;
        width: 100%;
        margin-right: 0;
    }
    
    .column {
        display: block;
        width: 100% !important;
        height: auto !important;
        margin: 15px 0 !important;
        padding: 0;
        transform: none !important;
    }
    
    .photo img {
        width: 90%;
        height: auto;
        max-height: 50vh;
        margin: 0 auto;
        border-radius: 8px;
    }
    
    /* Modal mobile fixes */
    .modal-content {
        max-width: 95%;
        padding: 10px;
    }
    
    .modal-image {
        max-height: 80vh;
    }
    
    .close-btn {
        top: 15px;
        right: 15px;
        font-size: 32px;
        color: #fff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    .column:hover {
        transform: none !important;
    }
    
}
</style>