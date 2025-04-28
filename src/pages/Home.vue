<template>
  <div>
    <h2 class="subtitle">
      台灣50股票排行
    </h2>
    <div
      v-if="loading"
      class="loading"
    >
      載入中...
    </div>
    <div v-else>
      <StockCard
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import StockCard from '../components/StockCard.vue'

const store = useStore()
const loading = ref(true)

onMounted(async () => {
  await store.dispatch('fetchStocks')
  loading.value = false
})

const stocks = store.getters.stocks
</script>

<style scoped>
.subtitle {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 1.2rem;
  letter-spacing: 2px;
}
.loading {
  color: #64748b;
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem 0;
}
</style>
