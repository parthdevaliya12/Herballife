import { ShoppingCart, BookOpen } from "lucide-react";
export default function Hero() {
  return (
    <section id="hero" className="bg-(--background) py-16 animate-fadeUp">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-(--primary-color) leading-tight">
            Natural Health <br /> Starts With Herbal Life
          </h1>

          <p className="mt-4 text-gray-600">
            Discover premium herbal nutrition products designed to support your
            wellness, energy, and healthy lifestyle.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-(--primary-color) text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <ShoppingCart size={18} /> Shop Now
            </button>

            <button className="border border-(--primary-color) text-(--primary-color) px-6 py-3 rounded-lg flex items-center gap-2">
              <BookOpen size={18} /> Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
            alt="herbal"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
