
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { jobs, courses } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/ui/CourseCard";
import { useToast } from "@/hooks/use-toast";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Find the job by ID
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Job not found</h1>
          <Link to="/jobs" className="text-careerspark-purple hover:underline">
            Browse all jobs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Find relevant courses for this job
  const relevantCourses = courses.filter(course => 
    course.relatedJobs?.includes(job.id) || 
    job.skills.some(skill => course.title.toLowerCase().includes(skill.toLowerCase()))
  ).slice(0, 2);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application submitted!",
      description: "Your job application has been submitted successfully.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setFile(null);
    setDialogOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-careerspark-soft-gray py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Job Header */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-md bg-careerspark-soft-blue p-3 flex items-center justify-center">
                    <img src={job.logo} alt={job.company} className="max-h-full max-w-full" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                    <p className="text-lg text-gray-700 mb-3">
                      {job.company} • {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-careerspark-soft-blue text-careerspark-purple border-none">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="bg-careerspark-soft-green text-careerspark-green border-none">
                        {job.salary}
                      </Badge>
                      <Badge variant="secondary">
                        {job.postedDate}
                      </Badge>
                    </div>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-careerspark-purple hover:bg-careerspark-light-purple">
                          Apply Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input 
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="resume">Resume</Label>
                            <Input 
                              id="resume"
                              type="file"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              required
                            />
                            <p className="text-xs text-gray-500">
                              Upload your resume (PDF, DOC, DOCX)
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Cover Letter</Label>
                            <Textarea 
                              id="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Why are you a good fit for this position?"
                              rows={5}
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple"
                          >
                            Submit Application
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="mb-6 text-gray-700">
                  {job.description}
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Responsibilities:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Design and implement new features and functionality</li>
                    <li>Build reusable code and libraries for future use</li>
                    <li>Ensure the technical feasibility of UI/UX designs</li>
                    <li>Optimize applications for maximum speed and scalability</li>
                    <li>Collaborate with team members and stakeholders</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
                    <li>Thorough understanding of React.js and its core principles</li>
                    <li>Experience with popular React.js workflows (such as Redux)</li>
                    <li>Familiarity with newer specifications of ECMAScript</li>
                    <li>Experience with data structure libraries (e.g., Immutable.js)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Required Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-careerspark-soft-gray">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">About {job.company}</h2>
                <p className="mb-4 text-gray-700">
                  {job.company} is a leading technology company focused on building innovative solutions that solve real-world problems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{job.location}</span>
                  </div>
                  <Link to="#" className="text-careerspark-purple hover:underline">
                    View Company Profile
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Job Summary Card */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Job Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Job Title</span>
                      <span className="font-medium">{job.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company</span>
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Job Type</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Salary</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posted</span>
                      <span className="font-medium">{job.postedDate}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 my-4 pt-4">
                    <h3 className="text-lg font-semibold mb-2">Actions</h3>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => setDialogOpen(true)} 
                        className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple"
                      >
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skill-Building Resources */}
              {relevantCourses.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Boost Your Skills</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Improve your chances of getting hired with these relevant courses:
                    </p>
                    <div className="space-y-4">
                      {relevantCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                      ))}
                    </div>
                    <Link to="/courses">
                      <Button variant="link" className="mt-2 text-careerspark-purple hover:text-careerspark-light-purple p-0 h-auto">
                        View more courses →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
