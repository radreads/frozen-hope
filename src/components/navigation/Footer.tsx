import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/frozen_hope' },
    { label: 'LinkedIn', href: '/linkedin' },
    { label: 'Instagram', href: '/instagram' },
  ]

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="serif-heading text-2xl mb-4">Frozen Hope</h3>
            <p className="text-gray-600">
              Raising the standard of care for frozen eggs and embryos in the US.
            </p>
          </div>

          <div>
            <h3 className="serif-heading text-xl mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-[#FF7F6F] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="serif-heading text-xl mb-4">Stay Updated</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-[#FF7F6F] focus:border-[#FF7F6F]"
              />
              <button
                type="submit"
                className="w-full bg-[#FF7F6F] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Frozen Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 