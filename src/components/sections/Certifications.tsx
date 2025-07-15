import { certifications } from '@/lib/data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
