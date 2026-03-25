const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center justify-center bg-blue-300 dark:bg-gray-800">
      <div className="text-center  mt-6">
        <h1 className="flex flex-col items-center text-justify gap-4 max-w-2xl mx-auto px-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        At Prodesk IT, we are committed to delivering top-notch web development services that empower your business to thrive in the digital landscape.
      </h1>
      
        <h2 className="flex flex-col items-center text-justify gap-4 max-w-2xl mx-auto px-4 text-gray-700 dark:text-gray-300">
        Our team of skilled developers and designers work closely with you to create custom solutions that meet your unique needs and exceed your expectations.
      </h2>
      
      <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
      </div>
    </section>
  )
}

export default Hero