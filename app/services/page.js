import Image from "next/image";
import Link from "next/link";
import { getServices } from "../../services/services";

export default async function Services() {
  try {
    const services = await getServices();

    if (!services || services.length === 0) {
      return (
        <p className="text-gray-600 text-center mt-10">
          В момента няма налични услуги!
        </p>
      );
    }

    return (
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Нашите услуги
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Разгледайте нашите професионални услуги и открийте как можем да ви
              помогнем.
            </p>
            <div className="flex flex-col mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {services.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  className="flex mt-8 mb-8 w-full max-w-full"
                  key={service.id}
                  prefetch={true}
                >
                  <article className="relative isolate flex flex-col gap-8 lg:flex-row w-[100%]">
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
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={service.date} className="text-gray-500">
                          {new Date(service.date).toLocaleDateString()}
                        </time>
                      </div>
                      <div className="group relative max-w-[100%]">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0" />
                          {service.title.rendered}
                        </h3>
                        <p className="mt-5 text-md/6 text-gray-600">
                          {service.content.rendered
                            ? service.content.rendered
                                .replace(/<[^>]+>/g, "")
                                .substring(0, 200) + "..."
                            : "Описание не е налично"}
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
  } catch (error) {
    return (
      <p className="text-gray-600 text-center mt-10">
        Неуспешно зареждане на услугите!
      </p>
    );
  }
}
