const reservationDetailsList = []

// Add reservation
const addReservation = (event) => {
    event.preventDefault();

    const guestName = document.getElementById('guestName').value;
    const guestContactNumber = document.getElementById('guestContactNumber').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;

    const reservationDetails = {
        guestName,
        guestContactNumber,
        checkInDate,
        checkOutDate
    }

    reservationDetailsList.push(reservationDetails)
    showReservation()
    document.getElementById('reservationForm').reset();
}

// Show reservation
const showReservation = () => {
    const reservationTableBody = document.getElementById('roomReserveList');

    reservationTableBody.innerHTML = '';

    reservationDetailsList.forEach((reservation, index) => {
        const tableRow = document.createElement('tr')

        tableRow.innerHTML = `
            <td>${reservation.guestName}</td>
            <td>${reservation.guestContactNumber}</td>
            <td>${reservation.checkInDate}</td>
            <td>${reservation.checkOutDate}</td>
             <td><button class="btn btn-danger" onclick="deleteReservation(${index})">Delete</button></td>
        `

        reservationTableBody.appendChild(tableRow)
    })
}

// Delete reservation
const deleteReservation = (index) => {
    reservationDetailsList.splice(index, 1)
    showReservation()
}



document.getElementById('reservationForm').addEventListener('submit', addReservation)