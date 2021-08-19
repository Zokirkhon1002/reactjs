import PostLists from "./Postlists"

export default function Posts(props){
    const {callback, posts} = props;
    return (
        <div>
            {posts.map(post => (
                <PostLists key={post.id} name={post.name} cb={callback}/>
            ))}
        </div>
    )
}