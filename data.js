
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
      image: 'images/gestaoDeTempo/tempo.jpg',
      tags: ['produtividade', 'velocidade', 'economia de tempo'],
      shortDescription: 'Nesse curso voce vai aprender forma de otimizar o seu tempo.',
      longDescription: 'Nesse curso você vai aprender forma de otimizar usando ferramentas e melhor a forma de gerir o seu tempo e pensar nas melhores forma'
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
          title: 'Turma Google Classroom',
          url: 'colocar o qrcode',
          qrCodeImage: 'https://picsum.photos/200'
        },
      ],
      local: 'ex: Bloco C, sala 101 colocar depos',
      subscribeButton: 'https://classroom.google.com/u/0/c/NjY4ODk2OTU2MDYz'//colocar o link do portal quendo estiver pronto
    }, 
    {
      id: 'oficina2',
      cardType: 'Oficina',
      duration: '1 hora',
      title: 'Oficina de Git e GitHub',
      tags: ['Git', 'GitHub', 'Controle de versão'],
      shortDescription: 'Aprenda a utilizar o Git e o GitHub para versionar e compartilhar seu código.',
    }
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