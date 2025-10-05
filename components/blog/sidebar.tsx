import { BlogPostsDocument, CategoriesDocument } from "@/prismicio-types";
import Link from "next/link";

function SidebarSearch() {
    return (
        <div className='sidebar__single sidebar__search'>
            <form action='#' className='sidebar__search-form'>
                <input type='search' placeholder='Search here' />
                <button type='submit'>
                    <i className='far fa-search'></i>
                </button>
            </form>
        </div>
    );
}

function SidebarPosts({ relatedPosts }: { relatedPosts: BlogPostsDocument[] }) {
    return (
        <div className='sidebar__single sidebar__post'>
            <h3 className='sidebar__title'>Latest Posts</h3>
            <ul className='sidebar__post-list list-unstyled'>
                {relatedPosts.length > 0 ? (
                    relatedPosts.map((post) => (
                        <SidebarPost
                            image={post.data.featured_image.url || ""}
                            title={post.data.title || ""}
                            slug={post.uid || ""}
                        />
                    ))
                ) : (
                    <li>No related posts</li>
                )}
            </ul>
        </div>
    );
}

function SidebarPost({
    image,
    title,
    slug,
}: {
    image: string;
    title: string;
    slug: string;
}) {
    return (
        <li>
            <div className='sidebar__post-image'>
                <img src={image} alt={title} />
            </div>
            <div className='sidebar__post-content'>
                <h3>
                    <span className='sidebar__post-content-meta'>
                        <i className='fas fa-user-circle'></i> Admin
                    </span>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
            </div>
        </li>
    );
}

interface SidebarCategoriesProps {
    categories: CategoriesDocument[];
    activeCategory: string;
}
function SidebarCategories({
    categories,
    activeCategory,
}: SidebarCategoriesProps) {
    return (
        <div className='sidebar__single sidebar__category'>
            <h3 className='sidebar__title'>Categories</h3>
            <ul className='sidebar__category-list list-unstyled'>
                {categories.map((category) => (
                    <li
                        className={
                            activeCategory === category.uid ? "active" : ""
                        }
                        key={category.uid}
                    >
                        <Link href={`/blog?category=${category.uid}`}>
                            {category.data.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SidebarTags() {
    return (
        <div className='sidebar__single sidebar__tags'>
            <h3 className='sidebar__title'>Tags</h3>
            <div className='sidebar__tags-list'>
                <a href='#'>All Project</a>
                <a href='#'>Consultancy</a>
                <a href='#'>Experience</a>
                <a href='#'>Interior</a>
                <a href='#'>Design</a>
            </div>
        </div>
    );
}

function SidebarComments() {
    return (
        <div className='sidebar__single sidebar__comments'>
            <h3 className='sidebar__title'>Recent Comments</h3>
            <ul className='sidebar__comments-list list-unstyled'>
                <li>
                    <i className='fas fa-comments'></i> A WordPress commenter on
                    launch new mobile app
                </li>
                <li>
                    <i className='fas fa-comments'></i> John Doe on template:
                    comments
                </li>
            </ul>
        </div>
    );
}

interface Props {
    relatedPosts: BlogPostsDocument[];
    categories: CategoriesDocument[];
    activeCategory: string;
}
function BlogSidebar({ relatedPosts, categories, activeCategory }: Props) {
    return (
        <div className='col-xl-4 col-lg-5'>
            <div className='sidebar'>
                {/*<SidebarSearch />*/}
                <SidebarPosts relatedPosts={relatedPosts} />
                <SidebarCategories
                    categories={categories}
                    activeCategory={activeCategory}
                />
                {/* <SidebarTags />
                <SidebarComments /> */}
            </div>
        </div>
    );
}

export default BlogSidebar;
