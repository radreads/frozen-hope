'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  story: string
  role: 'patient' | 'professional' | ''
  canContact: boolean
  mediaWilling: boolean
}

interface FormErrors {
  email?: string
}

export default function Share() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    story: '',
    role: '',
    canContact: false,
    mediaWilling: false
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' })
      return
    }

    // Clear any existing errors
    setErrors({})
    
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing in email field
    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: undefined }))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Share Your Story
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your experience can help improve standards of care and support others in their fertility preservation journey
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field with Validation */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              onBlur={() => {
                if (formData.email && !validateEmail(formData.email)) {
                  setErrors({ ...errors, email: 'Please enter a valid email address' })
                }
              }}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Story Field */}
          <div>
            <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1">
              Your Story
            </label>
            <textarea
              id="story"
              name="story"
              required
              rows={6}
              value={formData.story}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your experience with fertility preservation..."
            />
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              I am a:
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Please select...</option>
              <option value="patient">Patient</option>
              <option value="professional">Healthcare Professional</option>
            </select>
          </div>

          {/* Contact Permission */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="canContact"
              name="canContact"
              checked={formData.canContact}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="canContact" className="ml-2 block text-sm text-gray-700">
              Frozen Hope can contact me to discuss my story
            </label>
          </div>

          {/* Media Permission */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="mediaWilling"
              name="mediaWilling"
              checked={formData.mediaWilling}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="mediaWilling" className="ml-2 block text-sm text-gray-700">
              I am willing to speak with media about my experience
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Share Your Story
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Your privacy is important to us. We will only share your story with your explicit permission.
          </p>
        </form>
      </div>
    </div>
  )
} 