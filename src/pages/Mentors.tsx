
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MentorCard from "@/components/ui/MentorCard";
import { mentors } from "@/data/mockData";
import { Search, Users, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(mentors);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mentors.filter(mentor => 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      mentor.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredMentors(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="bg-careerspark-soft-gray min-h-screen">
        {/* Hero section */}
        <div className="bg-white py-10 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Connect with Mentors</h1>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Mentor name, position, company, or expertise"
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button type="submit" className="bg-careerspark-purple hover:bg-careerspark-light-purple">
                Find Mentors
              </Button>
            </form>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <Filter className="mr-2 h-5 w-5" /> Filters
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Industry */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">INDUSTRY</h3>
                      <div className="space-y-2">
                        {['Technology', 'Finance', 'Healthcare', 'Education', 'Marketing'].map((industry) => (
                          <div key={industry} className="flex items-center">
                            <Checkbox id={`industry-${industry}`} className="mr-2" />
                            <label htmlFor={`industry-${industry}`} className="text-sm cursor-pointer">{industry}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Experience Level */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">EXPERIENCE LEVEL</h3>
                      <div className="space-y-2">
                        {['5+ years', '10+ years', '15+ years', '20+ years'].map((level) => (
                          <div key={level} className="flex items-center">
                            <Checkbox id={`level-${level}`} className="mr-2" />
                            <label htmlFor={`level-${level}`} className="text-sm cursor-pointer">{level}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Availability */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">AVAILABILITY</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Availability</SelectItem>
                          <SelectItem value="high">High Availability</SelectItem>
                          <SelectItem value="medium">Medium Availability</SelectItem>
                          <SelectItem value="low">Low Availability</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Expertise Areas */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">EXPERTISE</h3>
                      <div className="space-y-2">
                        {['Career Guidance', 'Technical Skills', 'Leadership', 'Interview Prep', 'Resume Building', 'Networking'].map((expertise) => (
                          <div key={expertise} className="flex items-center">
                            <Checkbox id={`expertise-${expertise}`} className="mr-2" />
                            <label htmlFor={`expertise-${expertise}`} className="text-sm cursor-pointer">{expertise}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Clear Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Mentors List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600">
                  Showing <span className="font-semibold">{filteredMentors.length}</span> mentors
                </div>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                    <SelectItem value="availability">Most Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredMentors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredMentors.map((mentor) => (
                    <MentorCard key={mentor.id} {...mentor} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-white rounded-lg">
                  <Users className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">No mentors found</h3>
                  <p className="mt-1 text-gray-500">
                    Try adjusting your search terms or filters
                  </p>
                  <Button
                    className="mt-6 bg-careerspark-purple hover:bg-careerspark-light-purple"
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredMentors(mentors);
                    }}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mentors;
