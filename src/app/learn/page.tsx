export default function Learn() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learn About Fertility Preservation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the science, standards, and latest developments in egg and embryo preservation.
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Fertility preservation through egg and embryo freezing has become an increasingly important option for family planning. 
            This revolutionary technology allows individuals to preserve their fertility potential for future use.
          </p>
          <p className="text-gray-600">
            Understanding the process, standards, and best practices is crucial for making informed decisions about fertility preservation.
            Current practices vary significantly across clinics and regions, highlighting the need for standardized protocols.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Recent Developments in Cryopreservation</h3>
              <p className="text-gray-600">
                New research and technological advances continue to improve the success rates of egg and embryo freezing.
                Stay updated with the latest developments in the field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Policy Updates</h3>
              <p className="text-gray-600">
                Recent changes in healthcare policies and regulations affecting fertility preservation practices
                and patient care standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cryopreservation Process</h3>
            <p className="text-gray-600">
              The scientific principles behind egg and embryo freezing, including vitrification
              techniques and optimal storage conditions. Understanding these processes is crucial
              for maintaining the quality of preserved genetic material.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Success Rates</h3>
            <p className="text-gray-600">
              Factors affecting success rates in fertility preservation, including age,
              storage conditions, and thawing protocols. Current statistics and research
              findings on pregnancy rates with frozen eggs and embryos.
            </p>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Standards</h2>
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <p className="text-gray-600">
                Current guidelines and recommendations for fertility preservation procedures,
                storage protocols, and quality control measures. Industry standards and
                accreditation requirements for fertility clinics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
              <p className="text-gray-600">
                Essential monitoring and maintenance procedures for stored eggs and embryos.
                Regular quality assessments and safety protocols to ensure optimal preservation
                conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 