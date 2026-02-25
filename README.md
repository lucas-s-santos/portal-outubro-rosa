# Portal Outubro Rosa

Projeto educacional de conscientizacao e prevencao do cancer de colo do utero e cancer de mama.

## Como executar localmente

### Opcao 1 (Python)
1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
python -m http.server 5500
```

3. Acesse no navegador:

http://localhost:5500/index.html

### Opcao 2 (VS Code + Live Server)
1. Instale a extensao `Live Server`.
2. Clique com o botao direito em `index.html`.
3. Selecione `Open with Live Server`.

## Estrutura principal
- `index.html`: pagina principal da campanha.
- `css/style.css`: layout, responsividade e acessibilidade.
- `img/`: banco de imagens do projeto.

## Imagens novas (ja integradas)
As novas imagens de mamografia foram adicionadas na galeria da pagina principal:
- `img/mamografia.jpg`
- `img/mamografia 3.jpg` (referenciada como `mamografia%203.jpg` no HTML)

## Boas praticas para imagens
- Use nomes sem espaco e sem acento, por exemplo: `mamografia-3.jpg`.
- Mantenha proporcao consistente para ficar melhor no carrossel.
- Prefira arquivos otimizados para web (idealmente ate 300 KB quando possivel).

## Melhorias aplicadas no projeto
- SEO basico: metatags Open Graph e `theme-color`.
- Acessibilidade: `aria-label` em controles de navegacao e tema.
- UX: menu mobile com suporte de teclado e fechamento automatico ao clicar em links.
- Persistencia: tema e tamanho da fonte salvos no navegador.
- Performance/UX: ajustes para `prefers-reduced-motion` e melhoria do hero em mobile.
