import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy | Guess My College",
  description: "Privacy policy of Guess My College app.",
   alternates: {
    canonical: "https://www.guessmycollege.in/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
