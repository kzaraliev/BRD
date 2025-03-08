export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Едно добре подбрано изречение в съдебната зала може да бъде
              по-силно от хиляди страници доказателства.”
            </p>
            <p>
              “Човек е свободен само тогава, когато не му се налага да се
              подчинява на никого, освен на закона.”
            </p>
            <p>“Човек, който е свой собствен адвокат, има глупак за клиент.”</p>
            <p>
              “Човек е свободен само тогава, когато не му се налага да се
              подчинява на никого, освен на закона.”
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
