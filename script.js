/*const form = document.getElementById('leadForm');
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
*/

// Pega o formulário e o corpo da tabela
const form = document.getElementById('leadForm');
const leadTableBody = document.getElementById('leadTableBody');

// Array para armazenar os leads
let leads = [];

// Quando o formulário for enviado
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const status = document.getElementById('status').value;

    // Cria um objeto com os dados do lead
    const lead = { nome, telefone, status };

    // Adiciona ao array
    leads.push(lead);

    // Atualiza a tabela
    atualizarTabela();

    // Limpa o formulário
    form.reset();

    // Envia para o WhatsApp
    const numero = "5534997973346"; // ✅ Altere aqui para o seu número real com DDD
    const mensagem = `Olá, meu nome é *${nome}* e estou interessado em um veículo.
Telefone para contato: *${telefone}*
Status: *${status}*`;

    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Teste no console
    //console.log("Abrindo WhatsApp...");

    // Abre o WhatsApp em nova aba
    window.open(urlWhatsApp, "_blank");
});

// Atualiza a tabela com os dados dos leads
function atualizarTabela() {
    leadTableBody.innerHTML = ''; // Limpa a tabela

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

// Remove um lead da tabela
function removerLead(index) {
    leads.splice(index, 1);
    atualizarTabela();
}

//ola
