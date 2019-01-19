// Reducerは「現在の状態（state）」と「受け取ったAction」を引数に取り、新しい状態を返す関数として実装します

const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          // ...をつけることは、「今までの状態」を保持しているという意味になる
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(
          todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default todos