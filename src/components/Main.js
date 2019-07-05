import React, { Fragment } from 'react';
import Thoughts from './Posts/Thoughts';
import OneThought from './Posts/OneThought';
import CreateThought from './Posts/CreateThought';
import HeaderComponent from './Partials/header';
import Navbar from './Partials/navbar';
import '../scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from './modals/Modal';
import ModalBackdrop from './modalBackdrop/ModalBackdrop';
import Settings from './User/Account/Settings';
import Activity from './User/Account/Activity';
import Search from './search/Search';
import axios from 'axios'
class Main extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      creating_: false,
      confirmReport_: false,
      thoughtData: [],
      post_id_: 0
    };
  }

  componentDidMount () {
    console.log()
    axios.get(
      'https://thunk-api-19.herokuapp.com/api/v1/thought'
    ).then((res) => {
      this.setState({
        thoughtData: res.data
      });
    }).catch((err)=>{
      console.log(err);
    });
  }


  modalCancelHandler = () => {
    this.setState({ creating_: false, confirmReport_: false, modalType_: 'Thought' });
  };

  modalReportHandler = () => {
    this.setState({ creating_: false });
  };

  startModalHandler = (id, modalType = 'Thought') => {
    this.setState({ creating_: true, post_id_: id, modalType_: modalType });
  };

  confirmHandler = () => {
    this.setState({ confirmReport_: true });
  };

  submitHandler = () => {
    this.setState({
      confirmReport_: false,
      creating_: false
    });
  };

  reportComment = () => {
    axios.post( 'https://thunk-api-19.herokuapp.com/api/v1/user/report/comment/' + this.state.post_id_ + '/user/1',
        {}
    )
    .then( (res) => {
        console.log(res + ", Comment Reported");
        this.modalCancelHandler();
    })
    .catch( (err) => {
        console.log(err);
    });
  }

  reportPost = () => {
    axios.post( 'https://thunk-api-19.herokuapp.com/api/v1/user/report/post/' + this.state.post_id_ + '/user/1',
        {}
    )
    .then( (res) => {
        console.log(res);
        this.modalCancelHandler();
    })
    .catch( (err) => {
        console.log(err);
    });
  }

  render() {
    return (
      <Router>
        <HeaderComponent />
        <div className='page-content'>
          {this.state.creating_ && this.state.confirmReport_ && (
            <Fragment>
              <ModalBackdrop onCancel={this.modalCancelHandler} />
              <Modal title='Report'>
                <p>Confirm { (this.state.modalType_ === 'Thought') ? 'Thought' : 'Comment' } Report</p>
                <button
                  onClick={(this.state.modalType_ === 'Thought') ? this.reportPost : this.reportComment }
                  className='modal-btn-confirm'
                >
                  Confirm
                </button>
              </Modal>
            </Fragment>
          )}
          {this.state.creating_ && !this.state.confirmReport_ && (
            <Fragment>
              <ModalBackdrop onCancel={this.modalCancelHandler} />
              <Modal
                title='Report'
                canCancel
                canReport
                onCancel={this.modalCancelHandler}
                onReport={this.confirmHandler}
              >
                <h2>Reporting this content for...</h2>
                <div className='radio-buttons'>
                  <label>
                    {' '}
                    <input type='radio' /> Hate speech post. Might hurt others{' '}
                  </label>
                  <label>
                    {' '}
                    <input type='radio' /> Inappropriate post.{' '}
                  </label>
                  <label>
                    {' '}
                    <input type='radio' /> Posting personal information.{' '}
                  </label>
                </div>
              </Modal>
            </Fragment>
          )}

          <Switch>
            <Route
              exact
              path='/home'
              component={() => (
                <Thoughts
                  startModalHandler={this.startModalHandler}
                  inputThoughts = { this.state.thoughtData }
                />
              )}
            />
            <Route
              exact
              path='/thoughts/:id'
              component={() => (
                <OneThought
                  startModalHandler={this.startModalHandler}
                  {...this.props}
                />
              )}
            />
            <Route
              exact
              path='/thoughts'
              component={() => (
                <Thoughts
                  startModalHandler={this.startModalHandler}
                  {...this.props}
                />
              )}
            />

            <Route
              exact
              path='/activity'
              component={() => (
                <Activity>
                  <Thoughts
                    startModalHandler={this.startModalHandler}
                    {...this.props}
                  />
                </Activity>
              )}
            />

            <Route
              exact
              path='/create/thought'
              component={() => <CreateThought {...this.props} />}
            />

            <Route
              exact
              path='/search'
              component={() => <Search {...this.props} />}
            />

            <Route exact path='/settings' component={Settings} />
          </Switch>
        </div>
        <Navbar />
      </Router>
    );
  }
}

export default Main;
// <Route exact path = "/main" component = {()=> <LoggedInMasterView {...this.props}/>}/>
