
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mentors, courses } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const MentorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  // Find the mentor by ID
  const mentor = mentors.find(mentor => mentor.id === id);
  
  if (!mentor) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Mentor not found</h1>
          <Link to="/mentors" className="text-careerspark-purple hover:underline">
            Browse all mentors
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Filter courses by this mentor
  const mentorCourses = courses.filter(course => course.instructor === mentor.name);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message sent!",
      description: "Your message has been sent to the mentor.",
    });
    
    setMessage("");
    setDialogOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-careerspark-soft-gray py-10">
        <div className="container mx-auto px-4">
          {/* Mentor header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 flex flex-col items-center">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-6">
                  <img src={mentor.avatar} alt={mentor.name} className="h-full w-full object-cover" />
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold">{mentor.name}</h1>
                  <p className="text-gray-600 mb-2">{mentor.title} at {mentor.company}</p>
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex mr-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < mentor.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500">{mentor.rating} ({mentor.reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="w-full space-y-4">
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple">
                        Message Mentor
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Send message to {mentor.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="flex items-center gap-4 mb-4">
                          <img src={mentor.avatar} alt={mentor.name} className="h-10 w-10 rounded-full" />
                          <div>
                            <p className="font-semibold">{mentor.name}</p>
                            <p className="text-sm text-gray-500">{mentor.title} at {mentor.company}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Your message</Label>
                          <Textarea 
                            id="message"
                            placeholder="Type your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                          />
                          <p className="text-sm text-gray-500">
                            Be specific about what you're looking for help with
                          </p>
                        </div>
                        <Button 
                          className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple"
                          onClick={handleSendMessage}
                          disabled={!message.trim()}
                        >
                          Send Message
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" className="w-full border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
                    Schedule Session
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-gray-700 mb-4">{mentor.bio}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-gray-800">Experience</h3>
                      <p className="text-gray-600">{mentor.experience}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Languages</h3>
                      <p className="text-gray-600">English, Spanish</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Expertise</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-careerspark-soft-gray text-careerspark-purple">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Available For</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mentor.availableFor.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-careerspark-green" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs content */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="courses">
                {mentorCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mentorCourses.map(course => (
                      <Card key={course.id}>
                        <div className="relative h-40 overflow-hidden">
                          <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                          <Badge className="absolute top-2 right-2 bg-careerspark-purple">{course.category}</Badge>
                        </div>
                        <CardContent className="p-4">
                          <Link to={`/courses/${course.id}`} className="hover:text-careerspark-purple">
                            <h3 className="font-semibold text-lg line-clamp-2 mb-1">{course.title}</h3>
                          </Link>
                          <div className="flex items-center gap-1 mb-2">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <svg 
                                  key={i}
                                  className={`w-4 h-4 ${i < course.rating ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">({course.enrolledCount} students)</span>
                          </div>
                          <Link to={`/courses/${course.id}`}>
                            <Button className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple">
                              View Course
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="font-medium text-lg mb-2">No courses available yet</h3>
                    <p className="text-gray-500">This mentor hasn't published any courses yet.</p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="reviews">
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <img 
                          src={`https://randomuser.me/api/portraits/${review % 2 === 0 ? 'women' : 'men'}/${20 + review}.jpg`} 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">
                              {review === 1 ? "Alex Johnson" : review === 2 ? "Samantha Lee" : "Michael Chen"}
                            </h4>
                            <span className="text-xs text-gray-500">
                              {review === 1 ? "2 weeks ago" : review === 2 ? "1 month ago" : "3 months ago"}
                            </span>
                          </div>
                          <div className="flex mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < (review === 2 ? 4 : 5) ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-700">
                            {review === 1 
                              ? "Incredible mentor! Provided practical advice for my job search and helped me prepare for technical interviews that landed me my dream job." 
                              : review === 2 
                                ? "Very knowledgeable in the field. Offered great insights and feedback on my portfolio. Would recommend to anyone looking to improve their skills." 
                                : "The resume review session was extremely helpful. Pointed out areas for improvement I hadn't considered and helped me highlight my achievements better."}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorDetail;
