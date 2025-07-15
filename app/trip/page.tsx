import TripItinerary from "@/components/TripItenary";

export default function TripPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        Detailed Trip Itinerary
      </h1>
      <TripItinerary />
    </main>
  );
}
