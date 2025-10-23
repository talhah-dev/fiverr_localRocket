const dynamic_navbar = document.getElementById("navbar");

dynamic_navbar.innerHTML = `
<nav id="navbar" class="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 transition-all duration-500">
  <div class="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-4">
    <a href="/index.html" class="flex items-center gap-3" aria-label="Go to home">
      <img src="/docs/assets/images/logo.png" alt="LocalRocket logo" class="md:h-14 w-auto">
      <span class="sr-only">LocalRocket</span>
    </a>

    <!-- Tagline from PDF -->
    <div class="hidden md:block">
      <span class="text-sm text-slate-700 px-3 py-1 border border-slate-300 rounded-md">
        Google Business Profile specialists for weddings
      </span>
    </div>

    <!-- CTA -->
    <a href="https://calendly.com/logesh-logeshgmbbost/30min"
       class="ml-4 inline-flex items-center text-nowrap tracking-wider px-5 py-2 rounded-md bg-teal-500 text-white font-medium
              hover:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50">
      Book a Call
    </a>
  </div>
</nav>

<div class="lg:h-24 h-20"></div>
`
