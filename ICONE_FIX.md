# 🔧 CORREÇÃO DO ÍCONE (Caveiras)

## Problema
O PWA está mostrando "caveiras" em vez do ícone correto.

## Causa
- SVG nem sempre funciona bem em PWA iOS
- Cache do navegador/PWA mantém ícone antigo
- Melhor usar PNG para compatibilidade

## Solução Rápida

### Opção 1: Limpar Cache do PWA
1. Abra o Safari
2. Vá em Configurações > Safari > Avançado > Dados do Site
3. Remova `irontracks.github.io`
4. Desinstale o PWA do iPhone
5. Reinstale o PWA

### Opção 2: Usar PNG em vez de SVG

Execute este comando no terminal para gerar PNGs:

```bash
cd "/Users/macmini/Desktop/Sitema do salão"

# Gerar icon-192.png (requer ImageMagick ou similar)
# Se não tiver ImageMagick, use um conversor online:
# https://cloudconvert.com/svg-to-png
```

## Alternativa: Criar PNG manualmente

1. Abra `icon-192.svg` no navegador
2. Tire screenshot
3. Redimensione para 192x192 e 512x512
4. Salve como `icon-192.png` e `icon-512.png`
5. Atualize `manifest.json`:

```json
"icons": [
  {
    "src": "./icon-192.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "./icon-512.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "any"
  }
]
```

## Ícone Temporário (Emoji)

Você pode usar um emoji como ícone temporário criando um data URL:

```javascript
// No manifest.json, use:
"icons": [
  {
    "src": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💪</text></svg>",
    "sizes": "192x192",
    "type": "image/svg+xml"
  }
]
```

