import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function ValuesPage() {
  return `
    ${Navbar()}

    <!-- VISI MISI -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-16">

        <!-- VISI -->
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center">
            Visi
          </h2>

          <div class="bg-gray-200 rounded-2xl p-8 shadow-md">
            <ol class="text-base md:text-lg leading-relaxed text-justify">
              <li>
                BEM Vokasi UI 2025 berkomitmen menjadi wadah pengembangan 
                bagi seluruh IKM Vokasi UI serta mendorong kolaborasi 
                antar-IKM guna meningkatkan kebermanfaatan bagi 
                Vokasi UI, UI, dan Indonesia.
              </li>
            </ol>
          </div>
        </div>

        <!-- MISI -->
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-center">
            Misi
          </h2>

          <div class="bg-gray-200 rounded-2xl p-8 shadow-md">
            <ol class="list-decimal list-inside space-y-4 text-base md:text-lg leading-relaxed">
              <li>
                Mengembangkan internalisasi yang baik melalui pendekatan komprehensif 
                guna memberikan kebermanfaatan bagi Vokasi UI, UI, dan Indonesia.
              </li>
              <li>
                Mewujudkan hubungan kolaboratif dengan berbagai stakeholder 
                untuk mencapai manfaat yang optimal.
              </li>
              <li>
                Mewadahi potensi mahasiswa Vokasi UI di bidang minat dan bakat 
                serta menerapkan budaya apresiasi.
              </li>
              <li>
                Mewujudkan BEM Vokasi UI yang berkomitmen pada disiplin 
                dan menghormati pentingnya waktu.
              </li>
            </ol>
          </div>
        </div>

      </div>
    </section>

    <!-- DIVIDER -->
    <div class="w-full h-4 md:h-10 bg-[#9baac7]"></div>

    <!-- NILAI ORGANISASI -->
    <section class="container mx-auto px-6 py-16">
      <h1 class="text-center text-3xl md:text-4xl font-bold mb-12">
        NILAI-NILAI ORGANISASI
      </h1>

      <div class="space-y-12">

        <!-- ITEM -->
        <div class="grid md:grid-cols-12 gap-6 items-center bg-[#a3a8b0] rounded-2xl p-6 shadow-md">
          <div class="md:col-span-4 text-center">
            <h3 class="font-bold text-xl md:text-3xl tracking-widest">
              HARMONI
            </h3>
          </div>
          <div class="md:col-span-8">
            <p class="text-sm md:text-base text-justify leading-relaxed">
              Harmoni adalah keadaan di mana berbagai elemen bekerja bersama 
              secara selaras, menciptakan kesatuan yang indah dan bermakna. 
              Dalam konteks BEM Vokasi UI, nilai harmoni diwujudkan melalui 
              sinergi antar anggota dan kelembagaan guna memperkuat kolaborasi.
            </p>
          </div>
        </div>

        <!-- ITEM -->
        <div class="grid md:grid-cols-12 gap-6 items-center bg-[#a3a8b0] rounded-2xl p-6 shadow-md">
          <div class="md:col-span-8 order-2 md:order-1">
            <p class="text-sm md:text-base text-justify leading-relaxed">
              Kolaborasi merupakan kerja sama antara individu atau kelompok 
              untuk mencapai tujuan bersama secara efektif. Nilai ini menekankan 
              pentingnya komunikasi dan kebersamaan dalam menjalankan program kerja.
            </p>
          </div>

          <!-- TITLE (kanan saat desktop) -->
          <div class="md:col-span-4 text-center order-1 md:order-2">
            <h3 class="font-bold text-xl md:text-3xl tracking-widest">
              KOLABORASI
            </h3>
          </div>

        </div>

        <!-- ITEM -->
        <div class="grid md:grid-cols-12 gap-6 items-center bg-[#a3a8b0] rounded-2xl p-6 shadow-md">
          <div class="md:col-span-4 text-center">
            <h3 class="font-bold text-xl md:text-3xl tracking-widest">
              KEBERMANFAATAN
            </h3>
          </div>
          <div class="md:col-span-8">
            <p class="text-sm md:text-base text-justify leading-relaxed">
              Kebermanfaatan adalah nilai yang mengutamakan dampak positif 
              dari setiap tindakan dan kebijakan. BEM Vokasi UI berkomitmen 
              menjadi agen perubahan yang memberikan kontribusi signifikan 
              bagi Vokasi UI dan Indonesia.
            </p>
          </div>
        </div>

      </div>
    </section>

    ${Footer()}
  `;
}