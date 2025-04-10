import { Link } from "react-router-dom";
import useAllPosts from "../../../hooks/useAllPosts";
import Container from "../../Container";
import { FiClock, FiUser, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { format } from "date-fns";

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

interface UseAllPostsReturn {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
}

const getExcerpt = (html: string, limit = 150): string => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function BlogPosts() {
  const { posts, isLoading, error } = useAllPosts() as UseAllPostsReturn;

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="p-4 bg-red-50 rounded-lg text-red-700 text-center">
          ⚠️ Error loading posts. Please try again later.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-20 px-4 sm:px-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {/* Optional image placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                {post.feature_image_url && (
                  <img
                    src={post.feature_image_url}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <header>
                <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <FiUser className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiClock className="w-4 h-4" />
                    <time>{format(new Date(post.date), "MMM dd, yyyy")}</time>
                  </div>
                </div>
              </header>

              <p className="text-gray-600 leading-relaxed">
                {getExcerpt(post.content)}
              </p>

              <footer className="pt-4">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read More
                  <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </footer>
            </div>
          </motion.article>
        ))}
      </section>

      {!posts.length && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found</p>
        </div>
      )}
    </Container>
  );
}

export default BlogPosts;
