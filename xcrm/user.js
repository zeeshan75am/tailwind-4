

  const tbody = document.querySelector('#myTable tbody');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

      tbody.innerHTML = ""; 

      data.forEach(user => {
        const tr = document.createElement('tr');

       tr.innerHTML = `
  <td class="border px-2">${user.id}</td>
  <td class="border px-2">${user.name}</td>
  <td class="border px-2">${user.username}</td>
  <td class="border px-2">${user.email}</td>
  <td class="border px-2">${user.phone}</td>
  <td class="border px-2">${user.website}</td>
`;

        tbody.appendChild(tr);
      });

    })

