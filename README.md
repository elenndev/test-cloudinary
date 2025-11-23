Esse repositório foi criado para estudar como realizar a implementação do [Cloudinary](https://cloudinary.com/) em um projeto Next, permitindo:
- Upload de novas imagens
- Fetch de imagens salvas

# Implementação
1. Foi necessário instalar o Cloudinary SDK
```
npm install cloudinary
```

2. Criação das variaveis de ambiente
```
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

3. Configuração Cloudinary
Em `cloudinary.ts` foi criada a configuração central do Cloudinary, utilizando as variáveis de ambiente carregadas no lado do servidor:
```
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default cloudinary;
```

Essa instância é utilizada tanto na rota de upload quanto na rota de Fetch.

# Utilização
Após criar as variáveis de ambiente como indicadas em envExample;
```
npm i
npm run dev
```

Acessar aplicação: [http://localhost:3000](http://localhost:3000)

