import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button';

const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          // アクションを『dispatch()』で引数に渡すことで『Reducer』に送られる。
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
        {/* <Button variant="contained" color="primary" type="submit"> */}
          {/* Add Todo
        </Button> */}

      </form>
    </div>
  )
}

export default connect()(AddTodo)