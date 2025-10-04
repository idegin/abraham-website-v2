import { BlogPostsDocument } from "@/prismicio-types";
import Link from "next/link";
import moment from "moment";

function BlogItem({ blog, delay }: { blog: BlogPostsDocument; delay: string }) {
    return (
        <div
            className='col-lg-4 wow fadeInLeft'
            data-wow-delay={delay}
            data-wow-duration='1500ms'
            style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: delay,
                animationName: "fadeInLeft",
            }}
        >
            <div className='blog__item'>
                <div className='blog__image'>
                    <img
                        src={blog.data.featured_image.url || ""}
                        alt={blog.data.featured_image.alt || ""}
                    />
                    <img
                        src={blog.data.featured_image.url || ""}
                        alt={blog.data.featured_image.alt || ""}
                    />
                </div>
                <div className='blog__content'>
                    <ul>
                        {/* @ts-ignore */}
                        <li>{blog.data.category?.data?.title}</li>
                        <li className='date'>
                            {moment(blog.first_publication_date).format(
                                "MMM D, YYYY"
                            )}
                        </li>
                    </ul>
                    <h4>
                        <Link href={`/blog/${blog.uid}`}>
                            {blog.data.title}
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
