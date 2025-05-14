import { getServerSession } from "next-auth";

import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";


export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new Response("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { profile: true },
    });

    if (!user || !user.profile) {
      return new Response("Profile not found", { status: 404 });
    }

    return Response.json({
      name: user.name,
      email: user.profile.email,
      phone: user.profile.mobile,
      percentile: user.profile.percentile,
      branches: user.profile.interestedBranches,
      location: user.profile.interestedCities,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new Response("Unauthorized", { status: 401 });
    }

    const requestData = await request.json();
    console.log("Request Data:", requestData);
    const { firstname, lastname, email, phone, percentile, branches, location } = requestData;
    const parsedPercentile = parseFloat(percentile);
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    await prisma.profile.upsert({
      where: { userId: user.id },
      update: {
        email,
        mobile: phone,
        percentile: parsedPercentile,
        interestedBranches: branches,
        interestedCities: location,
        firstname,
        lastname,
      },
      create: {
        userId: user.id,
        email,
        mobile: phone,
        percentile: parseFloat(percentile),
        interestedBranches: branches,
        interestedCities: location,
        firstname,
        lastname,
      },
    });

    return new Response("Profile saved", { status: 200 });

  } catch (error) {
    console.error("Error saving user profile:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
