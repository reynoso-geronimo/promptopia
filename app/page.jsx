import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Descubre y Comparte
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">IA-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Proomptopia es una herramienta de IA prompting open-source para el mundo moderno, para crear y compartir prompts creativos </p>
       <Feed/>
    </section>
  )
}

export default Home