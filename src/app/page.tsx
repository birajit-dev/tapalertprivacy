export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            for TapAlert
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Effective Date: [Insert Date]
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            TapAlert (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it. This Privacy Policy explains how TapAlert handles user information when you use our mobile application.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    No Personal Data Collected:
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    TapAlert does not collect, store, or share any personal information such as your name, email address, phone number, or any other identifiable data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    Permissions Used:
                  </h3>
                  <div className="ml-4 space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Notification Permission:</strong> Required to send reminders and alerts to the user. This permission is used solely for delivering notifications within the app.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      No other permissions (such as camera, gallery, location, or contacts) are requested or used.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How We Use Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Since we do not collect any user data, no information is processed, transmitted, or stored by us. Notifications are generated and handled locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Data Sharing
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  We do not sell, trade, or otherwise transfer your information to third parties.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  No data is transmitted outside your device.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                TapAlert is safe to use and does not knowingly collect any personal data from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Since TapAlert does not collect or store user data, there is no risk of data breaches from our side. All app functionality is handled securely on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. Any changes will be reflected in the updated version available within the app or on the Play Store listing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                If you have any questions about this Privacy Policy or TapAlert, you can contact us at:
              </p>
              <div className="space-y-1">
                <p className="text-gray-700 dark:text-gray-300">
                  📧 <strong>Email:</strong> [Insert Your Email]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
