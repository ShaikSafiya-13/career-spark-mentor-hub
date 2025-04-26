
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/ui/JobCard";
import MentorCard from "@/components/ui/MentorCard";
import CourseCard from "@/components/ui/CourseCard";
import { jobs, mentors, courses } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch Your Career with Expert Guidance
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Find jobs, connect with mentors, and access free training to accelerate your career growth
            </p>
            <div className="bg-white p-2 rounded-lg flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Job title, skill, or keyword"
                  className="w-full pl-10 pr-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-careerspark-purple"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
              <Button className="bg-careerspark-purple hover:bg-careerspark-light-purple whitespace-nowrap">
                Find Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-careerspark-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-careerspark-purple mb-2">1,200+</h3>
              <p className="text-gray-600">Active Job Listings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-careerspark-purple mb-2">50+</h3>
              <p className="text-gray-600">Professional Mentors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-careerspark-purple mb-2">100+</h3>
              <p className="text-gray-600">Free Training Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-careerspark-purple hover:text-careerspark-light-purple font-medium">
              View All Jobs →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.slice(0, 3).map(job => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-careerspark-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Learn From Industry Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with experienced professionals for personalized guidance on your career journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map(mentor => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/mentors">
              <Button variant="outline" className="border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
                Explore All Mentors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Free Training Courses</h2>
            <Link to="/courses" className="text-careerspark-purple hover:text-careerspark-light-purple font-medium">
              View All Courses →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take the next step in your career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Create your job seeker profile today to access personalized job recommendations, mentoring opportunities, and free training resources
          </p>
          <Link to="/signup">
            <Button className="bg-white text-careerspark-purple hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
