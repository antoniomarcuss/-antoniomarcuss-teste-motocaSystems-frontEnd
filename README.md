# Teste Motoca Systems - Desenvolvedor Front-End

Olá equipe de recrutamento,

Gostaria de compartilhar o meu projeto com vocês para avaliação.

Nesse projeto, utilizei React para desenvolver a interface do usuário e Tailwind para estilização e responsividade, garantindo que o projeto fosse completamente responsivo em diferentes dispositivos.

Principais Tecnologias Utilizadas:

React-query: Gerenciamento de dados assíncronos das requisições, com armazenamento em cache para otimização de performance e evitando fazer requisições desnecessárias para a api.
React-router-dom: Gerenciamento de rotas na aplicação, permitindo navegação fluida entre diferentes páginas.
React-hook-form com Yup: Gerenciamento avançado de formulários, com validações robustas fornecidas pelo Yup para controle de dados de entrada.
Axios: Biblioteca utilizada para realizar chamadas HTTP para a API mockada, garantindo comunicação eficiente entre o frontend e o backend simulado.
Mesmo utilizando uma API mockada, implementei funcionalidades importantes como indicadores de carregamento (loading) e validações de erros, visando proporcionar uma experiência de usuário mais próxima da realidade.

Estou muito satisfeito com o resultado final do projeto e espero que apreciem o que desenvolvi. Estou ansioso para receber um feedback de vocês.

Atenciosamente,

Marcus

Para acessar a aplicação, siga estas instruções:

Execute npm install para instalar todas as dependências necessárias.
Certifique-se de criar um arquivo db.json na raiz do projeto e cole os dados da API fornecidos abaixo:
json
Copiar código
{
"motos": [
{
"id": "1",
"code": "#0001",
"model": "Honda pop 1101",
"color": "branca",
"price": "15.000,00",
"status": {
"id": "1",
"name": "Em estoque"
}
},
{
"id": "2",
"code": "#0002",
"model": "honda 500x",
"color": "vermelha",
"price": "50.000,00",
"status": {
"id": "2",
"name": "Sem estoque"
}
},
{
"id": "3",
"code": "#0003",
"model": "honda cb 300f twister",
"color": "preta",
"price": "30.000,00",
"status": {
"id": "3",
"name": "Em trânsito"
}
}
],
"status": [
{
"id": "1",
"name": "Em estoque"
},
{
"id": "2",
"name": "Sem estoque"
},
{
"id": "3",
"name": "Em trânsito"
}
]
}
Certifique-se de ajustar as configurações do seu ambiente local conforme necessário para garantir que a aplicação funcione corretamente.
