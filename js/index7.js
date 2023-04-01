const maximAge = 55;
if (0 <= maximAge && maximAge <= 16) {
  console.log("Макс еще ребенок");
} else if (17 <= maximAge && maximAge <= 60) {
  console.log("Макс уже взролый");
} else if (61 <= maximAge && maximAge <= 100) {
  console.log("Максу пора на пенсию");
} else {
  console.log("Макс уже не с нами...");
}