import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const BlogCard = ({post}) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <Card className="w-full flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-2/5 shrink-0 m-0 rounded-r-none"
      >
        {post.image && (
          <img 
            src={post.image.data} 
            alt={post.title} 
            className="h-full w-full object-cover"
          />
        )}
      </CardHeader>
      <CardBody className="p-6 flex flex-col justify-between">
        <div>
          <Typography variant="h4" color="blue-gray" className="mb-2 font-medium">
            {post.title}
          </Typography>
          <Typography variant="small" color="gray" className="mb-3 font-normal">
            {truncateText(post.description, 60)}
          </Typography>
          <Typography 
            variant="paragraph" 
            color="gray" 
            className="mb-6 line-clamp-2 text-base"
          >
            {truncateText(post.content, 100)}
          </Typography>
        </div>
        
        <Link to={`/readblog/${post._id}`}>
          <Button 
            variant="text" 
            className="flex items-center gap-2 px-2 text-gray-900 hover:text-gray-700"
          >
            Read More 
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </Link>
      </CardBody>
    </Card>
  )
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    _id : PropTypes.string.isRequired,
    image: PropTypes.shape({
      data: PropTypes.string
    }),
    content: PropTypes.string.isRequired
  })
}

export default BlogCard