export default function PostLists(props){
    const {cb, name, removePost, id } = props;
    return (
        <div>
            <p onClick={cb}>{name}  <button onClick={() => removePost(id)} className="danger">Delete</button>
            </p>

        </div>
    )
}