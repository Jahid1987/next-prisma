import { editPost } from "@/actions/post";
import prisma from "@/db/db";

const EditPostPage =async ({params}: {params: {id: string}}) => {
    const post = await prisma.post.findUnique({
        where: {id: params.id}
    })
    return (
        <div className="flex flex-col justify-center items-center gap-5 p-2">         
          <h3 className="text-3xl font-bold text-center ">Edit Post</h3>
            <form action={editPost} method="post" className="flex mt-5 flex-col gap-2 items-start">
                <input type="text" name="id" hidden value={post?.id} />
                <input defaultValue={post?.title} type="text" name="title" placeholder="Type title here " className="border p-2" />
                <textarea defaultValue={post?.content} name="content" placeholder="Content here" className="border w-full p-2" rows={5} />
                <button type="submit" className="border bg-green-600 text-white p-2 rounded-md">Edit Post</button>
            </form>
        </div>
    );
};

export default EditPostPage;