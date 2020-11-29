<template>
  <div>
    <div class="optic-container">
      <h3 class="optic-title">TST Shop</h3>
      <div class="shop-tiles-container">
        <div
          class="shop-tile-40"
          v-for="(item, index) in shopItem"
          :key="index"
        >
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
      <a
        class="optic-supply"
        target="_blank"
        href="https://createsupply.com/collections/team-summer-time"
      >
        <img src="/optic-livesite/logos/create.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopItem: [
        {
          title: "TST TIE DYE TEE",
          desc: "ndividually hand dyed, each tee is unique.",
          img: "/optic-livesite/shop/tst-tee.jpg",
          alt: "TST TIE DYE TEE",
          link:
            "https://createsupply.com/collections/team-summer-time/products/tst-tie-dye-tee",
        },
        {
          title: "TST TIE DYE HOODIE",
          desc: "Individually hand dyed, each tee is unique.",
          img: "/optic-livesite/shop/tst-hoodie.jpg",
          alt: "TST TIE DYE HOODIE",
          link:
            "https://createsupply.com/collections/team-summer-time/products/tst-tie-dye-hoodie-1",
        },
        {
          title: "TST STICKER PACK",
          desc:
            "Due to this being a limited release all sales are final. We do not accept any returns, refunds, or exchanges.",
          img: "/optic-livesite/shop/tst-sticker.jpg",
          alt: "TST STICKER PACK",
          link:
            "https://createsupply.com/collections/team-summer-time/products/copy-of-tst-sticker-pack",
        },
        {
          title: "TST NALGENE BOTTLE",
          desc:
            "Our spin on the iconic Nalgene bottle. Fit fruit and ice cubes inside with ease due to the wide mouth.",
          img: "/optic-livesite/shop/tst-bottle.jpg",
          alt: "TST NALGENE BOTTLE",
          link:
            "https://createsupply.com/collections/team-summer-time/products/tst-nalgene-bottle",
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
  flex-wrap: wrap;
}

.shop-tile-40 {
  width: 45%;
}

.optic-supply {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
}

.optic-supply img {
  border-radius: 50%;
  width: 150px;
  height: auto;
}

.shop-tile {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.shop-tile img {
  width: 100%;
}

.shop-tile p,
a,
img {
  padding: 10px 0px;
}

  @media only screen and (max-width: 1024px) { 
  .shop-tile p,
  a,
  img {
    padding: 10px 0px;
    width: 100%;
  }

  .shop-tile-40 {
    width: 100%;
  }

  .optic-anoucement {
    text-align: center;
  }
}
</style>