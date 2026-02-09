import Blog from "./(pages)/blog/page";
import Category from "./(pages)/category/page";
import Phome from "./(pages)/phone/page";
import Products from "./(pages)/products/page";
import ShowCase from "./(pages)/showcase/page";

const Home = () => {
  return (
    <div>
      <ShowCase />
      <Category />
      <Products />
      <Phome />
      <Blog />
    </div>
  );
};

export default Home;
