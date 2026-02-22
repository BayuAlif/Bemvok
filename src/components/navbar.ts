
export function Navbar() {
  return `
    <nav class="bg-[#ececec] text-black p-0 flex justify-between w-full shadow-xl px-15 relative z-50 items-center">
        <img 
            src="/images/logo.png" 
            alt="Logo BEM Vokasi"
            class="w-8 md:w-11 object-contain py-4"
        />
    
      <ul class="flex justify-center items-stretch h-full gap-4 md:gap-8">
        <li class="flex items-center"><a href="/home" data-link class="hover:text-gray-600 font-bold px-4 py-4 block">Home</a></li>
        
        <li class="relative group cursor-pointer flex items-center">
            <a class="px-4 py-4 flex items-center gap-1 h-full font-bold transition-colors duration-200 group-hover:bg-[#666666] group-hover:text-[#5B5CE2]">
                About
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            
            <ul class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-max min-w-45 bg-[#666666] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col text-white py-4 font-semibold text-lg">
                <li><a href="/about/values" data-link class="block px-6 py-2 hover:text-gray-300">Values</a></li>
                <li><a href="/about/visual-identity" data-link class="block px-6 py-2 hover:text-gray-300">Visual Identity</a></li>
            </ul>
        </li>

        <li class="relative group cursor-pointer flex items-center">
            <a class="px-4 py-4 flex items-center gap-1 h-full transition-colors duration-200 group-hover:bg-[#666666] group-hover:text-white">
                Division
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-[#666666] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-row w-max text-white">
                
                <ul class="flex-1 min-w-40 p-6 space-y-4 list-disc marker:text-white pl-10">
                    <li><a href="#" class="hover:underline">Pengurus Inti</a></li>
                    <li><a href="#" class="hover:underline">ADKESMA</a></li>
                    <li><a href="#" class="hover:underline">BIRPRO</a></li>
                    <li><a href="#" class="hover:underline">DEPOR</a></li>
                    <li><a href="/biro-dkv" data-link class="hover:underline">DKV</a></li>
                </ul>

                <ul class="flex-1 min-w-40 p-6 space-y-4 list-disc marker:text-white pl-10 border-l-[3px] border-white">
                    <li><a href="#" class="hover:underline">HUMAS</a></li>
                    <li><a href="#" class="hover:underline">KASTRAT</a></li>
                    <li><a href="#" class="hover:underline">KESTARI</a></li>
                    <li><a href="#" class="hover:underline">LITBANG</a></li>
                    <li><a href="#" class="hover:underline">PEDANK</a></li>
                </ul>

                <ul class="flex-1 min-w-40 p-6 space-y-4 list-disc marker:text-white pl-10 border-l-[3px] border-white">
                    <li><a href="#" class="hover:underline">PEMKAR</a></li>
                    <li><a href="#" class="hover:underline">PSDM</a></li>
                    <li><a href="#" class="hover:underline">SENBUD</a></li>
                    <li><a href="#" class="hover:underline">SOSMAS</a></li>
                </ul>

            </div>
        </li>

        <li class="flex items-center"><a href="#" class="hover:text-gray-600 px-4 py-4 block">Programs</a></li>
        <li class="flex items-center"><a href="/contact" data-link class="hover:text-gray-600 px-4 py-4 block">Contact</a></li>
      </ul>
    </nav>
  `;
}