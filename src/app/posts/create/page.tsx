import { createPost } from "@/actions/post";

const CreatePostPage = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-5 p-2">         
          <h3 className="text-3xl font-bold text-center ">Create Post</h3>
            <form action={createPost} method="post" className="flex mt-5 flex-col gap-2 items-start">
                <input type="text" name="title" placeholder="Type title here " className="border p-2" />
                <textarea name="content" placeholder="Content here" className="border w-full p-2" rows={5} />
                <button type="submit" className="border bg-green-600 text-white p-2 rounded-md">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostPage;