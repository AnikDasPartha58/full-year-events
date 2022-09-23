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
        color: "red", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "sept1", // Event's ID (required)
        name: "Building and Code Staff Appreciation Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        color: "red", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "sept1", // Event's ID (required)
        name: "Cherry Popover Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        color: "red", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        id: "sept1", // Event's ID (required)
        name: "Chicken bo Day", // Event name (required)
        date: "September/1/2022", // Event date (required)
        type: "event",
        color: "red", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
    ],
  });
});
