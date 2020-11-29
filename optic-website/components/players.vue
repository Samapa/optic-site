<template>
  <div class="backgroundf3 flex">
    <h3 class="optic-title">The Players</h3>
    <div class="optic-players">
      <a
        class="optic-player-card"
        :href="players[index].url"
        v-for="(item, index) in players"
        :key="index"
      >
        <div class="player-content">
          <img :src="players[index].img" />
          <div class="player-info">
            <h3>{{ players[index].ign }}</h3>
            <p class="name">{{ players[index].name }}</p>
          </div>
        </div>
      </a>
    </div>
    <a class="optic-btn" href="/optic-livesite/players">View Our Roster</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      players: [
        {
          ign: "Scump",
          name: "Seth Amber",
          img: "/optic-livesite/players/scump.png",
          url: "",
        },
        {
          ign: "Formal",
          name: "Mathhew Piper",
          img: "/optic-livesite/players/formal.png",
          url: "",
        },
        {
          ign: "Dashy",
          name: "Brandon Otell",
          img: "/optic-livesite/players/dashy.png",
          url: "",
        },
        {
          ign: "Envoy",
          name: "Dylan Hannon",
          img: "/optic-livesite/players/envoy.png",
          url: "",
        },
        {
          ign: "General",
          name: "Jordan General",
          img: "/optic-livesite/players/general.png",
          url: "",
        },
      ],
    };
  },
};
</script>
<style scoped>



.optic-players {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.optic-player-card {
  display: flex;
  width: 35%;
  background-color: var(--primary);
  border-right: solid 2px var(--optic-green);
  margin: 15px;
  transition: ease 0.3s;
}

.optic-player-card:hover h3 {
  color: var(--optic-green);
  transition: ease 0.3s;
}

.optic-player-card:hover {
  cursor: pointer;
}

.optic-player-card .name {
  text-transform: capitalize;
}

.optic-player-card img {
  height: 150px;
}

.optic-btn {
  width: 25%;
  align-self: center;
  margin: 15px;
  margin-bottom: 25px;
}

.player-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.player-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 35px;
  align-self: center;
}

    @media only screen and (max-width: 482px) {  

    .optic-players  {
      flex-direction: column;
    }

    .optic-player-card {
      width: auto;
    }

    .optic-btn {
      width: 60%;
    }

  }

</style>