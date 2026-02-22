import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

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

    <div class="max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center gap-10">

      <div class="relative w-full md:w-[40%] max-w-[500px] group">

        <div class="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[600px]">
          <img id="mainImage"
            class="w-full h-full object-cover object-left-top scale-95 transition duration-500" />
        </div>

        <div class="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-5 rounded-b-xl">
          <p id="mainName" class="font-bold text-xl"></p>
          <p id="mainRole" class="text-sm opacity-80"></p>
        </div>

        <button id="prevBtn" class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100">
          ‹
        </button>

        <button id="nextBtn" class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100">
          ›
        </button>

      </div>

      <div class="w-full md:w-[60%] relative group">

        <button id="thumbPrev"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100">
          ‹
        </button>

        <button id="thumbNext"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded opacity-0 group-hover:opacity-100">
          ›
        </button>

        <div id="thumbContainer"
          class="flex gap-4 overflow-x-auto no-scrollbar py-6 scroll-spacer">
        </div>

      </div>

    </div>

    ${Footer()}
  `;
}

/* ================= JS ================= */
export function initDKV() {
  if (!document.getElementById("mainImage")) return;

  const originalData = [
    { img: "/images/dkv/wakil-biro-dkv.png", name: "Maria Jessica", role: "Wakil Kepala 2" },
    { img: "/images/dkv/wakil-biro-dkv.png", name: "Keisha Alia", role: "Kepala Biro" },
    { img: "/images/dkv/wakil2-biro-dkv.png", name: "Fathia Asy", role: "Wakil Kepala 1" },
  ];

  // loop data (biar infinite)
  const data = [...originalData, ...originalData, ...originalData];

  let current = originalData.length;

  const mainImage = document.getElementById("mainImage") as HTMLImageElement;
  const mainName = document.getElementById("mainName");
  const mainRole = document.getElementById("mainRole");
  const thumbContainer = document.getElementById("thumbContainer");

  /* ================= RENDER ================= */
  thumbContainer!.innerHTML = data.map((item, i) => `
    <div class="thumbCard flex-shrink-0 w-[300px] h-[260px] m-2 cursor-pointer group relative rounded-lg overflow-visible">

      <div class="w-full h-full rounded-lg overflow-hidden shadow">
        <img src="${item.img}" class="w-full h-full object-cover object-top group-hover:scale-110 transition duration-500" />
      </div>

      <div class="absolute bottom-0 w-full bg-black/60 text-white text-xs p-2 rounded-b-lg">
        ${item.name}
      </div>

    </div>
  `).join("");

  const thumbs = document.querySelectorAll(".thumbCard");

  function updateMain(index: number) {
    current = index;

    const realIndex = index % originalData.length;

    mainImage.src = originalData[realIndex].img;
    mainName!.textContent = originalData[realIndex].name;
    mainRole!.textContent = originalData[realIndex].role;

    thumbs.forEach((t, i) => {
      t.classList.toggle("ring-4", i === index);
      t.classList.toggle("ring-[#4b4a92]", i === index);
      t.classList.toggle("ring-offset-2", i === index);
    });
  }

  /* ================= CLICK ================= */
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => updateMain(index));
  });

  /* ================= MAIN BUTTON ================= */
  document.getElementById("nextBtn")!.onclick = () => {
    updateMain((current + 1) % data.length);
  };

  document.getElementById("prevBtn")!.onclick = () => {
    updateMain((current - 1 + data.length) % data.length);
  };

  /* ================= SCROLL LOOP & BUTTON ================= */
  const thumbWrapper = document.getElementById("thumbContainer")!;
  let scrollTimeout: any;

  function checkLoop() {
    // Lebar 1 set data original (1/3 dari total lebar)
    const setWidth = thumbWrapper.scrollWidth / 3; 
    const scroll = thumbWrapper.scrollLeft;
    const maxScroll = thumbWrapper.scrollWidth - thumbWrapper.clientWidth;

    // Jika terlalu dekat dengan ujung kiri, lompat maju 1 set secara instan
    if (scroll < 100) {
      thumbWrapper.scrollLeft += setWidth;
    } 
    // Jika terlalu dekat dengan ujung kanan, lompat mundur 1 set secara instan
    else if (scroll > maxScroll - 100) {
      thumbWrapper.scrollLeft -= setWidth;
    }
  }

  // Gunakan timeout (debounce) agar checkLoop HANYA jalan setelah animasi scroll selesai
  thumbWrapper.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkLoop, 150); 
  });

  /* ================= BUTTON SCROLL ================= */
  document.getElementById("thumbNext")!.onclick = () => {
    thumbWrapper.scrollBy({ left: 332, behavior: "smooth" });
  };

  document.getElementById("thumbPrev")!.onclick = () => {
    thumbWrapper.scrollBy({ left: -332, behavior: "smooth" });
  };

  /* ================= INIT ================= */
  setTimeout(() => {
    thumbWrapper.scrollLeft = thumbWrapper.scrollWidth / 3;
  }, 0);

  updateMain(current);
}