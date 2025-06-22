
const guestForm = document.getElementById('guestForm');
const guestNameInput = document.getElementById('guestName');
const guestCategoryInput = document.getElementById('guestCategory');
const guestList = document.getElementById('guestList');
const guestCount = document.getElementById('guestCount');

let guests = [];

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = guestNameInput.value.trim();
  const category = guestCategoryInput.value;

  if (!name || !category) return;

  if (guests.length >= 10) {
    alert("Guest limit reached (10 guests max).");
    return;
  }

  const guest = {
    name,
    category,
    attending: false,
    timeAdded: new Date().toLocaleTimeString()
  };

  guests.push(guest);

  guestNameInput.value = '';
  guestCategoryInput.value = '';

  renderGuests();
});

function renderGuests() {
  guestList.innerHTML = '';

  guests.forEach((guest, index) => {
    const li = document.createElement('li');

    // Assign color based on category
    let tagColor = "#ccc";
    if (guest.category === "Friend") tagColor = "green";
    else if (guest.category === "Family") tagColor = "blue";
    else if (guest.category === "Colleague") tagColor = "orange";

    const info = document.createElement('span');
    info.innerHTML = `
      <strong>${guest.name}</strong>
      <span style="color: ${tagColor}; font-weight: bold;">(${guest.category})</span> —
      ${guest.attending ? " Attending" : " Not Attending"}
      <small style="color: gray;">[${guest.timeAdded}]</small>
    `;
    li.appendChild(info);

    // RSVP toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = guest.attending ? 'Un-RSVP' : 'RSVP';
    toggleBtn.onclick = () => {
      guest.attending = !guest.attending;
      renderGuests();
    };
    li.appendChild(toggleBtn);

    // Remove
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
      guests.splice(index, 1);
      renderGuests();
    };
    li.appendChild(removeBtn);

    guestList.appendChild(li);
  });

  guestCount.textContent = `Total Guests: ${guests.length}`;
}



   