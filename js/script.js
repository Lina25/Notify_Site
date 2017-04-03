$(function () {
  fr = new FilmRoll({
    container: '#film_roll',
    height: 330
  });
});
var film_roll = new FilmRoll({
  configure_load: function () {
    // <---pre-configure operations
    setTimeout((function (_this) {
      return function () {
        return _this.configureLoad();
      };
    })(this), 1000);

  },
  container: '#film_roll',
});