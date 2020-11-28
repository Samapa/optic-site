<template>
  <div>
      <div class="slider">
        
        <img class="fade" :src="banner[currentSlide].image">
          <div class="slide-container optic-container">
              <h3>{{banner[currentSlide].category}}</h3>
              <h2>{{banner[currentSlide].title}}</h2>
              <a :href="banner[currentSlide].url" target="_blank">{{banner[currentSlide].btntext}}</a>
              <!-- <div @click="(currentSlide + 1) == banner.length ? currentSlide = 0 : currentSlide++">
                  next slide
              </div> -->
              <div class="wrapper">
                  <div v-for="(item, index) in banner" :key="index" @click="currentSlide = index" :class="{selected: currentSlide == index}">
                     <p class="invert-font">{{item.description}}</p>
                  </div>
              </div>
          </div>
          
      </div>
      <div class="break"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    currentSlide: 0,
      banner: [
        {
          category: "call of duty",
          title: "Optic Gaming Return",
          image: "/heros/slide_1_2808x.jpg",
          description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          url: "#",
          btntext: 'Learn More'
        },
        {
          category: "content",
          title: "Smooth Competition Season Three",
          image: "/heros/slide_2_2808x.jpg",
          description: "lorem ipsum",
          url: "#",
          btntext: 'Watch Now'
        },
        {
          category: "Merch",
          title: "Founders Edition",
          image: "/heros/slide_3_2808x.jpg",
          description: "lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
          url: "https://opticgaming.tv/",
          btntext: 'Shop Now'
        }
      ]
    };
  }
};
</script>

<style scoped>
@media only screen and (max-width: 420px) {

.slide-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: baseline;
    color: var(--primary);
    position: absolute;
    align-self: center;
    bottom: 40px;
    

  }

  .slide-container a {
      color: var(--primary);
      text-transform: uppercase;
      font-weight: bold;
      background-color: var(--optic-green);
      padding: 5px 25px;
      margin: 10px 0;
      border: solid 0px;
      text-decoration: none;
      transition: ease 0.5s;
      
  }

  .slide-container a:hover {
      color: var(--optic-green);
      background-color: var(--primary);
      transition: ease 0.5s;
  }

  .slide-container h2 {
      color: var(--primary);
  }

  .slide-container h3 {
      color: var(--primary);
      text-transform: uppercase;
      
  }

  .slider > img {
      height: 500px;
      width: 100%;
      position: absolute;
      z-index: -1;
      object-fit: cover;
      filter: brightness(0.5);
  }

  .wrapper {
    display: flex;
    margin-top: 50px;
    width: 100%;
    align-self: center;
    
}

.wrapper div {
    width: 100%;
    margin: 0 7px;
    align-self: flex-end;
    transition: ease 0.2s;
    box-shadow: inset 0px 2px var(--primary);
    padding-top: 15px;
    transition: all 0.2s ease;
}

.wrapper div.selected {
    box-shadow: inset 0px 4px var(--optic-green);
    transition: all 0.2s ease;
}

.wrapper p {
    font-size: 0px;
}

  .slider {
      position: relative;
    width: 100%;
    height: 500px;
  }

.fade {
    animation: fade 2s ease;
}

@keyframes fade {
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
}

}

@media only screen and (min-width: 421px) {

.wrapper {
    display: flex;
    margin-top: 50px;
}

.wrapper div {
    margin-right: 15px;
    width: 250px;
    height: 75px;
    overflow: hidden;
    align-self: flex-end;
    transition: ease 0.2s;
    color: var(--primary);
    box-shadow: inset 0px 2px var(--primary);
    padding-top: 15px;
    transition: all 0.2s ease;
}

.wrapper div.selected {
    box-shadow: inset 0px 4px var(--optic-green);
    transition: all 0.2s ease;
}

.wrapper div:hover {
    cursor: pointer;
    transform: translateY(4px);
    transition: ease 0.2s;
}

  .slide-container {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 1000px;
    align-self: center;

  }

  .slider > img {
      position: absolute;
      top: 0;
      left: 0;
      filter: brightness(0.5);
        height: 800px;
        width: 100%;
      object-fit: cover;
      z-index: -1;  
  }

  .slider > img::before {
      background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
      content: '';
  }


    .slide-container a {
      color: var(--primary);
      text-transform: uppercase;
      font-weight: bold;
      background-color: var(--optic-green);
      padding: 10px 50px;
      margin: 10px 0;
      border: solid 0px;
      text-decoration: none;
      transition: ease 0.5s;
      
  }

  .slide-container a:hover {
      color: var(--invert);
      background-color: var(--primary);
      transition: ease 0.5s;
  }

  .slide-container h2 {
      color: var(--primary);
  }

  .slide-container h3 {
      color: var(--primary);
      text-transform: uppercase;
      
  }

  .slider {
      position: relative;
    width: 100%;
    height: 800px;
    display: flex;
  }

.fade {
    animation: fade 0s ease;
}

@keyframes fade {
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
}

}
</style>