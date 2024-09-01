import prisma from "@/db/db";

const PostDetails =async ({params}: {params: {id: string}}) => {
    
    const post = await prisma.post.findUnique({
        where: {
            id: params.id
        }
    })
    return (
        <div className="text-center mt-4">
          <h3 className="text-xl">Post Details </h3>
          <h1 className="font-medium">{post?.title}</h1>
          <p className="text-gray-500">{post?.content}</p>
        </div>
    );
};

export default PostDetails;