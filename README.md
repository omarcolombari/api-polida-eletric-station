# Api Polida Eletric Station

Este é o backend da aplicação do grupo “POLIDA” para capstone do módulo 4 do curso fullstack da Kenzie Academy Brasil! O objetivo dessa aplicação é realizar o gerenciamento de ordens de serviço para uma empresa de instalação de carregadores de carros elétricos. Além de desenvolvimento de hard skills e soft skills.

## AUTENTICAÇÃO

Todas as rotas exigem autenticação, exceto as rotas de criação de usuário e login.
O token de autenticação é fornecido como resposta na rota de login e deve ser enviado no headers em todas as outras rotas no seguinte formato:

```
{
  authentication: `Bearer ${token}`
}
```

## ADMIN

Para esta aplicação existem dois tipos de usuário: Administrador e técnico.
O login do técnico tem acesso somente as rotas pertinentes aquele técnico, como as ordens de serviço que lhe foram atribuidas. Somente os administradores tem acesso a todas as rotas.

## ERROS

## Em caso de problemas na requisição, todas as rotas retornam mensagens de erro especificando o problema, como token inválido, permissões de administrador insuficientes ou campos faltando/inválidos na requisição.

## ENDPOINTS

### `/users`

#### <strong>POST</strong>

Criação de usuário

##### REQUEST

```
{
	"name": "Exemplo",
	"cpf": "00000000000",
	"password": "123123",
	"contact": "ex@mail.com",
	isAdmin: true
}
```

##### RESPONSE

`status: 201`

```
{
	"cpf": "00000000000",
	"name": "Exemplo",
	"contact": "ex@mail.com",
	"isAdmin": true,
	"id": "55225612-3f11-4c09-8407-8dc63ed69eff",
	"created_at": "2022-05-26T17:39:54.909Z",
	"updated_at": "2022-05-26T17:39:54.909Z"
}
```

---

### `/users/login`

#### <strong>POST</strong>

Login de usuário

##### REQUEST

```
{
	"cpf": "00000000000",
	"password": "123123",
}
```

##### RESPONSE

`status: 200`

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIwMDAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTM2MDc1NzksImV4cCI6MTY1MzY5Mzk3OSwic3ViIjoiNjRmOGFmNTQtZTc2Zi00OTM2LTlkODctYzU5NGE0NzEwYjhlIn0.uSxhDz2FfVY-aLkr5v8Q17s_RwcLfsqPFWlm8ASPzvw"
}
```

---

### `/users`

#### <strong>GET</strong>

Listagem de todos os usuários

##### RESPONSE

`status: 200`

```
[
	{
		"cpf": "00000000000",
		"name": "Exemplo",
		"contact": "ex@mail.com",
		"isAdmin": true,
		"id": "55225612-3f11-4c09-8407-8dc63ed69eff",
		"created_at": "2022-05-26T17:39:54.909Z",
		"updated_at": "2022-05-26T17:39:54.909Z"
	}
]
```

---

### `/users/:id`

#### <strong>GET</strong>

Listagem de um usuário

##### RESPONSE

`status: 200`

```
{
	"cpf": "00000000000",
	"name": "Exemplo",
	"contact": "ex@mail.com",
	"isAdmin": true,
	"id": "55225612-3f11-4c09-8407-8dc63ed69eff",
	"created_at": "2022-05-26T17:39:54.909Z",
	"updated_at": "2022-05-26T17:39:54.909Z"
}
```

---

### `/users/:id`

#### <strong>PATCH</strong>

Alteração da <strong>senha</strong> de um usuário

##### REQUEST

```
{
	"password": "123123"
}
```

##### RESPONSE

`status: 200`

```
{
	"id": "64f8af54-e76f-4936-9d87-c594a4710b8e",
	"cpf": "000",
	"name": "Exemplo",
	"password": "$2b$08$XV.OnCyYnQ3qmSTbYCR7ge5ZSbAlSSuo9nEtjQ84knLcVO0bSFg5G",
	"contact": "exemplo@mail.com",
	"isAdmin": true,
	"created_at": "2022-05-26T23:26:15.461Z",
	"updated_at": "2022-05-26T23:26:48.369Z",
	"service_order": []
}
```

---

### `/users/:id`

#### <strong>DELETE</strong>

Deletar um usuario

##### RESPONSE

`status: 200`

```
{
	"message": "User deleted successfully."
}
```

---

### `/clients`

#### <strong>POST</strong>

Criação de cliente

##### REQUEST

```
{
	"name": "exemplo",
	"contact": "teste"
}
```

##### RESPONSE

`status: 201`

```
{
	"name": "exemplo",
	"contact": "ex@mail.com",
	"id": "7a162c14-3912-402c-90d3-9d6b11570421",
	"created_at": "2022-05-26T23:36:13.689Z",
	"updated_at": "2022-05-26T23:36:13.689Z"
}
```

---

### `/clients`

#### <strong>GET</strong>

Listagem de todos os clientes

##### RESPONSE

`status: 200`

```
[
	{
		"id": "7a162c14-3912-402c-90d3-9d6b11570421",
		"name": "exemplo",
		"contact": "ex@mail.com",
		"created_at": "2022-05-26T23:36:13.689Z",
		"updated_at": "2022-05-26T23:36:13.689Z",
		"units": []
	}
]
```

---

### `/clients/:id`

#### <strong>GET</strong>

Listagem de um cliente

##### RESPONSE

`status: 200`

```
{
	"id": "7a162c14-3912-402c-90d3-9d6b11570421",
	"name": "exemplo",
	"contact": "ex@mail.com",
	"created_at": "2022-05-26T23:36:13.689Z",
	"updated_at": "2022-05-26T23:36:13.689Z",
	"units": []
}
```

---

### `/clients/:id`

#### <strong>DELETE</strong>

Deleta um cliente

##### RESPONSE

`status: 204`
Sem corpo de resposta.

---

### `/services`

#### <strong>POST</strong>

Criação de uma categoria de serviço

##### REQUEST

```
{
	"name": "Instalação",
	"price": 15
}
```

##### RESPONSE

`status: 201`

```
{
	"name": "Instalação",
	"price": 15,
	"id": "85069fd6-c101-458c-9e80-e47944b64435"
}
```

---

### `/services`

#### <strong>GET</strong>

Listagem de todas as categorias de serviço

##### RESPONSE

```

	{
		"id": "85069fd6-c101-458c-9e80-e47944b64435",
		"name": "Instalação",
		"price": 15,
		"service_order": []
	}
]
```

---

### `/services/:id`

#### <strong>DELETE</strong>

Deleta uma categoria de serviço

##### RESPONSE

`status: 204`

Sem corpo de resposta.

---

### `/units`

#### <strong>POST</strong>

Criação de uma unidade/endereço de cliente. O id do cliente dono da unidade deve ser enviado no corpo da requisição.

##### REQUEST

```
{
	"street": "Rua 2",
	"st_number": "255",
	"district": "Exemplo",
	"voltage": 0,
	"cable_meter": 0,
	"clientId": "7a162c14-3912-402c-90d3-9d6b11570421"
}
```

##### RESPONSE

`status: 201`

```
{
	"street": "Rua 2",
	"st_number": "255",
	"district": "Exemplo",
	"voltage": 0,
	"cable_meter": 0,
	"clientId": "7a162c14-3912-402c-90d3-9d6b11570421",
	"id": "b6a1784e-1fe9-49f2-9374-433fa67ea3aa",
	"created_at": "2022-05-26T23:50:28.697Z",
	"updated_at": "2022-05-26T23:50:28.697Z"
}
```

---

### `/units`

#### <strong>PATCH</strong>

Atualiza todos os campos da unidade especificada, <strong>exceto</strong> o cliente dono da unidade.

##### REQUEST

```
{
	"street": "Rua 25",
	"st_number": "12",
	"district": "São Paulo",
	"voltage": 110,
	"cable_meter": 102
}
```

##### RESPONSE

`status: 200`

```
{
	"id": "b6a1784e-1fe9-49f2-9374-433fa67ea3aa",
	"street": "Rua 25",
	"st_number": "12",
	"district": "São Paulo",
	"voltage": 110,
	"cable_meter": 102,
	"clientId": "7a162c14-3912-402c-90d3-9d6b11570421",
	"created_at": "2022-05-26T23:50:28.697Z",
	"updated_at": "2022-05-26T23:53:13.149Z"
}
```

---

### `/units`

#### <strong>DELETE</strong>

Deleta uma unidade

##### RESPONSE

`status: 204`

Sem corpo de resposta.

---

### `/orders`

#### <strong>POST</strong>

Criação de ordem de serviço, devem ser passados na requisição os ids de unidade, categoria de serviço e usuário que atenderá a ordem de serviço. O campo status também é obrigatório e somente aceita os valores "Aberto" e "Fechado".

##### REQUEST

```
{
	"unitId": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
	"serviceTypeId": "85069fd6-c101-458c-9e80-e47944b64435",
	"userId": "b3f5edbe-ed4c-4f1a-bce3-9164af674755",
	"status": "Aberto"
}
```

##### RESPONSE

`status: 201`

```
{
	"status": "Aberto",
	"unitId": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
	"serviceTypeId": "85069fd6-c101-458c-9e80-e47944b64435",
	"userId": "b3f5edbe-ed4c-4f1a-bce3-9164af674755",
	"reschedule": null,
	"id": "d5dcfaa8-1d31-4081-a1bf-e0bb00a0564a",
	"created_at": "2022-05-27T00:04:19.342Z",
	"updated_at": "2022-05-27T00:04:19.342Z"
}
```

---

### `/orders`

#### <strong>PATCH</strong>

Atualização de ordem de serviço. Aceita somente os campos "status" (obrigatório) e "reschedule" (opcional/string). As restrições de valores se aplicam a status.

##### REQUEST

```
{
	"status": "Fechado",
	"reschedule": "Nao"
}
```

##### RESPONSE

`status: 200`

```
{
	"id": "d5dcfaa8-1d31-4081-a1bf-e0bb00a0564a",
	"status": "Fechado",
	"reschedule": "Nao",
	"unitId": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
	"serviceTypeId": "85069fd6-c101-458c-9e80-e47944b64435",
	"userId": "b3f5edbe-ed4c-4f1a-bce3-9164af674755",
	"created_at": "2022-05-27T00:04:19.342Z",
	"updated_at": "2022-05-27T00:06:29.412Z",
	"unit": {
		"id": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
		"street": "Rua 2",
		"st_number": "255",
		"district": "Exemplo",
		"voltage": 0,
		"cable_meter": 0,
		"clientId": "7a162c14-3912-402c-90d3-9d6b11570421",
		"created_at": "2022-05-26T23:55:01.135Z",
		"updated_at": "2022-05-26T23:55:01.135Z"
	}
}
```

---

### `/orders`

#### <strong>GET</strong>

Listagem de todas as ordens de serviço

##### RESPONSE

`status: 200`

```
[
	{
		"id": "d5dcfaa8-1d31-4081-a1bf-e0bb00a0564a",
		"status": "Fechado",
		"reschedule": "Nao",
		"unitId": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
		"serviceTypeId": "85069fd6-c101-458c-9e80-e47944b64435",
		"userId": "b3f5edbe-ed4c-4f1a-bce3-9164af674755",
		"created_at": "2022-05-27T00:04:19.342Z",
		"updated_at": "2022-05-27T00:06:29.412Z",
		"unit": {
			"id": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
			"street": "Rua 2",
			"st_number": "255",
			"district": "Exemplo",
			"voltage": 0,
			"cable_meter": 0,
			"clientId": "7a162c14-3912-402c-90d3-9d6b11570421",
			"created_at": "2022-05-26T23:55:01.135Z",
			"updated_at": "2022-05-26T23:55:01.135Z"
		}
	}
]
```

---

### `/orders/:id`

#### <strong>GET</strong>

Listagem de uma ordem de serviço

##### RESPONSE

```
{
	"id": "d5dcfaa8-1d31-4081-a1bf-e0bb00a0564a",
	"status": "Fechado",
	"reschedule": "Nao",
	"unitId": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
	"serviceTypeId": "85069fd6-c101-458c-9e80-e47944b64435",
	"userId": "b3f5edbe-ed4c-4f1a-bce3-9164af674755",
	"created_at": "2022-05-27T00:04:19.342Z",
	"updated_at": "2022-05-27T00:06:29.412Z",
	"unit": {
		"id": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
		"street": "Rua 2",
		"st_number": "255",
		"district": "Exemplo",
		"voltage": 0,
		"cable_meter": 0,
		"clientId": "7a162c14-3912-402c-90d3-9d6b11570421",
		"created_at": "2022-05-26T23:55:01.135Z",
		"updated_at": "2022-05-26T23:55:01.135Z"
	}
}
```

---

### `/orders/me`

#### <strong>GET</strong>

Listagem de todas as ordens de serviço <strong>associadas ao usuário logado</strong>.

##### RESPONSE

```
[
	{
		"id": "d5dcfaa8-1d31-4081-a1bf-e0bb00a0564a",
		"status": "Fechado",
		"reschedule": "Nao",
		"unitId": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
		"serviceTypeId": "85069fd6-c101-458c-9e80-e47944b64435",
		"userId": "b3f5edbe-ed4c-4f1a-bce3-9164af674755",
		"created_at": "2022-05-27T00:04:19.342Z",
		"updated_at": "2022-05-27T00:06:29.412Z",
		"unit": {
			"id": "1d6c86cc-c11f-4c53-8cee-1335691b4980",
			"street": "Rua 2",
			"st_number": "255",
			"district": "Exemplo",
			"voltage": 0,
			"cable_meter": 0,
			"clientId": "7a162c14-3912-402c-90d3-9d6b11570421",
			"created_at": "2022-05-26T23:55:01.135Z",
			"updated_at": "2022-05-26T23:55:01.135Z"
		}
	}
]
```
