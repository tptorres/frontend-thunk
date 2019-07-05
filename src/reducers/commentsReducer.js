import axios from 'axios';

function createComments(state = [], action)
{
  console.log("comments", state);
  switch(action.type)
  {
    case 'CREATE_COMMENT':
        axios.post('https://thunk-api-19.herokuapp.com/api/v1/comment/',
          {
            
            postId: action.inputPostId,
            text: action.inputText, 
            mark_owner: action.inputMarkOwner,
            userId: action.inputUserId
          }
        )
        .then( (res) => {
          window.location.href = "/thoughts/" + action.inputPostId
        }).catch( (err) => {
  
        } );

      return true;
    case 'REMOVE_COMMENT':

      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i+1)
      ]

  default:
    return state;
}
}

function commentsReducer(state = [], action)
{

  if(typeof action.inputPostId !== 'undefined')
  {
    return{
      //take the current statuses
      ...state,
      //overwrite this post witha new cloneElement
      [action.inputPostId]: createComments(state[action.inputPostId],action)
    }
  }
  return state;
}

export default commentsReducer;
