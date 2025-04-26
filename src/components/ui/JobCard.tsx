
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  logo: string;
  postedDate: string;
  skills: string[];
}

const JobCard = ({
  id, title, company, location, salary, type, logo, postedDate, skills
}: JobCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md bg-careerspark-soft-blue p-2 flex items-center justify-center">
            <img src={logo} alt={company} className="max-h-full max-w-full" />
          </div>
          <div className="flex-1">
            <Link to={`/jobs/${id}`} className="hover:text-careerspark-purple">
              <h3 className="font-semibold text-lg">{title}</h3>
            </Link>
            <div className="text-gray-500 text-sm mb-2">
              {company} • {location}
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              <Badge variant="outline" className="bg-careerspark-soft-blue text-careerspark-purple border-none">
                {type}
              </Badge>
              <Badge variant="outline" className="bg-careerspark-soft-green text-careerspark-green border-none">
                {salary}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100">
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="secondary" className="bg-gray-100">
                  +{skills.length - 3}
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Posted {postedDate}</span>
              <Link to={`/jobs/${id}`}>
                <Button size="sm" className="bg-careerspark-purple hover:bg-careerspark-light-purple">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
