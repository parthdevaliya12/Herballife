import { Leaf, HeartPulse, ShieldCheck } from "lucide-react";

export default function Benefits() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-(--primary-color)">
          Why Choose HerbalLife
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="text-center p-6 shadow rounded-xl">
            <Leaf className="mx-auto text-green-600" size={40} />
            <h3 className="mt-4 font-semibold text-xl">100% Natural</h3>
            <p className="text-gray-600 mt-2">
              Our products are made with natural herbal ingredients.
            </p>
          </div>

          <div className="text-center p-6 shadow rounded-xl">
            <HeartPulse className="mx-auto text-green-600" size={40} />
            <h3 className="mt-4 font-semibold text-xl">Healthy Lifestyle</h3>
            <p className="text-gray-600 mt-2">
              Improve your energy and daily wellness naturally.
            </p>
          </div>

          <div className="text-center p-6 shadow rounded-xl">
            <ShieldCheck className="mx-auto text-green-600" size={40} />
            <h3 className="mt-4 font-semibold text-xl">Trusted Quality</h3>
            <p className="text-gray-600 mt-2">
              High quality products trusted by thousands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
