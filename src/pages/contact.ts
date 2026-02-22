import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
export function ContactSection() {
  return `
    ${Navbar()}
    <div class="py-20 px-6 md:px-20 bg-gray-50">

      <!-- TITLE -->
      <div class="text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
          CONTACT US
        </h1>
      </div>

      <!-- ================= MAP ================= -->
      <div class="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Universitas%20Indonesia&output=embed"
          class="w-full h-64 md:h-80 border-0">
        </iframe>
      </div>

      <!-- ================= ADDRESS ================= -->
      <div class="flex justify-center">
        <div class=" text-black font-bold px-10 py-4 mt-6 rounded-xl shadow-md text-center">
            Kampus Universitas Indonesia, Depok, Jawa Barat, Indonesia
        </div>
      </div>

      <!-- ================= INFO ================= -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        ${InfoCard("📞", "No. Telp", "+62 812 3456 7890")}
        ${InfoCard("✉️", "Email", "bemvokasi@ui.ac.id")}
        ${InfoCard("🌐", "Socials", "@bemvokasiui")}

      </div>

      <!-- ================= FORM ================= -->
      <div class="mt-14 bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <h2 class="text-2xl font-bold mb-6 text-center">Kirim Pesan</h2>

        <form class="space-y-5">

          <div>
            <label class="block mb-1 text-sm font-medium">Nama</label>
            <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Masukkan nama" />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Email</label>
            <input type="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Masukkan email" />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Pesan</label>
            <textarea rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Tulis pesan"></textarea>
          </div>

          <button class="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition">
            Kirim Pesan
          </button>

        </form>

      </div>

    </div>
    ${Footer()}
  `;
}

function InfoCard(icon: string, title: string, value: string) {
  return `
    <div class="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">

      <div class="text-3xl mb-3">
        ${icon}
      </div>

      <p class="font-semibold text-lg">${title}</p>
      <p class="text-gray-600 mt-1 text-sm">${value}</p>

    </div>
  `;
}