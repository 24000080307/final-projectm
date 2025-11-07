import { Calendar, Users, Bell, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "Browse and register for upcoming events, workshops, and activities across campus."
  },
  {
    icon: Users,
    title: "Join Communities",
    description: "Connect with clubs, sports teams, and student organizations that match your interests."
  },
  {
    icon: Bell,
    title: "Stay Updated",
    description: "Receive notifications about new activities, schedule changes, and important announcements."
  },
  {
    icon: BarChart,
    title: "Track Participation",
    description: "Monitor your involvement and build a comprehensive record of your extracurricular activities."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your extracurricular life with powerful tools designed for students
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
