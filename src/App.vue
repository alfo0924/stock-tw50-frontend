<template>
  <div id="app">
    <header class="header">
      <h1>台灣50排行</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <span>© 2024 股市金字塔爬蟲展示</span>
    </footer>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f6f8fa;
  font-family: 'Noto Sans TC', Arial, sans-serif;
}
.header {
  background: #1e293b;
  color: #fff;
  padding: 1.2rem 2rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: center;
}
main {
  flex: 1;
  padding: 2rem 0.5rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
.footer {
  background: #1e293b;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  font-size: 1rem;
  letter-spacing: 1px;
}
</style>
