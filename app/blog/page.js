"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 6; // Define how many posts per page

  // Fetch posts from WordPress API on component mount or page change
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://brd.devclick.net/wp-json/wp/v2/posts?page=${currentPage}&per_page=${perPage}&_fields=id,yoast_head_json,date,slug,title,content`
      );
      const data = await response.json();
      setPosts(data);

      // Get total pages from headers
      const totalPagesHeader = response.headers.get("x-wp-totalpages");
      setTotalPages(Number(totalPagesHeader) || 1);
      setLoading(false);
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            От нашия блог
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Актуални правни анализи, експертни мнения и ценни съвети – всичко,
            което трябва да знаете, за да сте информирани и защитени
          </p>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center mt-10">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#95161C] rounded-full animate-spin"></div>
          </div>
        )}

        {!loading && (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                        <time dateTime={post.date} className="text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </time>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {post.title.rendered}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                          {post.content.rendered
                            ? post.content.rendered
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 150) + "..."
                            : "No description available"}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <p className="text-gray-600">No posts found.</p>
            )}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Previous
            </button>

            <span className="px-4 py-2 mx-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
