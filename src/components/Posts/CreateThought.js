import React, { Component, Fragment } from 'react';

export default class CreateThought extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPostId: this.props.thoughts_.length,
      inputTextHolder_: '',
      inputHashTagsTextHolder_: '',
      inputHashTagsHolder_: [],
      hashTagsCount: 0
    };
  }

  getInputText = event => {
    this.setState({ inputTextHolder_: event.target.value });
  };

  getInputHashTags = event => {
    this.setState({ inputHashTagsTextHolder_: event.target.value });
  };

  addHashTagToList = () => {
    
    let hash_tag_list = [...this.state.inputHashTagsHolder_];
    let hash_tag = this.state.inputHashTagsTextHolder_;

    hash_tag = hash_tag.replace(/[^0-9a-zA-Z]/g, '');

    if (hash_tag.length < 1)
      return;


    hash_tag_list.push({ 
                        id: (this.state.hashTagsCount + new Date().getMilliseconds()), 
                        text: hash_tag
                      });

    this.setState({ 
      inputHashTagsHolder_: hash_tag_list,
      hashTagsCount: this.state.hashTagsCount + 1
    })
  
  }

  removeHashTagFromList = (item) => {

    console.log('foo');
    let hash_tag_list = [...this.state.inputHashTagsHolder_];

    let tagIndex = hash_tag_list.indexOf(item);
    if (tagIndex !== -1) {
      hash_tag_list.splice(tagIndex, 1);
      this.setState({
        inputHashTagsHolder_: hash_tag_list
      });

      console.log('bar')
    }
  } 

  
  render() {

    let hashTags = this.state.inputHashTagsHolder_.map((tag, i) => {

      return (
        <span key = {tag.id} className = "tag" onClick = { this.removeHashTagFromList.bind(this, tag) }>
          #{ tag.text } 
          <i class="fas fa-times"></i>
        </span>
      )
    });

    return (
      <div className='create-thought-wrapper'>
        <h2> Create a Thought</h2>
        
        <textarea className = "thought-title" value = {this.state.inputTextHolder_} onChange = {this.getInputText} placeholder='Write your thoughts...'/>

        <div>
          <input
            type = "text"
            className='tags-box'
            value={this.state.inputHashTagsTextHolder_}
            onChange={this.getInputHashTags}
            placeholder='type has tags with #'
          />

          <button onClick = { this.addHashTagToList } >Add +</button>

          <div className = "tags-wrapper">
          { (this.state.inputHashTagsHolder_.length > 0
            || this.state.inputHashTagsTextHolder_.length > 0) ?
            (<Fragment>
              { hashTags }
              </Fragment>
            ) : (
              <div className = "error">Add a Hashtag</div>
            )
          }
          </div>
          
        </div>
      
        <button
          onClick={this.props.createThought.bind(
            null,
            this.state.inputPostId,
            this.state.inputTextHolder_,
            this.state.inputHashTagsHolder_.map((item, i) => {
              return item.text 
            })
          )}
        >
          Post
        </button>
      </div>
    );
  }
}
//export function createThought(inputPostId, inputText, inputTag)

//   "id": 0,
//   "text": "Snow! ⛄️🌨❄️ #lifewithsnickers",
//   "up_vote": 10,
//   "down_vote": 2,
//   "report_count": 0,
//   "hash_tag":["snow", "daily","more", "stuff"],
//   "time_stamp" : "1 min ago", //i dont need this later
