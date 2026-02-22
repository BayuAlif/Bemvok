import './style.css'
import { HomePage } from './pages/home.ts'
import { VisualIdentity } from "./pages/about/visualIdentity.ts";
import { ValuesPage } from "./pages/about/values.ts";
import { ContactSection } from "./pages/contact.ts";
import { DKVPage, initDKV } from "./pages/division/dkvPage.ts";

function renderPage() {
  const path = window.location.pathname;

  let content = "";

  if (path === "/about/visual-identity") {
    content = VisualIdentity();
  } else if (path === "/about/values") {
    content = ValuesPage();
  } else if (path === "/contact") {
    content = ContactSection();
  } else if (path === "/biro-dkv") {
    content = DKVPage();
  } else {
    content = HomePage();
  }

  document.querySelector("#app")!.innerHTML = content;

  // 🔥 INIT AFTER RENDER
  if (path === "/biro-dkv") {
    setTimeout(() => {
      initDKV();
    }, 0);
  }
}

renderPage();

window.addEventListener("popstate", renderPage);

export function navigate(path: string) {
  window.history.pushState({}, "", path);
  renderPage();
}
