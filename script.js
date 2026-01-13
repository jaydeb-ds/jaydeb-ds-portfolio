document.addEventListener('DOMContentLoaded', function(){
	// Mobile nav toggle
	const nav = document.getElementById('nav');
	const navToggle = document.getElementById('navToggle');
	navToggle.addEventListener('click', ()=>{
		nav.classList.toggle('open');
	});

	// Smooth scroll for in-page links
	document.querySelectorAll('a[href^="#"]').forEach(link=>{
		link.addEventListener('click', (e)=>{
			const target = link.getAttribute('href');
			if(target.length>1){
				e.preventDefault();
				const el = document.querySelector(target);
				if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
				nav.classList.remove('open');
			}
		});
	});

	// Contact form handling (placeholder)
	const form = document.getElementById('contactForm');
	const status = document.getElementById('formStatus');
	if(form){
		form.addEventListener('submit', (e)=>{
			e.preventDefault();
			status.textContent = 'Sending…';
			// Simulate async submit
			setTimeout(()=>{
				status.textContent = 'Thanks! I received your message.';
				form.reset();
			}, 800);
		});
	}

	// Year
	const y = new Date().getFullYear();
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = y;
});

