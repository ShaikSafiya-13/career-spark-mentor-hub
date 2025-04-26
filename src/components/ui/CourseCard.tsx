
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  level: string;
  duration: string;
  category: string;
  rating: number;
  enrolledCount: number;
}

const CourseCard = ({
  id, title, instructor, thumbnail, level, duration, category, rating, enrolledCount
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-40 overflow-hidden">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        <Badge className="absolute top-2 right-2 bg-careerspark-purple">{category}</Badge>
      </div>
      <CardContent className="p-4">
        <Link to={`/courses/${id}`} className="hover:text-careerspark-purple">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        </Link>
        <div className="text-gray-500 text-sm mb-2">
          By {instructor}
        </div>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">({enrolledCount} students)</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className="bg-careerspark-soft-blue text-careerspark-purple border-none">
            {level}
          </Badge>
          <Badge variant="outline" className="bg-careerspark-soft-green text-careerspark-green border-none">
            {duration}
          </Badge>
        </div>
        <Link to={`/courses/${id}`}>
          <Button className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple">
            Enroll Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
