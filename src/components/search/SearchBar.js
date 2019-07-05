import React, { Component, Fragment } from 'react';
import Thoughts from '../Posts/Thoughts';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props)
  {
    super(props);

    this.state =
    {
      result : "",
      getBestThought : "https://thunk-api-19.herokuapp.com/api/v1/thought/best",
      getWorstThought :"https://thunk-api-19.herokuapp.com/api/v1/thought/worst",
      getHashTag: "https://thunk-api-19.herokuapp.com/api/v1/tag/thought/",
      inputHashTag_:"",
      myBest_: [],
      myWorst_: [],
      myHashTag_: [],
      view: 'DEFAULT',
    };
    this.changeSearchView = this.changeSearchView.bind(this);
  }
  changeSearchView(INPUTVIEW)
  {
    this.setState({view: INPUTVIEW});
  }

  fetchThoughtData = ()=>
  {
    axios.get(this.state.getBestThought).then(response =>
    {
      const result = response.data
      this.setState({myBest_: result});
    }).catch(err => console.log(err), this.setState({result: "Not Found"}));

    axios.get(this.state.getWorstThought).then(response =>
    {
      const result = response.data
      this.setState({myWorst_: result});
    }).catch(err => console.log(err), this.setState({result: "Not Found"}));


  }
  getInputHashTag = event =>
  {
    this.setState({inputHashTag_: event.target.value.toLowerCase()});
  }

  btnSearch = () =>
  {
    axios.get(this.state.getHashTag + this.state.inputHashTag_).then(response =>
    {
      const result = response.data
      this.setState({myHashTag_: result});
    }).catch(err => console.log(err), this.setState({result: "Not Found"}));

  }

  componentDidMount()
  {
    this.fetchThoughtData();
  }

  render() {
    console.log("BEST",this.state.myBest_);
    console.log("Worst", this.state.myWorst_);
    console.log(this.state.myHashTag_.length);
    let contentToDisplay;

    if (this.state.view === 'BEST') {
      contentToDisplay = (

        <Fragment><Thoughts inputThoughts = {this.state.myBest_}/></Fragment>

      )
    } else if (this.state.view === 'WORST'){
      contentToDisplay=(
        <Fragment><Thoughts inputThoughts = {this.state.myWorst_}/></Fragment>
      )
    } else if (this.state.view === 'TAGS'){
      contentToDisplay = (
      <Fragment>
        <div>
          <input type = 'text' onChange ={this.getInputHashTag} placeholder='Search...' />
          <button onClick = {this.btnSearch} className = "search-btn"> search </button>
          <p>{this.state.inputHashTag_}</p>
        </div>
        <Thoughts inputThoughts = {this.state.myHashTag_}/>
      </Fragment>
      )
    } else {
      contentToDisplay=(
        <Fragment></Fragment>
      )
    }

    console.log(this.state.myHashTag_);

    return (
      <div className='searchbar-header'>
        <section className='tabs'>
          <button onClick = {this.changeSearchView.bind(this, 'BEST')} className='best-tab'>Best</button>
          <button onClick = {this.changeSearchView.bind(this, 'TAGS')} className='hashtag-tab'>#Tag</button>
          <button onClick = {this.changeSearchView.bind(this, 'WORST')} className='worst-tab'>Worst</button>
        </section>

        <div className = 'test'>
        { contentToDisplay }
        </div>
      </div>


    );
  }
}

export default SearchBar;
