function Stats() {
    return (
        <div className="grid grid-cols-1 p-8 rounded-3xl bg-blue-500 divide-y divide-white md:divide-y-0 md:divide-x md:divide-white md:grid-cols-3 gap-8 text-center">
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">100+</h1>
                <p className="text-gray-100">phones sold</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">50+</h1>
                <p className="text-gray-100">countries</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">10+</h1>
                <p className="text-gray-100">Awards</p>
            </div>
        </div>
    )
}

export default Stats