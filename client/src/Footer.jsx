import { Instagram, Facebook, TwitterIcon, Youtube } from "lucide-react";

export default function Footer() {

  const insta = () =>{
    window.open("https://instagram.com")
  }
  const face = () =>{
    window.open("https://facebook.com")
  }
  const You = () =>{
    window.open("https://youtube.com")
  }

  return (
    <footer className="bg-(--primary-color) text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">HerbalLife</h3>
          <p className="mt-2 text-sm">
            Natural herbal products designed to improve your health and wellness
            every day.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm mt-2">support@herballife.com</p>

          <div className="flex gap-4 mt-4">
            <div  className="hover:opacity-80">
              <Instagram size={20} onClick={()=>insta()} />
            </div>

            <div  className="hover:opacity-80">
              <Facebook size={20} onClick={()=>face()} />
            </div>

          

            <div  className="hover:opacity-80">
              <Youtube size={20} onClick={()=>You()} />
            </div>

            
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8">
        © 2026 HerbalLife. All rights reserved. By Parth Devaliya
      </p>
    </footer>
  );
}
