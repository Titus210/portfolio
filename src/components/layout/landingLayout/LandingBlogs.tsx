import SecondaryButton from "../../ui/buttons/SecondaryButton";
import BlogCard from "../../ui/cards/Blogs/BlogCard";

/**
 * LandingBlogs Component:
 *
 * The LandingBlogs component represents a section on the landing page for displaying a set of blog cards.
 * It includes the following elements:
 *
 * - Blog cards created using the BlogCard component.
 * - A "View More" button to navigate to additional blog posts.
 *
 * Key Points:
 * - The component uses the BlogCard component to create multiple blog cards.
 * - Blog cards are arranged in a responsive flex layout (flex-col for mobile and flex-row for larger screens).
 * - A "View More" button provides an option for users to access more blog posts.
 *
 * Suggestions:
 * - Populate the blog cards with dynamic content (actual blog post information).
 * - Ensure that the "View More" button is linked to the appropriate blog listing page.
 *
 * Overall, the component structure and code organization follow best practices for displaying a set of blog cards.
 */


const LandingBlogs = () => {
    return (
        <>
            <div className="blog flex flex-col items-center">
                <div className="blog-wrapper flex flex-col  items-center justify-center gap-4 mx-2 md:flex-row">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className="button w-4/12 mt-6 md:w-3/12">
                    <SecondaryButton text="View More" color="text-white" />
                </div>
            </div>
        </>
    );
}

export default LandingBlogs;