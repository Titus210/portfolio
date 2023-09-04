import PrimaryButton from "../../buttons/PrimaryButton";

/**
 * BlogCard Component:
 *
 * The BlogCard component represents a card displaying a blog post on a website. It includes the following elements:
 *
 * - An image placeholder (h-48) for the blog post's featured image.
 * - Information about the blog post, including the date, category, title, and a brief description.
 * - A "Read More" button for users to access the full blog post.
 *
 * Key Points:
 * - The card is designed with a shadow effect (shadow-sm) for a modern look.
 * - The card's background color is "bg-primaryBg," maintaining the site's design consistency.
 * - The blog post's date and category are displayed at the top.
 * - The blog post's title is emphasized with a bold font.
 * - A brief description is provided with a text-gray-400 color.
 *
 * Suggestions:
 * - Replace the image placeholder with actual blog post images.
 * - Populate the date, category, title, and description with dynamic content.
 * - Ensure that the "Read More" button is linked to the respective blog post.
 *
 * Overall, the component structure and code organization are well done, following best practices for a blog card.
 */


const BlogCard = () => {
    return (
        <>
            <div className="w-10/12 md:w-4/12 ">
                <div className="card shadow-sm  bg-primaryBg shadow-indigo-500/80  p-4 hover:border ">
                    <div className="image h-48"></div>
                    <div className="content h-7/12 my-4">
                        <div className="date">
                            <h3 className="text-text-secondary font-bold">{"20 January"} / <span>{"Web design"}</span></h3>
                        </div>
                        <div className="my-2">
                            <h4 className="font-semibold">What is the future of web development and AI</h4>
                        </div>
                        <div className="">
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis magni quae sint, pariatur asperiores excepturi tempora corrupti consequuntur alias unde?</p>
                        </div>

                    </div>
                    <div className=" w-8/12 mt-4" >
                        <PrimaryButton color="text-white" text="Read More" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;
