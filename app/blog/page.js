"use client";

import { useEffect, useState } from "react";
import { getPosts } from "../../services/posts";
import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from WordPress API on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    alt=""
                    src={
                      post.yoast_head_json?.og_image?.[0]?.url ||
                      "https://via.placeholder.com/360x240"
                    }
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title.rendered}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.content.rendered
                        ? post.content.rendered
                            .replace(/<\/?[^>]+(>|$)/g, "")
                            .substring(0, 150) + "..."
                        : "No description available"}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt="Author Image"
                      src={
                        post.yoast_head_json?.schema?.["@graph"]?.find(
                          (person) => person["@type"] === "Person"
                        )?.image?.url || "https://via.placeholder.com/50"
                      }
                      className="size-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        {post.yoast_head_json?.author || "Unknown Author"}
                      </p>
                      <p className="text-gray-600">Author</p>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="text-gray-600">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
