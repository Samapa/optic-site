<template>
  <div class="backgroundf3 flex">
    <h3 class="optic-title">Powered By</h3>
    <div class="optic-sponsors">
      <a
        class="optic-sponsor-card"
        :href="sponsors[index].url" target="_blank"
        v-for="(item, index) in sponsors"
        :key="index"
      >
        <div class="sponsor-content">
          <img :src="sponsors[index].img" />
          <div class="sponsor-info">
            <h3>{{ sponsors[index].name }}</h3>
            <p>{{sponsors[index].desc}}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sponsors: [
        {
          name: "U.S.Army",
          desc: "The United States Army is the land service branch of the United States Armed Forces.",
          img: "/optic-livesite/sponsors/army.png",
          url: "https://www.army.mil/",
        },
        {
          name: "Crep Project",
          desc: "Market innovators in the shoe care industry and providers of footwear cleaning products and accessories for everyone.",
          img: "/optic-livesite/sponsors/crep.jpeg",
          url: "https://www.crepprotect.com/",
        },
        {
          name: "Metro by T-Mobile",
          desc: "Game, stream, and share on the 5G network that covers more people than anyone else — at no extra charge.",
          img: "/optic-livesite/sponsors/tmobile.png",
          url: "https://www.metrobyt-mobile.com/",
        },
        {
          name: "Turtle Beach",
          desc: "Turtle Beach delivers a wide selection of industry leading, award-winning gaming headsets.",
          img: "/optic-livesite/sponsors/turtlebeach.png",
          url: "https://turtlebeach.com",
        },
        {
          name: "Mountain Due Gamefuel",
          desc: "MTN DEW® Game Fuel® Zero. Charged Watermelon Shock and Charged Raspberry Lemonade. Buy Now.",
          img: "/optic-livesite/sponsors/gamefuel.png",
          url: "https://www.gamefuel.com/",
        },
        {
          name: "Popeyes Louisiana Kitchen",
          desc: "Get access to exclusive coupons. Discover our menu and order delivery or pick up from a Popeyes near you.",
          img: "/optic-livesite/sponsors/popeyes.png",
          url: "https://www.popeyes.com/",
        },
        {
          name: "ZIPPO Heatbank",
          desc: "The HeatBank® 9s Plus is a high tech solution for low temperatures. ",
          img: "/optic-livesite/sponsors/zippo.png",
          url: "https://www.zippo.com/products/heatbank-9s-plus-rechargeable-hand-warmer",
        },
      ],
    };
  },
};
</script>
<style scoped>

.optic-sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.optic-sponsor-card {
  display: flex;
  width: 70%;
  height: 250px;
  background-color: var(--primary);
  border-right: solid 2px var(--optic-green);
  margin: 15px;
  transition: ease 0.3s;
}

.optic-sponsor-card:hover h3 {
  color: var(--optic-green);
  transition: ease 0.3s;
}

.optic-sponsor-card:hover {
  cursor: pointer;
}

.optic-sponsor-card .name {
  text-transform: capitalize;
}

.optic-sponsor-card img {
    object-fit: contain;
    width: 20%;
  padding: 35px;
}

.optic-btn {
  width: 25%;
  align-self: center;
  margin: 15px;
  margin-bottom: 25px;
}

.sponsor-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.sponsor-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 50px;
  align-self: center;
}

   @media only screen and (max-width: 482px) { 

    .sponsor-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .optic-sponsor-card img {
      padding: 0px;
  
    }

    .sponsor-info {
      margin-left: 0px;
      align-self: unset;
      padding: 20px;
    }
  }
</style>