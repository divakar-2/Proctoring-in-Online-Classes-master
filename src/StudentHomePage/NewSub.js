
const NewSub=({set},props)=>{
    console.log(props.subname);
    return ()=>set(props.subname);
}
export default NewSub;