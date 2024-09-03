import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: 'Post 1',
        slug: "post-1",
        content: 'Content of post 1',
        User: {
            connectOrCreate: {
                where: {
                    email: 'jahid@gmail.com'
                },
                create: {
                    email: 'jahid@gmail.com',
                    hashedPassword: 'password1',
                    name: 'Jahid'
                }
            }
        }
    },
    {
        title: 'Post 2',
        slug: "post-2",
        content: 'Content of post 2',
        User: {
            connectOrCreate: {
                where: {
                    email: 'holy@gmail.com'
                },
                create: {
                    email: 'holy@gmail.com',
                    hashedPassword: 'password2',
                    name: 'Holy'
                }
            }
        }
    },
    {
        title: 'Post 3',
        slug: "post-3",
        content: 'Content of post 3',
        User: {
            connectOrCreate: {
                where: {
                    email: 'anwer@gmail.com'
                },
                create: {
                    email: 'anwer@gmail.com',
                    hashedPassword: 'password3',
                    name: 'Anwer'
                }
            }
        }
    },
    {
        title: 'Post 4',
        slug: "post-4",
        content: 'Content of post 4',
        User: {
            connectOrCreate: {
                where: {
                    email: 'jahid@gmail.com'
                },
                create: {
                    email: 'jahid@gmail.com',
                    hashedPassword: 'password4',
                    name: 'Jahid'
                }
            }
        }
    },
    {
        title: 'Post 5',
        slug: "post-5",
        content: 'Content of post 5',
        User: {
            connectOrCreate: {
                where: {
                    email: 'holy@gmail.com'
                },
                create: {
                    email: 'holy@gmail.com',
                    hashedPassword: 'password5',
                    name: 'Holy'
                }
            }
        }
    },
    {
        title: 'Post 6',
        slug: "post-6",
        content: 'Content of post 6',
        User: {
            connectOrCreate: {
                where: {
                    email: 'anwer@gmail.com'
                },
                create: {
                    email: 'anwer@gmail.com',
                    hashedPassword: 'password6',
                    name: 'Anwer'
                }
            }
        }
    },
    {
        title: 'Post 7',
        slug: "post-7",
        content: 'Content of post 7',
        User: {
            connectOrCreate: {
                where: {
                    email: 'jahid@gmail.com'
                },
                create: {
                    email: 'jahid@gmail.com',
                    hashedPassword: 'password7',
                    name: 'Jahid'
                }
            }
        }
    },
    {
        title: 'Post 8',
        slug: "post-8",
        content: 'Content of post 8',
        User: {
            connectOrCreate: {
                where: {
                    email: 'holy@gmail.com'
                },
                create: {
                    email: 'holy@gmail.com',
                    hashedPassword: 'password8',
                    name: 'Holy'
                }
            }
        }
    },
    {
        title: 'Post 9',
        slug: "post-9",
        content: 'Content of post 9',
        User: {
            connectOrCreate: {
                where: {
                    email: 'anwer@gmail.com'
                },
                create: {
                    email: 'anwer@gmail.com',
                    hashedPassword: 'password9',
                    name: 'Anwer'
                }
            }
        }
    },
    {
        title: 'Post 10',
        slug: "post-10",
        content: 'Content of post 10',
        User: {
            connectOrCreate: {
                where: {
                    email: 'jahid@gmail.com'
                },
                create: {
                    email: 'jahid@gmail.com',
                    hashedPassword: 'password10',
                    name: 'Jahid'
                }
            }
        }
    }
    

]

async function main() {
  console.log('Start seeding...')

  for(const post of initialPosts){
    const newPost = await prisma.post.create({
        data: post,
    })
    console.log(`Created post with id: ${newPost.id}`)
  }
  console.log('Seeding finished')

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

 