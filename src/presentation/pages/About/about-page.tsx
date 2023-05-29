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
                        Buenas, mi nombre es Felipe. Quiero agradecer a MiduDev
                        e InfoJobs por organizar este hackathon, es el primero
                        en el que participo y me ha encantado. Es una pena que
                        no haya tenido suficiente tiempo para desarrollar todo
                        como me gustaría, tuve sumadas cerca de 22h para
                        dedicarme en este proyecto, divididas entre el back y
                        front, por esa razón tuve que hacer casi todo con prisa,
                        además de ser prácticamente imposible implementar como
                        me gustaría las features de esta app por las
                        limitaciones de la API. Pero, de todos modos, espero que
                        les guste.
                    </p>

                    <h3 className="about-page__subtitulo">
                        Por qué este proyecto merece ganar
                    </h3>

                    <p>
                        *ps: Sé que la comunidad es muy buena y seguramente
                        harán proyectos increíbles, este texto no es para decir
                        que mi proyecto es el mejor de todos, eso lo decidirá
                        quien lo vaya a evaluar, mi intención con este texto es
                        promover mi proyecto y no hay ninguna regla que lo
                        prohíba xD todo lo presente en este texto es simplemente
                        mi opinión personal y cada uno tiene la suya.
                    </p>

                    <p className="about-page__paragraph">
                        Mi aplicación merece ganar por las siguientes razones:
                    </p>

                    <ul className="about-page__ul">
                        <li>
                            <b>Aplicación web responsive:</b> Mi app es
                            completamente responsive y funciona en todos los
                            dispositivos, brindando una experiencia óptima a los
                            usuarios sin importar qué dispositivo estén
                            utilizando. Esto es un punto muy positivo porque no
                            limita quién puede utilizarla. Por otro lado,
                            aquellos que elijan crear aplicaciones móviles, de
                            escritorio, bots de Discord, Telegram, etc. están en
                            desventaja porque limitan quién puede usarlas. La
                            única plataforma a la que todos pueden acceder
                            fácilmente es la web.
                        </li>
                        <li>
                            <b>Guía de estilos de InfoJobs:</b> Mi proyecto
                            sigue la guía de estilos de InfoJobs, asegurando
                            coherencia visual con la plataforma existente, pero
                            no se queda ahí, me gustan mucho las animaciones,
                            así que añadí algunas en la app para que se vea más
                            guay.
                        </li>
                        <li>
                            <b>Funcionalidades útiles:</b> He agregado
                            características útiles que extienden la usabilidad
                            original de InfoJobs, proporcionando a los usuarios
                            herramientas de valor en su búsqueda laboral.
                            Imagino que mucha gente optará por recrear las
                            funcionalidades que ya existen en InfoJobs, es una
                            estrategia válida, pero yo no la elegiría por un
                            motivo muy sencillo, el poco tiempo. InfoJobs lleva
                            años en el mercado, es improbable que en tan poco
                            tiempo puedas recrear alguna feature mejor de lo que
                            ya existe. Por esa razón, mi aplicación añade
                            funcionalidades que no existen originalmente en
                            InfoJobs. Si necesitas buscar ofertas laborales,
                            InfoJobs ya lo hace muy bien, pero si quieres
                            funcionalidades extras, para eso está InfoJobs
                            Tools.
                        </li>
                        <li>
                            <b>Aplicación completa y real:</b> Mi proyecto
                            incluye tanto el frontend como el backend, lo que
                            garantiza un sistema integral y completo para los
                            usuarios. Esto permite una gestión eficiente de la
                            plataforma y seguridad en el uso de tokens de API.
                            Además, hace que la aplicación sea más estable en
                            casos de futuros cambios o problemas de conexión con
                            la API de InfoJobs. No se queda ahí, InfoJobs Tools
                            tiene características útiles en el mundo real y
                            podría ser continuado fácilmente, e incluso llegar a
                            formar parte de la aplicación real de InfoJobs (con
                            las debidas adecuaciones) debido a que tiene
                            utilidad real y aporta valor. Esto no es un simple e
                            inútil clon de InfoJobs, es una aplicación real.
                        </li>
                        <li>
                            <b>Calidad de código:</b> Mi aplicación está
                            diseñada con un código de calidad, lo que facilita
                            su escalabilidad y futuras mejoras. Esto asegura que
                            la aplicación pueda crecer y adaptarse a medida que
                            las necesidades de los usuarios evolucionen.
                            Evidentemente, se puede mejorar mucho, y no tuve
                            tiempo, por ejemplo, para aplicar TDD en el
                            frontend, pero la estructura de la aplicación es
                            fácilmente escalable, algo fundamental en una
                            aplicación real.
                        </li>
                    </ul>
                    <h3 className="about-page__subtitulo">Funcionalidades</h3>
                    <p className="about-page__paragraph">
                        Mi aplicación ofrece varias funcionalidades útiles para
                        las personas que están en búsqueda de un nuevo puesto de
                        trabajo.
                    </p>
                    <ul className="about-page__ul">
                        <li className="about-page__li">
                            <span>
                                <b>Análiticas mejoradas</b>
                            </span>
                            <span>
                                Proporciona una visión general más completa y
                                detallada del mercado laboral para ayudar en la
                                preparación de los candidatos. Utilizando datos
                                reales de InfoJobs, esta funcionalidad es
                                especialmente beneficiosa para perfiles junior
                                que desean comprender cómo posicionarse en el
                                mercado para obtener su primer empleo, así como
                                para aquellos que desean cambiar de área.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Job Assistant</b>
                            </span>
                            <span>
                                Recibirás notificaciones por correo electrónico
                                diariamente con las nuevas ofertas laborales que
                                cumplan con tus requisitos. Personalmente,
                                cuando estaba en búsqueda activa de empleo,
                                invertía mucho tiempo filtrando y buscando
                                ofertas laborales. Sin embargo, a veces se me
                                olvidaba buscar y postularme en las nuevas
                                oportunidades debido a las tareas diarias. Si
                                hubiera tenido acceso a Job Assistant en aquel
                                entonces, probablemente habría encontrado
                                trabajo más rápidamente y habría ahorrado tiempo
                                completando filtros de búsqueda manualmente.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Análisis de Curriculum</b>
                            </span>
                            <span>
                                Aunque esta funcionalidad aún no está
                                completamente desarrollada, por falta de tiempo,
                                la idea es obtener el currículum del usuario en
                                InfoJobs y utilizar ChatGpt para ayudar al
                                usuario a mejorarlo. Un currículum vitae sólido
                                es fundamental para obtener una buena posición
                                en el mercado laboral, y esta función tiene como
                                objetivo brindar asesoramiento personalizado
                                para mejorar el currículum de cada usuario.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Comparador de Sueldos</b>
                            </span>
                            <span>
                                ¿No sabes cómo negociar? ¿Quieres saber si tu
                                sueldo está acorde con el mercado? Puedes
                                utilizar el Comparador de Sueldos como
                                referencia. Esta función utiliza datos reales de
                                InfoJobs para proporcionarte información útil al
                                momento de negociar tu sueldo en un nuevo puesto
                                o para verificar si tu salario actual está
                                acorde con el mercado laboral.
                            </span>
                        </li>
                    </ul>
                    <h3 className="about-page__subtitulo">Agradecimiento</h3>
                    <p className="about-page__paragraph">
                        Quiero agradecer nuevamente a MiduDev e InfoJobs por
                        brindar esta oportunidad. No tengo mucho tiempo para
                        crear proyectos personales debido al trabajo, pero si
                        quieres ver más de lo que ya hice, puedes visitar mi
                        perfil en
                        <a href="https://www.github.com/felipeAnony">GitHub</a>.
                        ¡Gracias por tu atención!
                    </p>
                </AnimatedSlide>
            </div>
        </section>
    );
};
export default AboutPage;
