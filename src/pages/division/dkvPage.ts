// Essentials
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

// NPMs
import Swiper from "swiper";
import { EffectCoverflow, Navigation, Thumbs } from "swiper/modules";
import { initCoverflowSwiper } from "../../components/CoverflowSwiper";

/* ================= HTML ================= */
export function DKVPage() {
  return `
    ${Navbar()}

    <div class="relative min-h-screen flex items-center px-6 md:px-20 bg-[url('/images/bg-pattern.png')] bg-cover bg-center">
      <div class="absolute inset-0 bg-white/70"></div>

      <div class="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div class="flex flex-col items-center">
          <img src="/images/dkv-logo.png" class="w-44 md:w-60" />
          <div class="mt-6 bg-[#4b4a92] px-10 py-3 text-white font-bold text-2xl tracking-widest">
            DKV
          </div>
        </div>

        <div>
          <h1 class="stroke-text text-4xl md:text-6xl font-extrabold">
            Biro Desain <br /> Komunikasi Visual
          </h1>

          <div class="mt-6 border-4 border-[#4b4a92] p-6 max-w-md bg-white/80">
            <p class="text-gray-800 text-justify">
              Bertanggung jawab dalam merancang dan mengemas seluruh tampilan visual BEM Vokasi UI 2025.
            </p>
          </div>
        </div>

      </div>
    </div>


    <!-- MAIN SLIDER -->
    <div class="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center gap-10">

  <!-- MAIN PREVIEW -->
      <div class="w-full md:w-[40%] max-w-[500px]">
        <div class="relative w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
          <img id="mainPreview"
              class="max-h-full max-w-full object-contain transition-opacity duration-300" />
        </div>

        <div class="mt-4 text-center md:text-left">
          <h3 id="mainName" class="text-xl font-bold"></h3>
          <p id="mainRole" class="text-gray-600"></p>
        </div>
      </div>

      <!-- THUMB SWIPER -->
      <div class="swiper dkvSwiper w-full md:w-[60%]">
        <div class="swiper-wrapper"></div>
      </div>

    </div>

    ${Footer()}
  `;
}

/* ================= JS ================= */
export function initDKV() {
  const data = [
    { img: "/images/dkv/wakil-biro-dkv.png", name: "Maria Jessica", role: "Wakil Kepala 2" },
    { img: "/images/dkv/wakil-biro-dkv.png", name: "Keisha Alia", role: "Kepala Biro" },
    { img: "/images/dkv/wakil2-biro-dkv.png", name: "Fathia Asy", role: "Wakil Kepala 1" },
  ];

  const mainPreview = document.getElementById("mainPreview") as HTMLImageElement;
  const mainName = document.getElementById("mainName")!;
  const mainRole = document.getElementById("mainRole")!;

  initCoverflowSwiper({
    containerClass: ".dkvSwiper",
    data,
    onChange: (item) => {
      mainPreview.classList.add("opacity-0");

      setTimeout(() => {
        mainPreview.src = item.img;
        mainName.textContent = item.name;
        mainRole.textContent = item.role;
        mainPreview.classList.remove("opacity-0");
      }, 150);
    }
  });
}