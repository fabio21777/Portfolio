const portifolioFabio = {
  name: 'Fabio De Souza Miranda',
  email: 'fabiosouza21777@gmail.com',
  github: 'https://github.com/fabio21777',
  linkedin: 'https://linkedin.com/in/fabio-miranda-501937215',
  firstName: 'Fabio',
  local: 'Belém - PA',
  fotoPerfil: '/asserts/foto-fabio.jpg',
  portifolios: [
    {
      id: 0,
      title: 'Portifólio',
      description: 'Portifólio desenvolvido com Vue 3, TypeScript e Pinia.',
      demoLink: 'https://github.com/fabio21777/Portfolio',
      hasImage: false,
    },
    {
      id: 1,
      title: 'Controle de Carga e Descarga',
      description: 'Sistema para automatizar o processo de carga e descarga de mercadorias da Fribel Comércio de Alimentos Ltda(DJANGO).',
      image1: '/asserts/fribel-md.png',
      image2: '/asserts/fribel-app.png',
      demoLink: 'https://github.com/fabio21777/labes-fribel_alimentos',
      hasImage: false
    },
    {
      id: 2,
      title: 'bio informatica Yellow Fever Genome Database',
      description: 'Plataforma web  para análise de dados genômicos de febre amarela funcionalidades Blast,JBrowse,Árvore Filogenética,Download dos dados (DJANGO)',
      image1: '/asserts/yellow-md.png',
      image2: '/asserts/acessando-localhost.gif',
      demoLink: 'https://github.com/fabio21777/projeto-bioinformatica/tree/main',
      hasImage: false
    },
    {
      id: 3,
      title: 'Semana Spring React - SDS 3.0',
      description: 'Aplicativo web backend e front-end Crie um app inédito para seu portfólio com as tecnologias mais demandadas do mercado react e java ',
      image1: '',
      image2: '',
      demoLink: 'https://github.com/fabio21777/projeto-sds3/tree/main',
      hasImage: false
    },
    {
      id: 4,
      title: 'Teste tecnico itexto',
      description: 'Teste técnico para a empresa itexto, onde desenvolvi uma aplicação de  listagem e busca de posts com react e java.',
      image1: '/asserts/md-itexto.png',
      image2: '/asserts/home.jpeg',
      demoLink: 'https://github.com/fabio21777/itexto',
      hasImage: false
    },
    {
      id: 6,
      title: 'Alura pic - Angular',
      description: 'Sistema simples de postagem de fotos, onde o usuário pode postar fotos e comentar.',
      demoLink: 'https://github.com/fabio21777/alura-pic-angular',
      hasImage: false

    },
    {
      id: 5,
      title: 'Meu github',
      description: 'Meu github com diversos projetos de estudo e desenvolvimento.',
      image1: '/asserts/home-git.png',
      image2: '/asserts/repositories.png',
      demoLink: 'https://github.com/fabio21777',
      hasImage: false
    }

  ]
}

const portifolioFabricio =
  {
    name: 'Fabricio De Souza Miranda',
    email: 'fabriciosouza21777@gmial.com',
    github: 'https://github.com/fabriciosouza21',
    linkedin: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
    firstName: 'Fabricio',
    local: 'Belém - PA',
    fotoPerfil: '/asserts/foto-fabricio.jpg',
    portifolios: [
      {
        id: 0,
        title: 'Portifólio',
        description: 'Portifólio desenvolvido com Vue 3, TypeScript e Pinia.',
        demoLink: 'https://github.com/fabio21777/Portfolio',
        hasImage: false,
      },
      {
        id: 1,
        title: 'Controle de Carga e Descarga',
        description: 'Sistema para automatizar o processo de carga e descarga de mercadorias da Fribel Comércio de Alimentos Ltda(DJANGO).',
        image1: '/asserts/fribel-md.png',
        image2: '/asserts/fribel-app.png',
        demoLink: 'https://github.com/fabio21777/labes-fribel_alimentos',
        hasImage: false
      },
      {
        id: 2,
        title: 'bio informatica Yellow Fever Genome Database',
        description: 'Plataforma web  para análise de dados genômicos de febre amarela funcionalidades Blast,JBrowse,Árvore Filogenética,Download dos dados (DJANGO)',
        image1: '/asserts/yellow-md.png',
        image2: '/asserts/acessando-localhost.gif',
        demoLink: 'https://github.com/fabriciosouza21/projeto-bioinformatica',
        hasImage: false
      },
      {
        id: 3,
        title: 'Semana Spring React - SDS 3.0',
        description: 'Aplicativo web backend e front-end Crie um app inédito para seu portfólio com as tecnologias mais demandadas do mercado react e java ',
        image1: '',
        image2: '',
        demoLink: 'https://github.com/fabriciosouza21/sds4',
        hasImage: false
      },
      {
        id: 4,
        title: 'Teste tecnico itexto',
        description: 'Teste técnico para a empresa itexto, onde desenvolvi uma aplicação de  listagem e busca de posts com react e java.',
        image1: '/asserts/md-itexto.png',
        image2: '/asserts/home.jpeg',
        demoLink: 'https://github.com/fabriciosouza21/itexto',
        hasImage: false
      },
      {
        id: 5,
        title: 'Alura pic - Angular',
        description: 'Sistema simples de postagem de fotos, onde o usuário pode postar fotos e comentar.',
        demoLink: 'https://github.com/fabriciosouza21/alurapic-angular',
        hasImage: false

      },
      {
        id: 6,
        title: 'Meu github',
        description: 'Meu github com diversos projetos de estudo e desenvolvimento.',
        image1: '/asserts/home-git.png',
        image2: '/asserts/repositories.png',
        demoLink: 'https://github.com/fabriciosouza21',
        hasImage: false
      },

    ]
  }

  let userNameGlobal = null;

  export const getInfoPortifolio = (userName: string | undefined |string[]) : any => {
  if((userName === undefined || userName === null || userName === '') && userNameGlobal == null ) {
    // escolher um portifólio padrão
     userNameGlobal = Math.random() > 0.5 ? 'fabriciosouza21': 'fabio21777';
     console.log(userNameGlobal);
  }

  if(userNameGlobal !== null && (userName === undefined || userName === null || userName === '') ) {
    userName = userNameGlobal;
  }

    return userName === 'fabriciosouza21' ? portifolioFabricio : portifolioFabio;
  }
