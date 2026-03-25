const Services = () => {
  return (
    <section className="py-16 bg-green-200 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
          Our Services:
        </h2>
      <ul>
          <li className="text-lg text-gray-700 dark:text-gray-300 mb-4 hover:text-red-900 dark:hover:text-white transition duration-300 hover:scale-120">
            <strong>Web Development:</strong> We build responsive and user-friendly websites tailored to your business needs.
          </li>
          <li className="text-lg text-gray-700 dark:text-gray-300 mb-4 hover:text-red-900 dark:hover:text-white transition duration-300 hover:scale-120">
            <strong>E-commerce Solutions:</strong> We create powerful and scalable e-commerce platforms to help you sell your products online.
          </li>
          <li className="text-lg text-gray-700 dark:text-gray-300 mb-4 hover:text-red-900 dark:hover:text-white transition duration-300 hover:scale-120">
            <strong>Mobile App Development:</strong> We design and develop cross-platform mobile applications that provide an excellent user experience.
          </li>
      </ul>

      </div>
    </section>
  )
}

export default Services