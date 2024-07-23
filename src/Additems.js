import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additems = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
           autoFocus
           id='addItem'
           type="text"
           placeholder='Add  item'
           value={newItem}
           onChange={(e)=>setNewItem(e.target.value)}
           required
           />
           <button
           type='submit'
           aria-label='Add Item'
           >
            <FaPlus/>
           </button>
    </form>
    
  )
}

export default Additems