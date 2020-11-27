<template>
  <div class="optic-container">
    <h3 class="optic-title">Shop</h3>
    <div class="shop-tiles-container">
      <div v-for="(item, index) in shopItem" :key="index">
        <a :href="shopItem[index].link">
          <div class="shop-tile">
            <h3>{{ shopItem[index].title }}</h3>
            <p>{{ shopItem[index].desc }}</p>
            <img :src="shopItem[index].img" :alt="shopItem[index].alt" />
            <a class="invert-font" :href="shopItem[index].link">View Item</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopItem: [
        {
          title: "OpTic Hoodie",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-hoodie.jpg",
          alt: "OpTic Founders Hoodie",
          link: "#",
        },
        {
          title: "OpTic Basic Tee",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-tee.jpg",
          alt: "OpTic Founders Tee",
          link: "#",
        },
        {
          title: "OpTic Snap Back",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-hat.jpg",
          alt: "OpTic Founders Hat",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shop-tiles-container {
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
}

.shop-tile {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.shop-tile a {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--invert);
}

.shop-tile h3,
p,
a,
img {
  padding: 10px 0px;
}
</style>