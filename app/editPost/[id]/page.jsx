import EditPostForm from "@/components/EditPostForm";

const getPostById = async(id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: "no-store"})
        if(!res.ok) {
            throw new Error ("Failed to feacth Post")
        }
        return res.json();
    }
    catch (error) {
        console.log(error);
    }
}

export default async function EditTopic ({params}) {
    const {id} = params;
    const {post} = await getPostById(id);
    const {title, description} = post;
    return (
       <EditPostForm title={title} description={description} id ={id}/>
    )
}