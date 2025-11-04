import { FaCheckCircle } from "react-icons/fa";


function Section() {
    return (

        <section className="container mx-auto py-7">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/six.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-3xl" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl text-blue-500 font-bold  mb-4 mt-8 md:text-5xl ">A  technology & innovation </h2>
                    <p className="text-lg text-gray-700 mb-6 md:text-xl">We deal with new technology information accessories and delivery across the country.</p>

                    <ul className="mt-9 space-y-4">

                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-blue-500 text-lg mr-2" />  technology accessories $ innovation. </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-blue-500 text-lg mr-2" />  sustainabilities materials.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-blue-500 text-lg mr-2" />  smart design.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-blue-500 text-lg mr-2" />  Enhancincing eco- conscious packaging.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-blue-500 text-lg mr-2" />  Developing  in energies- Effiencient tech.</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}


export default Section