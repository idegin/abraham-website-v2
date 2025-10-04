import HomePageMain from "@/components/homepage";
import { getBlogPosts } from "@/utils/queries/blog.query";
import { getServices } from "@/utils/queries/services.query";
import { createClient } from "@/prismicio";
import React from "react";

const page = async () => {
    const client = createClient();
    const all = Promise.all([getServices(client), getBlogPosts(client, 4, 1)]);
    const [services, blogPosts] = await all;

    return (
        <HomePageMain
            services={services.services}
            blogPosts={blogPosts.blogPosts}
        />
    );
};

export default page;
