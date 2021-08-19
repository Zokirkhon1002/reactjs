export default function PostLists(props){
    const {cb, name } = props;
    return <p onClick={cb}>{name}</p>
}