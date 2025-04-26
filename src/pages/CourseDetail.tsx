
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses, jobs } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/ui/JobCard";
import { useToast } from "@/hooks/use-toast";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [enrolled, setEnrolled] = useState(false);

  // Find the course by ID
  const course = courses.find(course => course.id === id);
  
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Course not found</h1>
          <Link to="/courses" className="text-careerspark-purple hover:underline">
            Browse all courses
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleEnroll = () => {
    setEnrolled(true);
    toast({
      title: "Enrollment successful!",
      description: `You've successfully enrolled in "${course.title}"`,
    });
  };

  // Get related jobs
  const relatedJobs = jobs.filter(job => course.relatedJobs?.includes(job.id));

  return (
    <>
      <Navbar />
      <div className="bg-careerspark-soft-gray py-10">
        <div className="container mx-auto px-4">
          {/* Course header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-gray-700 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-careerspark-soft-blue text-careerspark-purple border-none">
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="bg-careerspark-soft-green text-careerspark-green border-none">
                    {course.duration}
                  </Badge>
                  <Badge variant="secondary">{course.category}</Badge>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex mr-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < course.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {course.rating} • {course.enrolledCount.toLocaleString()} students enrolled
                  </div>
                </div>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt={course.instructor} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">Created by</p>
                    <Link to="/mentors/mentor1" className="text-careerspark-purple hover:underline">
                      {course.instructor}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-careerspark-soft-gray rounded-lg p-6">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-48 object-contain mb-4 bg-white p-4 rounded-md"
                  />
                  <h3 className="text-xl font-bold mb-2">This course includes:</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-careerspark-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {course.duration} of on-demand video
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-careerspark-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Full lifetime access
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-careerspark-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Certificate of completion
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-careerspark-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Downloadable resources
                    </li>
                  </ul>
                  <Button 
                    onClick={handleEnroll} 
                    disabled={enrolled} 
                    className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple mb-3"
                  >
                    {enrolled ? "Enrolled" : "Enroll Now - Free"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Course content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="content">Course Content</TabsTrigger>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  </TabsList>
                  <TabsContent value="content" className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Course Content</h3>
                      <div className="text-sm text-gray-500">
                        {course.chapters.length} sections • {course.duration} total
                      </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      {course.chapters.map((chapter, index) => (
                        <AccordionItem key={index} value={`chapter-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex justify-between w-full pr-4">
                              <span>
                                {index + 1}. {chapter.title}
                              </span>
                              <span className="text-sm text-gray-500">{chapter.duration}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-4 border-l-2 border-gray-200 ml-4">
                              <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                  </svg>
                                  <div>
                                    <p className="font-medium">Introduction to the chapter</p>
                                    <p className="text-sm text-gray-500">15:30</p>
                                  </div>
                                </li>
                                <li className="flex items-start gap-3">
                                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                  </svg>
                                  <div>
                                    <p className="font-medium">Core concepts</p>
                                    <p className="text-sm text-gray-500">22:15</p>
                                  </div>
                                </li>
                                <li className="flex items-start gap-3">
                                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                  </svg>
                                  <div>
                                    <p className="font-medium">Assignment: Practical exercise</p>
                                    <p className="text-sm text-gray-500">Assignment</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  <TabsContent value="description">
                    <div className="space-y-4">
                      <p className="text-gray-700">{course.description}</p>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">What you'll learn</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-careerspark-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Build professional real-world projects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-careerspark-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Master industry-standard tools and libraries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-careerspark-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Learn best practices for writing maintainable code</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-careerspark-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Gain the skills needed for a career in this field</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Basic programming knowledge</li>
                          <li>Computer with internet connection</li>
                          <li>Enthusiasm for learning new skills</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="instructor">
                    <div className="flex items-start gap-4 mb-6">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt={course.instructor} 
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{course.instructor}</h3>
                        <p className="text-gray-500">Data Science Manager at Amazon</p>
                        <div className="flex items-center mt-1">
                          <div className="flex mr-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg 
                                key={i} 
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <div className="text-sm text-gray-500">
                            20+ courses • 50,000+ students
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Data science leader with expertise in machine learning and big data. I help aspiring data scientists build practical skills and land their dream jobs.
                    </p>
                    <Link to="/mentors/mentor2" className="text-careerspark-purple hover:underline">
                      View full profile
                    </Link>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="lg:col-span-1">
              {relatedJobs.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Job Opportunities</h3>
                  <div className="space-y-4">
                    {relatedJobs.map(job => (
                      <JobCard key={job.id} {...job} />
                    ))}
                  </div>
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

export default CourseDetail;
