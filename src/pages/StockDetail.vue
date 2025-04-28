<template>
  <div class="redirecting">
    <div>正在前往股市金字塔股票頁面...</div>
    <a
      :href="targetUrl"
      target="_blank"
      rel="noopener"
    >若未自動跳轉，請點此</a>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const stockId = computed(() => route.params.stockId)
const targetUrl = computed(() =>
    `https://norway.twsthr.info/StockDetail.aspx?StockID=${stockId.value}`
)

onMounted(() => {
  window.location.href = targetUrl.value
})
</script>

<style scoped>
.redirecting {
  text-align: center;
  margin-top: 3rem;
  color: #64748b;
  font-size: 1.2rem;
}
.redirecting a {
  display: inline-block;
  margin-top: 1.5rem;
  color: #2563eb;
  font-weight: bold;
}
</style>
