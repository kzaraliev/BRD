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
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <article className="mx-auto max-w-8xl w-full">
            {ogImage && (
              <img
                src={ogImage}
                alt={meta.og_title}
                className="w-full h-auto mb-8 rounded-xl shadow-lg"
              />
            )}
            <h1 className="text-4xl font-semibold text-gray-900">
              {service[0].title.rendered}
            </h1>
            <time
              dateTime={new Date(service[0].date).toISOString()}
              className="block mt-2 text-sm text-gray-500"
            >
              {new Date(service[0].date).toLocaleDateString()}
            </time>
            <div
              className="mt-8 prose prose-lg text-gray-600 flex flex-col max-w-full"
              dangerouslySetInnerHTML={{ __html: service[0].content.rendered }}
            />
          </article>
        </div>
      </div>
    );
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }
}