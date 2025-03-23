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
    const email = document.getElementById('email').value;
    const tipo = document.getElementById('tipo').value;
    const status = "Novo"; //status padrão
    const observacoes = document.getElementById('observacoes').value;

    // Cria um objeto com os dados do lead
    const lead = { nome, telefone, email, tipo, status, observacoes };
    leads.push(lead);// Adiciona ao array
    atualizarTabela();// Atualiza a tabela
    form.reset();// Limpa o formulário

    // Envia para o WhatsApp
    const numero = "5534997973346"; // ✅ Altere aqui para o seu número real com DDD
    
    const mensagem = `
    *Novo lead capturado pelo formulário!*

    📌 *Nome:* ${nome}
    📱 *Telefone:* ${telefone}
    📧 *E-mail:* ${email}
    🚗 *Tipo de veículo:* ${tipo}
    📊 *Status:* ${status}
    📝 *Observações:* ${observacoes}

    `;

    

    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    console.log("Abrindo WhatsApp..."); // Teste no console
    window.open(urlWhatsApp, "_blank");// Abre o WhatsApp em nova aba
});

// Atualiza a tabela com os dados dos leads
function atualizarTabela() {
    leadTableBody.innerHTML = ''; // Limpa a tabela

    leads.forEach((lead, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lead.nome}</td>
            <td>${lead.telefone}</td>
            <td>${lead.email}</td>
            <td>${lead.tipo}</td>
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