import { useState } from "react";
import { Search, Filter, Calendar, MapPin, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import conference1 from "@/assets/conference-1.jpg";
import conference2 from "@/assets/conference-2.jpg";
import conference3 from "@/assets/conference-3.jpg";
import conference4 from "@/assets/conference-4.jpg";

const GeneralFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const allResults = [
    { type: "Conference", title: "International AI Summit 2024", location: "New York, USA", date: "Dec 15-17, 2024", category: "Computer Science", image: conference1 },
    { type: "Journal", title: "Nature Machine Intelligence", publisher: "Nature Publishing Group", impact: "25.898", category: "AI & ML", image: conference2 },
    { type: "Call for Papers", title: "Special Issue on Quantum Computing", deadline: "Jan 30, 2025", host: "Quantum Journal", category: "Physics", image: conference3 },
    { type: "Book Chapter", title: "Advances in Neural Networks - Call for Chapters", deadline: "Feb 15, 2025", publisher: "Springer", category: "Computer Science", image: conference4 },
    { type: "Project Call", title: "EU Horizon Research Grant - Green Energy", funding: "€2M-5M", deadline: "Mar 1, 2025", category: "Energy", image: conference1 },
    { type: "Collaboration", title: "Multi-Institution Cancer Research Initiative", partners: "5 Universities", location: "Europe", category: "Medicine", image: conference2 },
    { type: "Conference", title: "Global Climate Change Symposium", location: "Geneva, Switzerland", date: "Jan 20-22, 2025", category: "Environmental Science", image: conference3 },
    { type: "Journal", title: "IEEE Transactions on Robotics", publisher: "IEEE", impact: "6.835", category: "Robotics", image: conference4 },
    { type: "Call for Papers", title: "Sustainable Materials Conference", deadline: "Feb 28, 2025", host: "Materials Society", category: "Materials Science", image: conference1 },
    { type: "Book Chapter", title: "Handbook of Biomedical Engineering", deadline: "Mar 15, 2025", publisher: "Elsevier", category: "Biomedical", image: conference2 },
    { type: "Project Call", title: "NSF Innovation in Neuroscience", funding: "$500K-1M", deadline: "Apr 1, 2025", category: "Neuroscience", image: conference3 },
    { type: "Collaboration", title: "International Space Research Consortium", partners: "12 Institutions", location: "Global", category: "Space Science", image: conference4 },
  ];

  const filteredResults = activeTab === "all" 
    ? allResults 
    : allResults.filter(item => item.type.toLowerCase().replace(" ", "-") === activeTab);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Computer Science": "bg-badge-blue text-badge-blue-foreground",
      "AI & ML": "bg-badge-purple text-badge-purple-foreground",
      "Physics": "bg-badge-orange text-badge-orange-foreground",
      "Energy": "bg-badge-green text-badge-green-foreground",
      "Medicine": "bg-badge-blue text-badge-blue-foreground",
      "Environmental Science": "bg-badge-green text-badge-green-foreground",
      "Robotics": "bg-badge-purple text-badge-purple-foreground",
      "Materials Science": "bg-badge-orange text-badge-orange-foreground",
      "Biomedical": "bg-badge-blue text-badge-blue-foreground",
      "Neuroscience": "bg-badge-purple text-badge-purple-foreground",
      "Space Science": "bg-badge-orange text-badge-orange-foreground",
    };
    return colors[category] || "bg-badge-blue text-badge-blue-foreground";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <div className="bg-gradient-to-br from-hero to-hero/60 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Universal Research Finder</h1>
            <p className="text-xl mb-8 text-white/90">
              Search across conferences, journals, calls, projects, and collaborations
            </p>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search anything: conferences, journals, funding opportunities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-0 focus-visible:ring-0 text-foreground"
                  />
                </div>
                <Button size="lg">Search</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-7 mb-6">
              <TabsTrigger value="all">All Results</TabsTrigger>
              <TabsTrigger value="conference">Conferences</TabsTrigger>
              <TabsTrigger value="journal">Journals</TabsTrigger>
              <TabsTrigger value="call-for-papers">Calls</TabsTrigger>
              <TabsTrigger value="book-chapter">Book Chapters</TabsTrigger>
              <TabsTrigger value="project-call">Projects</TabsTrigger>
              <TabsTrigger value="collaboration">Collaborations</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredResults.length} results
            </p>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          <div className="space-y-4">
            {filteredResults.map((result, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-2">
                          <Badge variant="outline">{result.type}</Badge>
                          <Badge className={getCategoryColor(result.category)}>
                            {result.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {result.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        {result.type === "Conference" && (
                          <>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {result.location}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {result.date}
                            </p>
                          </>
                        )}
                        {result.type === "Journal" && (
                          <>
                            <p className="text-sm text-muted-foreground">
                              Publisher: {result.publisher}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Impact Factor: {result.impact}
                            </p>
                          </>
                        )}
                        {(result.type === "Call for Papers" || result.type === "Book Chapter") && (
                          <>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Deadline: {result.deadline}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {result.type === "Call for Papers" ? "Host" : "Publisher"}: {result.host || result.publisher}
                            </p>
                          </>
                        )}
                        {result.type === "Project Call" && (
                          <>
                            <p className="text-sm text-muted-foreground">
                              Funding: {result.funding}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Deadline: {result.deadline}
                            </p>
                          </>
                        )}
                        {result.type === "Collaboration" && (
                          <>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {result.partners}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {result.location}
                            </p>
                          </>
                        )}
                      </div>
                      
                      <Button>View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GeneralFinder;