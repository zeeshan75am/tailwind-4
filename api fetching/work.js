
document.querySelector('#MyTable tbody');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.jason())
.then(data => {
  data.forEach(user => {
        const tr = document.createElement('tr');

        // ID cell
        const tdId = document.createElement('td');
        tdId.textContent = user.id;
        tr.appendChild(tdId);

        // Name cell
        const tdName = document.createElement('td');
        tdName.textContent = user.name;
        tr.appendChild(tdName);

        // Email cell
        const tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        tr.appendChild(tdEmail);

        // Append row to table body
        tbody.appendChild(tr);
    });
});


