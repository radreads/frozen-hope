export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#FAF7F4] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="serif-heading text-6xl mb-8">
              Family-building options that{' '}
              <span className="text-[#FF7F6F] underline">put you first</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Whether you want to preserve your fertility or you&apos;re looking to build 
              your family, we&apos;ve got you.
            </p>
            <button className="bg-[#C7F069] text-gray-900 px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition-colors">
              Our Story →
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Learn</h3>
              <p className="text-gray-600">
                Access educational resources about fertility preservation and 
                current standards of care.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Ask</h3>
              <p className="text-gray-600">
                Get answers to your questions from our community of experts 
                and experienced patients.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Share</h3>
              <p className="text-gray-600">
                Connect with others and share your story to help drive 
                change in fertility care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Frozen Hope</h2>
            <p className="text-gray-600 mb-8">
              Founded by Lindsay Beck, Frozen Hope is committed to improving 
              the standards and practices around cryopreservation of eggs and 
              embryos in fertility care. Our mission is to ensure every patient 
              receives the highest quality care and support throughout their 
              fertility journey.
            </p>
            <button className="bg-[#FF7F6F] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FF7F6F] rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="serif-heading text-4xl mb-6">
              Join Our Movement
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
              Help us raise the standard of care for frozen eggs and embryos. 
              Subscribe to our newsletter to stay updated on our progress and 
              learn how you can make a difference.
            </p>
            <button className="bg-[#C7F069] text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
              Subscribe Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
