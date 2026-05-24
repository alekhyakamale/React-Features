import { useState, memo, useCallback, useRef, useEffect } from 'react'

// ✅ Already memoized — but still re-rendering. Why?
const Comment = memo(({ index, text, onDelete }) => { //Passing index was not my idea. Got help here
  console.log('Comment rendered:', text)
  return (
    <div>
      <p>{text}</p>
      <button data-id={index} onClick={onDelete}>Delete</button>
    </div>
  )
})

// 🔧 Implement this hook
function usePreviousValue(value) {
  const [prevState, setPrevState] = useState(null);

    if(value === prevState){
        return value;
    } else {
        setPrevState(value);
    }
    return prevState;
}

export default function CommentFeed() {
  const [comments, setComments] = useState(['First comment', 'Second comment', 'Third comment'])
  const [input, setInput] = useState('')

  const previousCount = usePreviousValue(comments.length) // 🔧 make this work

  const addComment = () => {
    if (!input.trim()) return
    setComments(prev => [...prev, input])
    setInput('')
  }

  // ❌ Bug: this function is recreated every render
  // even though Comment is wrapped in React.memo
  //Solution: We memoize the function reference using useCallback hook and pass this referenced function to the child
  //which has React.memo wrapped around it. Now when JS compares the props referentially, the equality is true.
  const handleDelete = useCallback((e) => {
    const index = Number(e.currentTarget.dataset.id); //This needed research because I was just checking it against e instead of index.
    console.log(index)
    setComments(prev => prev.filter((_, i) => i !== index))
  }, [])

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New comment..." />
        <button onClick={addComment}>Add</button>
        {comments.map((text, i) => (
          <Comment
            key={i}
            index={i}
            text={text}
            onDelete={handleDelete} // ❌ new function every render //Solution: remove the parenthesis which create a new function at a brand new memory address and pass the reference of the function.
          />
        ))}
      </div>
      <aside>
        <p>Now: {comments.length} comments</p>
        <p>Previously: {previousCount ?? '—'} comments</p>
      </aside>
    </div>
  )
}