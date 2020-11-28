<template>
    <div class="mobile-hidden">
        <div class="video-container">
            <video src="/video/feature.mp4" autoplay muted></video>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.video-container {
    width: 100%;
    height: 640px;
    display: flex;
}

.video-container video {
    width: 100%;
    object-fit: cover;
}
</style>