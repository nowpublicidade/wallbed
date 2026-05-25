# WallBed Landing Page — Plano de Implementacao

**Data**: 2026-05-25
**Stack**: Astro + GSAP + ScrollTrigger
**Design**: docs/plans/2026-05-25-landing-page-design.md

---

## Fase 1: Setup do Projeto

1. Inicializar projeto Astro (template minimal)
2. Configurar Montserrat (fonte local, ja disponivel em `id visual da wallbed/Fonte/`)
3. Copiar logos para `public/images/`
4. Instalar dependencias: `gsap` (ScrollTrigger incluso)
5. Configurar CSS global: reset, variaveis de cor, tipografia base
6. Estrutura de pastas:
   ```
   src/
     components/    # Componentes de cada secao
     layouts/       # Layout base
     pages/         # index.astro
     styles/        # CSS global e variaveis
   public/
     images/        # Logos, fotos, videos
     fonts/         # Montserrat
   ```

## Fase 2: Layout Base + Navbar

1. Criar layout base (BaseLayout.astro) com meta tags SEO, fontes, CSS global
2. Implementar Navbar flutuante com glassmorphism
3. Logo branca + links de navegacao + CTA "Agendar Demonstracao"
4. Scroll behavior: opacidade muda ao rolar
5. Menu hamburger para mobile

## Fase 3: Hero Section

1. Secao full-screen (100vh) com fundo escuro
2. Headline com animacao de reveal (GSAP SplitText ou custom)
3. Subtitulo com fade-in
4. Placeholder para video/imagem de fundo
5. Dois CTAs com estilos (gradiente + outline)
6. Scroll indicator animado
7. Responsividade mobile

## Fase 4: Showcase (Scroll Animation)

1. Container com scroll-triggered animation (GSAP ScrollTrigger pin)
2. Sequencia de imagens da cama abrindo/fechando controlada por scroll
3. Textos contextuais que aparecem/somem em sync com a animacao
4. Numeros/stats com counter animation
5. Fallback para mobile (animacao simplificada)

## Fase 5: Beneficios

1. Grid 2x2 (desktop) / stack (mobile) com 4 cards
2. Icones SVG minimalistas (linhas brancas)
3. Animacao staggered fade-up no scroll

## Fase 6: Galeria de Produtos

1. Scroll horizontal com snap points
2. Cards de produto com imagem, nome, preco, CTA
3. Hover effects (zoom + overlay)
4. Navegacao: setas + indicador de progresso
5. Touch/swipe para mobile

## Fase 7: Segmentos (Para Quem E)

1. Tabs interativos com os 4 publicos
2. Conteudo muda ao clicar (imagem + texto)
3. Transicao suave entre tabs
4. Layout responsivo (tabs viram accordion no mobile)

## Fase 8: Prova Social

1. Carrossel de depoimentos (autoplay + pausa no hover)
2. Espacos para logos de parceiros
3. Numeros de impacto com counter animation

## Fase 9: Formulario de Conversao

1. Layout split: headline esquerda + formulario direita
2. Formulario: nome, whatsapp, email, tipo de interesse (select)
3. Validacao client-side basica
4. Integracao com servico de formulario (Formspree, Netlify Forms, ou API custom)
5. Botao WhatsApp alternativo
6. Fundo gradiente escuro -> rosa/coral

## Fase 10: FAQ + Footer

1. FAQ accordion com animacao suave
2. Footer com grid de colunas
3. Links de redes sociais
4. Informacoes legais

## Fase 11: Polish e Otimizacao

1. Otimizacao de imagens (Astro Image)
2. Lazy loading para imagens e videos
3. Teste de performance (Lighthouse)
4. Teste mobile em diversos tamanhos
5. SEO: meta tags, Open Graph, schema markup
6. Acessibilidade: ARIA labels, contraste, navegacao por teclado

---

## Ordem de execucao

Cada fase sera implementada sequencialmente, com verificacao visual no browser apos cada fase.
