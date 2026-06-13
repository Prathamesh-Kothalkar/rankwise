import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

export default function ContactUs() {
    

    const handleSubmit = async (e:any) => {
    e.preventDefault()
    alert("Thank You for Showing Interest, This feature is under development. Back in 2-4 hours when it is ready.");
   
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-white">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            We're here to help
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about MHT-CET colleges, cutoffs, predictions,
            or admissions? Reach out and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Contact Information */}
          <div className="rounded-3xl bg-[#0F766E] p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-2">
              Get in touch
            </h2>

            <p className="text-teal-100 mb-8">
              Our team usually responds within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-teal-100">
                    contact@guessmycollege.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-teal-100">
                    +91 95954 44319
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-teal-100">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Support Hours</p>
                  <p className="text-teal-100">
                    Mon - Sat, 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-2xl font-bold">24h</p>
                <p className="text-sm text-teal-100">
                  Average Response
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-teal-100">
                  Students Helped
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Send a Message
            </h2>

            <p className="text-slate-600 mb-8">
              Fill out the form below and we'll get back to you.
            </p>

            <form className="space-y-6" >
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="mt-2"
                />
              </div>

              <Button
                className="w-full bg-[#0F766E] hover:bg-[#0d655e]"
                type="submit"
                size="lg"
               
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}