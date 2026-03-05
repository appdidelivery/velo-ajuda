import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // URL de produção (Crucial para o Sitemap e para a IA achar seu site)
  site: 'https://ajuda.velodelivery.com.br',

  integrations:[
    starlight({
      title: 'Velo Delivery', // <-- Isso muda o nome lá no topo!
      
      // Força o idioma para Português (Essencial para a IA e SEO)
      defaultLocale: 'pt-BR',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },

      // Menu lateral dinâmico: ele vai ler suas pastas e criar os links sozinho
      sidebar:[
        {
          label: 'Introdução',
          autogenerate: { directory: '1-introducao' },
        },
        {
          label: 'Gestão de Loja',
          autogenerate: { directory: '2-gestao-de-loja' },
        }
      ],
      customCss:[
        './src/styles/custom.css', // <-- Adicione esta linha
      ],
    }),
  ],
});