"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/multi-select";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import EzoicAd from "@/components/EzoicAd";

export default function Home() {
  const router = useRouter();

  const [percentile, setPercentile] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [branches, setBranches] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(false);
  const [branchOptions, setBranchOptions] = useState<{ label: string; value: string }[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);

  const [showUserInfoForm, setShowUserInfoForm] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/users/college-recommendations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        percentile: parseFloat(percentile),
        gender,
        category,
        branches,
        location,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      const queryParams = new URLSearchParams({
        percentile,
        gender,
        category,
        location,
        branches: branches.join(","),
      });
      router.push(`/results?${queryParams.toString()}`);
    } else {
      alert(data.error || "Something went wrong");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/users/college-recommendations");
        const { branches, locations, categories } = response.data;

        const branchOptionsMapped = branches.map((branch: any) => {
          const branchValue = typeof branch === "object" ? branch.branch : branch;
          return { label: branchValue, value: branchValue };
        });
        setBranchOptions(branchOptionsMapped);
        setLocationOptions(locations);
        setCategoryOptions(categories);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    }

    fetchData();

    const hasSubmittedInfo = localStorage.getItem("userInfoSubmitted");
    if (!hasSubmittedInfo) setShowUserInfoForm(true);
  }, []);

  const isDataLoaded =
    branchOptions.length > 0 && locationOptions.length > 0 && categoryOptions.length > 0;

  return (
    <>
      <Head>
        <title>MHT-CET College Predictor Tool | Guess My College (2025)</title>
        <meta
          name="description"
          content="Get accurate MHT-CET college predictions based on your percentile, category, gender, branch & location. Trusted by 400+ students. Try Guess My College now!"
        />
        <meta
          name="keywords"
          content="MHT CET college predictor, engineering college admission, Maharashtra cutoff 2025, guess my college, CAP rounds, AI college recommender"
        />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.guessmycollege.in/studentform" />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2991036805731287"
          crossOrigin="anonymous"
        ></script>
      </Head>


      <Navbar />
      <EzoicAd id={120} />



      {/* User Info Form */}
      {showUserInfoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">We’d love to know you!</h2>
            <p className="text-sm text-gray-600">
              Enter your info to help us personalize recommendations.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsUserInfoLoading(true);
                try {
                  await axios.post("/api/users/info", userInfo);
                  localStorage.setItem("userInfoSubmitted", "true");
                  setShowUserInfoForm(false);
                  setIsUserInfoLoading(false);
                  alert("User info submitted successfully!");
                } catch {
                  alert("Failed to submit info. Try again.");
                  setIsUserInfoLoading(false);
                }
              }}
              className="space-y-4"
            >
              <Input
                placeholder="Name"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                required
              />
              <Input
                placeholder="Email"
                value={userInfo.email}
                type="email"
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                required
              />
              <Input
                placeholder="Phone"
                value={userInfo.phone}
                type="tel"
                pattern="[0-9]{10}"
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                required
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={isUserInfoLoading} className="bg-[#0F766E] text-white">
                  {isUserInfoLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="container py-16 mt-10">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm max-w-3xl mx-auto mb-2">
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-yellow-700">Note:</span> Currently showing cutoffs for <span className="font-medium">Other Than Home University</span>. Data for Home University (usually lower) along with remaining data by branch, category, and location will be available soon. <span className="font-semibold text-yellow-700">Stay tuned!</span>
          </p>
        </div>
        <Card className="mx-auto max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Find Your College</CardTitle>
            <CardDescription>
              Enter your details to get personalized college recommendations.
              <br />
              <span className="text-sm text-gray-500">
                Want to see all cutoffs? Enter <strong>100</strong> as your percentile.
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isDataLoaded ? (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="percentile">Percentile</label>
                    <Input
                      id="percentile"
                      type="number"
                      min="0"
                      max="100"
                      value={percentile}
                      onChange={(e) => setPercentile(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="gender">Gender</label>
                    <Select onValueChange={setGender}>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="category">Category</label>
                    <Select onValueChange={setCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((cat: any, i) => (
                          <SelectItem key={i} value={cat.category}>
                            {cat.category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label>Branch Preference</label>
                    <MultiSelect
                      placeholder="Select branches"
                      options={branchOptions}
                      selected={branches}
                      onChange={setBranches}
                    />
                  </div>
                  <div>
                    <label htmlFor="location">Location</label>
                    <Select onValueChange={setLocation}>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationOptions.map((loc: any, i) => (
                          <SelectItem key={i} value={loc.location}>
                            {loc.location}
                          </SelectItem>
                        ))}
                        <SelectItem value="Any">Any Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <CardFooter className="flex justify-center mt-4">
                  {isLoading ? (
                    <Button disabled className="w-full bg-teal-600 hover:bg-teal-700">
                      <Search className="animate-ping" /> Finding Colleges...
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      <Search className="mr-2 h-4 w-4" /> Find Colleges
                    </Button>
                  )}
                </CardFooter>
              </form>
            ) : (
              <div className="animate-pulse space-y-3">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SEO Content Section */}
        <section className="max-w-2xl mx-auto mt-12 px-4">
          <h2 className="text-xl font-semibold mb-4">Why Choose Guess My College?</h2>
          <p className="text-gray-700 mb-4">
            Guess My College offers students an intelligent platform to discover engineering colleges across Maharashtra
            based on their MHT-CET percentile. Using real admission data and trends, we help you filter by category,
            gender, branch, and location for maximum accuracy.
          </p>
          <EzoicAd id={118} />
          <p className="text-gray-700">
            Whether you're targeting top cities like Pune, Mumbai, or Nagpur, or want to explore beyond, our AI tool
            gives you the most relevant options instantly. Join thousands of students who trust our prediction engine
            to find their ideal college fit.
          </p>
        </section>
      </main>

      {/* Support Message */}
      <div className="p-4">
        <div className="bg-[#0F766E] text-white text-sm text-center rounded-md shadow p-3">
          <p>
            <strong>Didn’t find a match?</strong> Contact us for guidance:{" "}
            <a href="tel:9595444319" className="underline">
              9595444319
            </a>{" "}
            or{" "}
            <a href="mailto:guessmycollege@gmail.com" className="underline">
              guessmycollege@gmail.com
            </a>
          </p>
        </div>
      </div>
      <EzoicAd id={119} />
    </>
  );
}
