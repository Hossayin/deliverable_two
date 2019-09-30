// ===
// ==
// !=
// !==
// <=
// >=
// >
// <
let eventType = prompt(
  "What kind of event are you attending, Casual, Semi-formal, Formal?"
);
let tempature = prompt("What will be the tempature during the event?");
let eventResponse;
let tempResponse;
// how can I put both, (event type === "formal" "Formal")
// why will eventResponse have more than one condition?and event type
if (eventType === "casual") {
  eventResponse = "somthing comfy";
} else if (eventType === "semi-formal") {
  eventResponse = "a polo";
} else if (eventType === "formal") {
  eventResponse = "a suit";
}
if (tempature < 54) {
  tempResponse = "a coat";
} else if (tempature >= 54 && tempature <= 70) {
  tempResponse = "a jacket";
} else if (tempature > 70) {
  tempResponse = "no jacket";
}
const result =
  "Since it is " +
  tempature +
  " degrees and you are going to a " +
  eventType +
  " event,you should wear " +
  eventResponse +
  " and " +
  tempResponse +
  ".";

console.log(result);
