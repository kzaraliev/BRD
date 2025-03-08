const incentives = [
  {
    name: "Free shipping",
    imageSrc: "/icons/lawyer-1.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc: "/icons/lawyer-2.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc: "/icons/lawyer-3.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Мисия и принципи
              </h2>
              <p className="mt-4 text-white">
                Вярваме, че доверието, е в основата на успешния бизнес.
                Дългогодишните партньорства са нашият най-ценен актив. Чрез
                професионално отношение и детайлно запознаване с потребностите
                на своите клиенти, ние се стремим да им предоставяме правна
                сигурност.
              </p>
              <p className="mt-4 text-white">
                Привърженици сме на работата в екип. Обединяваме знанията и
                личния си опит и разглеждаме всеки конкретен случай от различни
                аспекти, като по този начин предоставяме на своите клиенти верни
                и практически ориентирани решения.
              </p>
            </div>
            <img
              alt=""
              src="/incentives-hero-image.jpg"
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <img alt="" src={incentive.imageSrc} className="size-16" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-white">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
