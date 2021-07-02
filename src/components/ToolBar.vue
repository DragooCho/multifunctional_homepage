<template>
  <div class="header">
    <router-link to="/book">📘추천하는 책 목록📚</router-link> |
    <router-link to="/editor">📸이미지 텍스트 에디터🎬</router-link> |
    <router-link to="/generator">🐶무작위동물사진생성기😸</router-link>
  </div>
</template>

<style scoped>
.header {
  color: white;
  background-color: #badc58;
  display: flex;
  padding: 10px;
}
.header .router-link-exact-active {
  color: #30336b;
}
.header a {
  color: white;
}
</style>
