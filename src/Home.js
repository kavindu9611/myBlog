import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const{data:blogs , isPending , error} = useFetch('https://my-json-server.typicode.com/kavindu9611/myBlogDB');

    return (
        <div className="Home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs = {blogs} title = "All Blogs!"  />} 
        
          
        </div>
      );
}
 
export default Home;
