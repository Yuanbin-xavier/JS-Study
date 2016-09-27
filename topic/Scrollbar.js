// // 滚动条返回顶部动画实现
// <script>
// toTop() {
//   let d = 500     //运行时间（毫秒）
//   let b = document.body.scrollTop //开始位置
//   let c = 0-b     //结束位置
//   let now = Date.now()
//   //减速曲线
//   let calc=(t, b, c, d) => {
//     return - c * ((t = t / d - 1) * t * t * t - 1) + b;
//   }
//   // 跑帧
//   let go = () => {
//     let t = Date.now() - now
//     if (t >= d) {
//       window.cancelAnimationFrame(go)
//       return
//     }
//     document.body.scrollTop = calc(t,b,c,d)
//     window.requestAnimationFrame(go)
//   }
//   // 初始化
//   window.requestAnimationFrame(go)
// }
// </script>
