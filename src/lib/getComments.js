var getComments = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/commentThreads',
    type: 'GET',
    dataType: 'jsonp',
    data: options,
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      console.error(data);
    }
  });

};

window.getComments = getComments;
