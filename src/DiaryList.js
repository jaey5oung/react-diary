import React from "react"
import DiaryItem from "./DiaryItem"

const DiaryList = ({ onEdit, onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>리뷰</h2>
      <h4>{diaryList.length}개의 평점이 남겨져 있습니다</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem onDelete={onDelete} onEdit={onEdit} key={it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList
