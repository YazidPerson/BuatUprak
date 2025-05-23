import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [Data, Datanya] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((result) => Datanya(result))
      .catch((error) => console.log("Gak bisa bang :(", error));
  }, []);

  console.log(Data);

  return (
    <div>
      <div className="w-full flex items-center space-x-20 justify-center h-13 bg-teal-600 shadow-md text-white">
        <div className="flex space-x-6 font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Kelas</a>
          <a href="#" className="hover:underline">Tutorial</a>
          <a href="#" className="hover:underline">Buku</a>
          <a href="#" className="hover:underline">Discord</a>
        </div>
        <div className="flex-grow max-w-md outline-white rounded">
          <input
            type="text"
            placeholder="Cari tutorial..."
            className="w-120 h-10 py-2 px-4 border rounded-lg focus:outline-none hover:shadow-lg transition-all duration-150 text-black"
          />
        </div>
        <div className="items-center space-x-4">
          <button className="bg-teal-500 hover:bg-teal-700 px-4 py-1.5 rounded font-medium transition-colors duration-100">
            Gak ada link D;
          </button>
        </div>
      </div>

      <section>

        <div className="flex w-full h-76 bg-slate-800 text-white">
          <div className="space-y-4 mx-4 ml-7 mt-12">
            <h1 className="text-5xl font-bold">Petani Kode</h1>
            <p className="text-lg">Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami</p>
            <p className="text-lg">Mostly pakai Linux.</p>
            <div className="flex space-x-4 mt-2">
              <button className="bg-teal-600 hover:bg-teal-700 px-5 py-2 rounded font-medium transition-colors">Mulai Belajar</button>
              <button className="border border-teal-400 px-5 py-2 rounded font-medium hover:border-teal-600 transition-colors">Gabung Nyok</button>
            </div>
          </div>
        </div>


        <div className="ml-8 mt-12">
          <p className="text-small text-gray-600 font-bold">KATEGORI</p>
          <h2 className="text-3xl font-extrabold text-black">Mau belajar apa hari ini?</h2>
          <p className="text-gray-60">Temukan tutorial berdasarkan minatmu.</p>
          <div className="grid grid-cols-2 mx-10 gap-6 mt-5">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-1">Basic Programming</h3>
              <p className="text-sm text-gray-600">Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-1">Web Programming</h3>
              <p className="text-sm text-gray-600">Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak lagi.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-1">Tutorial Lainnya</h3>
              <p className="text-sm text-gray-600">Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockchain, dan masih banyak lagi.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-1">Tutorial Tambahan</h3>
              <p className="text-sm text-gray-600">Lanjut ada Tutorial Tambahan sebagai bumbu tambahan yang bisa menambahkan rasa bertambah ilmu mu untuk bertambah.</p>
            </div>
          </div>
        </div>
        <div className="px-8 py-12">
          <h2 className="text-2xl font-bold ">Dan tutor lainnya</h2>
          <div className="flex flex-wrap mt-6">
            {Data.map((post) => (
              <div key={post.id} className="w-1/2 px-3">
                <div className="bg-gray-100 p-10 rounded-xl shadow hover:shadow-md transition-shadow mt-6">
                  <h3 className="font-bold text-xl">{post.id} . {post.title}</h3>
                  <p className=" text-gray-700 mt-4">{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        <footer className="bg-gray-900 text-white px-30 py-12 mt-16 ">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold">Belajar</h3>
              <ul className="space-y-2 mt-4">
                <li><a href="#" className="hover:underline">Artikel</a></li>
                <li><a href="#" className="hover:underline">Tutorial</a></li>
                <li><a href="#" className="hover:underline">Buku</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Popular Tutorial</h3>
              <ul className="space-y-2 mt-4">
                <li><a href="#" className="hover:underline">Tutorial Bahasa C</a></li>
                <li><a href="#" className="hover:underline">Tutorial Javascript</a></li>
                <li><a href="#" className="hover:underline">Tutorial Java</a></li>
                <li><a href="#" className="hover:underline">Tutorial PHP</a></li>
                <li><a href="#" className="hover:underline">Tutorial Python</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Social Media</h3>
              <ul className="space-y-2 mt-4">
                <li><a href="#" className="hover:underline">Facebook Page</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Youtube Channel</a></li>
                <li><a href="#" className="hover:underline">Telegram Channel</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Petani Kode</h3>
              <ul className="space-y-2 mt-4">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8">
            <p className='mt-4 text-medium font-bold text-center'>
              © 2077 JAGO TANI
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

