<template>
  <div class="backgroundf3 flex">
    <h3 class="optic-title">Meet team summertime</h3>
    
    <div class="optic-tst">
      <div class="optic-tst-card" v-for="(item, index) in tst" :key="index">
        <div class="tst-content">
          <img :src="tst[index].img" />
          <div class="tst-info">
            <h3>{{ tst[index].ign }}</h3>
            <p class="name">{{ tst[index].name }}</p>
            <ul class="optic-socials flex">
              <a :href="tst[index].twitter" target="_blank">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></li>
              </a>
              <a :href="tst[index].insta" target="_blank">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a class="tst-btn" href="/optic-livesite/teamsummertime">Meet TST</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tst: [
        {
          ign: "Hitch",
          name: "Davis Edwards",
          img: "/optic-livesite/tst/hitch.webp",
          twitter: "https://twitter.com/hitchariide",
          insta: "https://www.instagram.com/hitchariide/"
        },
        {
          ign: "Blake",
          name: "Blake Cissel",
          img: "/optic-livesite/tst/blake.jpg",
          twitter: "https://twitter.com/blakecissel",
          insta: "https://www.instagram.com/blakecissel/"
        },
        {
          ign: "Jorge",
          name: "Jorge Estrada",
          img: "/optic-livesite/tst/jorge.jpeg",
          twitter: "https://twitter.com/JorgeSummertime",
          insta: "https://www.instagram.com/JorgeSummertime/"
        }
      ],
    };
  },
};
</script>
<style scoped>

.optic-socials {
  list-style: none;
  flex-direction: row;
  justify-content: end;
  margin-top: 30px;
}

.optic-socials a {
  transition: ease 0.3s;
  margin-right: 15px;
}

.optic-socials a:hover {
  transition: ease 0.3s;
  fill: var(--tst-blue);
}

.tst-btn {
    text-align: center;
    width: 25%;
  align-self: center;
  margin: 15px;
  margin-bottom: 25px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: var(--invert);
    color: var(--primary);
    transition: ease 0.3s;
    padding: 5px;
    margin-top: 5px;
  }
  
  .tst-btn:hover {
    background-color: var(--tst-blue);
    transition: ease 0.3s;
  }

.optic-tst {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.optic-tst-card {
  display: flex;
  width: 35%;
  background-color: var(--primary);
  border-right: solid 2px var(--tst-blue);
  margin: 15px;
  transition: ease 0.3s;
}

.optic-tst-card:hover h3 {
  color: var(--tst-blue);
  transition: ease 0.3s;
}

.optic-tst-card .name {
  text-transform: capitalize;
}

.optic-tst-card img {
  height: 150px;
}

.optic-btn {
  width: 25%;
  align-self: center;
  margin: 15px;
  margin-bottom: 25px;
}

.tst-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.tst-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 35px;
  align-self: center;
}

    @media only screen and (max-width: 1024px) {  

    .optic-tst  {
      flex-direction: column;
    }

    .optic-tst-card {
      width: auto;
    }

    .tst-btn {
      width: 60%;
    }

  }

</style>