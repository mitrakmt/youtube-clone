var searchYouTube = (options, callback) => {
  // TODO
  // console.log(options)
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    dataType: "json",
    data: options,
    success: function (data) {
      callback(data.items)
    },
    error: function (data) {
      console.error(data)
    }
  })
};

window.searchYouTube = searchYouTube;
