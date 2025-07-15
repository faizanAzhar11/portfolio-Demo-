import { skills } from '@/lib/data'

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cloud & Azure</h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloud.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
