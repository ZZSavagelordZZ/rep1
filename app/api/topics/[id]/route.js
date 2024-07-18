// api/topics/[id].js

import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import Cors from 'cors';

// Initializing CORS middleware
const cors = Cors({
  methods: ['GET', 'PUT'],
});

// Handler for GET requests to retrieve a topic by ID
export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });

    if (!topic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.error("Error fetching topic:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Handler for PUT requests to update a topic by ID
export const PUT = cors(async (request, { params }) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();

  try {
    await connectMongoDB();
    const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description });

    if (!updatedTopic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating topic:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
});
