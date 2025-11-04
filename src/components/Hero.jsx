

function Hero() {
    return (
        <section id="hero" className=" text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('/three.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="container mx-auto px-4 py-20">
                <div className=" text-center p-4 flex flex-col justify-center items-center relative">
                    <h1 className="text-5xl mx-auto font-bold w-full mb-4 text-white md:text-6xl md:w-200">Technology & innovation <span className="text-blue-500">Architectural Masterpieces</span></h1>
                    <p className="text-xl hidden text-blue-100  mx-auto md:block md:w-150">At my techpulse, i Focus on performance, speed, and smart living.
                        on technology. Our design-first approach across the globe,
                        artistic information technology that spread rapid around the world.
                    </p>

                    <div className="flex gap-4  justify-center mt-8">
                       <button className="p-2 px-3 border rounded-md cursor-pointerborder-whitebackdrop-blur-2xl bg-transparent text-white">See More</button>
                       <button className="p-2 px-3 border rounded-md cursor-pointer border-whitebackdrop-blur-2xl bg-transparent text-white">Sign Up</button>
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Hero;