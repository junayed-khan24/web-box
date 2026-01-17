const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        <details className="group rounded-lg border border-gray-200 p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium">
            What type of websites do you design?
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-4 text-gray-600">
            I design custom websites, CMS websites, business websites, and
            modern responsive web designs tailored to your brand and goals.
          </p>
        </details>

        <details className="group rounded-lg border border-gray-200 p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium">
            Will my website be mobile responsive?
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-4 text-gray-600">
            Yes, every website is fully responsive and optimized for mobile,
            tablet, and desktop devices.
          </p>
        </details>

        <details className="group rounded-lg border border-gray-200 p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium">
            Do you provide CMS or WordPress websites?
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-4 text-gray-600">
            Yes, I build CMS and WordPress websites that are easy to manage and
            update without technical knowledge.
          </p>
        </details>

        <details className="group rounded-lg border border-gray-200 p-5">
          <summary className="flex cursor-pointer items-center justify-between font-medium">
            How long does it take to complete a website?
            <span className="transition group-open:rotate-180">⌄</span>
          </summary>
          <p className="mt-4 text-gray-600">
            Project timelines depend on complexity, but most websites are
            completed within 5–10 working days.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
