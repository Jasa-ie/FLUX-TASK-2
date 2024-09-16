// Countdown timer
const countdown = () => {
    const dealEnds = new Date("2024-09-20T00:00:00"); // Update with your desired date
    const now = new Date();
    const difference = dealEnds - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
  
    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (difference < 0) {
      document.getElementById("demo").innerHTML = "Deal has ended";
    }
  };
  
  setInterval(countdown, 1000);
  
  // Add event listener to Join Now button
  document.querySelector(".btn").addEventListener("click", () => {
    alert("Thank you for joining our community!");
  });
  
  // Add event listener to Contact Us button
  document.querySelectorAll(".btn")[1].addEventListener("click", () => {
    alert("We will get back to you soon!");
  });