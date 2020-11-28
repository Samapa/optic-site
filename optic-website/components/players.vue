<template>
  <div>
    <div class="optic-players">
      <div
        v-for="(item, index) in players"
        :key="index"
        class="optic-player-card"
      >
        <img :src="players[index].img" />
        <div>
        <h3>{{ players[index].ign }}</h3>
        <p class="name">{{ players[index].name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      players: [
        {
          ign: "BigT",
          name: "Sick Lad",
          img:
            "https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltfe87107ccc5c6d66/5e1cb587bfaf010dc685ef46/Chicago_Huntsmen_Envoy_0048_S-350x350.png"
        },
        {
          ign: "BigT",
          name: "Sick Lad",
          img:
            "https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltfe87107ccc5c6d66/5e1cb587bfaf010dc685ef46/Chicago_Huntsmen_Envoy_0048_S-350x350.png"
        },
        {
          ign: "BigT",
          name: "Sick Lad",
          img:
            "https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltfe87107ccc5c6d66/5e1cb587bfaf010dc685ef46/Chicago_Huntsmen_Envoy_0048_S-350x350.png"
        },
        {
          ign: "BigT",
          name: "Sick Lad",
          img:
            "https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltfe87107ccc5c6d66/5e1cb587bfaf010dc685ef46/Chicago_Huntsmen_Envoy_0048_S-350x350.png"
        },
        {
          ign: "BigT",
          name: "Sick Lad",
          img:
            "https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltfe87107ccc5c6d66/5e1cb587bfaf010dc685ef46/Chicago_Huntsmen_Envoy_0048_S-350x350.png"
        },
        {
          ign: "BigT",
          name: "Sick Lad",
          img:
            "https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltfe87107ccc5c6d66/5e1cb587bfaf010dc685ef46/Chicago_Huntsmen_Envoy_0048_S-350x350.png"
        }
      ],
    };
  },
};
</script>
<style scoped>
.optic-players {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

}

.optic-player-card {
  display: flex;
  width: 24%;
  background-color: var(--primary);
  border-right: solid 2px var(--optic-green);
  flex: 0 0 auto;
}

.optic-player-card .name {
  text-transform: capitalize;
}

.optic-player-card div {
    width: 50%;
    align-self: center;
    margin-left: 35px;
    
}

.optic-player-card img {
    height: 150px;
}

</style>