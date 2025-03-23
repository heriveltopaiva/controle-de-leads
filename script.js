const form = document.getElementById('leadForm');
const leadTableBody = document.getElementById('leadTableBody');
let leads = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const status = document.getElementById('status').value;

    const lead = {nome, telefone, status};
    leads.push(lead);
    atualizarTabela();
    form.reset();
});

function atualizarTabela() {
    leadTableBody.innerHTML = '';
    leads.forEach((lead, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${lead.nome}</td>
        <td>${lead.telefone}</td>
        <td>${lead.status}</td>
        <td><button onclick="removerLead(${index})">Remover</button></td>
        `;
        leadTableBody.appendChild(row);
        
        });
    }

    function removerLead(index) {
        leads.splice(index, 1);
        atualizarTabela();
    }


