
const data = {
  courses: [
    {
      id: 'course1',
      cardType: 'Curso',
      duration: '3 horas',
      title: 'Curso de HTML, CSS e JS',
      image: './images/fundoitem2.jpg',
      tags: ['HTML', 'CSS', 'JS'],
      shortDescription: 'Curso de HTML, CSS e JS voltado para iniciantes e intermediários. Aprenda a criar sites responsivos e dinâmicos com as tecnologias mais utilizadas no mercado.',
      longDescription: '<p>Curso de HTML, CSS e JS voltado para iniciantes e intermediários. Aprenda a criar sites responsivos e dinâmicos com as tecnologias mais utilizadas no mercado. Aprenda a criar sites responsivos e dinâmicos com as tecnologias mais utilizadas no mercado. Aprenda a criar sites responsivos e dinâmicos com as tecnologias mais utilizadas no mercado.<p>' +
      `<p>Nesse curso veremos:</p>
      <ul>
        <li>Basic HTML structure</li>
        <li>Styling with CSS</li>
        <li>Adding interactivity with JavaScript</li>
      </ul>`,
      instructors: [
        {
          name: 'João Silva',
          photo: 'images/user.jpg'
        },
        {
          name: 'Maria Souza',
          photo: 'images/user.jpg'
        }
      ],
      usefulLinks: [
        {
          title: 'Turma Google Classroom',
          url: 'https://classroom.google.com/u/0/c/NjY4ODk2OTU2MDYz',
          qrCodeImage: './images/qrcode/cursohtml.png'
        },
        {
          title: 'Link 2',
          url: 'https://www.google.com',
          qrCodeImage: 'https://picsum.photos/200'
        }
      ],
      local: 'Bloco C, sala 101',
      subscribeButton: 'https://classroom.google.com/u/0/c/NjY4ODk2OTU2MDYz'
    }
  ],
  oficinas: [
    {
      id: 'oficinas1',
      cardType: 'oficinas',
      duration: '3 horas',
      title: 'workshop para modelagem usando BPMN',
      image: 'images/BPMN/BPMN.PNG',
      tags: ['Gestão de fluxo', 'velocidade', 'Gestão de projetos'],
      shortDescription: 'Nesse curso voce vai o que e e pra que server o BPMN.',
      longDescription: 'Nesse curso você vai aprender para que server o BPMN.'
      ,
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
      usefulLinks: [
        {
          title: 'Turma Google sala de aula',
          url: 'https://classroom.google.com/c/NjY4ODkzNTk0NDQz',
          qrCodeImage: 'images/BPMN/qr-code BPMN.PNG'
        },
      ],
      local: 'ex: Bloco C, sala 101 colocar depos', // comfirma o local
      subscribeButton: 'https://classroom.google.com/u/0/c/NjY4ODk2OTU2MDYz'//colocar o link do portal quendo estiver pronto
    }, 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      id: 'oficinas1',
      cardType: 'oficinas',
      duration: '3 horas',
      title: 'Oficina de Design e Prototipação com Figma',
      image: 'images/FIGMA/FIGMA.PNG',
      tags: ['Prototipação', 'Interfaces', 'Experiência de Usuário ', 'Criatividade' , 'Inteligência'],
      shortDescription: 'O curso irá ensinar os seus cursantes a fazer uma protoptipagem funcional para o Figma.',
      longDescription: 'O objetivo final do curso é montar um protótipo executável e funcional. Esse protótipo será uma poderosa ferramenta para demonstrar a clientes e gerentes interessados na criação de uma plataforma digital de vendas. Prepare-se para explorar o Figma e elevar suas habilidades de design para um novo patamar!'
      ,
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
      usefulLinks: [
        {
          title: 'links gerais',
          url: 'https://dontpad.com/estacaoconectaUNITINS/figma',
          qrCodeImage: 'images/FIGMA/qr-code FIGMA.PNG'
        },
      ],
      local: 'local: Câmpus Palmas, Bloco B.', // comfirma o local
      subscribeButton: 'https://classroom.google.com/u/0/c/NjY4ODk2OTU2MDYz'//colocar o link do portal quendo estiver pronto
    },
  ],
  workshops: [
    {
      id: 'workshop1',
      cardType: 'Workshop',
      duration: '2 horas',
      title: 'Workshop de React',
      tags: ['React', 'Frontend', 'JavaScript'],
      shortDescription: 'Aprenda a criar aplicações web com React, uma das bibliotecas mais populares para desenvolvimento frontend.',
    },
    {
      id: 'workshop2',
      cardType: 'Workshop',
      duration: '3 horas',
      title: 'Workshop de Node.js',
      tags: ['Node.js', 'Backend', 'JavaScript'],
      shortDescription: 'Aprenda a criar aplicações backend com Node.js, uma das tecnologias mais utilizadas no mercado.',
    }
  ],
}

export { data }