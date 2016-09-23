import React, { Component } from 'react';

const propTypes = {
  dateTo: React.PropTypes.string,
  dateBack: React.PropTypes.string,
  destination: React.PropTypes.string,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  id: React.PropTypes.string,
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localDateTo: this.props.dateTo || '',
      localDateBack: this.props.dateBack || '',
      localDestination: this.props.destination || '',
    };
    this.handleEditOfDateTo = this.handleEditOfDateTo.bind(this);
    this.handleEditOfDateBack = this.handleEditOfDateBack.bind(this);
    this.handleEditOfDestination = this.handleEditOfDestination.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localDateTo: nextProps.dateTo || '',
      localDateBack: nextProps.dateBack || '',
      localDestination: nextProps.destination || '',
    });
  }
  handleEditOfDateTo(e) {
    const newDateTo = e.target.value;
    this.setState({
      localDateTo: newDateTo,
    });
  }
  handleEditOfDateBack(e) {
    const newDateBack = e.target.value;
    this.setState({
      localDateBack: newDateBack,
    });
  }
  handleEditOfDestination(e) {
    const newDestination = e.target.value;
    this.setState({
      localDestination: newDestination,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      dateTo: this.state.localDateTo,
      dateBack: this.state.localDateBack,
      destination: this.state.localDestination,
    });
    this.setState({ saved: true });
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.dateTo === this.state.localDateTo &&
           this.props.destination === this.state.localDestination &&
           this.props.dateBack === this.state.localDateBack;
  }
  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="active-buttons">
          <button onClick={this.handleDeleteClick}>x</button>
        </div>
      );
    }

    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'}>
        <form className="post-view" onSubmit={this.handleSubmit}>
          <input
            type="date"
            name="dateTo"
            value={this.state.localDateTo}
            onChange={this.handleEditOfDateTo}
          />
          <input
            type="date"
            name="dateBack"
            value={this.state.localDateBack}
            onChange={this.handleEditOfDateBack}
          />
          <input
            type="text"
            name="destination"
            value={this.state.localDestination}
            onChange={this.handleEditOfDestination}
          />
          <input
            type="submit"
            value="save"
            className="hidden"
          />
        </form>
        {activeButtons}
      </div>
    );
  }
}

Post.propTypes = propTypes;
export default Post;
