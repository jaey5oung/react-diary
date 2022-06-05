import React, {useState, useRef } from "react"

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef()
  const contentInput = useRef()
  // ! MutableRefObject UseRef는 HTML 돔에 접근할수있는 기능을 한다
  const [state, setState] = useState({
    author: "",
    content: "",
    select: 1,
  })

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus()
      // ! 레퍼런스 객체
      return
    }
    if (state.content.length < 5) {
      contentInput.current.focus()
      return
    }

    onCreate(state.author, state.content, state.select)
    alert("저장성공")
    setState({
      author: "",
      content: "",
      select: 1,
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>배민 평점</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </>
      <div>
        <h3>평가점수</h3>
        <select name="select" value={state.select} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  )
}

export default React.memo(DiaryEditor)
