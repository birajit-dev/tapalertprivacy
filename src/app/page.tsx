export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            for TicklyDo
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: 01.08.2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            TicklyDo values your privacy. This Privacy Policy explains how our app handles your information.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Information Collection
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                TicklyDo does not collect, store, or share any personal data. All tasks, time logs, and settings are stored locally on your device only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Notifications
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TicklyDo may send you local notifications to remind you about your tasks, timers, or focus sessions.
              </p>
              <div className="ml-4 space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  These notifications are generated and managed directly on your device.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  No notification data is sent to our servers or any third party.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Internet Usage
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The app works fully offline. No internet connection is required to use the core features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Data Sharing
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We do not share your data with any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Permissions Used
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Notification Permission</strong> – Used only to send task reminders and timer alerts.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                No other sensitive permissions are required or used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Changes to this Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy occasionally. Any changes will be updated within the app or on our website (if applicable).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-1">
                <p className="text-gray-700 dark:text-gray-300">
                  📧 <strong>Email:</strong> indiand875@gmail.com
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-center font-medium">
              By using TicklyDo, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
