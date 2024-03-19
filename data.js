
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
          photo: 'https://picsum.photos/200'
        },
        {
          name: 'Maria Souza',
          photo: 'https://picsum.photos/200'
        }
      ],
      usefulLinks: [
        {
          title: 'Link 1',
          url: 'https://www.google.com',
          qrCodeImage: 'https://picsum.photos/200'
        },
        {
          title: 'Link 2',
          url: 'https://www.google.com',
          qrCodeImage: 'https://picsum.photos/200'
        }
      ],
      local: 'Bloco C, sala 101',
      subscribeButton: 'https://www.google.com'
    }
  ],
  oficinas: [
    {
      id: 'oficina1',
      cardType: 'Oficina',
      duration: '2 horas',
      title: 'Oficina de Python',
      tags: ['Python', 'Programação'],
      shortDescription: 'Aprenda a programar em Python de forma prática e rápida. Ideal para quem quer começar a programar.',
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