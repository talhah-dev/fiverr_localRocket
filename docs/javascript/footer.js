const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-white">
        <div class="max-w-screen-xl mx-auto px-4 py-12">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <!-- Brand -->
                <a href="/index.html" class="flex items-center md:justify-start justify-center gap-3" aria-label="Go to home">
                    <img src="/docs/assets/images/logo.png" alt="LocalRocket logo" class="md:h-16 h-16 w-auto">
                    <span class="sr-only">LocalRocket</span>
                </a>

                <!-- Nav -->
                <nav aria-label="Footer navigation" class="">
                    <ul class="flex md:flex-wrap flex-col md:flex-row items-center gap-x-6 gap-y-3 text-sm text-slate-700">
                        <li><a href="#who" class="hover:text-slate-900">Who it’s for</a></li>
                        <li><a href="#money-math" class="hover:text-slate-900">Money-Math</a></li>
                        <li><a href="#proof" class="hover:text-slate-900">Proof</a></li>
                        <li><a href="#roadmap" class="hover:text-slate-900">How it works</a></li>
                        <li><a href="#what-we-fix" class="hover:text-slate-900">What we fix</a></li>
                        <li><a href="#case" class="hover:text-slate-900">Case</a></li>
                        <li><a href="#pricing" class="hover:text-slate-900">Pricing</a></li>
                        <li><a href="#qualify" class="hover:text-slate-900">Book a call</a></li>
                        <li><a href="#faq" class="hover:text-slate-900">FAQ</a></li>
                    </ul>
                </nav>

                <!-- Footer CTA -->
                <a href="https://calendly.com/logesh-logeshgmbbost/30min"
                    class="inline-flex items-center justify-center px-5 py-2 rounded-md bg-black text-white text-sm font-medium
                hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 transition"
                    data-event="footer_cta_click">
                    Book a Call
                </a>
            </div>

            <!-- Divider -->
            <div class="my-8 h-px w-full bg-slate-200"></div>

            <!-- Fine print -->
            <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-slate-600">
                <p>© 2025 LocalRocket. All rights reserved.</p>
            </div>
        </div>
    </footer>

`

// const year = new Date().getFullYear()
// const copyright = document.getElementById('copyright').innerHTML = year