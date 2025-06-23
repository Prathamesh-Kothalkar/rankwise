import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Terms & Conditions | Guess My College",
  description: "Read the official Terms & Conditions for using Guess My College an AI-based MHT-CET predictor platform.",
  alternates: {
    canonical: "https://www.guessmycollege.in/terms-and-conditions",
  },
};


export default function TermsPage() {
  return (
    <><Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <Card className="shadow-xl border border-[#0F766E] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms & Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black text-sm md:text-base leading-relaxed">
          <p>
            Welcome to <strong>Guess My College</strong>. By accessing or using our website located at 
            <a href="https://www.guessmycollege.in" className="text-blue-400 underline ml-1" target="_blank">guessmycollege.in</a>,
            you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>
            By using our platform, you acknowledge that you have read, understood, and agreed to be bound by these terms. 
            If you do not agree, please do not use the service.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Description of Service</h2>
          <p>
            Guess My College provides tools and information to help students explore potential colleges based on their 
            entrance exam ranks (e.g., MHT CET). The results shown are based on past data and are for informational purposes only.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. No Guarantee</h2>
          <p>
            We do not guarantee the accuracy, completeness, or reliability of the college predictions. Final admission decisions 
            rest solely with the respective colleges and authorities.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. User Responsibilities</h2>
          <p>
            Users are responsible for ensuring that any information they provide is accurate. You agree not to use this platform 
            for any unlawful or harmful activities.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Intellectual Property</h2>
          <p>
            All content on this website, including text, logos, icons, and tools, is the property of Guess My College and may not 
            be copied or reproduced without prior written permission.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
          <p>
            We shall not be liable for any direct, indirect, or consequential losses or damages arising out of the use or 
            inability to use this website or any information provided.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Changes to Terms</h2>
          <p>
            We reserve the right to update or change these terms at any time. Continued use of the site after such changes 
            constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold mt-6">8. Contact</h2>
          <p>
            For questions regarding these terms, please contact us at:
            <br />
            📧 <a href="mailto:guessmycollege@gmail.com" className="text-blue-400 underline">guessmycollege@gmail.com</a>
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  )
}
