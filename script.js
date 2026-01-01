document.addEventListener('DOMContentLoaded', () => {

    // NAVIGATION LOGIC
    const navItems = document.querySelectorAll('.nav-item[data-target]');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active classes
            navItems.forEach(nav => nav.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));

            // Add active to current
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // MOCK DATA: NOMAD RADAR
    const nomadData = [
        {
            name: "Zin Cafe",
            area: "Canggu",
            speed: "85 Mbps",
            noise: "Quiet",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=150&q=60"
        },
        {
            name: "Tropical Nomad",
            area: "Canggu",
            speed: "150 Mbps",
            noise: "Social",
            image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=150&q=60"
        },
        {
            name: "The Space",
            area: "Pererenan",
            speed: "95 Mbps",
            noise: "Focus",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=150&q=60"
        }
    ];

    const nomadList = document.querySelector('.nomad-list');
    nomadData.forEach(place => {
        const card = document.createElement('div');
        card.className = 'nomad-card';
        card.innerHTML = `
            <div class="place-img" style="background-image: url('${place.image}')"></div>
            <div class="place-info">
                <div class="place-header">
                    <span class="place-title">${place.name}</span>
                    <span class="nomad-score">9.2</span>
                </div>
                <div class="place-area">${place.area}</div>
                <div class="place-tags">
                    <span class="tag speed"><i class="fas fa-bolt"></i> ${place.speed}</span>
                    <span class="tag"><i class="fas fa-volume-up"></i> ${place.noise}</span>
                </div>
            </div>
        `;
        nomadList.appendChild(card);
    });

    // MARKET LOGIC: FAIR PRICE CHECKS
    const priceBtn = document.getElementById('price-check-btn');
    const priceResult = document.getElementById('price-result');

    priceBtn.addEventListener('click', () => {
        const input = document.getElementById('price-search').value;
        if (input.length < 3) return;

        // Simulating a result
        priceResult.classList.remove('hidden');
        priceResult.innerHTML = `
            <h4>Market Analysis: ${input}</h4>
            <div class="price-bar">
                <div class="price-marker" style="left: 35%"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:#aaa;">
                <span>Fair: 1.5 Mil</span>
                <span>Scam: 3.0 Mil</span>
            </div>
            <p style="margin-top:10px; font-size:13px;">
                <i class="fas fa-check-circle" style="color:var(--accent-green)"></i> 
                You found a <strong>Great Deal</strong> (Top 20%)
            </p>
        `;
    });

    // SUNSET RADAR ANIMATION (Simple CSS Manipulation)
    const sunIcon = document.querySelector('.sun-icon');
    let sunPos = 20;
    setInterval(() => {
        sunPos += 0.5;
        if (sunPos > 80) sunPos = 20;
        sunIcon.style.left = sunPos + '%';
        sunIcon.style.bottom = (Math.sin((sunPos - 20) / 60 * Math.PI) * 40) + 'px'; // Arc motion
    }, 100);

});
