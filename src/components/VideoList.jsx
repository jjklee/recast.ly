import exampleVideoData from '../data/exampleVideoData.js';

// var VideoList = (props) => (
//   <div className="video-list">
//     {props.map(video => 
//       <exampleVideoData video={video} />
//     )}
//   </div>
// );


// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: exampleVideoData
  
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope.
// // `var` declarations will only exist globally where explicitly defined.
// export default VideoList;

var VideoList = (props) => (
  <div className="video-list">
      <img src={exampleVideoData[0].snippet.thumbnails.default.url}>
      <div>
        <h5><em>{exampleVideoData[0].snippet.title}</em></h5>
      </div>      
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
