import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Journals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const journals = [
    {
      title: "Journal of Advanced Sciences",
      publisher: "Academic Press",
      impact: "4.5",
      category: "Science",
    },
    {
      title: "International Journal of Technology",
      publisher: "Tech Publications",
      impact: "3.8",
      category: "Technology",
    },
    {
      title: "Review of Medical Research",
      publisher: "Medical Insights",
      impact: "5.2",
      category: "Medicine",
    },
    {
      title: "Journal of Environmental Studies",
      publisher: "Eco Press",
      impact: "4.1",
      category: "Environment",
    },
    {
      title: "Advances in Business Management",
      publisher: "Business Publications",
      impact: "3.5",
      category: "Business",
    },
    {
      title: "Journal of Social Sciences",
      publisher: "Social Studies Press",
      impact: "3.9",
      category: "Social Sciences",
    },
    {
      title: "Journal of Arts and Humanities",
      publisher: "Arts & Humanities Press",
      impact: "2.8",
      category: "Arts & Humanities",
    },
    {
      title: "Journal of Engineering Innovations",
      publisher: "Engineering Innovations Press",
      impact: "4.7",
      category: "Engineering",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Science: "bg-badge-blue text-badge-blue-foreground",
      Technology: "bg-badge-purple text-badge-purple-foreground",
      Medicine: "bg-badge-green text-badge-green-foreground",
      Environment: "bg-badge-green text-badge-green-foreground",
      Business: "bg-badge-orange text-badge-orange-foreground",
      "Social Sciences": "bg-badge-blue text-badge-blue-foreground",
      "Arts & Humanities": "bg-badge-purple text-badge-purple-foreground",
      Engineering: "bg-badge-orange text-badge-orange-foreground",
    };
    return colors[category] || "bg-badge-blue text-badge-blue-foreground";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1">
        <div className="bg-card border-b border-border py-12 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Journals</h1>
            <p className="text-muted-foreground mb-8">
              Explore a comprehensive list of academic journals. Refine your search to find the perfect match.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search and Filters */}
          <div className="bg-card p-4 rounded-lg border border-border mb-6 sticky top-16 z-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for journals, publishers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Impact Factor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Impact Factors</SelectItem>
                  <SelectItem value="high">5.0+</SelectItem>
                  <SelectItem value="medium">3.0-5.0</SelectItem>
                  <SelectItem value="low">Below 3.0</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Publisher" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Publishers</SelectItem>
                  <SelectItem value="academic">Academic Press</SelectItem>
                  <SelectItem value="tech">Tech Publications</SelectItem>
                  <SelectItem value="medical">Medical Insights</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Journals Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">JOURNAL TITLE</TableHead>
                  <TableHead className="font-semibold">PUBLISHER</TableHead>
                  <TableHead className="font-semibold">IMPACT FACTOR</TableHead>
                  <TableHead className="font-semibold">CATEGORY</TableHead>
                  <TableHead className="font-semibold text-right">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {journals.map((journal, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{journal.title}</TableCell>
                    <TableCell className="text-muted-foreground">{journal.publisher}</TableCell>
                    <TableCell className="text-muted-foreground">{journal.impact}</TableCell>
                    <TableCell>
                      <Badge className={getCategoryColor(journal.category)}>
                        {journal.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Submit Paper</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journals;
