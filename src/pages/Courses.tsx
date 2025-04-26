
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/mockData";
import { Search, Book, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredCourses(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="bg-careerspark-soft-gray min-h-screen">
        {/* Hero section */}
        <div className="bg-white py-10 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Explore Courses & Training</h1>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Course title, instructor, or skill"
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button type="submit" className="bg-careerspark-purple hover:bg-careerspark-light-purple">
                Search Courses
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
                    {/* Course Level */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">COURSE LEVEL</h3>
                      <div className="space-y-2">
                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                          <div key={level} className="flex items-center">
                            <Checkbox id={`level-${level}`} className="mr-2" />
                            <label htmlFor={`level-${level}`} className="text-sm cursor-pointer">{level}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">DURATION</h3>
                      <div className="space-y-2">
                        {['Short (<3 hours)', 'Medium (3-10 hours)', 'Long (>10 hours)'].map((duration) => (
                          <div key={duration} className="flex items-center">
                            <Checkbox id={`duration-${duration}`} className="mr-2" />
                            <label htmlFor={`duration-${duration}`} className="text-sm cursor-pointer">{duration}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">RATING</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select minimum rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Rating</SelectItem>
                          <SelectItem value="4+">4+ Stars</SelectItem>
                          <SelectItem value="3+">3+ Stars</SelectItem>
                          <SelectItem value="2+">2+ Stars</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">SKILLS</h3>
                      <div className="space-y-2">
                        {['Web Development', 'Data Science', 'UX Design', 'Cloud Computing', 'DevOps', 'Mobile Development'].map((skill) => (
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
            
            {/* Courses List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600">
                  Showing <span className="font-semibold">{filteredCourses.length}</span> courses
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-white rounded-lg">
                  <Book className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">No courses found</h3>
                  <p className="mt-1 text-gray-500">
                    Try adjusting your search terms or filters
                  </p>
                  <Button
                    className="mt-6 bg-careerspark-purple hover:bg-careerspark-light-purple"
                    onClick={() => {
                      setSearchTerm("");
                      setFilteredCourses(courses);
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

export default Courses;
