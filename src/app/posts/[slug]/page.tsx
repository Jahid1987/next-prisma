import { deletePost } from "@/actions/post";
import prisma from "@/db/db";
import Link from "next/link";
import { unstable_cache as cache } from "next/cache";

const getCachedPost = cache((slug) => {
return prisma.post.findUnique({
    where: {slug},
})
})


const PostDetails =async ({params}: {params: {slug: string}}) => {
    
    const post = await getCachedPost(params.slug)

    return (
        <div className="text-center mt-4">
          <h3 className="text-xl">Post Details </h3>
          <h1 className="font-medium">{post?.title}</h1>
          <p className="text-gray-500">{post?.content}</p>
          <div>
          <div className="flex justify-center gap-2">
          <Link href={`/posts/edit/${post?.id}`}> <button type="submit" className="border bg-green-600 text-white p-2 rounded-md">Edit Post</button></Link>
           <form action={deletePost}>
            <input type="text" name="id" value={post?.id} hidden/>
            <button type="submit" className="border bg-red-600 text-white p-2 rounded-md">Delete Post</button>
           </form>
          </div>
          </div>
        </div>
    );
};

export default PostDetails;