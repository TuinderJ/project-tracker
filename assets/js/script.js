$('#current-time').text(moment().format('MMM Do, YYYY hh:mm:ss'));
setInterval(() => {
  $('#current-time').text(moment().format('MMM Do, YYYY hh:mm:ss'));
}, 1000);