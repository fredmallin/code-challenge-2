
const guestForm = document.getElementById('guestForm');
const guestNameInput = document.getElementById('guestName');
const guestList = document.getElementById('guestList');

let guests = [];

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = guestNameInput.value.trim();
  if (!name) return;

  if (guests.length >= 10) {
    alert("Guest limit reached (10 guests max).");
    return;
  }
const Button = document.createElement("button");
    Button.textContent = guest.attending ? "Attending " : "Not Attending ";
    Button.onclick = () => {
      guest.attending = !guest.attending;
      renderGuests();
    };
});
    
