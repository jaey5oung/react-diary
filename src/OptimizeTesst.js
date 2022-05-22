// import React, { useState, useEffect } from "react"

// const OptimizeTesst = () => {
//   const [count, setCount] = useState(0)
//   const [text, setText] = useState("")

//   const Textview = React.memo(({ text }) => {
//     useEffect(() => {
//       console.log(`${text}`)
//     })
//     return <div>{text}</div>
//   })
//   const Countview = React.memo(({ count }) => {
//     useEffect(() => {
//       console.log(`${count}`)
//     })
//     return <div>{count}</div>
//   })

//   return (
//     <div style={{ padding: "50px" }}>
//       <h2>count</h2>
//       <Countview count={count} />
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <h2>text</h2>
//       <Textview text={text} />
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// }

// export default OptimizeTesst
