import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, removeItem, editList}) => {
  return(
    <div className="grocery-list">
        {items.map((item) =>{
            const {id, title} = item
            return(
                <article className='grocery-item' key={id}>
                    <p className='title'>{title}</p>
                    <div className="btn-container">
                        <button type='button' onClick={() => editList(id)} className='edit-btn'>{<FaEdit />}</button>
                        <button type='button' onClick={() => removeItem(id)} className='delete-btn'>{<FaTrash />}</button>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List