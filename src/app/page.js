// app/page.jsx

import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Next.js Theme Örneği
        </h1>

        <ThemeSwitch />

        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">
            Bu bir örnek metindir. Tema değiştirildiğinde renkler otomatik
            olarak güncellenecektir.
          </p>
        </div>
      </div>
    </div>
  );
}
