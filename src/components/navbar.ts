export function Navbar() {
  return `
    <nav class="bg-[#ececec] text-black w-full shadow-xl relative z-50">
      <div class="flex justify-between items-center px-4 md:px-15 py-2 md:py-0 h-full">
        
        <img 
            src="/images/logo.png" 
            alt="Logo BEM Vokasi"
            class="w-10 md:w-11 object-contain py-2 md:py-4"
        />

        <button id="mobile-menu-btn" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="md:hidden p-2 text-black focus:outline-none cursor-pointer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      
        <ul class="hidden md:flex justify-center items-stretch h-full gap-4 md:gap-8">
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
              <a class="px-4 py-4 flex items-center gap-1 h-full font-bold transition-colors duration-200 group-hover:bg-[#666666] group-hover:text-white">
                  Division
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
              </a>
              
              <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-[#666666] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-row w-max text-white">
                  <ul class="flex-1 min-w-40 p-6 space-y-4 marker:text-white pl-10 font-medium list-none">
                      <li><a href="#" class="hover:underline">Pengurus Inti</a></li>
                      <li><a href="#" class="hover:underline">ADKESMA</a></li>
                      <li><a href="#" class="hover:underline">BIRPRO</a></li>
                      <li><a href="#" class="hover:underline">DEPOR</a></li>
                      <li><a href="/biro-dkv" data-link class="hover:underline">DKV</a></li>
                  </ul>
                  <ul class="flex-1 min-w-40 p-6 space-y-4 marker:text-white pl-10 border-l-[3px] border-white font-medium list-none">
                      <li><a href="#" class="hover:underline">HUMAS</a></li>
                      <li><a href="#" class="hover:underline">KASTRAT</a></li>
                      <li><a href="#" class="hover:underline">KESTARI</a></li>
                      <li><a href="#" class="hover:underline">LITBANG</a></li>
                      <li><a href="#" class="hover:underline">PEDANK</a></li>
                  </ul>
                  <ul class="flex-1 min-w-40 p-6 space-y-4 marker:text-white pl-10 border-l-[3px] border-white font-medium list-none">
                      <li><a href="#" class="hover:underline">PEMKAR</a></li>
                      <li><a href="#" class="hover:underline">PSDM</a></li>
                      <li><a href="#" class="hover:underline">SENBUD</a></li>
                      <li><a href="#" class="hover:underline">SOSMAS</a></li>
                  </ul>
              </div>
          </li>

          <li class="flex items-center"><a href="#" class="hover:text-gray-600 font-bold px-4 py-4 block">Programs</a></li>
          <li class="flex items-center"><a href="/contact" data-link class="hover:text-gray-600 font-bold px-4 py-4 block">Contact</a></li>
        </ul>
      </div>

      <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-[#ececec] shadow-xl border-t border-gray-300">
        <ul class="flex flex-col text-left px-6 py-4 space-y-2">
          <li><a href="/home" data-link class="block py-2 font-bold hover:text-gray-600 border-b border-gray-300">Home</a></li>
          
          <li class="border-b border-gray-300">
            <button onclick="document.getElementById('mobile-about').classList.toggle('hidden')" class="w-full text-left py-2 font-bold flex justify-between items-center hover:text-gray-600">
              About
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <ul id="mobile-about" class="hidden flex-col pl-4 pb-2 space-y-2 text-gray-700">
              <li><a href="/about/values" data-link class="block py-1">Values</a></li>
              <li><a href="/about/visual-identity" data-link class="block py-1">Visual Identity</a></li>
            </ul>
          </li>

          <li class="border-b border-gray-300">
            <button onclick="document.getElementById('mobile-division').classList.toggle('hidden')" class="w-full text-left py-2 font-bold flex justify-between items-center hover:text-gray-600">
              Division
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div id="mobile-division" class="hidden flex-col pl-4 pb-2 text-gray-700">
              <ul class="space-y-2 py-1">
                <li><a href="#" class="block py-1">Pengurus Inti</a></li>
                <li><a href="#" class="block py-1">ADKESMA</a></li>
                <li><a href="#" class="block py-1">BIRPRO</a></li>
                <li><a href="#" class="block py-1">DEPOR</a></li>
                <li><a href="/biro-dkv" data-link class="block py-1">DKV</a></li>
                <li><a href="#" class="block py-1">HUMAS</a></li>
                <li><a href="#" class="block py-1">KASTRAT</a></li>
                <li><a href="#" class="block py-1">KESTARI</a></li>
                <li><a href="#" class="block py-1">LITBANG</a></li>
                <li><a href="#" class="block py-1">PEDANK</a></li>
                <li><a href="#" class="block py-1">PEMKAR</a></li>
                <li><a href="#" class="block py-1">PSDM</a></li>
                <li><a href="#" class="block py-1">SENBUD</a></li>
                <li><a href="#" class="block py-1">SOSMAS</a></li>
              </ul>
            </div>
          </li>

          <li><a href="#" class="block py-2 font-bold hover:text-gray-600 border-b border-gray-300">Programs</a></li>
          <li><a href="/contact" data-link class="block py-2 font-bold hover:text-gray-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}