
function Services() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-blue-950 md:text-4xl mb-10">our Services</h3>
                    <p className="text-lg mb-8 md:text-xl">Checkout Our techpulse service that
                       transforms ideas that meets our technology information demands and supplies. </p>
                    <button>Check All</button>
                </div>

                <div>
                    <img src="/one.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-gray-900 ">fast and safe charging</h3>

                </div>

                <div>
                    <img src="/two.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-gray-900">eco mobile accessories</h3>

                </div>

                <div>
                    <img src="/three.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-blue-500">product recyling progrm</h3>

                </div>

            </div>
        </section>
    )
}

export default Services