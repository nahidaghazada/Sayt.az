const openSidebar = document.querySelector('#openSidebar')
const closeSidebar = document.querySelector('#closeSidebar')
const down = document.getElementById("down")
const header = document.getElementById("header")
const sehife = document.getElementById("sehife")
const azn = document.getElementById("azn")
const sehifeInput = document.getElementById("sehifeInput")
const murekkebInput = document.getElementById("murekkebInput")
const rangeContainer = document.getElementById("rangeContainer")
const checkContainer = document.getElementById("checkContainer")
const eccomerceContainer = document.getElementById("eccomerceContainer")
const rangeSum = document.getElementById("rangeSum")
const checkSum = document.getElementById("checkSum")
const eccomerceSum = document.getElementById("eccomerceSum")
const customerContainer = document.getElementById("customerContainer")
const sehifePrice = document.getElementById("sehifePrice")
const elaveler = document.getElementById("elaveler")
const seoXidmeti = document.getElementById("seoXidmeti")
const eTicaret = document.getElementById("eTicaret")
const logoDizayn = document.getElementById("logoDizayn")
const input = document.getElementById("input")
const manat = document.getElementById("manat")
const toplamQiymet = document.getElementById("toplamQiymet")

const hostingBtn = document.getElementById("hostingBtn")
const hostingBorder = document.getElementById("hostingBorder")
const hostingBorder1 = document.getElementById("hostingBorder1")
const hostingBorder2 = document.getElementById("hostingBorder2")
const priceValue = document.getElementById("priceValue")
const priceValue1 = document.getElementById("priceValue1")
const priceValue2 = document.getElementById("priceValue2")
const priceMonth = document.getElementById("priceMonth")
const priceMonth1 = document.getElementById("priceMonth1")
const priceMonth2 = document.getElementById("priceMonth2")





let flag = true
function openMenu() {
        closeSidebar.style.right = flag ? 0 : '-100%'
        flag = !flag
}

const arr =
        ['.az',
                '.com',
                '.net',
                '.info',
                '.biz',
                '.org',
                '.us',
                '.in',
                '.ws',
                '.mobi',
                '.tv',
                '.me',
                '.ru',
                '.de',
                '.com.az',
                '.co',
                '.site.az',
                '.sayt.az',
                '.ureb.com',
                '.org.az',
                '.info.az',
                '.biz.az',
                '.net.az'

        ]
let kod = ''
function deyish() {
        arr.map(item => {
                kod += `<option>${item}</option>`
        })
        lann.innerHTML = kod
}
deyish()

let swiper = new Swiper(".slider", {
        loop: true,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        autoplay: {
                delay: 2500,
                disableOnInteraction: false
        },
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
});

let swiper2 = new Swiper(".slider2", {
        loop: true,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
});

const rangeData = [
        {
                "id": 1,
                "name": "Bloq",
                "price": 200,
                "type": "website_addons"
        },
        {
                "id": 2,
                "name": "Üzv girişi /‍‍‍ Profillər",
                "price": 400,
                "type": "website_addons"
        },
        {
                "id": 8,
                "name": "Responsive",
                "price": 100,
                "type": "website_addons"
        },
        {
                "id": 22,
                "name": "Forum",
                "price": 400,
                "type": "website_addons"
        },
        {
                "id": 23,
                "name": "Mesajlaşma",
                "price": 50,
                "type": "website_addons"
        },
        {
                "id": 24,
                "name": "Canlı Söhbət",
                "price": 50,
                "type": "website_addons"
        },
        {
                "id": 25,
                "name": "Qalereya",
                "price": 100,
                "type": "website_addons"
        },
        {
                "id": 26,
                "name": "Əlaqə Forması",
                "price": 100,
                "type": "website_addons"
        },
        {
                "id": 27,
                "name": "Saytda Axtarış",
                "price": 100,
                "type": "website_addons"
        },
        {
                "id": 28,
                "name": "Xəritə Məlumatı / Geolocation",
                "price": 100,
                "type": "website_addons"
        },
        {
                "id": 29,
                "name": "Rezervasyon",
                "price": 400,
                "type": "website_addons"
        },
        {
                "id": 30,
                "name": "Sosial Media inteqrasiyası",
                "price": 50,
                "type": "website_addons"
        },
        {
                "id": 31,
                "name": "Analitika / İzləmə",
                "price": 50,
                "type": "website_addons"
        },
        {
                "id": 36,
                "name": "Admin Panel",
                "price": 300,
                "type": "website_addons"
        }
]

const checkData = [
        {
                "id": 3,
                "name": "Başlıqlar & Meta",
                "price": 200,
                "type": "seo_addons"
        },
        {
                "id": 32,
                "name": "Açar söz",
                "price": 300,
                "type": "seo_addons"
        },
        {
                "id": 33,
                "name": "+20 Qabaqcıl Texnika",
                "price": 300,
                "type": "seo_addons"
        },
        {
                "id": 34,
                "name": "Başlıq Teqləri",
                "price": 100,
                "type": "seo_addons"
        },
        {
                "id": 35,
                "name": "Sitemap",
                "price": 100,
                "type": "seo_addons"
        }
]

const eccomerceData = [
        {
                "id": 38,
                "name": "Ödəniş",
                "price": 200,
                "type": "ecommerce"
        },
        {
                "id": 39,
                "name": "Səbət",
                "price": 500,
                "type": "ecommerce"
        },
        {
                "id": 40,
                "name": "Məhsullar",
                "price": 300,
                "type": "ecommerce"
        },
        {
                "id": 41,
                "name": "Bəyəndiklərim",
                "price": 300,
                "type": "ecommerce"
        },
        {
                "id": 42,
                "name": "Filtr",
                "price": 300,
                "type": "ecommerce"
        },
        {
                "id": 43,
                "name": "Məhsuk Haqqında",
                "price": 200,
                "type": "ecommerce"
        }
]

const customerData = [
        {
                id: 1,
                name: "Sabina G.",
                position: "Designer",
                situation: true,
                percent: 100
        },
        {
                id: 2,
                name: "Fuad M.",
                position: "Frontend Developer",
                situation: false,
                percent: 90
        },
        {
                id: 3,
                name: "Ahmad R.",
                position: "Backend Developer",
                situation: false,
                percent: 65
        }
]




const showCustomer = () => {
        customerData.map((item) => (
                customerContainer.innerHTML += `
                    <div class="flex flex-col bg-white justify-between p-6 items-center h-[280px] w-[33%] rounded-lg shadow-[0_4px_8px_5px_rgba(0,0,0,0.1)]">
                        <p class="text-[14px] text-[#6b7280] capitalize font-[500]">${item.situation ? 'tamamlandı' : 'icradadır'}</p>
                       <div class="rounded-[50%] text[19px] w-[100px] h-[75px]   my-[10px] text-[19px] font-semibold flex items-center justify-center">
                        ${item.percent == 100 ? '<svg width="100" height="100"><g transform="rotate(-90 50 50)"><circle r="35" cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle><circle r="35" cx="50" cy="50" fill="transparent" stroke="#22BFA5" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle></g><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="19px">100%</text></svg>' : item.percent == 90 ? '<svg width="100" height="100"><g transform="rotate(-90 50 50)"><circle r="35" cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle><circle r="35" cx="50" cy="50" fill="transparent" stroke="#fc5185" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="21.99114857512855" stroke-linecap="round"></circle></g><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="19px">90%</text></svg>' : '<svg width="100" height="100"><g transform="rotate(-90 50 50)"><circle r="35" cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="0" stroke-linecap="round"></circle><circle r="35" cx="50" cy="50" fill="transparent" stroke="#fc5185" stroke-width="0.3rem" stroke-dasharray="219.9114857512855" stroke-dashoffset="76.96902001294993" stroke-linecap="round"></circle></g><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="19px">65%</text></svg>'}
                </div>
                        <p class="text-[20px] text-[#1f2937] font-[700]">${item.name}</p>
                        <p class="text-[14px] text-[#9ca3af] font-semibold">${item.position}</p>
                    </div>`
        ))

}
showCustomer()

function toDown() {
        scrollTo({
                top: down.offsetTop - header.scrollHeight,
                behavior: "smooth"
        })
}


let totalRange = 0;
let totalCheck = 0
let totalEccomerce = 0
let totalLogoPrice = 0


const result = (umumi) => {
        umumi = umumi || +azn.innerHTML
        let totalPrice = totalRange + totalCheck + totalEccomerce + totalLogoPrice + umumi
        toplamQiymet.innerHTML = totalPrice > 450 ? totalPrice : 450
        console.log(umumi)
}

const changeValue = () => {
        let sValue = +sehifeInput.value * 100
        let aValue = +murekkebInput.value
        let umumi = aValue * sValue
        sehife.innerHTML = sehifeInput.value
        sehifePrice.innerHTML = umumi 
        azn.innerHTML = umumi
        result(umumi)
}
changeValue()


const showRanges = () => {
        rangeData.forEach((item) => {
                rangeContainer.innerHTML +=
                        `
                      <div class="flex items-center gap-1">
                          <label>${item.name}</label>
                          <input class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-300 
                          hover:border-[#A271F2] hover:bg-[#E9D8FD] active:scale-95 
                          checked:border-[#A271F2] checked:bg-[#A271F2] 
                           relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                          before:text-white before:text-sm before:font-bold before:content-['✔']    before:opacity-0 
                          checked:before:opacity-100" onchange="changeRange(this, ${item.price})" type='checkbox' />
                     </div>
         `;
        });

        checkData.forEach((item) => {
                checkContainer.innerHTML += `
                <div class="flex items-center gap-1">   
                <input class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-300 
                hover:border-[#A271F2] hover:bg-[#E9D8FD] active:scale-95 
                checked:border-[#A271F2] checked:bg-[#A271F2] 
                relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                before:text-white before:text-sm before:font-bold before:content-['✔'] before:opacity-0 
                checked:before:opacity-100" onchange="changeCheck(this, ${item.price})" type='checkbox' />
                <label>${item.name}</label>
                </div>
        `;
        });

        eccomerceData.forEach((item) => {
                eccomerceContainer.innerHTML += `
            <div class="flex items-center gap-1">
                <label>${item.name}</label>
                <input class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-300 
                 hover:border-[#A271F2] hover:bg-[#E9D8FD] active:scale-95 
                 checked:border-[#A271F2] checked:bg-[#A271F2] 
                relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                 before:text-white before:text-sm before:font-bold before:content-['✔'] before:opacity-0 
                checked:before:opacity-100" onchange="changeEccomerce(this, ${item.price})" type='checkbox' />
            </div>
        `;
        });

        rangeSum.innerHTML = totalRange;
        checkSum.innerHTML = totalCheck;
        eccomerceSum.innerHTML = totalEccomerce
};

const changeRange = (checkbox, price) => {
        if (checkbox.checked) {
                totalRange += price;
        } else {
                totalRange -= price;
        }

        rangeSum.innerHTML = totalRange;
        elaveler.innerHTML = totalRange;
        result();
};

const changeCheck = (checkbox, price) => {

        if (checkbox.checked) {
                totalCheck += price;
        } else {
                totalCheck -= price;
        }

        checkSum.innerHTML = totalCheck;
        seoXidmeti.innerHTML = totalCheck;
        result();
};

const changeEccomerce = (checkbox, price) => {

        if (checkbox.checked) {
                totalEccomerce += price;
        } else {
                totalEccomerce -= price;
        }

        eccomerceSum.innerHTML = totalEccomerce;
        eTicaret.innerHTML = totalEccomerce;
        result();
};

const logoPrice = () => {
        totalLogoPrice = input.value * 100;
        manat.innerHTML = totalLogoPrice;
        logoDizayn.innerHTML = totalLogoPrice;
        result();
};

showRanges();

function changeBtnBg(x, y) {
        const btn = document.querySelectorAll('#hostingBtn button')
        btn.forEach(item => {
                item.style.background = 'white'
                item.style.color = '#94a3c8'
                item.style.fontWeight = 'normal'
        })
        x.style.background = '#a271f2'
        x.style.color = 'white'
        x.style.fontWeight = '500'
        if (y == 0) {
                priceValue.innerHTML = '₼5'
                priceValue1.innerHTML = '₼10'
                priceValue2.innerHTML = '₼20'
                priceMonth.innerHTML = '/ay'
                priceMonth1.innerHTML = '/ay'
                priceMonth2.innerHTML = '/ay'
        } else {
                priceValue.innerHTML = '₼60'
                priceValue1.innerHTML = '₼120'
                priceValue2.innerHTML = '₼240'
                priceMonth.innerHTML = '/il'
                priceMonth1.innerHTML = '/il'
                priceMonth2.innerHTML = '/il'
        }

}

function changeBorder(x) {
        hostingBorder.style.borderColor = '#d1d4dc'
        hostingBorder1.style.borderColor = '#d1d4dc'
        hostingBorder2.style.borderColor = '#d1d4dc'
        hostingBorder.style.boxShadow = 'none'
        hostingBorder1.style.boxShadow = 'none'
        hostingBorder2.style.boxShadow = 'none'
        x.style.boxShadow = '0 5px 15px 0 #c58bffef'
        x.style.borderColor = '#a271f2'
}