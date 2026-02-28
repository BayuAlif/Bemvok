import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function HomePage() {
  return `
    ${Navbar()}

    <!-- HERO -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        
        <div class="space-y-5 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-semibold leading-tight">
            Selamat Datang di BEM VOKASI UI
          </h1>
          <h2 class="text-lg md:text-xl">
            “Rajut Harmoni, Kuatkan Kolaborasi”
          </h2>
          <button class="bg-[#9baac7] rounded-full px-8 py-3 font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>

        <div class="max-w-xs mx-auto md:max-w-md">
          <img 
            src="../../public/images/Maskot_utama.png" 
            class="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>

    <!-- DIVIDER -->
    <div class="w-full h-4 md:h-10 bg-[#9baac7]"></div>

    <!-- ABOUT -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <div class="space-y-5 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-semibold">
            Tentang BEMVOK UI
          </h1>
          <p class="text-justify md:text-left text-sm md:text-base leading-relaxed">
            BEM Vokasi UI adalah penghubung antara permasalahan yang ada di Vokasi, 
            cita-cita individu, dan potensi mahasiswa Vokasi UI. 
            BEM Vokasi UI berusaha menjadi organisasi yang mampu memprakarsai 
            dan menjadi penggerak awal sebagai jawaban untuk segala bentuk 
            harapan konstituen Vokasi UI.
          </p>
        </div>

        <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/-Lmrj7brqzo"
            title="YouTube video"
            allowfullscreen>
          </iframe>
        </div>

      </div>
    </section>

    <!-- WHATS NEW -->
    <section class="w-full">

      <div class="w-full h-4 md:h-10 bg-[#9baac7]"></div>

      <div class="container mx-auto px-6 py-16">
        <h1 class="text-center text-3xl md:text-4xl font-bold mb-10">
          What's New?
        </h1>

        <div class="grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-xl">

          <div class="aspect-video md:aspect-auto">
            <img 
              src="https://picsum.photos/800/500" 
              class="w-full h-full object-cover"
            />
          </div>

          <div class="bg-gray-300 p-8 flex flex-col justify-center text-center md:text-left space-y-4">
            <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
              Nama Proker
            </h2>
            <p class="text-base">
              Deskripsi kegiatan, atau update dari kegiatan tersebut
            </p>
            <button class="bg-[#9baac7] rounded-full px-8 py-3 w-fit mx-auto md:mx-0 font-semibold hover:opacity-90 transition">
              Learn More
            </button>
          </div>

        </div>
      </div>

    </section>

    ${Footer()}
  `;
}