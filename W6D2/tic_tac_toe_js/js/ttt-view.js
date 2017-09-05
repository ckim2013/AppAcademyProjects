class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("li").on("click", event => {
      const $currentTarget = $(event.currentTarget);
      let pos = $currentTarget.data("pos");

      try {
        this.game.playMove(pos);
        this.makeMove($currentTarget);
      }
      catch (error) {
        alert(" NOOOOOOB ");
      }
    });
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
    if (this.game.currentPlayer === 'x') {
      $square.addClass('x');
    } else {
      $square.addClass('o');
    }

    $square.css({
      "background-color": "white",
      "font-size": "80px",
      "text-align": "center",
      "font-weight": "bold",
      "font-family": "sans-serif"
    });

    $square.on("mouseleave", event => {
      $square.css("background-color", "white");
    });

    if (this.game.winner()) {
      if (this.game.currentPlayer === 'x') {
        $(".x").css("background-color", "green").addClass("winner");
        $(".o").addClass("loser");
      } else {
        $(".o").css("background-color", "green").addClass("winner");
        $(".x").addClass("loser");
      }
      $("ul").append(`Congratulations, ${this.game.currentPlayer}!`);
    }

    $(".winner").on("mouseleave", event => {
      $(".winner").css("background-color", "green");
    });
  }

  setupBoard() {
    let i = 0;
    let j = 0;
    let $li;
    const $ul = $("<ul>");
    while (i < 3) {
      while (j < 3) {
        $li = $("<li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
        j += 1;
      }
      if (j === 3) j = 0;
      i += 1;
    }

    this.$el.append($ul);

    $("li").on("mouseenter", event => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      $currentTarget.css("background-color", "yellow");
    });

    $("li").on("mouseleave", event => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      $currentTarget.css("background-color", "gray");
    });

  }
}

module.exports = View;
