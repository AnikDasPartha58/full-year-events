$(document).ready(function () {
  $("#calendar").evoCalendar({
    todayHighlight: "true",
    calendarEvents: [
      //  september
      {
        id: "sept1", // Event's ID (required)
        name: "American Chess Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        description:
          "A game of strategy and skill, chess is played the world over by young and old alike. To play, two opponents face off across a checkers-style board, and take turns using their pieces of kings, queens, rooks, knights, bishops, and pawns to move along the 64-square board. Game times vary — great players can knock out their opponents very quickly or can spend hours strategizing their every move. To win, a player must use his pieces to capture those of the other player, with the ultimate goal of taking over the other player’s king. Checkmate! Often called “The Game of Kings,” you can play chess the good old-fashioned way with another player in person, or on the computer with opponents from all over the world.",
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "sept1", // Event's ID (required)
        name: "Building and Code Staff Appreciation Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        description:
          "Building and Code Staff Appreciation Day is celebrated every year on September 1. For all the troubles that they undoubtedly face every day, the folks in charge of maintaining building and code standards don’t get as much gratitude. Think about it; checking a building and approving it as secure according to code is not easy. Anything overlooked can endanger people living in an unsafe building. This is why it is important that we show our appreciation for them",

        everyYear: true, // Same event every year (optional)
      },
      {
        id: "sept1", // Event's ID (required)
        name: "Cherry Popover Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        description:
          "Cherry Popover Day is celebrated on September 1 every year. This day honors the delicious treat, the cherry popover, which is enjoyed and loved by many. But what exactly is a cherry popover? A cherry popover is a light and airy roll that is made from egg batter, topped with cherries, and baked in a pan. Popovers are said to be English-inspired. Settlers from Maine who founded Portland, Oregon created the popover by giving the English Yorkshire pudding an American spin. They can be consumed both as a sweet treat or as a proper breakfast or brunch meal.",

        everyYear: true, // Same event every year (optional)
      },
      {
        id: "sept1", // Event's ID (required)
        name: "Chicken bo Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        description:
          "National Chicken Boy Day on September 1 celebrates the statue of Chicken Boy, a man with a chicken head. Located on Avenue 56 at the top of Future Studio, Chicken Boy has been a prominent fixture for ten years and counting. Standing at 22 feet tall and holding a bucket of chicken, Chicken Boy was originally a promotion for a fast food restaurant based in Los Angeles",
        everyYear: true, // Same event every year (optional)
      },
    ],
  });
});
