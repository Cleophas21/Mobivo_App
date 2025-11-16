import { FaCheckCircle } from "react-icons/fa";

function About() {
    return (
        <section className="contaner mx-auto py-5 px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-blue-500 mb-6">Creating a driven by nature, designed for You</h2>



                    <h2 className="text-4xl font-bold text-blue-500 mb-6">Why Choose techpulse</h2>
                    <ul className="mt-9 space-y-4 text-blue-500">
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheckCircle className="text-blue-500 text-lg mr-2" />Every product is designed with the planet in mind.</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-blue-500 text-lg mr-2" />Advanced materials and energy Efficient designed.</li >
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-blue-500 text-lg mr-2" />Honest materials, fair production and eco- certification</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-blue-500 text-lg mr-2" /> Reducing e- waste and promoting responsible tech use.</li>
                    </ul>

                </div>

                <div>
                    <img src="/six.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-2xl" />
                </div>
            </div>


        </section>
    )
}


export default About