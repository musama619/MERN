import { useState } from 'react'

const GameForm = () => {
  const [title, setTitle] = useState('')
  const [category, setcategory] = useState('')
  const [mode, setmode] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)

    const game = {title, category, mode}
    
    const response = await fetch('/api/game', {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setcategory('')
      setmode('')
      console.log('new game added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New game</h3>

      <label>Game Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Category:</label>
      <input 
        type="text" 
        onChange={(e) => setcategory(e.target.value)} 
        value={category}
      />

      <label>Mode:</label>
      <input 
        type="text" 
        onChange={(e) => setmode(e.target.value)} 
        value={mode} 
      />

      <button>Add game</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default GameForm