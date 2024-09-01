import { redirect } from "next/navigation";

const CreatePostPage = () => {

  async function createPost2(formData: FormData){
    'use server'
        console.log(formData)
        return redirect('/posts/create')
    }
    return (
        <div className="flex flex-col gap-5 p-2">
            <h3 className="text-3xl font-bold text-center">Create Post</h3>
            <form action={createPost2}>
                <input type="text" name="title" placeholder="Type title here " className="border p-2" />
                <input type="text" name="content" placeholder="Type content here " className="border p-2" />
                <button type="submit" className="border bg-green-600 text-white p-2 rounded-md">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostPage;