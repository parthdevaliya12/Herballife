import p1 from "../asset/p1.jpeg";
import p2 from "../asset/p2.jpeg";
import { Star, Stars } from "lucide-react";
const products = [
  {
    id: 1,
    name: "Herbal Nutrition Shake",
    description: "High protein herbal shake for healthy lifestyle.",
    image: p1,
  },
  {
    id: 2,
    name: "Vishal Sharma",
    description: "Refreshing aloe drink that supports digestion.",
    image: p2,
  },
  {
    id: 3,
    name: "Herbal Tea Concentrate",
    description: "Energy boosting herbal tea with natural extracts.",
    image: p1,
  },
  {
    id: 4,
    name: "Herbal Tea Concentrate",
    description: "Energy boosting herbal tea with natural extracts.",
    image: p2,
  },
];

export default function Products() {
  return (
    <section id="review" className="py-16 bg-(--background)">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-(--primary-color)">
          What say our customers?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 flex items-center flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-full w-48 h-48  object-cover"
              />

              <h3 className="mt-4 font-semibold text-lg text-(--primary-color)">
                {product.name}
              </h3>

              <div className="flex gap-1 mt-2 text-(--primary-color)">
                <Star size={16} className="fill-(--primary-color)" />
                <Star size={16} className="fill-(--primary-color)" />
                <Star size={16} className="fill-(--primary-color)" />
                <Star size={16} className="fill-(--primary-color)"/>
                <Star size={16} className="fill-(--primary-color)"/>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                {product.description}
              </p>

              {/* <button className="mt-4 bg-(--primary-color) text-white px-4 py-2 rounded-lg">
                More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
