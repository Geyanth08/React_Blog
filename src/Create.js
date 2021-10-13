import { useState } from "react";
import { useHistory } from "react-router";

function Create() {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('auth 1');
    const [isPending,setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog Added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title : </label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Body : </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <label>Author : </label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="auth 1">Author 1</option>
                    <option value="auth 2">Author 2</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog......</button>}
            </form>
        </div>
     );
}

export default Create;