import BlogPost from "../../components/blogpost/BlogPost";
import ghostapi from "../../connectGhost";

async function getPost(slug: string) {
  let thepost = {};
  try {
    const res = await ghostapi.posts
      .read({ slug: slug })
      .then((post) => {
        console.log("received");
        thepost = post;
        // console.log(post);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.log(error);
  }
  console.log("checkerrrrr", thepost);
  return thepost;
}

export const getStaticProps = async ({ params }) => {
  try {
    const post = await getPost(params.slug);
    return {
      props: { post },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

function About(props) {
  // console.log("props", props);
  return <BlogPost thepost={props.post} />;
}

export default About;
