import Image from "next/image";
import blog1 from "../../img/blog1.png";
import blog2 from "../../img/blog2.png";
import blog3 from "../../img/blog3.png";

const blogs = [
  {
    id: 1,
    title: "Accessorize Like a Pro",
    date: "10th January 2024",
    image: blog1,
  },
  {
    id: 2,
    title: "10 Timeless Wardrobe Staples",
    date: "3rd February 2024",
    image: blog2,
  },
  {
    id: 3,
    title: "The Art of Sustainable Fashion",
    date: "1st March 2024",
    image: blog3,
    isUnderlined: true,
  },
];

const Blog = () => {
  return (
    <section className=" w-[93.5%] mx-auto px-4 py-12 font-sans">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black tracking-tight">
          Our Blogs
        </h2>
        <button className="flex items-center gap-2 text-sm md:text-lg font-semibold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
          Show More <span>→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[30px] mb-6 aspect-[4/3]">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-3">
              <h3
                className={`text-xl md:text-2xl font-bold leading-tight text-black 
                ${blog.isUnderlined ? "underline decoration-2 underline-offset-4" : ""}`}
              >
                {blog.title}
              </h3>

              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-500 text-sm md:text-base font-medium">
                  {blog.date}
                </span>
                <button className="flex items-center gap-1 text-gray-500 text-sm md:text-base font-medium hover:text-black transition-colors">
                  Read More <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
