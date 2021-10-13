import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

function BlogDetails(){

    const { id } = useParams();
    const { data : blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/' + blog.id ,{
            method : 'DELETE',
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading.....</div>}
            { error && <div> { error }  </div>}

            { blog && (
                <div>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;