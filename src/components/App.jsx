import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em><Search /></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em><VideoList videos={exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: exampleVideoData,
      currentVideo: '',
      currentVideoTitle: '',
      currentVideoDescription: ''
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }


  onVideoClick(e) {
    console.log(e.target.textContent);
    for (let i = 0; i < this.state.allVideos.length; i++) {

    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[3]}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={exampleVideoData} onVideoClick={this.onVideoClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

