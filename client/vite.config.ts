import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // !@#
  /*
    O Vite é p/ gerenciar servidor de desenvolvimento
    O Vite serve ao React
    O Vite não sabe o que é o Express e sobre sua porta
    O Vite é front, o Express é back (porta: 3000)
    O proxy é uma instrução que você dá pro servidor do Vite
    O express usa rotas com prefixo: /api
    Quando o Vite receber requisições com esse prefixo
    Ele deve repassar isso pro Express (target)
    Ocorre então uma mudança de origem (repasse)
    O Express lida com isso e devolve pra Vite
    Vai parecer que o Vite lidou com tudo, mas não é
    Dois servidores rodando em paralelo
    Um deles vai repassar o outro vai trabalhar e devolver
  */
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
