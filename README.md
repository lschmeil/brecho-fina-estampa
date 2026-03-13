# Brechó Fina Estampa — Site Institucional

> Site institucional moderno e responsivo desenvolvido para o **Brechó Fina Estampa**, localizado na Praia dos Ingleses, Florianópolis/SC.

---

## 🔗 Demo

[Ver site ao vivo →](https://lschmeil.github.io/brecho-fina-estampa)

---

## 📸 Preview

![Hero Section](https://i.ibb.co/3m2SnFyb/Whats-App-Image-2025-07-26-at-03-LE-upscale-balanced-x4-removebg-preview.png)

---

## 📋 Sobre o projeto

Este projeto foi desenvolvido do zero com **HTML, CSS e JavaScript puro**, sem frameworks ou bibliotecas externas. O objetivo foi criar uma presença digital elegante para uma loja de roupas real, com foco em direcionar clientes ao Instagram e WhatsApp da loja.

---

## ✨ Funcionalidades

- **Hero section** com título tipográfico de impacto e botões de ação (Instagram, WhatsApp, Ver Peças)
- **Grid de peças em destaque** com efeito hover e link direto para publicações no Instagram
- **Seção Sobre** com vídeo da loja em autoplay (hospedado no Cloudinary)
- **Banner de novidades** com CTA para o Instagram
- **Formas de pagamento** com ícones (Cartão, Dinheiro, Pix)
- **Tabela de horários** com layout limpo
- **Mapa incorporado** via Google Maps iframe
- **Cards de contato** com links diretos para WhatsApp e Instagram
- **Botão flutuante de WhatsApp** que desaparece ao chegar no rodapé
- **Navbar responsiva** que muda de aparência ao rolar, com menu hambúrguer no mobile
- **Animações de entrada** suaves com Intersection Observer (scroll reveal)
- **Layout 100% responsivo** — adaptado para desktop, tablet e celular

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura do site |
| CSS3 | Estilização, animações, responsividade |
| JavaScript puro (ES6+) | Interatividade e scroll animations |
| Google Fonts | Tipografia (Cormorant Garamond + Jost) |
| Google Maps Embed | Mapa de localização |
| Cloudinary | Hospedagem do vídeo |
| imgbb | Hospedagem das imagens |

---

## 🎨 Design

O design segue uma estética **minimalista refinada**, inspirada em marcas de moda de luxo:

- **Paleta de cores:** off-white (`#F7F4EF`), areia (`#E8E0D0`), verde-sálvia (`#7A8C6E`) e preto (`#1E1C1A`)
- **Tipografia:** Cormorant Garamond (display serif elegante) + Jost (sans-serif clean)
- **Layout:** grid assimétrico, espaços generosos, padrão geométrico sutil no hero

---

## 📁 Estrutura do projeto

```
brecho-fina-estampa/
├── index.html      # Estrutura e conteúdo do site
├── style.css       # Estilos, animações e responsividade
├── script.js       # Interatividade (navbar, scroll reveal, menu mobile)
```

---

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/lschmeil/brecho-fina-estampa.git
```

2. Abra o arquivo `index.html` no navegador ou use o Live Server no VS Code.

> ⚠️ Imagens hospedadas externamente (imgbb, Cloudinary) só carregam quando o site está online ou via Live Server. Não funcionam abrindo o arquivo direto pelo `file://`.

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| `> 900px` | Layout completo em duas colunas |
| `≤ 900px` | Seção Sobre e Info empilhadas |
| `≤ 640px` | Menu hambúrguer, grid de peças 2 colunas, botões do hero em coluna |
| `≤ 400px` | Grid de peças 1 coluna |

---

## 🔧 Como personalizar

- **Trocar fotos das peças:** substitua o `src` de cada `<img>` dentro das divs `.peca__img`
- **Adicionar link de publicação:** altere o `href` de cada `<a>` que envolve a peça
- **Trocar o vídeo:** substitua o `src` da tag `<video>` na seção Sobre
- **Alterar informações:** edite textos, horários e endereço diretamente no `index.html`

---

## 👤 Desenvolvido por

**Lucas Schmeil**  
[LinkedIn](https://linkedin.com/in/lschmeil) · [GitHub](https://github.com/lschmeil)

---

## 📄 Licença

Este projeto foi desenvolvido para uso do **Brechó Fina Estampa**. Sinta-se livre para usar como referência ou inspiração em seus próprios projetos.
