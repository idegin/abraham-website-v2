import HomePageMain from "@/components/homepage";
import { createClient } from "@/prismicio";
import React from "react";

const page = async () => {
    const client = createClient();
    const all = Promise.all([
        client.getByType("services"),
        client.getByType("blog_posts"),
    ]);
    const [services, blogPosts] = await all;

    console.log(services, blogPosts);

    return (
        <HomePageMain
            services={services.results}
            blogPosts={blogPosts.results}
        />
    );
};

export default page;
