
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
                <div className="flex flex-col gap-3 justify-center items-center border p-3 rounded-md" key={post.slug}>
                <p >{post.title} </p>
                <Link href={`/posts/${post.slug}`}>
                <button className="inline border-b-gray-500 p-2 px-4 border rounded-lg outline-none">View Details</button>
                </Link>
                </div>
              ))
            }
          </div>
        </div>
    );
};

export default PostPage;