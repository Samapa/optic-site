<template>
    <div>
        <div class="optic-banner">
            <img class="optic-background" :src="bannersrc" />
            <div class="optic-banner-text">
                <img :src="image" />
                <h3 class="optic-title">{{title}}</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['bannersrc','title', 'image']
}
</script>

<style scoped>
.optic-banner {
    width: 100%;
    height: 563px;
    position: relative;
    display: flex;
}

.optic-background {
    position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 563px;
  object-fit: cover;
  object-position: center top;
  z-index: -2;

}

.optic-banner-text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--primary);
    z-index: -1;
    background-color: rgba(0,0,0,0.8);
}

.optic-banner-text img {
    height: 125px;
    border-radius: 50%;
}

.optic-title {
    margin: 0;
    margin-top: 15px;
    padding: 0;
    font-size: 16px;
    letter-spacing: 10px;
}

</style>