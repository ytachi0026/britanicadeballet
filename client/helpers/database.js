import profesoraMilagros from '../../static/images/profesora-milagros.jpg';
import profesoraDiana from '../../static/images/profesora-diana.jpg';
import profesoraMargarita from '../../static/images/profesora-margarita.jpg';

import ballet from '../../static/images/clases/ballet.jpg';
import musica from '../../static/images/clases/musica.jpg';
import danzaContemporanea from '../../static/images/clases/danzaContemporanea.jpg';
import musicoterapia from '../../static/images/clases/musicoterapia.jpg';

export const dataProfesoras = [
  {
    name: 'Margarita',
    extraName: 'Untiveros',
    details: 'Desde 1995 es directora de la Academia Británica de Ballet, diplomada como profesora de la Royal Academy of Dance de Inglaterra. Inicia sus estudios de danza clásica a temprana edad en la Asociación Choriartium en Lima con la maestra Lucy Telge y paralelamente lleva cursos de música con Teresa Costa. En Caracas forma parte del grupo de danza de la Academia Interamericana de Ballet con el maestro Mario Ignisci y continúa sus estudios musicales en el conservatorio Juan José Landaeta de Caracas, tomando clases de perfeccionamiento de piano con la destacada pianista norteamericana Harriet Seher. Debido a su trayectoria musical y su afinidad por diversos idiomas ha implementado desde el año 2014 clases individuales de piano, violín y canto así como clases de alemán, ingles e italiano. Esta expansión extra-curricular permite a nuestras alumnas formarse en dichos rubros y tomar clases individuales antes o después de sus clases de ballet en nuestra academia.',
    image: profesoraMargarita,
    showSchedules: true,
    schedules: [
      {
        name: 'Avanzadas',
        time: 'Lunes y Miércoles 5:00pm - 6:30pm',
      },
      {
        name: 'Adolescentes & Adultas principiantes',
        time: 'Lunes y Miércoles 6:30pm - 7:30pm',
      },
    ],
  },
  {
    name: 'Milagros',
    extraName: 'Nugent',
    details: 'Se dedica a la enseñanza del ballet clásico y tap desde 1991 en nuestra academia. Inició sus estudios de ballet en la Academia de Ballet Miraflores. Culminó sus estudios en la Academia Británica de Ballet bajo la dirección de la Sra. Rosina Müller. Aprende el método de la Royal Academy of Dance de Londres. En el año 1988 se incorpora a la Cía. Danza Viva donde permanece hasta el año 1991. Actualmente es parte del staff de profesores de la Escuela Independiente Danza Viva y dicta clases en diversos nidos y colegios.',
    image: profesoraMilagros,
    showSchedules: true,
    schedules: [
      {
        name: '3 años',
        time: 'Martes y Jueves 3:45pm - 4:30pm',
      },
      {
        name: '5 años',
        time: 'Martes y Jueves 4:30pm - 5:30pm',
      },
      {
        name: '8 - 11 años',
        time: 'Martes y Jueves 5:30pm - 6:30pm',
      },
    ],
  },
  {
    name: 'Diana',
    extraName: 'Untiveros',
    details: 'Inicia sus estudios de ballet clásico a temprana edad en nuestra Academia con diferentes maestras, entre ellas Rosina Müller. Paralelamente lleva cursos de música. En enero del 2014 culmina sus estudios de Musicología e Italiano en Alemania. Además de enseñar ballet y tap, es profesora particular de piano, canto e idiomas en la Academia Británica de Ballet.',
    image: profesoraDiana,
    showSchedules: true,
    schedules: [
      {
        name: '4 años',
        time: 'Lunes y Miércoles 3:00pm - 4:00pm',
      },
      {
        name: '6 & 7 años',
        time: 'Lunes y Miércoles 4:00pm - 5:00pm',
      },
      {
        name: '5 & 6 años',
        time: 'Sábados 3:00pm - 4:00pm',
      },
      {
        name: '3 & 4 años',
        time: 'Sábados 4:00pm - 5:00pm',
      },
      {
        name: 'Adolescentes & Adultas principiantes',
        time: 'Sábados 5:00pm - 6:00pm',
      },
    ],
  },
];

export const dataClases = [
  {
    name: 'Ballet',
    details: 'Entendemos que al ser parte del desarrollo artístico de nuestras alumnas, estamos formando el crecimiento humano en cada una de ellas. Tenemos el privilegio de cumplir esta labor  desde 1956. Seguimos la metodología de ballet clásico de la Royal Academy of Dance de Inglaterra que introdujo a Lima nuestra fundadora la maestra inglesa Rosina Müller. Fuimos los primeros en introducir el Tap en el Perú y es por eso que a partir del grado pre-primary nuestras alumnas se forman con dos tipos de danza: la hora de clase se divide en 45min de ballet y 15min de Tap.',
    image: ballet,
    showSchedules: true,
    showClass: true,
    enableSendEmails: false,
    scrollId: 'id-clases-ballet',
    schedules: [
      {
        name: '3 años: Pre-Primary 1',
        time: [
          'Martes y Jueves 3:45pm - 4:30pm',
          'Solo Sábados 4:00pm - 5:00pm',
        ],
      },
      {
        name: '4 años: Pre-Primary 2',
        time: [
          'Lunes y Miércoles 3:00pm - 4:00pm ',
          'Solo Sábados 4:00pm - 5:00pm',
        ],
      },
      {
        name: '5 & 6 años: Primary ',
        time: [
          'Martes y Jueves 4:30pm - 5:30pm ',
          'Solo Sábados 3:00pm - 4:00pm',
        ],
      },
      {
        name: '6 & 7 años: Grado 1',
        time: 'Lunes y Miércoles 4:00pm - 5:00pm',
      },
      {
        name: '8 - 11 años: Grado 2 ',
        time: 'Martes y Jueves 5:30pm - 6:30pm',
      },
      {
        name: 'Adolescentes & Adultas principiantes',
        time: [
          'Lunes y Miércoles 6:30pm - 7:30pm',
          'Solo Sábados 5:00pm - 6:00pm',
        ],
      },
      {
        name: 'Avanzadas: Intermediate',
        time: 'Lunes y Miércoles 5:00pm - 6:30pm',
      },
    ],
  },
  {
    name: 'Música',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: musica,
    showSchedules: false,
    showClass: false,
    enableSendEmails: false,
    schedules: [
      {
        name: 'Piano',
        time: 'A partir de 3 años',
      },
      {
        name: 'Canto',
        time: 'A partir de 6 años',
      },
      {
        name: 'Violin',
        time: 'A partir de 6 años',
      },
    ],
  },
  {
    name: 'Danza',
    extraName: 'Contemporánea',
    details: 'Desarrolla tu creatividad y sensibilidad artística aprendiendo las técnicas básicas de la Danza Contemporánea. Si sientes motivación por expresarte mediante el cuerpo, deseas cargarte de energía, mantenerte en forma e iniciarte dentro de esta bella disciplina, solicita una clase de prueba con nosotros.',
    image: danzaContemporanea,
    showSchedules: true,
    showClass: true,
    enableSendEmails: false,
    scrollId: 'id-clases-danza',
    schedules: [
      {
        name: 'Adolescentes & Adultas principiantes',
        time: 'Jueves 6:30pm - 8:00pm',
      },
    ],
  },
  {
    name: 'Musicoterapia',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: musicoterapia,
    showSchedules: false,
    showClass: false,
    enableSendEmails: false,
    schedules: [
      {
        name: '5 años en adelante',
      },
    ],
  },
];
