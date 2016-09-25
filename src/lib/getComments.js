var getComments = (options, callback) => {
  // TODO

   $.ajax({
    url: "https://www.googleapis.com/youtube/v3/commentThreads",
    type: "GET",
    dataType: "json",
    data: options,
    success: function (data) {
      console.log("Comment data", data)
    },
    error: function (data) {
      console.error(data)
    }
  })
};

window.getComments = getComments;
