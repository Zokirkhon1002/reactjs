import PostLists from "./Postlists"

export default function Posts(props){
    const {callback, posts, removePost} = props;
    return (
        <div>
            {posts.map(post => (
                <PostLists key={post.id} id={post.id} name={post.name} cb={callback} removePost={removePost}/>
            ))}
        </div>
    )
}