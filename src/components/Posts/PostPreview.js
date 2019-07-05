import React from 'react';

const PostPreview = props => {
  console.log(props);
  const { timestamp, upvotes, downvotes, text } = props.post;

  const tags = [
    { text: 'ThoughtApp' },
    { text: 'ThunkIsCool' },
    { text: 'WatIsThunk' }
  ];

  let displayTags = tags.map((t, i) => {
    return <span key={i}>{'#' + t.text}</span>;
  });

  return (
    <div className='post-preview'>
      <div className='details-top'>
        <span className='timestamp'></span>
      </div>

      <div className='text'></div>

      <div className='tags'></div>

      <div className='controls-bottom'>
        <div className='vote-wrapper'>
          <button className='vote up'>Up</button>
          <span className='votes'></span>
          <button className='vote down'>Down</button>
        </div>
        <button className='comment-btn'>
          <i className='fas fa-comments' />
        </button>
        <button onClick={() => props.startModalHandler()} className='report'>
          <i className='fas fa-flag' />
        </button>
      </div>
    </div>
  );
};

export default PostPreview;
