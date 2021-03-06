class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchText: this.props.searchText
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({searchText: event.target.value});
    setTimeout( () => {
      this.props.searchVideos(this.state.searchText);
    }, 200);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" placeholder="Search..." onChange={this.handleChange} value={this.props.searchText} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
