<template>
  <div class="optic-footer">
      <ul class="optic-container">
    <div>
      <ul class="optic-subscribe">
        <li>
          <lable>Subscribe to the #GreenWall</lable>
          <input type="email" />
          <a href="#" class="invert-font">Become a Member</a>
        </li>
      </ul>
    </div>
    <div></div>
    <div>
      <ul class="optic-footer-links">
        <li>
          <a href="#">Content</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">NRG</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
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

.optic-footer ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.optic-footer-links {
  display: flex;
  list-style: none;
  flex-direction: column;
}

.optic-subscribe li {
  display: flex;
  flex-direction: column;
}

.optic-subscribe li input {
  border: solid 1px var(--optic-green);
  margin-top: 5px;
  padding: 7px;
}

.optic-subscribe li a {
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--invert);
  text-align: center;
  width: 100%;
  padding: 7px;
  margin-top: 5px;
  transition: ease 0.3s;
}

.optic-subscribe li a:hover {
  transition: ease 0.3s;
  background-color: var(--optic-green);
}

.optic-footer-links li a {
  transition: 0.3s ease;
}

.optic-footer-links li a:hover {
  transition: 0.3s ease;
  color: var(--optic-green);
}
</style>