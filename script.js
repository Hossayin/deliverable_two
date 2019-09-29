// ===
// ==
// !=
// !==
// <=
// >=
// >
// <
let eventType = prompt("What kind of event are you attending?");
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
