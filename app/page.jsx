import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="purple_gradient text-center">
          {" "}
          LLM-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Proompter is an open-source repository for diverse prompts, designed to
        supercharge your large language models including GPT, LLaMa, and more.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
