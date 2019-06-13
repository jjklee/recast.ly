import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);
    this.getYoutubeVideos = this.getYoutubeVideos.bind(this);
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    this.getYoutubeVideos('react redux');
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
    };

    this.props.searchYoutube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: video[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar" >
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.getYoutubeVideos}/>
          </div>
        </nav>
        <div className="row"> 
          <div className="col-md-7" id="videoPlayer">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

