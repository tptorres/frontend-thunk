//increment like_a_bos

export function upVote(inputPostId)
{
  return{
    type: 'UP_VOTE',
    inputPostId,
  }
}
//add comments
export function downVote(inputPostId)
{
  return{
    type: 'DOWN_VOTE',
    inputPostId,
  }
}
export function reportThought(inputPostId)
{
  return{
    type: 'REPORT_THOUGHT',
    inputPostId,
  }
}
//remove comment

export function createThought(inputPostId, inputText, inputTag)
{
  return {
    type: 'CREATE_THOUGHT',
    inputPostId,
    inputText,
    inputTag,
  }
}

export function createComment(inputPostId, inputText, inputMarkOwner, inputUserId)
{

  return {
    type: 'CREATE_COMMENT',
    inputPostId,
    inputText,
    inputMarkOwner,
    inputUserId
  }
}

export const getThoughtsAction = thoughts_ => {
  return {
    type: "GET_THOUGHTS",
    thoughts_,
  }
}
