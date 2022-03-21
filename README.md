Para o projeto final é esperado que o Bot de flavorria esteja funcionando com todas as integrações funcionando na api que vocês precisaram criar, conseguindo possibilitar que um usuário faça seus pedidos e consulte seus pedidos como uma espécie de histórico de pedidos, junto com isso conte também com a pesquisa de CEP do usuário, para fazer as entregas ao destinatário e no final conclua o pedido do usuário.

Crie uma api que contenha as seguintes necessidades:
	1. Endpoint: Listar todas as flavors do banco de dados da flavorria com pelo menos duas páginas de itens. Sendo no mínimo 5 itens por página.
	2. Endpoint: Fazer pedido, onde o usuário poderá pedir N flavors de mais de um sabor diferente caso ele queira.
	3. Endpoint: Pesquisa endereço pelo cep informado do usuário e trás as informações de localidade do usuário. O retorno não pode conter nada mais além das seguintes propriedades:
		1. Estado
		2. Cidade
		3. Bairro
		4. Rua
		5. Número da casa
		6. Complemento caso tenha
	4. Endpoint: Recuperar pedidos. Onde o endpoint vai retornar os ultimos pedidos feito pelo usuário e apresentar pra ele em forma de histórico de compra.
	5. Endpoint/resource: FAQ, crie um enpoint que retorne algumas curiosidades sobre a flavorria, algo como um sobre ou alguma coisa que caso o usuário pergunte o bot consiga puxar da base de dados pela sua api a informação da flavorria.
	**(OPTIONAL):** Faça um registro de usuário para fidelizar ele a flavorria atrelando sabores favoritos e preferencias de flavors para conseguir criar uma experiência personalizada quando o usuário voltar.
	**(OPCIONAL):** Usar NLP para identificar a intenção dos usuários. E conseguir personalizar melhor o fluxo de conversação.
	
No final o bot precisa listar todas as informações de escolha do usuário, junto com o total a ser pago pelo cliente e confirme o pedido com o cliente. Ao confirmar, o bot precisa armazenar a informação do pedido para caso o usuário queira pedir novamente quando voltar, conseguir recuperar a informação do pedido do usuário.