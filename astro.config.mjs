import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ajuda.velodelivery.com.br', // URL base da documentação
  integrations: [sitemap()],

  integrations:[
    starlight({
      title: 'Velo Delivery',
      
      // 1. CONFIGURAÇÃO DA LOGO
      logo: {
        src: './src/assets/logo.png', // <-- Puxa a logo que você acabou de colocar lá
        replacesTitle: true, // <-- Esconde o texto e deixa só a imagem da logo!
      },
      
      defaultLocale: 'pt-BR',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },

      // 2. ATUALIZAÇÃO DO MENU LATERAL (Lendo suas novas pastas)
      sidebar:[
        { label: 'Introdução', autogenerate: { directory: '1-introducao' } },
        { label: 'Gestão de Loja', autogenerate: { directory: '2-gestao-de-loja' } },
        { label: 'Catálogo e Estoque', autogenerate: { directory: '3-catalogo-e-estoque' } },
        { label: 'Pedidos e PDV', autogenerate: { directory: '4-pedidos-e-pdv' } },
        { label: 'Marketing e Clientes', autogenerate: { directory: '5-marketing-e-clientes' } },
      ],
      
      customCss:[
        './src/styles/custom.css', // Mantém as cores da Velo que configuramos
      ],
    }),
  ],
});