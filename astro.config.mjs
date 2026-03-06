import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight'; // <-- ESSA LINHA É A CHAVE

export default defineConfig({
  site: 'https://ajuda.velodelivery.com.br',
  
  // Colocamos as duas integrações juntas em uma única lista []
  integrations: [
    sitemap(), 
    starlight({
      title: 'Velo Delivery',
      
      // Mantém sua configuração de logo
      logo: {
        src: './src/assets/logo.png',
        replacesTitle: true,
      },
      
      defaultLocale: 'pt-BR',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },

      // Mantém seus nomes exatos de menu
      sidebar: [
        { label: 'Introdução', autogenerate: { directory: '1-introducao' } },
        { label: 'Gestão de Loja', autogenerate: { directory: '2-gestao-de-loja' } },
        { label: 'Catálogo e Estoque', autogenerate: { directory: '3-catalogo-e-estoque' } },
        { label: 'Pedidos e PDV', autogenerate: { directory: '4-pedidos-e-pdv' } },
        { label: 'Marketing e Clientes', autogenerate: { directory: '5-marketing-e-clientes' } },
        { label: 'Financeiro e Integrações', autogenerate: { directory: '6-financeiro-e-integracoes' } }, // <-- ADICIONE ESTA LINHA
      ],
      
      // Mantém o CSS das cores da Velo
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});