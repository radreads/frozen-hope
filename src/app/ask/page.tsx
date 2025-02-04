'use client'

import { useState } from 'react'

interface Question {
  id: number
  question: string
  answer: string
  hints: string[]
}

interface Category {
  title: string
  description: string
  questions: Question[]
}

const FAQData: Category[] = [
  {
    title: "New Patients",
    description: "Essential information for those considering or starting fertility preservation",
    questions: [
      {
        id: 1,
        question: "What should I ask about the freezing process?",
        answer: "Understanding the freezing process is crucial for your peace of mind. Ask about the specific vitrification techniques used, success rates with frozen eggs/embryos, and how the clinic maintains optimal storage conditions.",
        hints: [
          "Ask about the specific freezing method used (slow freeze vs. vitrification)",
          "Request information about the lab's experience with freezing",
          "Inquire about backup systems and safety protocols"
        ]
      },
      {
        id: 2,
        question: "How do I evaluate a clinic's storage protocols?",
        answer: "Storage protocols directly impact the safety of your frozen eggs or embryos. The clinic should have clear procedures, monitoring systems, and emergency protocols in place.",
        hints: [
          "Ask about 24/7 monitoring systems",
          "Inquire about backup power sources",
          "Request information about staff training and certifications",
          "Ask about their track record with stored specimens"
        ]
      }
    ]
  },
  {
    title: "Existing Patients",
    description: "Important questions for those who already have frozen eggs or embryos",
    questions: [
      {
        id: 3,
        question: "How can I verify my eggs/embryos are being properly monitored?",
        answer: "Regular monitoring and maintenance are essential for long-term storage. You should have access to information about how your specimens are being monitored and maintained.",
        hints: [
          "Request regular status updates",
          "Ask about monitoring logs and records",
          "Inquire about quality control measures",
          "Discuss emergency notification procedures"
        ]
      },
      {
        id: 4,
        question: "What should I know about transferring to another facility?",
        answer: "Understanding the transfer process is important if you need to move your specimens to another facility. This includes proper handling, transportation protocols, and documentation.",
        hints: [
          "Ask about the clinic's transfer success rate",
          "Request information about shipping containers and methods",
          "Discuss timeline and coordination between facilities",
          "Review required documentation and costs"
        ]
      }
    ]
  }
]

const QuestionAccordion = ({ question, answer, hints }: Question) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 text-left hover:bg-gray-50 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 mb-4">{answer}</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Hints to Listen For:</h4>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              {hints.map((hint, index) => (
                <li key={index} className="text-sm">{hint}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Ask() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Questions to Ask Your Provider
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Essential questions and what to listen for when discussing fertility preservation
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-12">
        {FAQData.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <div className="divide-y divide-gray-200">
                {category.questions.map((q) => (
                  <QuestionAccordion key={q.id} {...q} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 