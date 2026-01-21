export const yearsSinceStart = () => {
  const pastDate = new Date('2018-04-01T07:00:00.000Z');
  const currentDate = new Date();
  return currentDate.getFullYear() - pastDate.getFullYear();
};

export const resumen = {
  basics: {
    firstName: 'Luis',
    middleName: 'Alberto',
    lastName: 'Condori Zapana',
    label: 'Desarrollador de Software & Soporte Técnico',
    image: 'https://res.cloudinary.com/dpyrrgou3/image/upload/v1764203129/17b3bd2893afe7_qlrkty.jpg',
    email: 'luis.condori.dev@gmail.com',
    phone: '+59173247035',
    url: 'luis-portafolio.vercel.app',
    intro: `Con amplia experiencia en backend, frontend y mantenimiento de sistemas informáticos. Apasionado por la innovación y la optimización, creando soluciones escalables que aporten valor real.`,
    summary: `Profesional en Ingeniería de Sistemas con más de ${yearsSinceStart()} años de experiencia en desarrollo de software, además de una sólida experiencia en mantenimiento de sistemas informáticos y soporte técnico. He participado en proyectos tecnológicos para empresas e instituciones, aplicando buenas prácticas y compromiso con la mejora continua.`,
    searchWork: 'Disponible para Trabajar',
    location: {
      address: null,
      postalCode: null,
      city: 'La Paz',
      countryCode: 'BO',
      region: 'Bolivia',
    },
    profiles: [
      {
        network: 'Github',
        url: 'https://github.com/condoriluis',
        username: 'condoriluis',
      },
      {
        network: 'Linkedin',
        url: 'https://www.linkedin.com/in/luis-alberto80',
        username: 'luis-alberto',
      },
      {
        network: 'Curriculum Vitae',
        url: '/curriculum?preview=true',
        username: 'luis-portafolio',
      },
    ],
  },
  abilities: [
    {
      icon: "las la-code",
      title: "Desarrollo Full Stack",
      description: "Desarrollo de sistemas web con PHP Framework Laravel, CodeIgniter y JavaScript",
    },
    {
      icon: "las la-server",
      title: "APIs RESTful y SDKs",
      description: "Integración con Vimeo, Cloudinary, AWS S3, Mailchimp y más",
    },
    {
      icon: "las la-shield-alt",
      title: "Seguridad Web",
      description: "Implementación de prepared statements (PDO), prevención de SQL Injection, XSS y CSRF",
    },
    {
      icon: "lab la-android",
      title: "Desarrollo Móvil con Flutter",
      description: "Creación de aplicaciones móviles en Flutter/Dart con integración de Firebase y SQLite",
    },
    {
      icon: "las la-database",
      title: "Backend con Node.js y Express",
      description: "Desarrollo de APIs RESTful con Express.js, autenticación JWT y base de datos en MySQL",
    },
    {
      icon: "lab la-vuejs",
      title: "Frontend con Vue.js, Vuetify, Next.js, React",
      description: "Desarrollo de interfaces modernas con Vue.js/Vuetify y React/Next.js, incluyendo gestión de estado (Pinia/Redux) y consumo de APIs REST",
    },
    {
      icon: "las la-file-code",
      title: "Documentación Técnica de APIs",
      description: "Generación de documentación interactiva con Swagger/OpenAPI para endpoints RESTful",

    },
  ],
  work: [
    {
      name: 'EMPRESA STRATEGIC BOLIVIA',
      location: 'La Paz, Bolivia',
      skills: [
        'react',
        'next.js',
        'vue.js',
        'c#',
        'blazor',
        'codeigniter',
        'laravel',
        'mysql',
        'postgresql',
        'apache',
        'scrum',
      ],
      position: 'Desarrollador de Software',
      dateWork: 'Diciembre 2024 - Julio 2025',
      summary:
        'Desarrollo de Software',
      highlights: [
        'Creación y Analisis de Base de Datos.',
        'Desarrollo de software en tecnologias: Backend y Frontend.',
        'Creación de documentación técnica de APIs RESTful utilizando Swagger.',
        'Brindar soporte durante el proceso de desarrollo de Software.',
      ],
    },
    {
      name: 'NOTARÍA DE FE PÚBLICA',
      location: 'La Paz, Bolivia',
      skills: [
        'soporte',
        'mantenimiento',
        'equipos',
      ],
      position: 'Técnico en Soporte y Mantenimiento de Equipos Computarizados',
      dateWork: 'Abril - Noviembre 2024',
      summary:
        'Técnico en Soporte y Mantenimiento de Equipos Computarizados',
      highlights: [
        'Solución de problemas y asistencia técnica.',
        'Actualización y monitoreo de sistemas.',
        'Manejo de sistemas operativos Windows.',
      ],
    },
    {
      name: 'MIN. DE DESARROLLO PRODUCTIVO Y ECONOMÍA  P.',
      location: 'La Paz, Bolivia',
      skills: [
        'php',
        'laravel',
        'codeigniter',
        'mysql',
        'postgresql',
        'apache',
      ],
      position: 'Técnico en Soporte y Mantenimiento de Sistemas',
      dateWork: 'Agosto 2023 - Enero 2024',
      summary:
        'Soporte al cliente y mantenimiento de sistemas',
      highlights: [
        'Desarrollo de Sistemas Informáticos para el MDPyEP.',
        'Soporte y Mantenimiento de equipos de computación.',
        'Administración de impresoras, scanners y fotocopiadoras.',
        'Manejo de sistemas operativos Windows, Linux.',
        'Implementación de medidas de seguridad y backups.',
      ],
    },
    {
      name: 'EMPRESA STRATEGIC BOLIVIA',
      location: 'La Paz, Bolivia',
      skills: [
        'c#',
        'blazor',
        'react',
        'codeigniter',
        'mysql',
        'postgresql',
        'apache',
        'scrum',
      ],
      position: 'Desarrollador de Sistemas Informáticos',
      dateWork: 'Octubre 2022 - Febrero 2023',
      summary:
        'Desarrollo de Sistemas Informáticos',
      highlights: [
        'Creación y Analisis de Base de Datos.',
        'Apoyar en la implementación del desarrollo en tecnologias basadas en software: Backend y Frontend.',
        'Gestor de Desarrollo de base de datos: PostgreSQL y MySQL.',
        'Metodología de Software: SCRUM.',
      ],
    },
    {
      name: 'CONSULTORIA KERNEL BOLIVIA',
      location: 'La Paz, Bolivia',
      skills: [
        'php',
        'codeigniter',
        'laravel',
        'mysql',
        'postgresql',
        'apache',
      ],
      position: 'Desarrollador de Sistemas',
      dateWork: 'Enero - Mayo 2022',
      summary:
        'Desarrollo de Sistemas a la Medida',
      highlights: [
        'Creación de Base de Datos en MySQL, y PostgreSQL.',
        'Desarrollo de sistemas backend, frontend con las tecnologias PHP.',
        'Manejo de Framework de desarrollo Laravel 8, CodeIgniter 3.',
      ],
    },
    {
      name: 'MIN. DE DESARROLLO PRODUCTIVO Y ECONOMÍA P.',
      location: 'La Paz, Bolivia',
      skills: [
        'php',
        'codeigniter',
        'mysql',
        'postgresql',
        'wordpress',
        'html',
        'css',
        'javascript',
        'bootstrap',
      ],
      position: 'Práctica Profesional (Pasantia)',
      dateWork: 'Enero - Julio 2021',
      summary:
        'Apoyo en el Área de Sistemas y soporte a los Funcionarios Publicos',
      highlights: [
        'Desarrollo de la página Web de MDPyEP.',
        'Desarrollo de sistemas informáticos para MDPyEP.',
        'Realizar backups de la información y soporte técnico a los funcionarios.',
      ],
    },
  ],
  education: [
    {
      institution: 'Universidad Pública de el Alto',
      area: 'Título Profesional Licenciatura en Ingeniería de Sistemas',
      location: 'La Paz, Bolivia',
      endDate: 'Abril de 2024',
    },
    {
      institution: 'Universidad Pública de el Alto',
      area: 'Título Profesional Técnico Superior en Analista de Sistemas',
      location: 'La Paz, Bolivia',
      endDate: 'Agosto de 2022',
    },
    {
      institution: 'U.E. Juan Capriles',
      area: 'Secundarios - Bachiller en humanidades',
      location: 'La Paz, Bolivia',
      endDate: 'Diciembre de 2012',
    },
  ],
  languages: [
    {
      name: 'Español',
      level: 'Nativo',
    },
    {
      name: 'Inglés',
      level: 'Intermedio',
    },
    {
      name: 'Aymara',
      level: 'Avanzado',
    },
  ],
  skills: [
    {
      name: 'Lenguajes de Programación',
      keywords: [
        {
          name: 'TypeScript',
          image: '/assets/images/skills/typescript.png'
        },
        {
          name: 'JavaScript',
          image: '/assets/images/skills/javascript.png'
        },
        {
          name: 'Dart',
          image: '/assets/images/skills/dart.png'
        },
        {
          name: 'Python',
          image: '/assets/images/skills/python.png'
        },
        {
          name: 'PHP',
          image: '/assets/images/skills/php.png'
        },
      ]
    },
    {
      name: 'Frontend & Mobile',
      keywords: [
        {
          name: 'HTML5',
          image: '/assets/images/skills/html.png'
        },
        {
          name: 'CSS3',
          image: '/assets/images/skills/css.png'
        },
        {
          name: 'React',
          image: '/assets/images/skills/react.png'
        },
        {
          name: 'Next.js',
          image: '/assets/images/skills/nextjs.png'
        },
        {
          name: 'Astro',
          image: '/assets/images/skills/astrofront.png'
        },
        {
          name: 'Vue.js 3',
          image: '/assets/images/skills/vuejs.png'
        },
        {
          name: 'Flutter',
          image: '/assets/images/skills/flutter.png'
        }
      ]
    },
    {
      name: 'UI/Styling',
      keywords: [
        {
          name: "Tailwind CSS",
          image: "/assets/images/skills/tailwindcss.png"
        },
        {
          name: 'Bootstrap',
          image: '/assets/images/skills/bootstrap.png'
        },
        {
          name: 'Vuetify 3',
          image: '/assets/images/skills/vuetify.png'
        },
        {
          name: "ShadCN/UI",
          image: "/assets/images/skills/shadcn.png"
        }
      ]
    },
    {
      name: 'Visualización de Datos',
      keywords: [
        {
          name: "ApexCharts",
          image: "/assets/images/skills/apexcharts.png"
        },
        {
          name: 'Plotly',
          image: '/assets/images/skills/plotly.png'
        }
      ]
    },
    {
      name: 'Backend & APIs',
      keywords: [
        {
          name: 'FastAPI',
          image: '/assets/images/skills/fastapi.png'
        },
        {
          name: 'Node.js',
          image: '/assets/images/skills/nodejs.png'
        },
        {
          name: 'Laravel',
          image: '/assets/images/skills/laravel.png'
        },
        {
          name: 'FilamentPHP',
          image: '/assets/images/skills/filamentphp.png'
        },
        {
          name: 'CodeIgniter',
          image: '/assets/images/skills/codeigniter.png'
        },
        {
          name: 'Wordpress',
          image: '/assets/images/skills/wordpress.png'
        },
        {
          name: 'Swagger (OpenAPI)',
          image: '/assets/images/skills/swagger.png'
        },

      ]
    },
    {
      name: 'Bases de Datos',
      keywords: [
        {
          name: 'MySQL',
          image: '/assets/images/skills/mysql.png'
        },
        {
          name: 'PostgreSQL',
          image: '/assets/images/skills/postgresql.png'
        },
        {
          name: 'DuckDB',
          image: '/assets/images/skills/duck.png'
        }
      ]
    },
    {
      name: 'DevOps & Herramientas',
      keywords: [
        {
          name: 'Git',
          image: '/assets/images/skills/git.png'
        },
        {
          name: 'Linux',
          image: '/assets/images/skills/linux.png'
        },
        {
          name: 'Docker',
          image: '/assets/images/skills/docker.png'
        },
        {
          name: 'Apache',
          image: '/assets/images/skills/apache.png'
        },
        {
          name: 'VS Code',
          image: '/assets/images/skills/vscode.png'
        },
        {
          name: 'Postman',
          image: '/assets/images/skills/postman.png'
        },
      ]
    }
  ],
  projects: [
    {
      imgSrc: "/assets/images/portfolio/bi-dashboard.png",
      alt: "Sistema integral de Dashboard de Inteligencia de Negocios",
      categories: ["Next.js v16+", "React v19", "TypeScript", "ShadCN/UI", "ApexCharts", "Python v3+", "FastAPI", "DuckDB"],
      link: "",
      github: "",
      video: "",
      title: "Sistema Bi Dashboard dinámico inteligente",
      description: "Sistema integral de Dashboard de Inteligencia de Negocios compuesto por un frontend en Next.js y un backend en FastAPI con DuckDB, Permite la visualización interactiva de datos empresariales mediante gráficos y tablas dinámicas, facilitando la toma de decisiones informadas."
    },
    {
      imgSrc: "/assets/images/portfolio/fms.png",
      alt: "Sistema Gestor de Archivos en la Nube",
      categories: ["Next.js v16+", "React v19", "TypeScript", "ShadCN/UI", "Supabase", "AWS S3", "Cloudinary", "Mailchimp"],
      link: "https://fms-bo.vercel.app/",
      github: "",
      video: "",
      title: "Sistema Gestor de Archivos en la Nube",
      description: "FMS es una plataforma web (SPA) para la gestión y almacenamiento de archivos en la nube. Permite a los usuarios subir, listar, buscar, filtrar, renombrar, copiar enlaces y eliminar archivos de manera sencilla y segura."
    },
    {
      imgSrc: "/assets/images/portfolio/historias.png",
      alt: "Aplicación Móvil - Historias Interactivas con IA",
      categories: ["Flutter v3.27", "Dart v3.6", "Provider", "HTTP", "OpenAI API", "Shared Preferences"],
      link: "",
      github: "https://github.com/condoriluis/story_ai_kids",
      video: "",
      title: "Aplicación Móvil - Historias Interactivas con IA",
      description: "Aplicación móvil que genera historias interactivas para niños utilizando IA, con opciones de personalización y almacenamiento local para una experiencia única."
    },
    {
      imgSrc: "/assets/images/portfolio/juego-cacho.png",
      alt: "Juego de Cacho - Multiplayer en Tiempo Real",
      categories: ["Next.js v15", "React v19.0.0", "Socket.io", "Node.js v20", "Express", "Framer Motion"],
      link: "https://cacho.vercel.app",
      github: "https://github.com/condoriluis/juego-cacho-mvp",
      video: "",
      title: "Juego de Cacho - Multiplayer en Tiempo Real",
      description: "Juego de Cacho en línea con modo multijugador en tiempo real, desarrollado con Next.js y Socket.io, ofreciendo una experiencia interactiva y social."
    },
    {
      imgSrc: "/assets/images/portfolio/pdf-generator.png",
      alt: "Sistema Generador de Catálogo de Productos en PDF",
      categories: ["Next.js v15", "React v19", "TypeScript", "Tailwind CSS", "ShadCN/UI", "React-PDF"],
      link: "",
      github: "https://github.com/condoriluis/pdf-generator-catalogo",
      video: "",
      title: "Sistema Generador de Catálogo de Productos en PDF",
      description: "Generador de catálogos de productos en PDF, permitiendo crear documentos profesionales con diseño personalizado y exportación rápida, ideal para presentaciones comerciales."
    },
    {
      imgSrc: "/assets/images/portfolio/filament.png",
      alt: "Sistema - Panel de Administración con FilamentPHP y Laravel",
      categories: ["PHP v8.2", "Laravel v12", "FilamentPHP", "Livewire", "Tailwind CSS", "MySQL"],
      link: "",
      github: "",
      video: "",
      title: "Sistema - Panel de Administración con FilamentPHP y Laravel",
      description: "Panel de administración robusto desarrollado con FilamentPHP y Laravel, facilitando la gestión de usuarios, roles y contenido mediante una interfaz intuitiva y personalizable."
    },
    {
      imgSrc: "/assets/images/portfolio/instalacion.png",
      alt: "Sistema - Dashboard Dinámico",
      categories: ["PHP v8.3", "Bootstrap v5.2", "AdminLTE v3.1", "Chart JS", "Select2", "Notie"],
      link: "",
      github: "",
      video: "https://youtu.be/P1ZPtxYVO9o?si=4Ftz4eD_EjAroOHr",
      title: "Sistema - Dashboard Dinámico",
      description: "Dashboard dinámico para administrar datos en tiempo real, visualizando estadísticas y métricas mediante gráficos interactivos. Ideal para gestión administrativa completa."
    },
    {
      imgSrc: "/assets/images/portfolio/inicio.png",
      alt: "Sistema - Gestor de Archivos",
      categories: ["PHP v8.3", "Bootstrap v5", "Cloudinary", "AWS S3", "Vimeo", "Mailchimp"],
      link: "",
      github: "",
      video: "https://youtu.be/YLk3T5teh_Y?si=O7r2QsBA2PoIPnUc",
      title: "Sistema - Gestor de Archivos",
      description: "Gestor de archivos profesional con integración a la nube de Cloudinary y AWS S3, Vimeo, Mailchimp, permitiendo subir, organizar y visualizar documentos de forma segura y eficiente."
    },
    {
      imgSrc: "/assets/images/portfolio/landings.png",
      alt: "Sistema - Landing Page Builder",
      categories: ["PHP v8.3", "Bootstrap v5", "CodeMirror", "Notie", "Toastr"],
      link: "",
      github: "",
      video: "https://youtu.be/YJPzgcj320Y?si=KDiHilUaAORkf0WE",
      title: "Sistema - Landing Page Builder",
      description: "Constructor de Landing Pages que permite crear páginas web personalizadas sin programar, con edición visual y previsualización instantánea."
    },
    {
      imgSrc: "/assets/images/portfolio/dashboard-vue.png",
      alt: "Sistema - Dashboard con VueJS, Vuetify y ChartJS",
      categories: ["VueJS 3", "Vuetify 3", "ChartJS", "Axios"],
      link: "https://dashboards-vuejs.vercel.app/",
      github: "https://github.com/condoriluis/dashboards-vuejs.git",
      video: "",
      title: "Sistema - Dashboard con VueJS, Vuetify y ChartJS",
      description: "Dashboard avanzado desarrollado con VueJS y Vuetify, mostrando datos analíticos mediante gráficos interactivos y componentes reutilizables."
    },
    {
      imgSrc: "/assets/images/portfolio/login1.jpg",
      alt: "Sistema - Gestión y Registro de Usuarios",
      categories: ["NodeJS v16.20", "VueJS 3", "Vuetify 3", "Google Analytics", "Leaflet"],
      link: "",
      github: "https://github.com/condoriluis/sistema-registro-usuarios.git",
      video: "https://youtu.be/CP_NyTHZbPY?si=wNwbM1PxgA_aApjY",
      title: "Sistema - Gestión y Registro de Usuarios",
      description: "Sistema de gestión y registro de usuarios con autenticación, roles y seguimiento de actividad, pensado para entornos colaborativos."
    },
    {
      imgSrc: "/assets/images/portfolio/tasks.png",
      alt: "Sistema - Gestor de Tareas",
      categories: ["Next.js v15.2.1", "React v19.0.0", "Typescript", "Swagger-ui-react", "Nodemailer"],
      link: "https://gestor-tareas-luis.vercel.app/login",
      github: "https://github.com/condoriluis/gestor-tareas",
      video: "https://youtu.be/h-oldMHbpRY",
      title: "Sistema - Gestor de Tareas",
      description: "Gestor de tareas con seguimiento, integrando Next.js, React y TypeScript para productividad eficiente."
    },
    {
      imgSrc: "/assets/images/portfolio/inicio-gastos.png",
      alt: "Aplicación Móvil - Control de Gastos",
      categories: ["Flutter v3.27", "Dart v3.6", "Provider", "SQFlite", "Local Auth"],
      link: "",
      github: "https://github.com/condoriluis/control-de-gastos",
      video: "",
      title: "Aplicación Móvil - Control de Gastos",
      description: "Aplicación móvil para controlar gastos personales, con gráficos, autenticación local y almacenamiento seguro, ideal para finanzas diarias."
    },
    {
      imgSrc: "/assets/images/portfolio/tecno.png",
      alt: "Sistema - Blog para Publicar Información",
      categories: ["PHP v8.3", "Bootstrap v4.6", "Google Analytics", "Facebook Pixel", "Google Tag Manager"],
      link: "",
      github: "",
      video: "https://youtu.be/shC-B24HnXw?si=E6AGWtrI3VM2Nqr_",
      title: "Sistema - Blog para Publicar Información",
      description: "Blog profesional para publicar información y artículos, con métricas de Google Analytics y seguimiento de rendimiento de contenido."
    },
    {
      imgSrc: "/assets/images/portfolio/marketplace-home.png",
      alt: "Sistema - Marketplace",
      categories: ["PHP v7.3", "Bootstrap v4.4", "Summernote", "Dropzone", "DataTables"],
      link: "",
      github: "",
      video: "",
      title: "Sistema - Marketplace",
      description: "Marketplace completo para productos y servicios, con gestión de catálogos, subida de imágenes y control de transacciones."
    },
  ]
};

export type Resumen = typeof resumen;
