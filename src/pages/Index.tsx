import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start exploring activities and make your mark on campus today
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
