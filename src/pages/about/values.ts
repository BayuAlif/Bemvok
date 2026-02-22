import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function ValuesPage() {
  return `
    ${Navbar()}
    <div class=" p-15 md:px-16 overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">

        <div class="flex flex-col h-full">
          <h2 class="text-4xl font-bold text-center mb-10 text-black">Visi</h2>

          <div class="relative flex items-center grow">
            
            <div class="absolute right-120 top-50 z-10 w-40 h-60 -translate-y-1/2  md:w-40 bg-gray-800 flex items-center justify-center shadow-lg">
              <svg class="w-20 h-20 text-black opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>

            <div class="bg-gray-400 py-8 pr-8 pl-40 md:pl-34 text-black shadow-sm w-full h-72 flex flex-col justify-center">
              <ol class="text-lg text-justify">
                <li>BEM Vokasi UI 2025 berkomitmen menjadi wadah pengembangan bagi seluruh IKM Vokasi UI serta mendorong kolaborasi antar-IKM guna meningkatkan kebermanfaatan bagi Vokasi UI, UI, dan Indonesia</li>
              </ol>
            </div>

          </div>
        </div>


        <div class="flex flex-col h-full">
          <h2 class="text-4xl font-bold text-center mb-10 text-black">Misi</h2>

          <div class="relative flex items-center grow">
            
            <div class="absolute left-120 top-50 z-10 w-40 h-60 -translate-y-1/2  md:w-40  bg-gray-800 flex items-center justify-center shadow-lg">
              <svg class="w-20 h-20 text-black opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>

            <div class="bg-gray-400 py-8 pl-8 pr-40 md:pr-34 text-black shadow-sm w-full h-72 flex flex-col text-right">

              <div class="inline-block h-full custom-scroll pr-2">
                <ol class="list-decimal list-inside leading-relaxed text-lg space-y-3 text-left">
                  <li>Mengembangkan internalisasi yang baik melalui pendekatan komprehensif guna memberikan kebermanfaatan bagi Vokasi UI, UI, dan Indonesia.</li>
                  <li>Mewujudkan hubungan kolaboratif dengan berbagai stakeholder untuk mencapai manfaat yang optimal.</li>
                  <li>Mewadahi potensi yang dimiliki mahasiswa Vokasi UI di bidang minat dan bakat serta menerapkan budaya apresiasi.</li>
                  <li>Mewujudkan BEM Vokasi UI yang berkomitmen pada disiplin dan menghormati pentingnya waktu.</li>
                </ol>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>

    <div>
        <div class="w-full h-10 bg-[#9baac7] my-15"></div>
        <div>
            <div class="flex justify-center mb-6">
                <h1>
                    NILAI-NILAI ORGANISASI
                </h1>
            </div>

            <div class=" p-8 w-full max-w-425 mx-auto flex flex-col gap-6 mb-20">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                    <div class="md:col-span-8 bg-[#a3a8b0] h-24 md:h-36 w-full p-5">
                      <h5 class="text-justify">Harmoni adalah keadaan di mana berbagai elemen bekerja bersama secara selaras, menciptakan kesatuan yang indah dan bermakna. Dalam konteks BEM Vokasi UI, nilai harmoni diwujudkan melalui sinergi antar anggota, kelembagaan, dan pihak eksternal, guna memperkuat ikatan internal dan membangun hubungan yang harmonis dengan seluruh elemen di Vokasi UI. Dengan demikian, harmoni menjadi landasan terciptanya lingkungan yang mendukung kolaborasi dan inovasi.</h5>
                    </div>
                    
                    <div class="md:col-span-3 bg-[#a3a8b0] h-24 md:h-36 flex items-center justify-center w-full">
                    <span class="text-black font-bold tracking-widest text-xl md:text-4xl">HARMONI</span>
                    </div>
                    
                    <div class="hidden md:block md:col-span-1"></div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                    <div class="hidden md:block md:col-span-1"></div>
                    
                    <div class="md:col-span-3 bg-[#a3a8b0] h-24 md:h-36 flex items-center justify-center w-full">
                    <span class="text-black font-bold tracking-widest text-xl md:text-4xl">KOLABORASI</span>
                    </div>
                    
                    <div class="md:col-span-8 bg-[#a3a8b0] h-24 md:h-36 w-full p-5">
                      <h5 class="text-justify">Kolaborasi merupakan kerja sama antara individu atau kelompok untuk mencapai tujuan bersama secara efektif. Dalam BEM Vokasi UI, kolaborasi diwujudkan melalui koordinasi yang baik antar departemen, lembaga, dan mitra eksternal. Nilai ini menekankan pentingnya kebersamaan, komunikasi, dan saling mendukung dalam menjalankan program kerja. Dengan kolaborasi, BEM Vokasi UI mampu menciptakan dampak yang lebih besar dan manfaat yang lebih luas bagi IKM Vokasi UI.</h5>
                    </div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                    <div class="md:col-span-8 bg-[#a3a8b0] h-24 md:h-36 w-full p-5">
                      <h5 class="text-justify">Kebermanfaatan adalah nilai yang mengutamakan dampak positif dari setiap tindakan, program, atau kebijakan yang diimplementasikan. BEM Vokasi UI bertujuan untuk memberikan manfaat nyata yang dapat dirasakan oleh seluruh pihak terkait, baik di tingkat internal Vokasi UI maupun eksternal. Dengan mengedepankan kebermanfaatan, BEM Vokasi UI berkomitmen menjadi agen perubahan yang memberikan kontribusi signifikan bagi masyarakat Vokasi UI, UI, dan Indonesia.</h5>
                    </div>
                    
                    <div class="md:col-span-3 bg-[#a3a8b0] h-24 md:h-36 flex items-center justify-center w-full">
                    <span class="text-black font-bold tracking-widest text-xl md:text-4xl">KEBERMANFAATAN</span>
                    </div>
                    
                    <div class="hidden md:block md:col-span-1">
                    </div>
                </div>
            </div>
        </div>
    </div>
    ${Footer()}
  `;
}