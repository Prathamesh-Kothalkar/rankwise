"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FunctionSquare } from "lucide-react";


function handleSubmit(e:any){
    e.preventDefault();
    alert("Thank Your Showing Interest, This feature is under development. Back in 2-4 hours when it is ready.");
}
export default function ContactButton() {
    return (
        <>
            {/* Fixed Footer Section */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md px-4 py-3 flex flex-col sm:flex-row items-center justify-between z-50">
                <p className="text-sm sm:text-base font-medium text-gray-800 mb-2 sm:mb-0">
                    Get a Personalized list of Colleges based on your CET Rank
                </p>

                <div className="flex gap-2">
                    <a href="tel:+919595444319">
                        <Button className="bg-[#0E665F] hover:bg-[#0E665F] text-white">
                            Call Now
                        </Button>
                    </a>


                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="border-[#0E665F] text-[#0E665F] hover:bg-[#0E665F] hover:text-white">
                                Call Request
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Request a Callback</DialogTitle>
                                <DialogDescription>
                                    Fill out the form and our counselor will get in touch with you.
                                </DialogDescription>
                            </DialogHeader>

                            <form className="space-y-4" onSubmit={(e)=>handleSubmit(e)}>
                                <div>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" type="text" placeholder="Full Name" required />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="number" placeholder="9876543210" required />
                                </div>
                                <Button type="submit" className="w-full bg-[#0E665F] text-white hover:bg-[#0E665F]">
                                    Submit Request
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    );
}
