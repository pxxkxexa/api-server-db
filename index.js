
import express from 'express'

const app = express()

// 루트 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>HELLO EXPLRESS</h1>")
})

// 서버 시작
const PORT = 8000
app.listen(PORT, () => {
    console.log(`서버 실행중... ${PORT}`);
})