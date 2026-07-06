import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const translations = {
  pt: {
    nav: {
      home: 'Home',
      howItWorks: 'Como Funciona',
      solutions: 'Soluções',
      portfolio: 'Portfolio',
      contact: 'Contato',
      cta: 'Começar Agora'
    },
    hero: {
      tags: ['Processo', 'Benefícios', 'Portfolio'],
      titlePre: 'A Produtora de Vídeo N°1 para Construção em',
      titleBreak: '',
      titleHighlight: 'Cape Cod',
      description: 'Não fazemos apenas vídeos. Construímos sua autoridade.',
      cta: 'Agendar Consultoria Grátis',
      trusted: 'Trusted by Amazing Brands',
      features: [
        'Imagens de drone de alta qualidade',
        'Produção cinematográfica',
        'Conteúdo estratégico para resultados reais'
      ]
    },
    pain: {
      tag: 'Como Funcionamos',
      title: 'Um time completo de produção cinematográfica',
      titleHighlight: 'por uma fração do custo de contratar internamente.',
      description: 'Enquanto você constrói projetos, nós construímos sua marca. Sem burocracia. Sem contratos longos. Só resultado.',
      cta: 'Ver Investimento',
      steps: [
        {
          title: "Assine em 5 Minutos",
          desc: "Escolha seu plano, acesse a plataforma e crie sua primeira demanda. Zero burocracia, start imediato."
        },
        {
          title: "Receba em 48-72h",
          desc: "Equipe sênior produz vídeos cinematográficos e designs que colocam você no nível das grandes empresas."
        },
        {
          title: "Revisões Ilimitadas",
          desc: "Não gostou? Ajustamos até ficar exatamente como você imaginou. Sem custos extras, sem limites."
        }
      ]
    },
    solutions: {
      tag: 'A Diferença CHECK MKT',
      title: 'Mais que uma agência. Somos seus',
      titleHighlight: 'diretores de cinema.',
      description: 'Fugimos do "social media genérico". Entregamos uma estrutura visual robusta que faz sua empresa de construção, landscaping ou real estate parecer uma multinacional.',
      imageTag: 'Bastidores',
      imageTitle: 'Equipamento de Cinema',
      items: [
        {
          title: "Linguagem Cinematográfica",
          desc: "Não fazemos vídeo de celular. Usamos técnicas de cinema aplicadas ao seu negócio real para elevar o status da marca."
        },
        {
          title: "Estratégia de Posicionamento",
          desc: "Conteúdo pensado para gerar autoridade imediata para quem visita seu perfil."
        },
        {
          title: "Branding de Alto Valor",
          desc: "Transformamos sua empresa de 'opção local' para 'referência de mercado' através do visual."
        },
        {
          title: "Conteúdo para Vendas",
          desc: "Vídeos que quebram objeções e preparam o cliente para fechar com você."
        }
      ]
    },
    portfolio: {
      title: 'Trabalhos Recentes',
      subtitle: 'O padrão visual que seus concorrentes gostariam de ter.',
      link: 'Explorar todos os projetos →',
      viewMore: 'Ver mais trabalhos',
      viewLess: 'Ver menos',
      close: 'Fechar',
      categories: {
        all: 'Todos',
        construction: 'Construção',
        landscaping: 'Paisagismo',
        'real-estate': 'Real Estate',
        ads: 'Anúncios'
      },
      items: [
        { category: "Real Estate", title: "Imóveis & Tours de Alto Padrão" },
        { category: "Construção", title: "Construção & Obras Cinematográficas" },
        { category: "Outdoor Living", title: "Paisagismo & Projetos Externos" },
        { category: "Institucional", title: "Institucionais & Posicionamento de Marca" }
      ]
    },
    testimonials: {
      title: 'Quem investiu em imagem',
      titleHighlight: '3x o faturamento.',
      items: [
        {
          text: "Os vídeos profissionais mudaram a forma como o mercado nos enxerga. Ganhamos mais confiança e mais pedidos de orçamento rapidamente.",
          author: "Felipe Neves",
          role: "General Manager",
          company: "Gade Masonry & Landscaping",
          link: "www.gademasonrylandscaping.com"
        },
        {
          text: "Nossos projetos passaram a parecer tão premium online quanto são na prática. Essa credibilidade nos ajudou a fechar mais contratos.",
          author: "Nilson Guasti",
          role: "Owner",
          company: "Proline Covering",
          link: "www.prolinecovering.com"
        },
        {
          text: "As imagens de alto padrão geraram confiança imediata e trouxeram projetos maiores e clientes mais qualificados.",
          author: "Rafael Ribeiro",
          role: "Owner",
          company: "Living Waters Gunite Pools & Spas",
          link: "www.lwgpoolsandspas.com"
        }
      ]
    },
    contact: {
      title: 'Pronto para fechar contratos',
      titleHighlight: 'até 3x maiores?',
      description: 'Consultoria estratégica gratuita de 30 minutos. Analisamos sua presença atual e mostramos exatamente como vídeos profissionais e marketing visual podem posicionar sua empresa para competir com grandes construtoras, gerar mais autoridade e conquistar contratos melhores.',
      labels: {
        name: 'Nome Completo',
        company: 'Empresa',
        email: 'Email',
        phone: 'WhatsApp',
        goal: 'Qual seu principal objetivo?',
        submit: 'Agendar Consultoria Gratuita',
        secure: 'Seus dados estão seguros. Entraremos em contato em até 24h.'
      },
      info: {
        emailLabel: 'Email',
        emailValue: 'info@checkmktus.com',
        whatsappLabel: 'Telefone',
        whatsappValue: '774 446 6676',
        servingLabel: 'Endereço',
        servingValue: '67 sea street Hyannis - MA  02601'
      },
      goals: [
        'Melhorar posicionamento de marca',
        'Aumentar vendas',
        'Vídeos para Redes Sociais',
        'Vídeos Institucionais'
      ]
    },
    footer: {
      rights: '© 2025 CHECK MKT. Todos os direitos reservados.',
      description: 'A estratégia #1 de Vídeo Marketing desenhada exclusivamente para escalar o mercado imobiliário e construção civil de alto padrão.',
      designed: 'Designed for Performance & Authority'
    },
    briefing: {
      title: 'Briefing de Criação de Site',
      subtitle: 'Preencha as informações abaixo com o máximo de detalhes possível para iniciarmos a estruturação do seu novo site.',
      loading: 'Carregando formulário...',
      backHome: 'Voltar para Home'
    }
  },
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it Works',
      solutions: 'Solutions',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Start Now'
    },
    hero: {
      tags: ['Process', 'Benefits', 'Portfolio'],
      titlePre: 'The #1 Video Marketing Company for Construction in',
      titleBreak: '',
      titleHighlight: 'Cape Cod',
      description: 'We don’t just make videos. We build your authority.',
      cta: 'Book Free Consultation',
      trusted: 'Trusted by Amazing Brands',
      features: [
        'High-end drone footage',
        'Cinematic production',
        'Strategic content designed to generate real business results'
      ]
    },
    pain: {
      tag: 'How We Work',
      title: 'Get a design and video team for a',
      titleHighlight: 'fraction of the cost.',
      description: 'While you build projects, we build your brand. No bureaucracy. No long contracts. Just results.',
      cta: 'View Plans',
      steps: [
        {
          title: "Subscribe & Start",
          desc: "Subscribe and request unlimited tasks immediately. No bureaucracy, instant onboarding."
        },
        {
          title: "Cinematic Production",
          desc: "Our senior team gets to work. Receive cinema-quality videos and designs in just a few days."
        },
        {
          title: "Simple Revisions",
          desc: "The design isn't finished until you love it. Request unlimited adjustments until it's perfect."
        }
      ]
    },
    solutions: {
      tag: 'The CHECK MKT Difference',
      title: 'More than an agency. We are your',
      titleHighlight: 'film directors.',
      description: 'We avoid "generic social media". We deliver a robust visual structure that makes your construction, landscaping, or real estate business look like a multinational.',
      imageTag: 'Behind the Scenes',
      imageTitle: 'Cinema Equipment',
      items: [
        {
          title: "Cinematic Language",
          desc: "No phone videos. We use cinema techniques applied to your real business to elevate brand status."
        },
        {
          title: "Positioning Strategy",
          desc: "Content designed to generate immediate authority for anyone visiting your profile."
        },
        {
          title: "High-Value Branding",
          desc: "We transform your company from a 'local option' to a 'market reference' through visuals."
        },
        {
          title: "Content for Sales",
          desc: "Videos that break objections and prepare the client to close the deal with you."
        }
      ]
    },
    portfolio: {
      title: 'Recent Work',
      subtitle: 'The visual standard your competitors wish they had.',
      link: 'Explore all projects →',
      viewMore: 'View More Works',
      viewLess: 'View Less',
      close: 'Close',
      categories: {
        all: 'All',
        construction: 'Construction',
        landscaping: 'Landscaping',
        'real-estate': 'Real Estate',
        ads: 'Ads & Commercials'
      },
      items: [
        { category: "Real Estate", title: "Real Estate Showcase" },
        { category: "Construction", title: "Cinematic Roofing & Construction" },
        { category: "Outdoor Living", title: "Landscaping & Outdoor Projects" },
        { category: "Institutional", title: "Institutional & Brand Films" }
      ]
    },
    testimonials: {
      title: 'Those who invested in image',
      titleHighlight: 'grew.',
      items: [
        {
          text: "Professional videos transformed how clients see us. We gained more trust and more estimate requests almost immediately.",
          author: "Felipe Neves",
          role: "General Manager",
          company: "Gade Masonry & Landscaping",
          link: "www.gademasonrylandscaping.com"
        },
        {
          text: "Our projects finally look as premium online as they are in real life. That credibility helped us close more contracts.",
          author: "Nilson Guasti",
          role: "Owner",
          company: "Proline Covering",
          link: "www.prolinecovering.com"
        },
        {
          text: "High end visuals built instant trust with clients and brought us better, higher value projects.",
          author: "Rafael Ribeiro",
          role: "Owner",
          company: "Living Waters Gunite Pools & Spas",
          link: "www.lwgpoolsandspas.com"
        }
      ]
    },
    contact: {
      title: 'Ready to close contracts',
      titleHighlight: 'up to 3x bigger?',
      description: 'Free 30 minute strategy session. We analyze your current presence and show you exactly how professional video and visual marketing can position your company to compete with larger contractors, build authority and win better jobs.',
      labels: {
        name: 'Full Name',
        company: 'Company',
        email: 'Email',
        phone: 'WhatsApp',
        goal: 'What is your main goal?',
        submit: 'Schedule Free Consultation',
        secure: 'Your data is secure. We will contact you within 24h.'
      },
      info: {
        emailLabel: 'Email',
        emailValue: 'info@checkmktus.com',
        whatsappLabel: 'Phone',
        whatsappValue: '774 446 6676',
        servingLabel: 'Address',
        servingValue: '67 sea street Hyannis - MA  02601'
      },
      goals: [
        'Improve Brand Positioning',
        'Increase Sales',
        'Social Media Videos',
        'Institutional Videos'
      ]
    },
    footer: {
      rights: '© 2025 CHECK MKT. All rights reserved.',
      description: 'The #1 Video Marketing strategy designed exclusively to scale high-ticket Real Estate and Construction.',
      designed: 'Designed for Performance & Authority'
    },
    briefing: {
      title: 'Website Briefing Form',
      subtitle: 'Fill out the information below with as much detail as possible so we can start structuring your new website.',
      loading: 'Loading form...',
      backHome: 'Back to Home'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
