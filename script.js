// ข้อมูลเซิร์ฟเวอร์ตัวอย่าง (ในอนาคตคุณสามารถเปลี่ยนเป็นดึงจาก API จริงได้)
const servers = [
    {
        name: "เมืองสยาม Roleplay",
        ip: "123.456.78.9",
        players: "150/300",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
        votes: 1250
    },
    {
        name: "Gangster Paradise",
        ip: "98.76.54.32",
        players: "80/128",
        img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500",
        votes: 980
    }
];

function renderServers() {
    const list = document.getElementById('server-list');
    list.innerHTML = ''; // ล้าง Loader ออก

    servers.forEach(server => {
        list.innerHTML += `
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
                <img src="${server.img}" class="w-full h-40 object-cover">
                <div class="p-5">
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-xl font-bold text-white">${server.name}</h3>
                        <span class="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/20">
                            ${server.players} Players
                        </span>
                    </div>
                    <p class="text-slate-400 text-sm mb-4">IP: ${server.ip}</p>
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center text-orange-400">
                            <i class="fa-solid fa-fire mr-1"></i>
                            <span class="font-bold">${server.votes} โหวต</span>
                        </div>
                        <button onclick="alert('ขอบคุณที่โหวต!')" class="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition">
                            โหวตให้แก๊งนี้
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าเว็บ
window.onload = renderServers;
