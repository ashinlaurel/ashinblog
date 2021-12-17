import BlogPost from "../../components/blogpost/BlogPost";

async function getPost(slug: string) {
  //  const res = api
  // const posts = res.posts;
  // return posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

function About() {
  return <BlogPost />;
}

export default About;
