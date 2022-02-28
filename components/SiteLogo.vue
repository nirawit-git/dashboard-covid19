<template>
  <img class="VuetifyLogo" alt="MOPH" src="/icon.png" />
</template>

<style>
.VuetifyLogo {
  height: 120px;
  width: 120px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}

@media only screen and (max-width: 600px) {
  .VuetifyLogo {
    height: 100px;
    width: 100px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }
}
</style>
