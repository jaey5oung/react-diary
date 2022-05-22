import React, { useState, useRef, useEffect, useMemo, useCallback } from "react"
import "./App.css"
import DiaryEditor from "./DiaryEditor"
import DiaryList from "./DiaryList"
import OptimizeTesst from "./OptimizeTesst"

function App() {
  const [data, setData] = useState([])
  const dataId = useRef(0)

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    ).then((res) => res.json())
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        select: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      }
    })

    setData(initData)
  }

  useEffect(() => {
    getData()
  }, [])

  const onCreate = useCallback((author, content, select) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      select,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1
    setData((data) => [newItem, ...data])
  }, [])

  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId)
    setData(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    )
  }

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.select >= 3).length
    const badCount = data.length - goodCount
    const goodRatio = (goodCount / data.length) * 100
    return { goodCount, badCount, goodRatio }
  }, [data.length])
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis

  // * useMemo 연산최적화
  // * memo 를쓰게되면 함수를 리턴하는게 아니구 값을 리턴하므로 getDiaryAnalysis()에 함수를 빼줘야댄다

  return (
    <div className="App">
      {/* <OptimizeTesst/> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 리뷰 : {data.length}</div>
      <div>평점 높은 리뷰 개수 : {goodCount}</div>
      <div>평점 낮은 리뷰 개수 : {badCount}</div>
      <div>평점 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data} />
    </div>
  )
}

export default App
