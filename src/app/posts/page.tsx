import { createPost } from "@/actions/post";
import prisma from "@/db/db";
import Link from "next/link";

const PostPage = async () => {

  const posts  = await prisma.post.findMany({
    where: {
      title: {
        contains: 'post'
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      title: true,
      slug: true
    },
    take: 5,
    skip: 1
  })

const postCount = await prisma.post.count();

    return (
        <div className="text-center">
          <div className="flex items-center justify-between">
            <h3 className="text-xl">All posts <span className="font-bold">{postCount}</span></h3>
            <h3 className="text-xl cursor-pointer hover:border-b-blue-500">
              <Link href='/posts/create'>Create post <span className="text-2xl font-medium">+</span></Link>
            </h3>
          </div>
          
          <div className="mt-5 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-2">
            {
              posts?.map(post => (
                <div className="flex flex-col gap-3 border p-3 rounded-md" key={post.slug}>
                <p >{post.title} </p>
                <Link href={`/posts/${post.slug}`}>
                <button className="border-b-gray-500 p-2 px-4 border rounded-lg outline-none">View Details</button>
                </Link>
                </div>
              ))
            }
          </div>
          
          <div className="mt-5 flex flex-col justify-center items-center ">
          <h3 className="text-3xl font-bold text-center ">Create Post</h3>
            <form action={createPost} method="post" className="flex mt-5 flex-col gap-2 items-start">
                <input type="text" name="title" placeholder="Type title here " className="border p-2" />
                <input type="text" name="content" placeholder="Type content here " className="border p-2" />
                <button type="submit" className="border bg-green-600 text-white p-2 rounded-md">Create Post</button>
            </form>
          </div>
        </div>
    );
};

export default PostPage;