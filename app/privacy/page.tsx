import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Privacy Policy | Guess My College",
  description: "Privacy policy of Guess My College app.",
}

export default function PrivacyPage() {
  return (
    <><Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <Card className="shadow-xl border border-[#0F766E] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black text-sm md:text-base leading-relaxed">
          <p>
            At <strong>Guess My College</strong>, accessible from{" "}
            <a
              href="https://www.guessmycollege.in"
              className="text-blue-400 underline"
              target="_blank"
            >
              www.guessmycollege.in
            </a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that are collected and how we use it.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>We collect minimal data required for providing our service:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your CET Rank Details (for prediction purposes only)</li>
            <li>Bookmarked colleges (if logged in)</li>
            <li>Email address (only if you sign up)</li>
          </ul>

          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>To generate personalized college predictions</li>
            <li>To improve and personalize the user experience</li>
            <li>To communicate with users (only if you contact us)</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Log Files</h2>
          <p>
            Like many websites, Guess My College uses log files. These files log visitors when they visit the site. The information includes IP address, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages. This data is not linked to any personally identifiable information and is used for analyzing trends and optimizing performance.
          </p>

          <h2 className="text-xl font-semibold">4. Cookies</h2>
          <p>
            We may use cookies to store user preferences and optimize the experience. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
          <p>
            We may use tools like Google Analytics or AdSense in the future, which may collect certain non-personal information through cookies.
          </p>

          <h2 className="text-xl font-semibold">6. Data Security</h2>
          <p>
            We prioritize protecting your data. All user data is securely stored and never sold or shared with third parties.
          </p>

          <h2 className="text-xl font-semibold">7. Children's Information</h2>
          <p>
            Our platform is intended for students over the age of 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-xl font-semibold">8. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-xl font-semibold">9. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will always be available at this URL with a revised “last updated” date.
          </p>

          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p>
            If you have any questions or concerns, please contact us at:
            <br />
            📧{" "}
            <a
              href="mailto:guessmycollege@gmail.com"
              className="text-blue-400 underline"
            >
              guessmycollege@gmail.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  )
}
