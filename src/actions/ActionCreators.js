//incrememt likea_bos

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

export function deleteThought(inputPostId) {
  console.log(inputPostId);
  return {
    type: 'DELETE_THOUGHT',
    inputPostId
  }
}

export function createThought(inputPostId, inputText, inputTags)
{
  return {
    type: 'CREATE_THOUGHT',
    inputPostId,
    inputText,
    inputTags
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
