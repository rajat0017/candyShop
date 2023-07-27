window.addEventListener('DOMContentLoaded', () => {
  axios.get("http://localhost:3000/shop")
    .then((response) => {
      response.data.allUsers.forEach((ele) => {
        addRow(ele);
      })
    })
    .catch((err) => {
      console.log(err);
    })
})

function addRow(details) {
  const table = document.querySelector('table');

  const newRow = document.createElement('tr');

  const id = document.createElement('td');
  const candyCell = document.createElement('td');
  const descriptionCell = document.createElement('td');
  const priceCell = document.createElement('td');
  const quantityCell = document.createElement('td');
  const buyCell1 = document.createElement('td');
  const buyCell2 = document.createElement('td');
  const buyCell3 = document.createElement('td');

  id.textContent = `${details.id}`;
  candyCell.textContent = `${details.candy}`;
  descriptionCell.textContent = `${details.description}`;
  priceCell.textContent = `${details.price}`;
  quantityCell.textContent = `${details.quantity}`;

  const buyButton1 = document.createElement('button');
  buyButton1.textContent = 'Buy1';
  buyButton1.classList.add('buy-button');
  buyCell1.appendChild(buyButton1);
  buyButton1.onclick = function deleteQuantity(id) {
    if (details.quantity < 1) {
      alert('Not Enough Quantity');
    }
    else {
      let obj = {
        id: details.id,
        candyCell: details.candy,
        descriptionCell: details.description,
        priceCell: details.price,
        quantityCell: details.quantity - 1
      }
      if (obj.quantityCell == 0) {
        deleteCandy = async () => {
          try {
            await axios.delete(`http://localhost:3000/delete/${obj.id}`);
          }
          catch (err) {
            console.log(err);
          }
          window.location.href = 'http://127.0.0.1:5500/views/shop.html';
        }
        deleteCandy();
      }
      else {
        post = async () => {
          try {
            await axios.post(`http://localhost:3000/update/${obj.id}`, obj);
          }
          catch (err) {
            console.log(err);
          }
        }
        post();
        window.location.href = 'http://127.0.0.1:5500/views/shop.html';
      }
    }
  }

  const buyButton2 = document.createElement('button');
  buyButton2.textContent = 'Buy2';
  buyButton2.classList.add('buy-button');
  buyCell2.appendChild(buyButton2);
  buyButton2.onclick = function deleteQuantity(id) {
    if (details.quantity < 2) {
      alert('Not Enough Quantity');
    }
    else {
      let obj = {
        id: details.id,
        candyCell: details.candy,
        descriptionCell: details.description,
        priceCell: details.price,
        quantityCell: details.quantity - 2
      }
      if (obj.quantityCell == 0) {
        deleteCandy = async () => {
          try {
            await axios.delete(`http://localhost:3000/delete/${obj.id}`);
          }
          catch (err) {
            console.log(err);
          }
          window.location.href = 'http://127.0.0.1:5500/views/shop.html';
        }
        deleteCandy();
      }
      else {
        post = async () => {
          try {
            await axios.post(`http://localhost:3000/update/${obj.id}`, obj);
          }
          catch (err) {
            console.log(err);
          }
        }
        post();
        window.location.href = 'http://127.0.0.1:5500/views/shop.html';
      }
    }
  }

  const buyButton3 = document.createElement('button');
  buyButton3.textContent = 'Buy3';
  buyButton3.classList.add('buy-button');
  buyCell3.appendChild(buyButton3);
  buyButton3.onclick = function deleteQuantity(id) {
    if (details.quantity < 3) {
      alert('Not Enough Quantity');
    }
    else {
      let obj = {
        id: details.id,
        candyCell: details.candy,
        descriptionCell: details.description,
        priceCell: details.price,
        quantityCell: details.quantity - 3
      }
      if (obj.quantityCell == 0) {
        deleteCandy = async () => {
          try {
            await axios.delete(`http://localhost:3000/delete/${obj.id}`);
          }
          catch (err) {
            console.log(err);
          }
          window.location.href = 'http://127.0.0.1:5500/views/shop.html';
        }
        deleteCandy();
      }
      else {
        post = async () => {
          try {
            await axios.post(`http://localhost:3000/update/${obj.id}`, obj);
          }
          catch (err) {
            console.log(err);
          }
        }
        post();
        window.location.href = 'http://127.0.0.1:5500/views/shop.html';
      }
    }
  }

  newRow.appendChild(candyCell);
  newRow.appendChild(descriptionCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(buyCell1);
  newRow.appendChild(buyCell2);
  newRow.appendChild(buyCell3);

  table.appendChild(newRow);
}


