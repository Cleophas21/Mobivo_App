

function Card({ productName,  cost, image }) {
    return (
        <section className="container mx-auto p-2">


            <div >

                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
                        <img
                            src={image}
                            alt={productName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2 ">
                        <p className="flex items-center gap-2 text-gray-500"> Product: { productName}</p>
                        <p className="flex items-center gap-2 text-gray-500"> Cost: {cost}</p>
                        <div className="flex items-center gap-1 text-yellow-500">

                           

                        </div>

                    </div>
                </div>


            </div>
        </section>

    )
}


export default Card