import Image from "next/image";
import Link from "next/link";

export default async function Blog({ searchParams }) {
  const page = (await searchParams).page;
  const currentPage = parseInt(page) || 1;
  const perPage = 9;

  // Fetch posts from WordPress API with caching enabled
  const response = await fetch(
    `https://brd.devclick.net/wp-json/wp/v2/posts?page=${currentPage}&per_page=${perPage}&_fields=id,yoast_head_json,date,slug,title,content`,
    {
      next: { revalidate: 120 },
    }
  );

  if (!response.ok) {
    return (
      <p className="text-gray-600 text-center mt-10">
        Неуспешно зареждане на публикации!
      </p>
    );
  }

  const posts = await response.json();
  const totalPagesHeader = response.headers.get("x-wp-totalpages");
  const totalPages = Number(totalPagesHeader) || 1;

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            От нашия блог
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Актуални правни анализи, експертни мнения и ценни съвети – всичко,
            което трябва да знаете, за да сте информирани и защитени.
          </p>
        </div>
        {posts.length > 0 ? (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} prefetch={true}>
                <article className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <Image
                      width={380}
                      height={250}
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
                        {post.title.rendered}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                        {post.content.rendered
                          ? post.content.rendered
                              .replace(/<[^>]+>/g, "")
                              .substring(0, 150) + "..."
                          : "No description available"}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-10">
            Няма намерени публикации.
          </p>
        )}
        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center">
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className={`px-4 py-2 mx-2 bg-gray-200 rounded-md ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
            prefetch={true}
          >
            Previous
          </Link>
          <span className="px-4 py-2 mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className={`px-4 py-2 mx-2 bg-gray-200 rounded-md ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
            prefetch={true}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
