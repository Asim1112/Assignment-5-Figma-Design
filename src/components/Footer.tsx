export default function Footer() {
    return (
      <footer className="bg-[#043873] text-white py-10">
        <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div>
            <h1 className="text-lg font-semibold mb-4">Whitespace</h1>
            <p>Whitespace was created for the new ways we live and work. We make a better workspace around the world.</p>
          </div>
          
          {/* Product Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Overview</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Customer stories</a></li>
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Guides & tutorials</a></li>
              <li><a href="#" className="hover:underline">Help center</a></li>
            </ul>
          </div>
          
          {/* Call to Action */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Try It Today</h2>
            <p className="mb-4">Get started for free. Add your whole team as your needs grow.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Start today →
            </button>
          </div>
        </div>
  
        <hr className="my-8 border-gray-700" />
  
        {/* Footer Bottom Links */}
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">English</a>
            <a href="#" className="hover:underline">Terms & privacy</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Status</a>
          </div>
          <p className="my-4 md:my-0">©2021 Whitespace LLC.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }