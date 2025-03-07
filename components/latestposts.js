"use client";

import { useEffect, useState } from "react";
import { getLatestPosts } from "../services/posts";
import Link from "next/link";

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);

  // Fetch latests posts from WordPress API on component mount
  useEffect(() => {
    const fetchLatestPosts = async () => {
      const postsData = await getLatestPosts();
      setPosts(postsData);
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto w-full py-0 sm:px-6 sm:py-0 lg:px-0">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:px-16">
          <h3 className="text-4xl text-white">Последни новини</h3>
          <div className="mx-auto mt-16 grid !max-w-[80%] grid-cols-1 gap-x-8 gap-y-20 lg:mx-auto lg:max-w-none lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="flex flex-col items-start justify-between">
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
                        <time dateTime={post.date} className="text-white">
                          {new Date(post.date).toLocaleDateString()}
                        </time>
                      </div>
                      <div className="group relative text-left">
                        <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                          <span className="absolute inset-0" />
                          {post.title.rendered}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-white">
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
                          <p className="font-semibold text-white">
                            {post.yoast_head_json?.author || "Unknown Author"}
                          </p>
                          <p className="text-white">Author</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <p className="text-gray-600">No posts found.</p>
            )}
          </div>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute -left-20 -bottom-140 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#95161C" />
                <stop offset={1} stopColor="#95161C" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
