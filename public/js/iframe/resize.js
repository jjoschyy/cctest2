$(document).ready(function () {
   resizeIframe();
   initResizeIframe();
});


//Register event
function initResizeIframe() {
  $(window).on("resize", function () {
    resizeIframe();
  });
}

//Update height (minus header)
function resizeIframe() {
  var headerHeight = 77;
  var height = window.innerHeight - headerHeight;
   $("#dynamicIframe").outerHeight(height)
}
