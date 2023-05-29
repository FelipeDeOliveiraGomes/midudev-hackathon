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
                    <h3 className="about-page__subtitulo">Presentación</h3>

                    <p className="about-page__paragraph">
                        Buenas, me llamo Felipe, soy el desarrollador
                        responsable de este proyecto. Primeramente me gustaría
                        agradecer a MiduDev e InfoJobs por este hackathon, es el
                        primero en el que participo y me ha encantado. Es una
                        pena que no haya tenido suficiente tiempo para
                        desarrollar todo como me gustaría y tuve que hacer
                        algunas cosas con prisa. Pero, de todos modos, espero
                        que les guste.
                    </p>

                    <p className="about-page__paragraph">
                        Este proyecto consiste de dos partes, el <b>Frontend</b>{' '}
                        y el <b>Backend</b>. Me gustaría aclarar que trabajo
                        como <b>Frontend</b> y no como <b>Backend</b>. Aunque
                        recientemente empecé a estudiar sobre el backend para
                        convertirme en fullstack, no tengo mucha experiencia en
                        esta área. Por ahora, mi especialidad es el frontend.
                        Así que aquellos que vayan a mirar el código del
                        backend, sean comprensivos xD.
                    </p>

                    <h3 className="about-page__subtitulo">Estrategia</h3>
                    <p className="about-page__paragraph">
                        En este hackathon hay{' '}
                        <b>diferentes estrategias posibles</b> que puedes elegir
                        para ganar, ya que las restricciones son únicamente
                        utilizar la API de InfoJobs y que sea fácil de probar.
                        Considerando esto, hay dos grupos principales de
                        estrategias que puedes elegir:
                    </p>

                    <ul className="about-page__ul">
                        <li>
                            <b>
                                Copiar las características que ya existen en
                                InfoJobs e intentar mejorar el diseño, la
                                funcionalidad, etc.
                            </b>
                        </li>

                        <li>
                            <b>
                                Innovar y crear características que aún no
                                existen (más arriesgado y complejo)
                            </b>
                        </li>
                    </ul>

                    <p className="about-page__paragraph">
                        Elegí <b>innovar</b> y crear funcionalidades que aún no
                        existen. No tengo nada en contra de aquellos que
                        eligieron rehacer cosas que ya existen, pero es una
                        estrategia <b>técnicamente inferior</b> a la de aquellos
                        que eligieron crear nuevas funcionalidades por una razón
                        muy simple: el <b>valor</b> que tu proyecto puede
                        aportar. InfoJobs lleva varios años en el mercado y es
                        difícil, en tan poco tiempo, superar lo que ya existe.
                        Por lo tanto, aunque sea más{' '}
                        <b>arriesgado y complejo</b>, si logras crear una nueva
                        funcionalidad que sea útil y funcional, puedes aportar
                        mucho más valor que simplemente rediseñar la pantalla de
                        búsqueda de InfoJobs por cualquier motivo.
                    </p>

                    <h3 className="about-page__subtitulo">Funcionalidades</h3>
                    <p className="about-page__paragraph">
                        Hay cuatro funcionalidades en esta aplicación que son
                        muy útiles para personas que están en búsqueda de un
                        nuevo puesto de trabajo.
                    </p>
                    <ul className="about-page__ul">
                        <li className="about-page__li">
                            <span>
                                <b>Análisis</b>
                            </span>
                            <span>
                                Brinda una visión general del mercado laboral
                                para ayudar en la preparación de los candidatos.
                                Utiliza datos reales de InfoJobs. Muy útil para
                                perfiles junior que quieren saber cómo
                                posicionarse en el mercado para obtener su
                                primer empleo o perfiles que quieren cambiar de
                                área.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Job Assistant</b>
                            </span>
                            <span>
                                Te envía por correo electrónico diariamente las
                                nuevas ofertas publicadas que cumplan con tus
                                requisitos. Personalmente, cuando estaba en
                                búsqueda activa de empleo, pasaba mucho tiempo
                                filtrando y buscando ofertas laborales. Con las
                                tareas diarias, a veces se me olvidaba buscar y
                                aplicar en las nuevas ofertas. Si el Job
                                Assistant hubiera existido en aquel entonces,
                                probablemente habría encontrado trabajo más
                                temprano y me habría ahorrado tiempo completando
                                filtros de búsqueda.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Análisis de Curriculum</b>
                            </span>
                            <span>
                                No he tenido tiempo para terminar esta
                                funcionalidad, pero la idea es obtener el CV del
                                usuario en InfoJobs y utilizar ChatGpt para
                                ayudar al usuario a mejorar su currículum. Un
                                buen currículum es fundamental si quieres una
                                buena posición en el mercado.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Comparador de Sueldos</b>
                            </span>
                            <span>
                                ¿No sabes cómo negociar? ¿Quieres saber si tu
                                sueldo está acorde con el mercado? Puedes usar
                                el comparador de sueldos como referencia.
                                Utiliza datos reales de InfoJobs para ofrecerte
                                información útil al negociar tu sueldo en un
                                nuevo puesto o para ver si el tuyo está en línea
                                con el mercado.
                            </span>
                        </li>
                    </ul>
                    <h3 className="about-page__subtitulo">Despedida</h3>
                    <p className="about-page__paragraph">
                        Si has llegado hasta aquí, gracias por tu tiempo y
                        espero que te haya gustado. Si quieres, visita mi perfil
                        en <a href="https://github.com/FelipeAnony">Github</a>,
                        no tengo mucho tiempo libre para publicar proyectos
                        allí, pero tengo alguna cosita xD.
                    </p>
                </AnimatedSlide>
            </div>
        </section>
    );
};
export default AboutPage;
