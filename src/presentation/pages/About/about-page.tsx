import { AnimatedSlide } from '@/presentation/components';
import './about-page.scss';

const AboutPage: React.FC = () => {
    return (
        <section className="about-page">
            <header className="about-page__header">
                <AnimatedSlide delay={0}>
                    <h2>Sobre este proyecto</h2>
                </AnimatedSlide>
            </header>
            <div className="about-page__inner-container">
                <AnimatedSlide delay={0}>
                    <h3 className="about-page__subtitulo">Apresentación</h3>

                    <p className="about-page__paragraph">
                        Buenas, me llamo Felipe, soy el desarrollador
                        responsable por este proyecto. Primeramente me gustaria
                        agradecer a MiduDev y InfoJobs por este hackathon, es el
                        primero en que participo y me ha encantado. Es una pena
                        que no tuve tiempo lo suficiente para desarrollar todo
                        como me gustaria y tuve que hacer algunas cosas con
                        prisa. Pero, de todos modos, espero que les guste.
                    </p>

                    <p className="about-page__paragraph">
                        Este proyecto consiste de dos partes, el <b>Frontend</b>{' '}
                        y el
                        <b> Backend</b>, me gustaria aclarar que trabajo como
                        dev
                        <b> Frontend</b> y no <b> Backend</b>. Aunque empezé
                        recientemente a estudiar sobre el back para convertirme
                        en fullstack, no tengo mucha experiencia en esta area,
                        lo mio, por encuanto, es el front. Entonces los que
                        vayan a mirar el codigo del back, sean compreensivos xD.
                    </p>

                    <h3 className="about-page__subtitulo">Estratégia</h3>
                    <p className="about-page__paragraph">
                        En este hackathon hay
                        <b> distintas estratégias posibles</b> que puedes eligir
                        para ganar, una vez que las restriciones unicamente son
                        que devemos utilizar la api de InfoJobs, y que debe ser
                        facil de probar. Considerando esto, hay dos grupos
                        principales de estratégias que puedes elegir:
                    </p>

                    <ul className="about-page__ul">
                        <li>
                            <b>
                                Copiar las features que ya existen en infojobs y
                                intentar mejorar el diseño, la funcionalidad
                                etc...
                            </b>
                        </li>

                        <li>
                            <b>
                                Inovar y crear features que aun no existem. (mas
                                arriesgado y complejo)
                            </b>
                        </li>
                    </ul>

                    <p className="about-page__paragraph">
                        Elegí <b>inovar</b> y crear funcionalidades que aun no
                        existen. Nada contra quien eligió rehacer cosas que ya
                        existen, pero es una estrategia
                        <b> tecnicamente inferior</b> a quien eligió crear
                        nuevas funcionalidades por una razón muy simple, el
                        <b> valor</b> que tu proyecto puede aportar. Infojobs ya
                        tiene varios años de mercado, dificilmente con un plazo
                        de tan pocos dias, serias capaz de rehacer algo mejor de
                        lo que ya existe. Luego, aunque sea mas
                        <b> arriesgado y complejo</b>, si logras crear una nueva
                        feature que sea util y funcional, puedes aportar una
                        cantidad mucho mayor de valor que, por ejemplo, rehacer
                        la pantalla de búsqueda de infojobs por la razon que
                        sea.
                    </p>

                    <h3 className="about-page__subtitulo">Funcionalidades</h3>
                    <p className="about-page__paragraph">
                        Hay cuatro funcionalidades en esta aplicacion que son
                        muy útiles para personas que estan en busqueda de un
                        nuevo puesto de trabajo.
                    </p>

                    <ul className="about-page__ul">
                        <li className="about-page__li">
                            <span>
                                <b>Analiticas</b>
                            </span>
                            <span>
                                Brinda una vision general del mercado laboral
                                para ayudar en la preparacion de los candidatos.
                                Utiliza datos reales de InfoJobs. Muy util para
                                perfiles junior que quieren saber como
                                posicionarse en el mercado para obtener su
                                primer empleo o perfiles que quieren cambiar de
                                area.
                            </span>
                        </li>

                        <li className="about-page__li">
                            <span>
                                <b>Job Assistant</b>
                            </span>
                            <span>
                                Te envia por email diariamente las nuevas
                                ofertas publicadas que cumplan con tus
                                requisitos. Personalmente, cuando estaba en
                                busqueda activa de empleo, me pasaba un bien
                                tiempo filtrando y buscando ofertas laborales.
                                Con los que haceres del dia, as veces me
                                olvidaba de buscar y aplicar en las nuevas
                                ofertas. Si el Job Assistant existiera en aquel
                                entonces, probablemente tendria encontrado
                                trabajo mas temprano y me ahorraria tiempo en
                                cumplimentar filtros de busqueda.
                            </span>
                        </li>

                        <li className="about-page__li">
                            <span>
                                <b>Analisis De Curriculum</b>
                            </span>
                            <span>
                                No he tenido tiempo para terminar esta feature,
                                pero la ideia es obtener el cv del user en
                                InfoJobs y utilizar ChatGpt para ayudar el
                                usuario a mejorar su curriculum. Un buen
                                curriculum es fundamental si quieres una buena
                                posición en el mercado.
                            </span>
                        </li>

                        <li className="about-page__li">
                            <span>
                                <b>Comparador de Sueldos</b>
                            </span>
                            <span>
                                ¿No sabes como negociar? ¿Quieres saber si tu
                                sueldo esta acorde con el mercado? Puedes usar
                                el comparador de sueldos como base. Utiliza
                                <b> datos reales de infojobs</b> para ofrecerte
                                informacion util al negociar tu sueldo en un
                                nuevo puesto o para ver si el tuyo esta de
                                acuerdo con el mercado.
                            </span>
                        </li>
                    </ul>

                    <h3 className="about-page__subtitulo">Despedida</h3>
                    <p className="about-page__paragraph">
                        Si has llegado hasta aqui, gracias por tu tiempo y
                        espero que te haya gustado. Si quieres, visita mi perfil
                        en <a href="https://github.com/FelipeAnony">Github</a>,
                        no tengo mucho tiempo libre para poner proyectos alli,
                        pero tengo una cosita o otra xD
                    </p>
                </AnimatedSlide>
            </div>
        </section>
    );
};

export default AboutPage;
