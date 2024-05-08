
const data = {
  courses: [],
  oficinas: [],
  workshops: [
    {
      id: 'workshop1',
      cardType: 'Workshop',
      duration: '3 horas',
      title: 'Workshop de Design e Prototipação com Figma',
      image: 'images/workshopfigma/figma.png',
      tags: ['Prototipação', 'Interfaces', 'Experiência de Usuário', 'Criatividade', 'Inteligência'],
      shortDescription: 'O Workshop irá ensinar os seus cursantes a fazer uma prototipagem funcional para o Figma.',
      longDescription: 'O objetivo final do Workshop é montar um protótipo executável e funcional. Esse protótipo será uma poderosa ferramenta para demonstrar a clientes e gerentes interessados na criação de uma plataforma digital de vendas. Prepare-se para explorar o Figma e elevar suas habilidades de design para um novo patamar!',
      instructors: [
        {
          name: 'Lucas Santos',
          photo: 'images/user.jpg'
        },
        {
          name: 'Lucas Castro',
          photo: 'images/user.jpg'
        },
        {
          name: 'Filipe Dias',
          photo: 'images/user.jpg'
        }
      ],
      classroomLink: '########################################',
      local: 'local: Câmpus Palmas, Bloco B Labin II.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar o link do portal quando estiver pronto
    },
    {
      id: 'workshop2',
      cardType: 'Workshop',
      duration: '3 horas',
      title: 'Workshop Básico de HTML5/CSS3/JS',
      image: 'images/htmlecss/htmlecss.jpg',
      tags: ['Iniciante', 'JS', 'CSS', 'HTML'],
      shortDescription: 'Descubra o mundo do desenvolvimento de websites com nosso Workshop introdutório, projetado especialmente para quem está começando. Neste Workshop, você aprenderá a estruturar páginas com HTML, estilizá-las com CSS e adicionar interatividade com JavaScript.',
      longDescription: 'Descubra o mundo do desenvolvimento de websites com nosso Workshop introdutório, projetado especialmente para quem está começando. Neste Workshop, você aprenderá a estruturar páginas com HTML, estilizá-las com CSS e adicionar interatividade com JavaScript.',
      instructors: [
        {
          name: 'Luiz Eduardo Woicik',
          photo: 'images/user.jpg'
        },
        {
          name: 'Andre Barreira',
          photo: 'images/user.jpg'
        },
        {
          name: 'Alfredo de Souza Aguiar Neto',
          photo: 'images/user.jpg'
        }
      ],
      classroomLink: '########################################',
      local: 'local: Câmpus Palmas, Bloco B Labin I.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar o link do portal quando estiver pronto
    },
    {
      id: 'workshop3',
      cardType: 'Workshop',
      duration: '3 horas',
      title: 'Aprendendo a compartilhar seu projeto com Git e GitHub!',
      image: 'images/workshopgit/git.png',
      tags: ['Git', 'GitHub', 'JavaScript', 'Share', 'Compartilhar', 'Versionar'],
      shortDescription: 'Você irá aprender a como pode compartilhar e versionar seus projetos mais legais dentro da rede social dos desenvolvedores, usando Git e GitHub!',
      longDescription: 'Você irá aprender a como pode compartilhar e versionar seus projetos mais legais dentro da rede social dos desenvolvedores, usando Git e GitHub!',
      instructors: [
        {
          name: 'João Victor Póvoa França',
          photo: 'images/user.jpg'
        },
        {
          name: 'Vitória Gabriela',
          photo: 'images/user.jpg'
        }
      ],
      classroomLink: '########################################',
      local: 'local: Câmpus Palmas, Bloco B Labin III.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar o link do portal quando estiver pronto
    },
    {
      id: 'workshop4',
      cardType: 'Workshop',
      duration: '3 horas',
      title: 'Workshop de Ferramentas de Edição: Word, Excel, PowerPoint e Canva',
      image: 'images/workshopferramenta/ferramenta.jpg',
      tags: ['Word', 'Excel', 'PowerPoint', 'Canva'],
      shortDescription: 'Este Workshop capacitará os participantes no uso das ferramentas Word, Excel, PowerPoint e Canva, essenciais para a comunicação e apresentação de informações em ambientes acadêmicos e corporativos, aprimorando assim, suas produções e apresentações.',
      longDescription: 'O Workshop irá apresentar e orientar os participantes sobre o uso das ferramentas mais utilizadas no mundo profissional atualmente: Word, Excel, PowerPoint e Canva. Essas ferramentas desempenham um papel fundamental na comunicação, organização e apresentação de informações em diversos contextos, desde o ambiente acadêmico até o corporativo, e visa capacitar os participantes a dominar as principais funcionalidades dessas ferramentas, fornecendo-lhes habilidades práticas para aprimorar suas produções e apresentações.',
      instructors: [
        {
          name: 'Nicole Araujo Muniz',
          photo: 'images/user.jpg'
        },
        {
          name: 'Álvaro Calebe Souza Ferreira',
          photo: 'images/user.jpg'
        },
        {
          name: 'Marcelo Alves Leite',
          photo: 'images/user.jpg'
        },
        {
          name: 'Emily Maria Santos Bessa',
          photo: 'images/user.jpg'
        },
        {
          name: 'Emanuel Pinheiro Cirqueira',
          photo: 'images/user.jpg'
        }
      ],
      classroomLink: '########################################',
      local: 'UNITINS - Campus Graciosa, Bloco C, Labin IV.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar o link do portal quando estiver pronto
    },
    {
      id: 'workshop5',
      cardType: 'Workshop',
      duration: '2 horas',
      title: 'Montagem de Computadores',
      image: 'images/montagemdecomputador/montagem.png',
      tags: ['Reparo de Computadores', 'Manutenção de Computadores'],
      shortDescription: 'O workshop "Montagem de Computadores" é uma experiência educativa criada para ensinar aos participantes os fundamentos práticos de como montar um computador desktop do zero. Durante o Workshop, você irá explorar os componentes e principais sistemas operacionais de um computador e aprender boas práticas de montagem.',
      longDescription: 'O workshop "Montagem de Computadores" é uma experiência educativa criada para ensinar aos participantes os fundamentos práticos de como montar um computador desktop do zero. Durante o Workshop, você irá explorar os componentes e principais sistemas operacionais de um computador e aprender boas práticas de montagem.',
      instructors: [
        {
          name: 'Gabriel Alves da Silva',
          photo: 'images/user.jpg'
        },
        {
          name: 'Felipe Ferreira de Sousa',
          photo: 'images/user.jpg'
        },
        {
          name: 'Luis Eduardo Noleto de Melo',
          photo: 'images/user.jpg'
        },
      ],
      classroomLink: '########################################',
      local: 'UNITINS - Campus Graciosa, Bloco B, Labin IV.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar o link do portal quando estiver pronto
    },
    {
      id: 'workshop6',
      cardType: 'Workshop',
      duration: '2 horas',
      title: 'Workshop de boas práticas em suporte de sistemas',
      image: 'images/boasprativa/boas.png',
      tags: ['Gerenciamento de incidentes', 'Resolução de problemas', 'Monitoramento de sistemas', 'Segurança da informação'],
      shortDescription: 'Este Workshop tem como objetivo apresentar as melhores práticas e estratégias para oferecer suporte eficaz a sistemas de software. Durante a sessão, serão exploradas técnicas para identificar, diagnosticar e resolver problemas de maneira rápida e eficiente, proporcionando aos participantes as habilidades necessárias para fornecer suporte de alta qualidade para usuários e clientes.',
      longDescription: 'Este Workshop tem como objetivo apresentar as melhores práticas e estratégias para oferecer suporte eficaz a sistemas de software. Durante a sessão, serão exploradas técnicas para identificar, diagnosticar e resolver problemas de maneira rápida e eficiente, proporcionando aos participantes as habilidades necessárias para fornecer suporte de alta qualidade para usuários e clientes.',
      instructors: [
        {
          name: 'Luiz Cláudio de Oliveira',
          photo: 'images/user.jpg'
        },
        {
          name: 'Jônatas Pereira de Jesus Daher',
          photo: 'images/user.jpg'
        },
      ],
      classroomLink: '########################################',
      local: 'UNITINS - Campus Graciosa, Bloco B, Sala 10.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar o link do portal quando estiver pronto
    },
    {
      id: 'workshop7',
      cardType: 'Workshop',
      duration: '3 horas',
      title: 'Workshop para Modelagem usando BPMN',
      image: 'images/workshop-bpmn/bpmn.png',
      tags: ['Gestão de fluxo', 'Velocidade', 'Gestão de projetos'],
      shortDescription: 'Nesse Workshop você vai aprender o que é e para que serve o BPMN.',
      longDescription: 'Nesse Workshop você vai aprender para que serve o BPMN.',
      instructors: [
        {
          name: 'Jeezyel Pereira Costa',
          photo: 'images/user.jpg'
        },
        {
          name: 'Leandro Guimarães Garcia',
          photo: 'images/user.jpg'
        }
      ],
      classroomLink: '########################################',
      local: 'UNITINS - Campus Graciosa, Bloco C, Sala 02.', // confirma o local
      subscribeButton: 'https://www.unitins.br/Eventos/Inscricao/1852'//colocar
    },
  ],
}

export { data }