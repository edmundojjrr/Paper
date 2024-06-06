//post funcionando
document.getElementById('cliente-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('phone').value;
    fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome: nome, email: email, telefone: telefone}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Sucesso: "+ data.nome)
        console.log('Success:', data);
        location.reload()
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

//delete funcionando
document.getElementById('delete-btn').addEventListener('click', function() {
    let id = document.getElementById('id').value;
    fetch('http://localhost:8080/clientes/'+ id,
    {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

//put funcionando
document.getElementById('update-btn').addEventListener('click', function() {
    let id = document.getElementById('id').value;
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('phone').value;
    fetch('http://localhost:8080/clientes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id, nome: nome,telefone: telefone, email: email}),
    })
    .then(response => response.json())
    .then(data => {
        alert("Sucesso: "+ data.nome)
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

//get funcionando
function updateClienteInfo(cliente) {
    const clienteInfo = document.getElementById('cliente-info');
    if (cliente) {
        clienteInfo.innerHTML = `
            <h2>Cliente Info</h2>
            <p>ID: ${cliente.id}</p>
            <p>Nome: ${cliente.nome}</p>
            <p>Email: ${cliente.email}</p>
            <p>Telefone: ${cliente.telefone}</p>
        `;
    } else {
        clienteInfo.innerHTML = '<h2>Cliente não encontrado</h2>';
    }
}

document.getElementById('get-btn').addEventListener('click', function() {
    let id = document.getElementById('id').value;
    fetch(`http://localhost:8080/clientes/${id}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        updateClienteInfo(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});