![Logo](https://github.com/LucasBonfimVilela01/Tracsy/blob/main/tracsy/public/logo-no-background%20(2).svg)
<center><b>Tracsy é uma plataforma digital dedicada a reunir informações sobre pessoas desaparecidas </b>
</center> 

[Confira o site](https://tracsy.vercel.app)

## Sumário

- [Documentação](#documentação)
- [Como rodar o projeto localmente?](#como-rodar-o-projeto-localmente)
- [Autores](#autores)

## Documentação

[PDF da Documentação](https://drive.google.com/file/d/1VrW3isbO4G4A-DdwunMW3VbsHPhoMkuO/view?usp=sharing)

## Como rodar o projeto localmente?

### 1 - Acesse o prompt de comando e faça o seguinte comando dentro da pasta que você quer que o projeto fique hosteado.

```bash
  # clone o repositório
  git clone https://github.com/LucasBonfimVilela01/Tracsy
```

### 2 - Instale as dependências:

```bash
npm install
```

### 3 - Crie um arquivo .env.local na raiz do projeto:

```tsx
//Link de hosteamento de API com JSON server
NEXT_PUBLIC_API_URL=
//Chave de criptografia
JWT_SECRET=
```

### 4 - Verifique se a instalação está correta e execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

### 5 - Digite [http://localhost:3000](http://localhost:3000) na barra de pesquisa de seu navegador e entre no site.

## Autores

- Lucas Bonfim [@LucasBonfimVilela01](https://github.com/LucasBonfimVilela01) - lucas.vilela5@etec.sp.gov.br
- Nicolas Sinelli [@nino-clmity](https://github.com/nino-clmity) - nicolas.hilario@etec.sp.gov.br
- Beatriz Silva [@Beatriz02020](https://github.com/Beatriz02020) - beatriz.andrade121@etec.sp.gov.br
