<template>
  <div>
    <div class="optic-anoucement">
      <ul class="optic-container">
        <li>
          <h3 class="invert-font">
            THIS IS A PRE-ORDER. ORDERS WILL SHIP ON DECEMBER 1ST.
          </h3>
        </li>
      </ul>
    </div>
    <div class="optic-container">
      <h3 class="optic-title">Shop</h3>
      <div class="shop-tiles-container">
        <div v-for="(item, index) in shopItem" :key="index">
          <div class="shop-tile">
            <h3>{{ shopItem[index].title }}</h3>
            <p>{{ shopItem[index].desc }}</p>
            <img :src="shopItem[index].img" :alt="shopItem[index].alt" />
            <a class="optic-btn" :href="shopItem[index].link" target="_blank"
              >View Item</a
            >
          </div>
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
          link: "https://opticgaming.tv/products/optic-founders-hoodie",
        },
        {
          title: "OpTic Basic Tee",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-tee.jpg",
          alt: "OpTic Founders Tee",
          link: "https://opticgaming.tv/products/optic-founders-tee",
        },
        {
          title: "OpTic Snap Back",
          desc: "This is a pre-order. Orders will ship on DECEMBER 1st.",
          img: "/shop/optic-hat.jpg",
          alt: "OpTic Founders Hat",
          link: "https://opticgaming.tv/products/optic-founders-hat",
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

.optic-anoucement {
  background-color: var(--invert);
}

.optic-anoucement ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
}

.optic-anoucement ul li h3 {
  font-size: 10px;
}

.shop-tile {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.shop-tile p,
a,
img {
  padding: 10px 0px;
}

  @media only screen and (max-width: 420px) { 
    .shop-tile p, a, img {
    padding: 10px 0px;
    width: 100%;
}

.optic-anoucement {
  text-align: center;
}
  }
</style>