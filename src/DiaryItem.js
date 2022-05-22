import React, { useState, useRef } from "react"

const DiaryItem = ({
  author,
  content,
  select,
  created_date,
  id,
  onDelete,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const editRef = useRef()
  const [localContent, setLocalContent] = useState(content)
  const toggleIsEdit = () => setIsEdit(!isEdit)
  const handleDelete = () => {
    if (window.confirm(`${id}번째 리뷰를 정말 삭제하시겠습니까?`)) onDelete(id)
  }

  const handleQuitEdit = () => {
    setIsEdit(false)
    setLocalContent(content)
  }

  const handleEdit = () => {
    if (localContent.length < 5) {
      editRef.current.focus()
      return
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent)
      toggleIsEdit()
    }
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          가게이름 : {author} | 평점 : {select}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
              ref={editRef}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소하기</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  )
}

export default DiaryItem
