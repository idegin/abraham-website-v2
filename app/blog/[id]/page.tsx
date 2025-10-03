import PageHero from "@/components/PageHero";


function BlogPostDetails() {
    return (
        <div className="col-xl-8 col-lg-7">
        <div className="blog-details__left">
            {/* Blog Image */}
            <div className="blog-details__img">
                <img
                    src="https://html.kodesolution.com/2024/stratify-html/images/resource/news-details.jpg"
                    alt="Blog Details"
                />
                <div className="blog-details__date">
                    <span className="day">28</span>
                    <span className="month">Aug</span>
                </div>
                </div>
                <BlogContent />

                <BlogTagsAndSocials />

                <BlogNavigation />

                <CommentSection />
            </div>
        </div>
    );
}

function BlogContent() {
    return (
        <div className="blog-details__content">
            <ul className="list-unstyled blog-details__meta">
                <li>
                    <a href="news-details.html">
                        <i className="fas fa-user-circle"></i> Admin
                    </a>
                </li>
                <li>
                    <a href="news-details.html">
                        <i className="fas fa-comments"></i> 02 Comments
                    </a>
                </li>
            </ul>
        <h3 className="blog-details__title">Delivering the best web design agency</h3>
        <p className="blog-details__text-2">
            Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla...
        </p>
        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam...</p>
        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam...</p>
        </div>
    );
}


function BlogTagsAndSocials() {
    return (
        <div className="blog-details__bottom">
            <p className="blog-details__tags">
                <span>Tags</span>
                <a href="news-details.html">Business</a>
                <a href="news-details.html">Agency</a>
            </p>
            <div className="blog-details__social-list">
                <a href="news-details.html"><i className="fab fa-twitter"></i></a>
                <a href="news-details.html"><i className="fab fa-facebook"></i></a>
                <a href="news-details.html"><i className="fab fa-pinterest-p"></i></a>
                <a href="news-details.html"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}


function BlogNavigation() {
    return (
        <div className="nav-links">
        <div className="prev">
            <a href="news-details.html" rel="prev">
            Bring to the table win-win survival strategies
            </a>
        </div>
        <div className="next">
            <a href="news-details.html" rel="next">
            How to lead a healthy &amp; well-balanced life
            </a>
        </div>
        </div>
    );
}


function CommentSection() {
    return (
        <div className="comment-one">
        <h3 className="comment-one__title">2 Comments</h3>
        <Comment
            image="images/resource/testi-2.jpg"
            name="Kevin Martin"
            text="Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla..."
        />
        <Comment
            image="images/resource/testi-1.jpg"
            name="Sarah Albert"
            text="Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla..."
        />
        <CommentForm />
        </div>
    );
}

function Comment({ image, name, text }: { image: string; name: string; text: string }) {
    return (
        <div className="comment-one__single">
        <div className="comment-one__image">
            <img src={image} alt={name} />
        </div>
        <div className="comment-one__content">
            <h3>{name}</h3>
            <p>{text}</p>
            <a href="news-details.html" className="theme-btn btn-one comment-one__btn">
            Reply
            </a>
        </div>
        </div>
    );
}

function CommentForm() {
    return (
        <div className="comment-form">
        <h3 className="comment-form__title mb-30">Leave a Comment</h3>
        <form id="contact_form" name="contact_form" action="includes/sendmail.php" method="post" noValidate>
            <div className="row">
            <div className="col-sm-6">
                <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
            </div>
            <div className="col-sm-6">
                <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
            </div>
            </div>
            <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message"></textarea>
            <button type="submit" className="btn-one">Submit Comment</button>
        </form>
        </div>
    );
}


function BlogSidebar() {
    return (
        <div className="col-xl-4 col-lg-5">
        <div className="sidebar">
            <SidebarSearch />
            <SidebarPosts />
            <SidebarCategories />
            <SidebarTags />
            <SidebarComments />
        </div>
        </div>
    );
}

function SidebarSearch() {
    return (
        <div className="sidebar__single sidebar__search">
        <form action="#" className="sidebar__search-form">
            <input type="search" placeholder="Search here" />
            <button type="submit"><i className="far fa-search"></i></button>
        </form>
        </div>
    );
}

function SidebarPosts() {
    return (
        <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Latest Posts</h3>
        <ul className="sidebar__post-list list-unstyled">
            <SidebarPost image="images/blog/blog-image1.jpg" title="Top crypto exchange influencers" />
            <SidebarPost image="images/blog/blog-image2.jpg" title="Necessity may give us best virtual court" />
            <SidebarPost image="images/blog/blog-image3.jpg" title="You should know about business plan" />
        </ul>
        </div>
    );
}

function SidebarPost({ image, title }: { image: string; title: string }) {
    return (
        <li>
        <div className="sidebar__post-image"><img src={image} alt={title} /></div>
        <div className="sidebar__post-content">
            <h3>
            <span className="sidebar__post-content-meta">
                <i className="fas fa-user-circle"></i> Admin
            </span>
            <a href="news-details.html">{title}</a>
            </h3>
        </div>
        </li>
    );
}

function SidebarCategories() {
    return (
        <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list list-unstyled">
            <li><a href="#">Blueprint Design</a></li>
            <li className="active"><a href="#">Transforming Design</a></li>
            <li><a href="#">Landscape Design</a></li>
            <li><a href="#">Urban Design</a></li>
            <li><a href="#">Industrial Design</a></li>
        </ul>
        </div>
    );
}

function SidebarTags() {
    return (
        <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <div className="sidebar__tags-list">
            <a href="#">All Project</a>
            <a href="#">Consultancy</a>
            <a href="#">Experience</a>
            <a href="#">Interior</a>
            <a href="#">Design</a>
        </div>
        </div>
    );
}

function SidebarComments() {
    return (
        <div className="sidebar__single sidebar__comments">
        <h3 className="sidebar__title">Recent Comments</h3>
        <ul className="sidebar__comments-list list-unstyled">
            <li><i className="fas fa-comments"></i> A WordPress commenter on launch new mobile app</li>
            <li><i className="fas fa-comments"></i> John Doe on template: comments</li>
        </ul>
        </div>
    );
}


export default function Page() {
    return (
        <>
        <PageHero />
        <section className="blog-details pt-120 pb-120">
            <div className="container-lg">
            <div className="row">
                <BlogPostDetails />
                <BlogSidebar />
            </div>
            </div>
        </section>
        </>
    );
}
