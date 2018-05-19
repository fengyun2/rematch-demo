import React from 'react'
import {connect} from 'react-redux'

import AddItem from '../AddItem'

const ListItems = props => (
  <div>
    {props.completeTodos} of {props.totalTodos} todos are done!
    <ul>
      {props.todosArray.map(todo => (
        <li key={todo.id}>
          <span style={{
            cursor: 'pointer',
            textDecoration: todo.done ? 'line-through': 'none'
          }} onClick={() => props.toggleDone(todo.id)}>
            {todo.text}
          </span>
          {' '}
          <button onClick={() => props.remove(todo.id)}>delete</button>
          {' '}
          <button onClick={() => props.asyncRemove(todo.id)}>async delete (1 second delay)</button>
        </li>
      ))}
    </ul>
    <AddItem />
  </div>
)

const mapState = state => {
  const todosIds = Object.keys(state.todos)
  return {
    totalTodos: todosIds.length,
    completeTodos: todosIds.filter(id => state.todos[id].done).done,
    todosArray: todosIds.map(id => ({
      ...state.todos[id],
      id
    }))
  }
}

const mapDispatch = dispatch => ({
  toggleDone: id => dispatch.todos.toggleDone(id),
  remove: id => dispatch.todos.remove(id),
  asyncRemove: id => dispatch.todos.asyncRemove(id)
})

export default connect(mapState, mapDispatch)(ListItems)