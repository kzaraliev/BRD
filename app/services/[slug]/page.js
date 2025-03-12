import { getServiceBySlug } from "../../../services/services";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service || service.length === 0) {
    throw new Error("Service not found");
  }

  const meta = service[0].yoast_head_json;
  const ogImage =
    meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    alternates: {
      canonical: meta.canonical,
    },
  };
}

export default async function ServicePage({ params }) {
  try {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service || service.length === 0) {
      throw new Error("Service not found");
    }

    const meta = service[0].yoast_head_json;
    const ogImage =
      meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-23 text-center shadow-2xl sm:px-23">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {service[0].title.rendered}
              </h1>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <article className="mx-auto max-w-8xl w-full grid md:grid-cols-2 gap-8">
              {ogImage && (
                <img
                  src={ogImage}
                  alt={meta.og_title}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              )}
              <div className="flex flex-col">
                <time
                  dateTime={new Date(service[0].date).toISOString()}
                  className="block text-sm text-gray-500"
                >
                  {new Date(service[0].date).toLocaleDateString()}
                </time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">
                  {meta.og_title}
                </h1>
                <div
                  className="mt-4 prose prose-lg text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: service[0].content.rendered,
                  }}
                />
              </div>
            </article>

            {/* Останалата част от текста на 100% ширина */}
            <div className="mt-12 prose prose-lg text-gray-600 w-full">
              <div
                dangerouslySetInnerHTML={{
                  __html: service[0].content.rendered,
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }
}
