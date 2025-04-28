<template>
  <div
    class="stock-card"
    @click="goToDetail"
  >
    <div class="rank">
      {{ stock.rank }}
    </div>
    <div class="info">
      <div class="name">
        {{ stock.name }} <span class="id">({{ stock.id }})</span>
      </div>
      <div class="data">
        <span>市值：{{ stock.marketCap }}</span>
        <span>漲跌：<span :class="{'up': stock.change > 0, 'down': stock.change < 0}">
          {{ stock.change > 0 ? '+' : '' }}{{ stock.change }}
        </span></span>
      </div>
    </div>
    <div class="arrow">
      →
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ stock: Object })
const router = useRouter()
function goToDetail() {
  router.push({ name: 'StockDetail', params: { stockId: props.stock.id } })
}
</script>

<style scoped>
.stock-card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.stock-card:hover {
  box-shadow: 0 4px 16px #0002;
  background: #f1f5f9;
}
.rank {
  font-size: 2rem;
  font-weight: bold;
  width: 50px;
  color: #64748b;
}
.info {
  flex: 1;
  margin-left: 1rem;
}
.name {
  font-size: 1.2rem;
  font-weight: 600;
}
.id {
  font-size: 1rem;
  color: #94a3b8;
}
.data {
  margin-top: 0.3rem;
  font-size: 1rem;
  color: #64748b;
  display: flex;
  gap: 1.5rem;
}
.up { color: #16a34a; }
.down { color: #dc2626; }
.arrow {
  font-size: 1.5rem;
  color: #2563eb;
  margin-left: 1rem;
}
</style>
