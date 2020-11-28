<template>
  <div class="optic-container">
    <h3 class="optic-title">Shop</h3>
    <div class="shop-tiles-container">
      <div v-for="(item, index) in shopItem" :key="index">
          <div class="shop-tile">
            <h3>{{shopItem[index].title}}</h3>
            <p>{{shopItem[index].desc}}</p>
            <img :src="shopItem[index].img" :alt="shopItem[index].alt"  />
            <a :href="shopItem[index].link" target="_blank" class="invert-font">View Item</a>
          </div>
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
          link: "https://opticgaming.tv/products/optic-founders-hoodie"
        },
        {
          title: "OpTic Basic Tee",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-tee.jpg",
          alt: "OpTic Founders Tee",
          link: "https://opticgaming.tv/products/optic-founders-tee"
        },
        {
          title: "OpTic Snap Back",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-hat.jpg",
          alt: "OpTic Founders Hat",
          link: "https://opticgaming.tv/products/optic-founders-hat"
        }
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
  transition: ease 0.3s;
}

.shop-tile a:hover {
  background-color: var(--optic-green);
  transition: ease 0.3s;
}

.shop-tile h3,
p,
a,
img {
  padding: 10px 0px;
}
</style>