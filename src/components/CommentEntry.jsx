var CommentEntry = (props) => {

  var commentText = props.comment.snippet.topLevelComment.snippet.textDisplay;
  var authorName = props.comment.snippet.topLevelComment.snippet.authorDisplayName;

  return (
  <div className="comment-list-entry">
    <div className="comment-body">
      <div className="comment-list-entry-author" >{authorName}: </div>
      <div className="comment-list-entry-text"> {commentText}</div>
    </div>
  </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CommentEntry = CommentEntry;
