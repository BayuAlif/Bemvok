import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function VisualIdentity() {
  return `
    ${Navbar()}

    <div class="p-10">

      <!-- ================= HEADER ================= -->
      <div class="flex flex-col md:flex-row justify-center gap-16 items-center">

        <!-- LEFT -->
        <div class="flex space-x-8 items-center">
          <img src="/images/logo.png" alt="Logo BEM Vokasi" class="w-56 md:w-80" />

          <div class="max-w-md space-y-4">
            <h1 class="text-3xl md:text-4xl font-bold">Tentang Logo</h1>
            <h2 class="text-xl md:text-2xl">“Rajut Harmoni, Kuatkan Kolaborasi”</h2>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="p-4 md:p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl">

            ${CardImg("Kepala Rubah", [
              "Api yang menyatu dengan kepala Voksy melambangkan semangat yang menyala dan tidak padam, mencerminkan integritas dan dedikasi dalam mengabdi.",
              "Bentuk dasar logo menyerupai obor, simbol kepemimpinan dan pencerahan, menjadikan BEM sebagai garda terdepan dalam membawa manfaat dan arah bagi IKM Vokasi UI."
            ])}

            ${CardImg("Api & Obor", [
              "Api yang menyatu dengan kepala Voksy melambangkan semangat yang menyala dan tidak padam, mencerminkan integritas dan dedikasi dalam mengabdi.",
              "Bentuk dasar logo menyerupai obor, simbol kepemimpinan dan pencerahan, menjadikan BEM sebagai garda terdepan dalam membawa manfaat dan arah bagi IKM Vokasi UI."
            ])}

            ${CardColor("#264c9d", "Merepresentasikan Rumpun Administratif", [
              "Mewakili kecermatan, stabilitas, dan profesionalisme.",
              "Melambangkan rumpun Administratif, yang identik dengan tata kelola, manajemen, dan sistem.",
              "Warna biru juga menekankan sikap tenang, analitis, dan bertanggung jawab dalam menjalankan roda organisasi."
            ])}

            ${CardColor("#fe9430", "Merepresentasikan Rumpun Humaniora", [
              "Melambangkan semangat, kreativitas, dan kehangatan.",
              "Merepresentasikan rumpun Humaniora, yang menekankan nilai-nilai sosial, komunikasi, dan seni.",
              "Juga menggambarkan semangat berkarya dan berinteraksi secara inklusif di lingkungan kampus."
            ])}

            <!-- CENTER ITEM -->
            <div class="md:col-span-2 flex justify-center">
              ${CardColor("#1da548", "Merepresentasikan Rumpun Kesehatan", [
                "Melambangkan kesegaran, pertumbuhan, harmoni, dan keberlanjutan.",
                "Mewakili rumpun Kesehatan, menegaskan pentingnya keseimbangan, kolaborasi, dan kepedulian sosial.",
                "Bentuk melengkung seperti daun menyimbolkan dukungan dan perlindungan—mencerminkan peran BEM sebagai representasi mahasiswa."
              ], true)}
            </div>

          </div>
        </div>

      </div>

    </div>

    <!-- ================= SEPARATOR ================= -->
    <div class="w-full h-10 bg-[#9baac7] my-16"></div>

    <!-- ================= MASCOT ================= -->
    <div class="mb-20 p-10">

      <div class="flex justify-center text-center mb-10">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold">MEET VOKSY!</h1>
          <h2 class="text-2xl md:text-3xl">Our Mascot</h2>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10 items-center">

        <div class="flex-1 h-80 md:h-120 bg-[#9baac7]"></div>

        <div class="w-full md:w-200 h-64 md:h-94 bg-[#9baac7]"></div>

      </div>

    </div>

    ${Footer()}
  `;
}

/* ================= CARD IMAGE ================= */
function CardImg(title: string, items: string[]) {
  return `
    <div class="flex flex-col items-start hover:-translate-y-1 transition duration-300">

      <div class="w-16 h-15 flex items-center justify-center">
        <img src="/images/logo.png" class="w-6 md:w-10 object-contain" />
      </div>

      <p class="mt-4 font-semibold text-left">${title}</p>

      <ol class="list-disc text-sm space-y-2 text-left max-h-24 overflow-y-auto custom-scroll pr-2">
        ${items.map(i => `<li>${i}</li>`).join("")}
      </ol>

    </div>
  `;
}

/* ================= CARD COLOR ================= */
function CardColor(color: string, title: string, items: string[], center = false) {
  return `
    <div class="flex flex-col ${center ? "items-center text-center" : "items-start"} hover:-translate-y-1 transition duration-300">

      <div class="w-16 h-12 rounded-lg" style="background:${color}"></div>

      <p class="mt-4 font-semibold ${center ? "" : "text-left"}">${title}</p>

      <ol class="list-disc text-sm space-y-2 text-left max-h-24 overflow-y-auto custom-scroll pr-2 ${center ? "max-w-xs" : ""}">
        ${items.map(i => `<li>${i}</li>`).join("")}
      </ol>

    </div>
  `;
}