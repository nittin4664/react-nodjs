hoardingService = (function () {

  var getAllHoardings = function() {
    return $.when($.ajax("/hoardings"));
  };

    // The public API
    return {
      getAllHoardings: getAllHoardings
    };

}());
