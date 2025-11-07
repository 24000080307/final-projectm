import { useState } from "react";
import Navbar from "@/components/Navbar";
import ActivityCard from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import sportsImage from "@/assets/activity-sports.jpg";
import clubsImage from "@/assets/activity-clubs.jpg";
import eventsImage from "@/assets/activity-events.jpg";

const activities = [
  {
    id: 1,
    title: "Basketball Team Practice",
    description: "Join our competitive basketball team for weekly practice sessions. Open to all skill levels.",
    category: "Sports",
    participants: 24,
    date: "Every Tuesday & Thursday, 6:00 PM",
    location: "Main Gymnasium",
    image: sportsImage
  },
  {
    id: 2,
    title: "Photography Club",
    description: "Learn photography techniques, share your work, and participate in campus photo walks.",
    category: "Clubs",
    participants: 18,
    date: "Wednesdays, 4:00 PM",
    location: "Arts Building, Room 204",
    image: clubsImage
  },
  {
    id: 3,
    title: "Annual Tech Summit",
    description: "A day-long event featuring tech talks, workshops, and networking opportunities.",
    category: "Events",
    participants: 150,
    date: "March 15, 2024, 9:00 AM",
    location: "Convention Center",
    image: eventsImage
  },
  {
    id: 4,
    title: "Debate Society",
    description: "Develop critical thinking and public speaking skills through weekly debates.",
    category: "Clubs",
    participants: 22,
    date: "Mondays, 5:30 PM",
    location: "Library Conference Room",
    image: clubsImage
  },
  {
    id: 5,
    title: "Soccer Intramurals",
    description: "Recreational soccer league with matches every weekend. Form your team today!",
    category: "Sports",
    participants: 64,
    date: "Saturdays, 10:00 AM",
    location: "West Field",
    image: sportsImage
  },
  {
    id: 6,
    title: "Spring Festival",
    description: "Celebrate spring with music, food, games, and performances from student groups.",
    category: "Events",
    participants: 300,
    date: "April 20, 2024, 12:00 PM",
    location: "Campus Quad",
    image: eventsImage
  }
];

const Activities = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredActivities = activities.filter(activity => {
    const matchesFilter = filter === "All" || activity.category === filter;
    const matchesSearch = activity.title.toLowerCase().includes(search.toLowerCase()) ||
                         activity.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Explore Activities</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover extracurricular opportunities that match your interests and schedule
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <Tabs value={filter} onValueChange={setFilter} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Sports">Sports</TabsTrigger>
                <TabsTrigger value="Clubs">Clubs</TabsTrigger>
                <TabsTrigger value="Events">Events</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search activities..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {filteredActivities.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} {...activity} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-lg text-muted-foreground">No activities found matching your criteria</p>
              <Button 
                variant="outline" 
                onClick={() => { setFilter("All"); setSearch(""); }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activities;
