import help from "@/assets/imgs/help.webp"
import guincho from "@/assets/imgs/porto-guincho.webp"
const PaginaInicial = ()=>{
    return(
        <>
        <div className="w-full h-[200px] bg-primary flex justify-center items-center p-4">
            <h1 className="text-white text-6xl text-center">SecureCar</h1>
        </div>
        <section className="w-full flex justify-evenly items-center gap-3 my-4 h-[600px]">
            <div className="w-1/2  flex justify-center items-center flex-col">
                <h3 className="text-5xl font-medium pb-16">Quem nós somos?</h3>
                <p className="text-3xl font-light w-3/4 text-center ">Nós somos a SecureCar, a ajuda que você precisa a qualquer momento. Nosso intuito é te ajudar com problemas veiculares, da forma mais simples e rápida possível.</p>
            </div>
            <div className="w-1/2 flex justify-center items-center ">
                <img src={help} alt="Ajudamos você com os problemas veiculares" className="h-[400px] object-contain rounded" />
            </div>
        </section>
        <section className="w-full h-[600px] bg-primary flex justify-center items-center flex-col">
            <h2 className="font-medium text-white text-5xl pb-[50px]">Como faremos isso?</h2>
            <p className="font-light text-white text-3xl text-center w-3/4">Para te ajudar você terá que falar com nosso assistente virtual e informar a ele o problema que seu carro está apresentando, com isso nosso assistente tentará te guiar para o possível problema.
            Com isso o assistente gerará um diagnóstico com um preço e você poderá imprimir esse diagnóstico e levar a alguma oficina para que o seu carro seja concertado de maneira mais agil.</p>
        </section>
        <section className="w-full flex justify-evenly items-center gap-3 my-4 h-[600px]">
            <div className="w-1/4 flex justify-center items-center">
                <img src={guincho} alt="" />
            </div>
            <div className="w-3/4 flex justify-center items-center"></div>
        </section>
        <section className="w-full bg-primary h-[400px]">

        </section>
        </>
    )
}

export default PaginaInicial