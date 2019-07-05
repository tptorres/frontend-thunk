import React, { Component, Fragment } from 'react';
import PostPreview from './PostPreview';
import Modal from '../modals/Modal';
import ModalBackdrop from '../modalbackdrop/ModalBackdrop';

class PostPreviewList extends Component {
  constructor (props) {

    super(props);

    this.state = {
      Posts: props.postPreviewList,
      creating: false,
      confirm: false
    };
  }

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  modalReportHandler = () => {
    this.setState({ creating: false });
  };

  startModalHandler = () => {
    this.setState({ creating: true });
  };

  confirmHandler = () => {
    this.setState({ confirm: true });
  };

  render() {
    return (
      <Fragment>
        {this.state.creating && this.state.confirm && (
          <Fragment>
            <ModalBackdrop onCancel={this.modalCancelHandler} />
            <Modal title='Report' canConfirm onConfirm={this.confirmHandler}>
              <p>Confirm report</p>
              <button className='modal-btn-confirm'>Confirm</button>
            </Modal>
          </Fragment>
        )}

        {this.state.creating && !this.state.confirm && (
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
                  <input type='radio' />
                  Hate speech post. Might hurt others
                </label>
                <label>
                  <input type='radio' />
                  Inappropriate post.
                </label>
                <label>
                  <input type='radio' />
                  Posting personal information.
                </label>
              </div>
            </Modal>
          </Fragment>
        )}
        <div className='post-preview-list'>
          {this.state.Posts.map(post => (
            <PostPreview
              key={post.id}
              post={post}
              startModalHandler={this.startModalHandler}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default PostPreviewList;
