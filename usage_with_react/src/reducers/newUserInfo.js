const KeepNewInfo = (state = [], action) => {
    switch (action.type) {
      case 'KEEP_NEW_INFO':
        return [
          // ...をつけることは、「今までの状態」を保持しているという意味になる
          ...state,
          {
            name: action.name,
          }
        ]
      default:
        return state
    }
  }
  
  export default KeepNewInfo