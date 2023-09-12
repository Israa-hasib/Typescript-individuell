import { useNavigate } from 'react-router-dom';


const PostList = () => {
    const navigate = useNavigate()
    const savedPosts: PostData[] = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(savedPosts);
    {}
    return (
      <div>
        <div>
          {savedPosts.map(function(post){
            console.log("POSTS", post.creator)
            return(
              <div key={post.id} className="post" id="post" onClick={() =>{
                navigate(`/post/${post.id}`)
                }}>
                <h3>Title: {post.title}</h3>
                <p>Price: {post.price}</p>
                <p>Description: {post.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default PostList;