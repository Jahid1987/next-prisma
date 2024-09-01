import prisma from "@/db/db";
import Link from "next/link";

const PostPage =async () => {

  const posts  = await prisma.post.findMany()

    return (
        <div className="text-center mt-4">
          <h3 className="text-xl">All posts <span className="font-bold">{posts.length}</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {
              posts?.map(post => (
                <div className="flex flex-col gap-3" key={post.id}>
                <p >{post.title} </p>
                <Link href={`/posts/${post.id}`}>
                <button className="border-b-gray-500 p-2 px-4 border rounded-lg outline-none">View Details</button>
                </Link>
                </div>
              ))
            }
          </div>
        </div>
    );
};

export default PostPage;