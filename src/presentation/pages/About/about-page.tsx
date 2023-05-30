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
                        Hola, mi nombre es Felipe. Quiero agradecer a MiduDev e
                        InfoJobs por organizar este hackathon, es el primero en
                        el que participo y me ha encantado. Es una pena que no
                        haya tenido suficiente tiempo para desarrollar todo como
                        me gustaría, solo tuve alrededor de 20 horas para
                        dedicarme a este proyecto, por lo que tuve que trabajar
                        con prisa. Incluso me quedé sin tiempo para desarrollar
                        el backend, pero para no perder el trabajo que ya hice,
                        utilicé datos simulados y lo subiré de todas formas. No
                        creo que vaya a ganar porque solo está el frontend,
                        aunque las ideas de las funcionalidades son muy buenas y
                        el diseño quedó genial. El texto a continuación lo
                        escribí pensando que tendría tiempo para terminar todas
                        las funcionalidades, aunque no pude hacerlo, pero el
                        texto quedó bien y lo dejaré aquí...
                    </p>

                    <br />

                    <h3 className="about-page__subtitulo">
                        Por qué este proyecto merece ganar
                    </h3>

                    <p className="about-page__paragraph--font-mid">
                        *P.D.: Sé que la comunidad es muy buena y seguramente se
                        crearán proyectos increíbles. Este texto no pretende
                        decir que mi proyecto es el mejor de todos, eso lo
                        decidirá quien lo evalúe (update: no tonto, no lo és, ni
                        siquiera esta completo xD). Mi intención con este texto
                        es promocionar mi proyecto y no hay ninguna regla que lo
                        prohíba xD. Todo lo presentado en este texto es
                        simplemente mi opinión personal y cada uno tiene la
                        suya.
                    </p>

                    <p className="about-page__paragraph">
                        Mi aplicación merece ganar por las siguientes razones
                        (no merece porque no esta completa, pero sigamos):
                    </p>

                    <ul className="about-page__ul">
                        <li>
                            <b>Aplicación web responsive:</b>
                            <br />
                            <br />
                            Mi aplicación es completamente responsive y funciona
                            en todos los dispositivos, brindando una experiencia
                            óptima a los usuarios sin importar el dispositivo
                            que estén utilizando. Esto es un punto muy positivo,
                            ya que no limita quiénes pueden utilizarla. Por otro
                            lado, aquellos que elijan crear aplicaciones
                            móviles, de escritorio, bots de Discord, Telegram,
                            etc., están en desventaja porque limitan quiénes
                            pueden usarlas. La única plataforma a la que todos
                            pueden acceder fácilmente es la web.
                        </li>
                        <br />
                        <li>
                            <b>Guía de estilos de InfoJobs:</b>
                            <br />
                            <br />
                            Mi proyecto sigue la guía de estilos de InfoJobs, lo
                            cual asegura coherencia visual con la plataforma
                            existente. Pero no se queda ahí, también añadí
                            algunas animaciones a la aplicación para que se vea
                            aún mejor.
                        </li>
                        <br />
                        <li>
                            <b>Funcionalidades útiles:</b>
                            <br />
                            <br />
                            He agregado características útiles que extienden la
                            usabilidad original de InfoJobs, proporcionando a
                            los usuarios herramientas de valor en su búsqueda
                            laboral. Imagino que mucha gente optará por recrear
                            las funcionalidades que ya existen en InfoJobs, lo
                            cual es una estrategia válida. Sin embargo, no
                            elegiría esa opción por un motivo muy sencillo: el
                            poco tiempo disponible. InfoJobs lleva años en el
                            mercado, por lo que es improbable que se puedan
                            recrear sus funcionalidades en tan poco tiempo. Por
                            esa razón, mi aplicación añade funcionalidades que
                            no existen originalmente en InfoJobs. Si necesitas
                            buscar ofertas laborales, InfoJobs ya lo hace muy
                            bien, pero si buscas funcionalidades extras, para
                            eso está InfoJobs Tools.
                            <br />
                            <br />
                            *Actualización: Al final, las funcionalidades no son
                            útiles como dije arriba, debido a que no se ha
                            implementado el backend, Pero de todos modos, las
                            ideas son buenas, hay que admitirlo xD.
                        </li>
                        <br />
                        <li>
                            <b>Aplicación completa y real:</b>
                            <br />
                            <br />
                            Mi proyecto incluye el frontend, lo que garantiza un
                            sistema integral y completo para los usuarios. Esto
                            no se queda ahí, InfoJobs Tools tiene
                            características útiles en el mundo real y podría ser
                            fácilmente continuado e incluso formar parte de la
                            aplicación real de InfoJobs (con las debidas
                            adecuaciones), ya que aporta utilidad y valor. No es
                            un simple y inútil clon de InfoJobs, es una
                            aplicación real (aunque al final, sí que es inútil
                            porque está simulada, deberia haber hecho un clon
                            xD).
                        </li>
                        <br />
                        <li>
                            <b>Calidad de código:</b>
                            <br />
                            <br />
                            Mi aplicación está diseñada con código de calidad,
                            lo que facilita su escalabilidad y futuras mejoras.
                            Esto asegura que la aplicación pueda crecer y
                            adaptarse a medida que las necesidades de los
                            usuarios evolucionen. Evidentemente, se puede
                            mejorar mucho, y no tuve tiempo, por ejemplo, para
                            aplicar TDD en el frontend, pero la estructura de la
                            aplicación es fácilmente escalable, algo fundamental
                            en una aplicación real.
                        </li>
                    </ul>

                    <br />

                    <h3 className="about-page__subtitulo">Funcionalidades</h3>
                    <p className="about-page__paragraph">
                        Mi aplicación ofrece varias funcionalidades <s>in</s>
                        útiles para las personas que están en búsqueda de un
                        nuevo puesto de trabajo.
                    </p>

                    <ul className="about-page__ul">
                        <li className="about-page__li">
                            <span>
                                <b>Análiticas mejoradas</b>
                            </span>
                            <span>
                                Proporciona una visión general más completa y
                                detallada del mercado laboral para ayudar en la
                                preparación de los candidatos. Esta
                                funcionalidad es especialmente beneficiosa para
                                perfiles junior que desean comprender cómo
                                posicionarse en el mercado para obtener su
                                primer empleo, así como para aquellos que desean
                                cambiar de área.
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
                                <br />
                                *Actualización: Es una pena que no esté
                                implementado, sería realmente una función muy
                                genial.
                            </span>
                        </li>
                        <li className="about-page__li">
                            <span>
                                <b>Análisis de Currículum</b>
                            </span>
                            <span>
                                Aunque esta funcionalidad (y todo el resto,
                                ¡jaja!) aún no está completamente desarrollada
                                por falta de tiempo, la idea es obtener el
                                currículum del usuario en InfoJobs y utilizar
                                ChatGpt para ayudar al usuario a mejorarlo. Un
                                currículum vitae sólido es fundamental para
                                obtener una buena posición en el mercado
                                laboral, y esta función tiene como objetivo
                                brindar asesoramiento personalizado para mejorar
                                el currículum de cada usuario.
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
                                InfoJobs (en teoría) para proporcionarte
                                información útil al momento de negociar tu
                                sueldo en un nuevo puesto o para verificar si tu
                                salario actual está acorde con el mercado
                                laboral.
                            </span>
                        </li>
                    </ul>

                    <h3 className="about-page__subtitulo">Agradecimiento</h3>
                    <p className="about-page__paragraph">
                        Quiero agradecer nuevamente a MiduDev e InfoJobs por
                        brindar esta oportunidad. No tengo mucho tiempo para
                        crear proyectos personales debido al trabajo, pero si
                        quieres ver más de lo que ya hice, puedes visitar mi
                        perfil en{' '}
                        <a href="https://www.github.com/felipeAnony">GitHub</a>.
                        ¡Gracias por tu atención!
                    </p>
                </AnimatedSlide>
            </div>
        </section>
    );
};

export default AboutPage;
