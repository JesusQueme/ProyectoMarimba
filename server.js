const express = require('express');
const app = express();
const PORT = 3001;


const posts = [
  {
    id: 1,
    title: 'Blog 1: Presentación Personal',
    content: 'Hola sean bienvenidos a mi blog, mi nombre es Jesús Marco Antonio Quemé Cárcamo tengo 22 años este año cumpli los 22 pero ya poco a poco me esta entrando la edad de adulto jaja, soy de San Felipe Reu un pueblo muy bonito y turistico también ya que es atraido por visitantes de distintas partes, acutalmente estoy en la carrera de Ingeniería en informática y sistemas la verdad ha sido difícil a lo largo de estos años porque he tenido retos dentro de la carrera muchas veces por mi mente paso y si no es mi carrera, incluso el cambiarme de carrera fue algo que también en algún momento lo pense, yo les puedo decir que no hay que desanimarse, no hay que dejar de perseverar, en la carrera uno se encuentra con malos compañeros, con docentes que uno dice a este inge si es bien yuca, con cursos complicados que uno sale de clases con más dudas que otra cosa pero en si no hay que dejar de desanimarse la verdad la vida universitaria puede ser estresante muchas veces hasta gastritis nos da por aguantar hambre, estrés por las tareas y aunque uno diga no es que en el colegio yo llevaba 12 cursos que son 4 ahorita en la u, es totalmente diferente la verdad el colegio y la universidad es muy diferente puedo decir y no es por afamarme en el colegio que estudie mi kinder, primaria, básico, el cual fueron 11 años dentro de esa institución, lo se fueron muchos jaja pero durante esos 11 años siempre fui un alumno destacado siempre en septiempre me daban mi reconocimiento y se sentía bonito la verdad en diversificado yo estudié en el colegio Friedrich Von Hayek acá en Quetzaltenango y también logre ser un alumno destacado me gradué con honores del colegio entonces todo decía este tipo es un crack pero cuando llegue a la U no fue así fue muy distinto a lo que viví en el colegio en la U casi que el primer año me lo trueno completo sino es que me pongo las pilas en las últimas de cambio y gané todos los cursos pero en realidad me sentía frustado porque no di mi mayor esfuerzo y también el cambio de pandemia me afecto, hoy en día vivo con eso de porque no hice bien las cosas pero me han pasado muchas cosas feas, desde la muerte de mi abuelo el cual extraño mucho, los problemas que mis papas tenían y que nos afecto a todos la verdad, pero entendí también que así es la vida y que muchas veces hay que levantarse las veces que sean necesarias para lograr las cosas que queremos nunca hay que dejar las metas y sueños a un lado sino siempre seguir adelante con paso firme y si nos encontramos con resbalones que es lo mas probable solo levántate y sigue luchando, bueno no todo en la vida es malo también em mi vida han sucedido cosas muy positivas y es que desde pequeño lo traigo y me gusta mucho la música es algo que me apasiona demasiado, recuerdo que cuando era niño me gustaba buscar trastes viejos y los empezaba a somatar con tal de pensar que estaba haciendo música, o cuando escuchaba una canción muy pegajosa se me quedaba y es como si tuviera un reproductor en mi cabeza que se iba reproduciendo cada canción que me gutaba, en fin a los 10 años me inscribi para aprender a tocar Marimba fue lo mejor cuando el maestro se dio cuenta que luego de un tiempo yo era el único que llegaba a clases decidío llevarme a otro municipio para que pudiera seguir aprendiendo y así fue como empece y luego de 2 años de estar con la marimba de San Martin deje un tiempo luego mi papá dijo que siguiera en otro lado me fui con los hermanos Ramos que tienen un grupo en mi pueblo pero luego de un corto tiempo termine ingresando a estudiar a el conservatorio de música IDEAS en Retalhuleu termine los dos años y luego ya no seguí en la música por mis estudios, actualmente desde hace dos años regrese a la marimba de los hermanos Ramos pero hoy soy se puede decir que tengo mucha más experiencia ya que gracias a don Marlon Ramos que se separo de todos e hizo su grupo fui tomando en cuenta y me siento muy contento de volver ya que es algo que me gusta mucho y cada concierto, cada melodía que ejecuto la disfruto mucho, también porque a mi abuelo le gustaba mucho la marimba y cuando escucho o ejecuto lo recuerdo a el y pienso que de dondé quiera que el este me está escuchando, otra de las cosas positivas en mi vida es que hace dos años atrás conocí a mi pareja a Ale una persona increible que me ha apoyado en todo y es increíble como hemos ido avanzando como pareja hemos tenido nuestros altos y bajos pero creo que sabemos como arreglarlo y bueno ella ha sido un pilar fundamental para mi incluso en los momentos dificiles de mi vida que cuando yo sentía que no podia darlo más, mis papas también me han apoyado en todo en cada proyecto de mi vida ellos estan ahí para mi y me han enseñado a valorar las cosas, los fines de semana los ayudo en el negocio familiar, desde mi abuelo que fundo el negocio ha venido creciendo nosotros tenemos una marranería y los sábados y domingos me levanto a las 2 de la mañana para destazar cerdos, muchos diran que ocupado jaja y la verdad es que si llego a mi casa los viernes y los fines de semana me mantengo ocupado luego los domingos al medio día llegó a Retalhuleu a tocar marimba en el hotel Posada de Don José por si un día lo visitan los domingos tiene marimba en vivo de la 1:00 a 3:00 P.M. Y esto es una pequeña descripción sobre mi espero al leerla les cause algo positivo y sobre todo recuerden siempre seguir luchando aunque la marea sea alta hay que remar con más fuerza y tengan mente de tiburón ',
    space: '',
  },
  {
    id: 2,
    title:'Blog 2: Mi experiencia como programador',
    content: 'Vamos a hablar de mi experiencia como programador a lo largo de la carrera pues he tenido buenas y malas experiencias ya que han habido programas que no han salido como quisiera y es que muchas veces con los de mi equipo de trabajo teniamos inconvenientes para poder realizar los proyectos y no nos terminabamos poniendo de acuerdo, dentro de la universidad tuve proyectos complicados los cuales fueron de mucha experiencia para poder darme una idea de como solucionarlos ya en la vida real o en la vida laboral, yo espero que mi experiencia como programador me ayude en la vida laboral de igual manera tengo que seguir buscando más conocimiento, hoy en dia existen diferentes medios de como poder aprender las herramientas tecnológicas nos ayudan a que el aprendizaje sea virtual, en youtube uno encuentra varios tutoriales de como poder aprender sobre nuevos lenguajes de programación, sobre nuevas tecnologías y es de mucha ayuda para las personas que quieren seguir desarrollando sus conocimientos ya que en la universidad no es que sea vea todo en si por el tiempo de cada curso muchas veces no se logra abarcar todo el contenido en si de los cursos y es por eso que ya de manera individual es importante buscar como llenarnos de más conociemiento, y si algo les apasiona busquen en revistas, documentales, videos, noticias, etc. No se queden con lo poco que pueden aprender dentro de las aulas o dentro de un semestre de clases y muchas veces también nos sirve para ir perfeccionando nuestro conocimiento, por ejemplo tal vez hoy existan ciertas herramientas para el estilo de los documentos pero podemos en internet encontrar otras nuevas formas de como cambiar el estilo por medio de nuevas herramientas, colores, diseños, el ser humano siempre tiene que ir innovando, es cierto que hoy en dia existen distintos tipos de IA que pueden realizar tareas por nosotros pero siempre sera mucho mejor que el ser humano siga implementando sus conocimientos para poder presentar soluciones que le ayuden a la sociedad y puedan aportar algo positivo, no hay que dejar que las máquinas en un punto lleguen a dominar al mundo.',
    space: '',
  }
];


app.use(express.json());


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.get('/api/posts', (req, res) => {
  res.json(posts);
});


app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'La publicación no ha sido encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});