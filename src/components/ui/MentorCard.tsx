
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface MentorCardProps {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  expertise: string[];
  rating: number;
  reviewCount: number;
}

const MentorCard = ({
  id, name, title, company, avatar, expertise, rating, reviewCount
}: MentorCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="h-24 w-24 rounded-full overflow-hidden mb-4">
            <img src={avatar} alt={name} className="h-full w-full object-cover" />
          </div>
          <Link to={`/mentors/${id}`} className="hover:text-careerspark-purple">
            <h3 className="font-semibold text-lg">{name}</h3>
          </Link>
          <div className="text-gray-500 text-sm mb-2">
            {title} at {company}
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
            <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {expertise.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-careerspark-soft-gray">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={`/mentors/${id}`}>
            <Button variant="outline" className="border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
              View Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
