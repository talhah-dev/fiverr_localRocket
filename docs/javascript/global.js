const lenis = new Lenis({
    autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer z-40 bg-[#fff] h-10 fixed bottom-5 right-5 hover:opacity-80 transition-all duration-500 hidden text-zinc-900 flex items-center justify-center rounded-lg "><i class="fa-solid fa-angle-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

AOS.init({
    once: true,
    duration: 1000
});

// loader

let loaderStartTime = 0;

function showLoader() {
    const loader = document.getElementById('global-loader');
    loader.classList.remove('hidden');
    requestAnimationFrame(() => loader.classList.add('opacity-100'));
    loaderStartTime = Date.now();
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    const elapsed = Date.now() - loaderStartTime;
    const remainingTime = 500 - elapsed; // ensure at least 0.5s

    setTimeout(() => {
        loader.classList.remove('opacity-100');
        setTimeout(() => loader.classList.add('hidden'), 300); // wait for fade-out
    }, Math.max(0, remainingTime));
}

showLoader();
setTimeout(() => {
    hideLoader();
}, 200);

//  Counter animation (simple, no deps). Triggers once when visible. 
(function () {
    const els = document.querySelectorAll('.js-counter');
    if (!('IntersectionObserver' in window)) return animateAll();

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    els.forEach(el => io.observe(el));

    function animateAll() { els.forEach(animate); }

    function animate(el) {
        const to = parseFloat(el.dataset.to || '0');
        const suffix = el.dataset.suffix || '';
        const duration = parseInt(el.dataset.duration || '1200', 10);
        const start = 0;
        const startTime = performance.now();

        function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const val = Math.round(start + (to - start) * progress);
            el.textContent = val.toLocaleString() + (suffix || '');
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }
})();

// tiny tabs controller (no lightbox JS needed—Lightbox2 handles itself)
(function () {
    const tabs = document.querySelectorAll('#cases .tab-btn');
    const panels = {
        wedding: document.getElementById('panel-wedding'),
        veg: document.getElementById('panel-veg')
    };

    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            // update aria
            tabs.forEach(b => b.setAttribute('aria-selected', b === btn ? 'true' : 'false'));
            // update styles
            tabs.forEach(b => b.classList.toggle('bg-slate-900', b === btn));
            tabs.forEach(b => b.classList.toggle('text-white', b === btn));
            tabs.forEach(b => b.classList.toggle('text-slate-700', b !== btn));
            // toggle panels
            Object.keys(panels).forEach(key => panels[key].classList.toggle('hidden', key !== target));
        });
    });
})();

// QUALIFICATION → CALENDAR

(function () {
    const form = document.getElementById('leadForm');
    const calendarStep = document.getElementById('calendarStep');
    const followUp = document.getElementById('followUpMsg');
    const calFrame = document.getElementById('calFrame');

    // TODO: Replace with your real Calendly URL
    const CALENDLY_URL = "https://calendly.com/your-link/intro-call";

    function qualifies(budgetVal, timelineVal) {
        const budgetOk = budgetVal !== "under-499" && budgetVal !== "";
        const timelineDays = ({ "asap": 0, "30-60": 60, "90": 90, "120-plus": 120 })[timelineVal] ?? 999;
        const timelineOk = timelineDays <= 90;
        return budgetOk && timelineOk;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fd = new FormData(form);
        const budget = fd.get('budget');
        const timeline = fd.get('timeline');

        if (!budget || !timeline) {
            alert('Please select both Budget and Timeline.');
            return;
        }

        // Fire a lightweight event hook
        try { console.log('form_step1_complete'); } catch (_) { }

        if (qualifies(budget, timeline)) {
            followUp.classList.add('hidden');
            calendarStep.classList.remove('hidden');
            calFrame.src = CALENDLY_URL; // reveal calendar
            try { console.log('calendar_viewed'); } catch (_) { }
            // Optionally scroll into view
            calendarStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            calendarStep.classList.add('hidden');
            followUp.classList.remove('hidden');
        }
    });
})();

// MINI-FAQ

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const button = document.getElementById(`button-${index}`);

    const allContents = document.querySelectorAll('[id^="content-"]');
    const allIcons = document.querySelectorAll('[id^="icon-"]');
    const allButtons = document.querySelectorAll('[id^="button-"]');

    // close others
    allContents.forEach((c) => { if (c !== content) c.style.maxHeight = '0'; });
    allIcons.forEach((i) => { if (i !== icon) i.classList.remove('rotate-180'); });
    allButtons.forEach((b) => { if (b !== button) b.setAttribute('aria-expanded', 'false'); });

    // toggle current
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180');
        button.setAttribute('aria-expanded', 'false');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
        button.setAttribute('aria-expanded', 'true');
    }
}

// keep heights correct on resize (for open panes)
window.addEventListener('resize', () => {
    document.querySelectorAll('[id^="content-"]').forEach((c) => {
        if (c.style.maxHeight && c.style.maxHeight !== '0px') {
            c.style.maxHeight = c.scrollHeight + 'px';
        }
    });
});