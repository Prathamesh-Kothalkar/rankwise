import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactUsPage() {
    return (
        <>
        <Navbar/>
        <main className="max-w-2xl mx-auto py-12 px-4 mt-16">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6 text-gray-700">
                Have questions, feedback, or need support? We're here to help! Reach out to the RankWise team using the details below.
            </p>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <a href="mailto:support@rankwise.app" className="text-blue-600 underline">
                    support@guessmycollege.com
                </a>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <p className="text-gray-800">+91 7391860082</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Address</h2>
                <p className="text-gray-800">
                    GuessMyCollege Inc.<br />
                    Narhe<br />
                    Pune<br />
                    Maharashtra, India<br />
                    411041
                </p>
            </section>
            <section>
                <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full border rounded px-3 py-2"
                            rows={4}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="bg-[#0E665F] text-white px-4 py-2 rounded hover:bg-[#0E665F] hover:shadow-lg transition duration-200"
                    >
                        Send Message
                    </Button>
                </form>
            </section>
        </main>
        <Footer/>
        </>
    );
}