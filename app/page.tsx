import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MultiSelect } from "@/components/multi-select"
import { GraduationCap, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-teal-600" />
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            RankWise
          </h1>
        </div>
        <h2 className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Discover the perfect college based on your entrance exam percentile and preferences
        </h2>
      </div>
      <Card className="mx-auto w-full max-w-md transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Find Your College</CardTitle>
          <CardDescription>Enter your details to get college recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="percentile"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Percentile
                </label>
                <Input id="percentile" type="number" min="0" max="100" placeholder="Enter your percentile" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="category"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Category
                </label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                    <SelectItem value="ews">EWS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="branch"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Branch Preference
                </label>
                <MultiSelect
                  placeholder="Select branches"
                  options={[
                    { label: "Computer Science", value: "cs" },
                    { label: "Information Technology", value: "it" },
                    { label: "Electronics", value: "ece" },
                    { label: "Electrical", value: "ee" },
                    { label: "Mechanical", value: "me" },
                    { label: "Civil", value: "ce" },
                    { label: "Chemical", value: "che" },
                  ]}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="location"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Location
                </label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select preferred location" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="north">North India</SelectItem>
                    <SelectItem value="south">South India</SelectItem>
                    <SelectItem value="east">East India</SelectItem>
                    <SelectItem value="west">West India</SelectItem>
                    <SelectItem value="central">Central India</SelectItem>
                    <SelectItem value="any">Any Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/results" className="w-full">
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              <Search className="mr-2 h-4 w-4" /> Find Colleges
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
