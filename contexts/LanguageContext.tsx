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
      titlePre: 'Deixe seus Concorrentes',
      titleBreak: 'para',
      titleHighlight: 'Trás',
      description: 'Produção cinematográfica que transforma empresas de construção e real estate em referências do mercado americano. Autoridade visual que fecha contratos high-end.',
      cta: 'Agendar Consultoria Grátis',
      trusted: 'Trusted by Amazing Brands'
    },
    pain: {
      tag: 'Como Funcionamos',
      title: 'Um time completo de cinema por',
      titleHighlight: '10x menos que contratar.',
      description: 'Escale sua presença visual com produção cinematográfica premium, sem burocracia de contratação. Demandas ilimitadas, entrega em dias, não em meses.',
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
      link: 'Ver Portfolio Completo →',
      items: [
         { category: "Real Estate", title: "Luxury Home Tour" },
         { category: "Construção", title: "High-End Roofing" },
         { category: "Outdoor Living", title: "Modern Landscaping" },
         { category: "Institucional", title: "Corporate Branding" }
      ]
    },
    testimonials: {
      title: 'Quem investiu em imagem',
      titleHighlight: '3x o faturamento.',
      items: [
        {
          text: "Antes éramos 'mais um empreiteiro'. Hoje fechamos apenas contratos acima de $50k. A mudança foi 100% no posicionamento visual que a CHECK MKT criou.",
          role: "CEO"
        },
        {
          text: "O vídeo cinematográfico do nosso lançamento vendeu 60% das unidades na primeira semana. ROI de 800%. Qualidade que nunca vi em agência.",
          role: "Realtor"
        },
        {
          text: "Tinha medo de investir em marketing. Em 90 dias nossa presença digital gerou $180k em contratos fechados. Eles entendem o mercado americano.",
          role: "Founder"
        }
      ]
    },
    contact: {
      title: 'Pronto para fechar contratos',
      titleHighlight: '3x maiores?',
      description: 'Consultoria gratuita de 30 minutos. Analisamos sua presença atual e mostramos exatamente como elevar seu posicionamento para competir com as grandes empresas.',
      labels: {
        name: 'Nome Completo',
        company: 'Empresa',
        email: 'Email',
        phone: 'WhatsApp',
        goal: 'Qual seu principal objetivo?',
        submit: 'Agendar Consultoria Gratuita',
        secure: 'Seus dados estão seguros. Entraremos em contato em até 24h.'
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
      designed: 'Designed for Performance & Authority'
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
      titlePre: 'Leave Your Competition',
      titleBreak: 'Far',
      titleHighlight: 'Behind',
      description: 'Cinematic production that transforms construction and real estate companies into market leaders. Visual authority that closes high-end contracts.',
      cta: 'Book Free Consultation',
      trusted: 'Trusted by Amazing Brands'
    },
    pain: {
      tag: 'How We Work',
      title: 'Get a design and video team for a',
      titleHighlight: 'fraction of the cost.',
      description: 'Scale your brand with high-end design and cinematic production without the overhead of hiring in-house. Subscribe and request as much as you need.',
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
      link: 'View Full Portfolio →',
      items: [
         { category: "Real Estate", title: "Luxury Home Tour" },
         { category: "Construction", title: "High-End Roofing" },
         { category: "Outdoor Living", title: "Modern Landscaping" },
         { category: "Institutional", title: "Corporate Branding" }
      ]
    },
    testimonials: {
      title: 'Those who invested in image',
      titleHighlight: 'grew.',
      items: [
        {
          text: "Our brand perception changed completely. We used to be seen as 'just another contractor', now we close high-end contracts because clients trust what they see on Instagram.",
          role: "CEO"
        },
        {
          text: "The video CHECK MKT made for our real estate launch was responsible for selling 60% of units in the first week. Cinema quality.",
          role: "Realtor"
        },
        {
          text: "I was hesitant to invest in marketing, but the return was absurd. They understand the US market and know how to position us here.",
          role: "Founder"
        }
      ]
    },
    contact: {
      title: 'Ready to look',
      titleHighlight: 'Giant?',
      description: 'Fill out the form to schedule a free consultation. We will analyze your current presence and outline a visual production plan.',
      labels: {
        name: 'Full Name',
        company: 'Company',
        email: 'Email',
        phone: 'WhatsApp',
        goal: 'What is your main goal?',
        submit: 'Schedule Free Consultation',
        secure: 'Your data is secure. We will contact you within 24h.'
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
      designed: 'Designed for Performance & Authority'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

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
