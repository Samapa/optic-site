<template>
  <div class="optic-footer">
      <ul class="ul optic-container flex">
    <div>
      <ul class="optic-subscribe">
        <li>
          <p>Subscribe to the #GreenWall</p>
          <input type="email" />
          <a href="#" class="optic-btn">Become a Member</a>
        </li>
      </ul>
    </div>

    <div>
      <ul class="optic-footer-links">
        <li>
          <a href="https://opticgaming.tv/" target="_blank">Shop</a>
        </li>
        <li>
          <a href="/players">The Team</a>
        </li>
        <li>
          <a href="/teamsummertime">Team Summertime</a>
        </li>
        <li>
          <a href="/partners">Partners</a>
        </li>
        <li>
          <a href="http://www.nrg.gg/" target="_blank">NRG</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/contact">Privacy Policy</a>
        </li>
      </ul>
    </div>
      </ul>
  </div>
</template>

<style scoped>

.optic-footer {
  background-color: var(--primary);
  border-top: solid 1px #f3f3f3;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 35px;
}

.optic-footer .ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.optic-footer ul div:first-child {
  width: 30%;
}

.optic-footer-links {
  display: flex;
  list-style: none;
  flex-direction: column;
}

.optic-subscribe li {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.optic-footer-links li a {
  transition: 0.3s ease;
}

.optic-footer-links li a:hover {
  transition: 0.3s ease;
  color: var(--optic-green);
}

@media only screen and (max-width: 420px) { 
  .optic-footer .ul{
    flex-direction: column;
    text-align: center;
  }

  .optic-footer ul div:first-child {
  width: auto;
  margin-bottom: 15px;
}

}

</style>