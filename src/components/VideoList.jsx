import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {exampleVideoData.map(video => 
      <VideoListEntry video={video} />
    )}
  </div>
);


// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: exampleVideoData
  
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope.
// // `var` declarations will only exist globally where explicitly defined.
// export default VideoList;

// var VideoList = (props) => (
//   <div className="video-list">
//       <img src={exampleVideoData[0].snippet.thumbnails.default.url}></img>
//       <h5><em>{exampleVideoData[0].snippet.title}</em></h5>
//   </div>
// )



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
