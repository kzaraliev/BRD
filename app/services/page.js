import Image from "next/image";
import Link from "next/link";

export default async function Services() {
  const response = await fetch(
    `https://brd.devclick.net/wp-json/wp/v2/services?_fields=id,yoast_head_json,date,slug,title,content`,
    {
      next: { revalidate: 120 },
    }
  );

  if (!response.ok) {
    return (
      <p className="text-gray-600 text-center mt-10">
        Неуспешно зареждане на услугите!
      </p>
    );
  }

  const services = await response.json();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Нашите услуги
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.id}
                prefetch={true}
              >
                <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      width={256}
                      height={256}
                      alt={service.title.rendered}
                      src={
                        service.yoast_head_json?.og_image?.[0]?.url ||
                        "https://via.placeholder.com/360x240"
                      }
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={service.date} className="text-gray-500">
                        {new Date(service.date).toLocaleDateString()}
                      </time>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {service.title.rendered}
                      </h3>
                      <p className="mt-5 text-md/6 text-gray-600">
                        {service.content.rendered
                          ? service.content.rendered
                              .replace(/<[^>]+>/g, "")
                              .substring(0, 200) + "..."
                          : "No description available"}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
