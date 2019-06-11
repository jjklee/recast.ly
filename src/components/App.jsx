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
      currentVideoId: '4ZAEBxGipoA',
      currentVideoTitle: 'React JS Tutorial for Beginners - 1 - Introduction',
      currentVideoDescription: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
      currentUrl: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg'
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }


  onVideoClick(video) {
    console.log(video);

    this.setState({
      currentVideoTitle: video.snippet.title,
      currentVideoId: video.id.videoId,
      currentVideoDescription: video.snippet.description,
      currentUrl: video.snippet.thumbnails.default.url
    });


    this.render();
  }

  // clickRender(clickedVideo) {
  //   $('#videoPlayer').html('');
  //   var a = return(
  //     <div><h5><em>videoPlayer</em><VideoPlayer video={clickedVideo}/></h5></div>
  //   )
  //   $('#videoPlayer').append(a);
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row"> 
          <div className="col-md-7" id="videoPlayer">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.allVideos} onVideoClick={this.onVideoClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

