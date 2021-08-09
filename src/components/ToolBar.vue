<template>
  <div class="header">
    <router-link class="focus" to="/book">📘자바스크립트 서적📚</router-link>
    |
    <router-link class="focus" to="/editor"
      >📸이미지 텍스트 에디터🎬</router-link
    >
    |
    <router-link class="focus" to="/generator"
      >🐶무작위동물사진생성기😸</router-link
    >
  </div>
</template>

<style>
.header {
  color: white;
  background-color: #badc58;
  display: flex;
  padding: 0.5rem;
}
.header .router-link-exact-active {
  color: #30336b;
}
.header a {
  color: #7f8ecf;
  text-decoration: none;
}
.header .focus:hover {
  text-decoration: underline;
}
</style>
