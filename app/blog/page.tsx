import PageHero from '@/components/PageHero'
import Link from 'next/link'
import React from 'react'

type Blog = {
  id: number
  category: string
  date: string
  title: string
  image: string
  delay: string
}

// context management can be used for this 
const blogs: Blog[] = [
  {
    id: 1,
    category: 'Branding',
    date: 'May 15, 2025',
    title: 'Creating innovative strategies for exceptional future outcomes.',
    image: 'images/blog/blog-image1.jpg',
    delay: '00ms',
  },
  {
    id: 2,
    category: 'Design Trends',
    date: 'May 25, 2025',
    title:
      'Stratify Agency transforms the way we work through the power of AI-driven innovation.',
    image: 'images/blog/blog-image2.jpg',
    delay: '100ms',
  },
  {
    id: 3,
    category: 'Marketing',
    date: 'May 30, 2025',
    title: 'Common UX pinpoints in Dashboard-related projects.',
    image: 'images/blog/blog-image3.jpg',
    delay: '200ms',
  },
  {
    id: 4,
    category: 'Design Trends',
    date: 'May 25, 2025',
    title:
      'Stratify Agency transforms the way we work through the power of AI-driven innovation.',
    image: 'images/blog/blog-image2.jpg',
    delay: '300ms',
  },
  {
    id: 5,
    category: 'Marketing',
    date: 'May 30, 2025',
    title: 'Common UX pinpoints in Dashboard-related projects.',
    image: 'images/blog/blog-image3.jpg',
    delay: '400ms',
  },
  {
    id: 6,
    category: 'Branding',
    date: 'May 15, 2025',
    title: 'Creating innovative strategies for exceptional future outcomes.',
    image: 'images/blog/blog-image1.jpg',
    delay: '500ms',
  },
]


//blog item component
function BlogItem({ blog }: { blog: Blog }) {
  return (
    <div
      className="col-lg-4 wow fadeInLeft"
      data-wow-delay={blog.delay}
      data-wow-duration="1500ms"
      style={{
        visibility: 'visible',
        animationDuration: '1500ms',
        animationDelay: blog.delay,
        animationName: 'fadeInLeft',
      }}
    >
      <div className="blog__item">
        <div className="blog__image">
          <img src={blog.image} alt="image" />
          <img src={blog.image} alt="image" />
        </div>
        <div className="blog__content">
          <ul>
            <li>{blog.category}</li>
            <li className="date">{blog.date}</li>
          </ul>
          <h4>
            <Link href="news-details.html">{blog.title}</Link>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <PageHero />
      <section className="blog-area pt-130 pb-20">
        <div className="container-lg">
          <div className="row g-5">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
