
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/ui/JobCard";
import { jobs } from "@/data/mockData";
import { Search, Briefcase, MapPin, DollarSign, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="bg-careerspark-soft-gray min-h-screen">
        {/* Hero section */}
        <div className="bg-white py-10 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Find Your Perfect Job</h1>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Job title, company, or skill"
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button type="submit" className="bg-careerspark-purple hover:bg-careerspark-light-purple">
                Search Jobs
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
                    {/* Job Type */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">JOB TYPE</h3>
                      <div className="space-y-2">
                        {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                          <div key={type} className="flex items-center">
                            <Checkbox id={`type-${type}`} className="mr-2" />
                            <label htmlFor={`type-${type}`} className="text-sm cursor-pointer">{type}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Experience Level */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">EXPERIENCE LEVEL</h3>
                      <div className="space-y-2">
                        {['Entry Level', 'Mid Level', 'Senior Level', 'Manager'].map((level) => (
                          <div key={level} className="flex items-center">
                            <Checkbox id={`level-${level}`} className="mr-2" />
                            <label htmlFor={`level-${level}`} className="text-sm cursor-pointer">{level}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Salary Range */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">SALARY RANGE</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="0-50k">$0 - $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                          <SelectItem value="150k+">$150k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">SKILLS</h3>
                      <div className="space-y-2">
                        {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'SQL'].map((skill) => (
                          <div key={skill} className="flex items-center">
                            <Checkbox id={`skill-${skill}`} className="mr-2" />
                            <label htmlFor={`skill-${skill}`} className="text-sm cursor-pointer">{skill}</label>
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
            
            {/* Jobs List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600">
                  Showing <span className="font-semibold">{filteredJobs.length}</span> jobs
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="relevant">Most relevant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-white rounded-lg">
                  <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">No jobs found</h3>
                  <p className="mt-1 text-gray-500">
                    Try adjusting your search terms or filters
                  </p>
                  <Button
                    className="mt-6 bg-careerspark-purple hover:bg-careerspark-light-purple"
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredJobs(jobs);
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

export default Jobs;
