import { Footer } from '../../components/organims/footer'
import { Navbar } from '../../components/organims/navbar'

function TermsAndConditions () {
    return (
        <>
            <Navbar />

            <section className="mx-auto space-y-12 max-w-2xl px-6">
                <h1 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Términos y Condiciones de Fitness Mode</h1>

                <p>Fecha de última actualización: 27/12/23</p>

                <p>Bienvenido a Fitness Mode, la plataforma que conecta a profesionales de la salud, como entrenadores personales, nutricionistas y fisioterapeutas, con sus usuarios.</p>

                <p>Antes de utilizar nuestros servicios, te pedimos que leas detenidamente los siguientes términos y condiciones. Al registrarte y utilizar Fitness Mode, aceptas cumplir con estos términos.</p>

                <h3 className='font-bold'>1. Creación de Perfil:</h3>

                <p>1.1. Para utilizar los servicios de Fitness Mode, debes crear un perfil proporcionando información precisa y verídica.</p>

                <p>1.2. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y eres el único responsable de cualquier actividad que ocurra en tu cuenta.</p>

                <h3 className='font-bold'>2. Mensualidad:</h3>

                <p>2.1. Al registrarte como profesional de la salud en Fitness Mode, acuerdas pagar una mensualidad para estar publicitado dentro de la aplicación.</p>

                <p>2.2. La mensualidad activa garantiza la visibilidad de tu perfil en la plataforma. En caso de no renovar la mensualidad, tu perfil puede ser retirado temporalmente de la vista de los usuarios.</p>

                <h3 className='font-bold'>3. Obligaciones del Profesional:</h3>

                <p>3.1. Como profesional de la salud en Fitness Mode, te comprometes a ofrecer servicios de calidad y apegarte a las leyes y regulaciones aplicables.</p>

                <p>3.2. Es tu responsabilidad mantener actualizada la información de tu perfil, incluyendo tus credenciales y disponibilidad.</p>

                <h3 className='font-bold'>4. Obligaciones de Fitness Mode:</h3>

                <p>4.1. Fitness Mode se compromete a proporcionar una plataforma funcional y segura para conectar a profesionales y usuarios.</p>

                <p>4.2. La plataforma se reserva el derecho de retirar perfiles que incumplan con las políticas establecidas o que presenten conducta inapropiada.</p>

                <h3 className='font-bold'>5. Pago y Facturación:</h3>

                <p>5.1. Los pagos de mensualidad se procesarán a través de métodos seguros y estarán sujetos a las tarifas y términos establecidos en la plataforma.</p>

                <p>5.2. En caso de cancelación, no se realizarán reembolsos de mensualidades ya pagadas.</p>

                <h3 className='font-bold'>6. Privacidad:</h3>

                <p>6.1. Fitness Mode se compromete a proteger la privacidad de la información proporcionada por los usuarios y profesionales.</p>

                <p>6.2. Al utilizar la plataforma, aceptas la política de privacidad de Fitness Mode.</p>

                <h3 className='font-bold'>7. Cambios en los Términos y Condiciones:</h3>

                <p>7.1. Fitness Mode se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigencia después de su publicación en la plataforma.</p>

                <p>Al utilizar Fitness Mode, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de los términos, te pedimos que no utilices nuestros servicios. Para cualquier duda o comentario, por favor contáctanos a través de <span className='font-bold'>contacto.fitnessmodelatam@gmail.com</span>. ¡Gracias por ser parte de Fitness Mode!</p>
            </section>

            <Footer />
        </>
    )
}

export { TermsAndConditions }