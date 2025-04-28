import axios from 'axios'

const API_BASE = '/api' // 根據實際後端API設置

export default {
    async getTW50Stocks() {
        const res = await axios.get(`${API_BASE}/stocks/tw50`)
        return res.data
    }
}
