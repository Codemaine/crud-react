const postReducer = (state = [
    {
        title: 'What is Redux?',
        post: 'According to the official docs, Redux is a predictable state container for Javascript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
        id: '32',
        editing: false
    }
], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
            case 'DELETE_POST':
                return state.filter((post) => post.id !== action.id);
                case 'EDIT_POST':
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post);
      case 'UPDATE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             post:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      })
        default:
            return state;
    }
}

export default postReducer