

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: props.youtube[0],
      list: props.youtube,
      searched: ''
    };
    // this.changeVideo = this.changeVideo.bind(this);
  }
  changeVideo (newVideo) {
    this.setState({
      current: newVideo,
      comments: undefined
    });

    let threadOptions = {
      part: 'snippet,replies',
      key: window.YOUTUBE_API_KEY,
      videoId: newVideo.id.videoId
    };

    getComments(threadOptions, (comments) => {
      this.setState({
        comments: comments
      });
    });

    setTimeout( () => {

    }, 100);
  }

  searchVideos (searchText) {
    this.setState({
      searched: searchText,
      comments: undefined
    });

    let videoOptions = {
      q: searchText,
      maxResults: 8,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet'
    };

    searchYouTube(videoOptions, (videos) => {
      this.setState({
        list: videos,
        current: videos[0]
      });
    });

    let threadOptions = {
      part: 'snippet,replies',
      key: window.YOUTUBE_API_KEY,
      videoId: this.state.current.id.videoId
    };

    getComments(threadOptions, (comments) => {
      this.setState({
        comments: comments
      });
    });
  }

  render() {
    return (
      <div>
        <Nav searchVideos={this.searchVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.current} comments={this.state.comments}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.list} changeVideo={this.changeVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
