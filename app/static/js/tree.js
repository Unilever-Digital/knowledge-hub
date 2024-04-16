
// Function to generate the list items
function generateListItems(data) {
  const list = document.querySelector('.database-view-body');
  const fragment = document.createElement('ul');
  fragment.classList.add("treeview");
  data.forEach(item => {
    if (item.table) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<i class="fas fa-database"></i> ${item.table}`;
      listItem.onclick = () => handleItemClick(item.table);
      fragment.appendChild(listItem);
    } else {
      console.warn("Error: Item missing expected property 'table'");
    }
  });
  list.appendChild(fragment);
}

// Function to handle item click
function handleItemClick(table) {
    console.log(`Clicked on ${table}`);
    // Your handling code here
}

// Generate the list
document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON 
  fetch('/schema', {
    method: 'POST', //  POST
    headers: {
      'Content-Type': 'application/json' // 
    },
    body: JSON.stringify({}) // 
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // 
  })
  .then(jsonData => {
    generateListItems(jsonData);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});