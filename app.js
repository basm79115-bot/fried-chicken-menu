// ==========================================
// FRIED CHICKEN - Interactive Web Menu Script
// Phone: 056465156484
// ==========================================

const RESTAURANT_PHONE = "056465156484";
const RESTAURANT_WHATSAPP = "056465156484"; // Can be prefixed with country code

// Menu Categories Definition
const CATEGORIES = [
    { id: 'all', name: 'الكل', icon: 'fa-fire' },
    { id: 'meals', name: 'وجبات فردية', icon: 'fa-drumstick-bite' },
    { id: 'sandwiches', name: 'ساندوتشات كرسبي', icon: 'fa-burger' },
    { id: 'family', name: 'باكتات وعائلي', icon: 'fa-box-open' },
    { id: 'strips', name: 'استربس وأجنحة', icon: 'fa-pepper-hot' },
    { id: 'sides', name: 'مقبلات وسلطات', icon: 'fa-bowl-rice' },
    { id: 'sauces_drinks', name: 'صوصات ومشروبات', icon: 'fa-wine-bottle' }
];

// Complete Menu Data
const MENU_ITEMS = [
    // --- وجبات فردية ---
    {
        id: 'm1',
        name: 'وجبة كرانشي 2 قطعة',
        category: 'meals',
        price: 145,
        oldPrice: 165,
        badge: 'الأكثر طلباً 🔥',
        spicyOption: true,
        desc: 'قطعتين دجاج مقرمش ذهبي محضر بالخلطة السرية + بطاطس مقلية كرسبي + كول سلو كلاسيك + خبز طازج + صوص شيدر.',
        image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'm2',
        name: 'وجبة سوبريم 3 قطع',
        category: 'meals',
        price: 195,
        badge: 'مميز ⭐',
        spicyOption: true,
        desc: '3 قطع دجاج كبير مقلي بعناية ومقرمش + بطاطس حجم وسط + كول سلو طازج + صوص فاير حار + خبز + كانز بيبسي مثلج.',
        image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'm3',
        name: 'وجبة هيرو 4 قطع بوكس',
        category: 'meals',
        price: 240,
        badge: 'وجبة الأبطال 💪',
        spicyOption: true,
        desc: '4 قطع دجاج مقرمش ومبهر باحتراف + أرز مبهر بالبهارات الخاصة + بطاطس + كول سلو + 2 صوص من اختيارك + كانز.',
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'm4',
        name: 'وجبة ميكس دينر بوكس',
        category: 'meals',
        price: 225,
        badge: 'مكس التوفير',
        spicyOption: true,
        desc: '2 قطعة فرايد تشيكن مقرمشة + 2 قطعة أصابع استربس تندر + بطاطس + كول سلو + صوص باربيكيو + مشروب غازي.',
        image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80'
    },

    // --- ساندوتشات كرسبي ---
    {
        id: 's1',
        name: 'كرانشي برجر كلاسيك',
        category: 'sandwiches',
        price: 115,
        oldPrice: 130,
        badge: 'كلاسيك محبوب',
        spicyOption: true,
        desc: 'صدر دجاج مقرمش ذهبي في خبز بريوش طري ومحمص، مايونيز غني، خس كرانشي، خيار مخلل أمريكي وشريحة شيدر.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 's2',
        name: 'زنجر فاير سوبريم',
        category: 'sandwiches',
        price: 135,
        badge: 'سبايسي نار 🌶️',
        spicyOption: true,
        desc: 'صدر دجاج حار مقرمش مغطى بصوص السيراتشا والفاير صوص، شرائح هالبينو حارة، جبنة شيدر سايحة في خبز السمسم.',
        image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 's3',
        name: 'رانش كرسبي تاور دبل',
        category: 'sandwiches',
        price: 175,
        badge: 'دبل تشيكن 🚀',
        spicyOption: true,
        desc: 'طبقتين من صدور الدجاج المقرمشة، حلقات بصل ذهبية، بيكن بقري مدخن، صوص الرانش الغني وجبنة ذائبة دبل.',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 's4',
        name: 'هوني ماسترد كرانش برجر',
        category: 'sandwiches',
        price: 140,
        badge: 'نكهة خاصة',
        spicyOption: true,
        desc: 'دجاج مقرمش بتتبيلة هوني ماسترد السرية، جبنة سويسرية، طماطم فريش، خس مقرمش وصوص الخردل بالعسل.',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 's5',
        name: 'تويستر رول تورتيلا كرسبي',
        category: 'sandwiches',
        price: 95,
        badge: 'خفيف ومقرمش',
        spicyOption: true,
        desc: 'شرائح أصابع الدجاج المقرمش ملفوفة في خبز تورتيلا محمص مع صوص المايونيز بالثوم وخس وطماطم طازجة.',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80'
    },

    // --- باكتات وعائلي ---
    {
        id: 'f1',
        name: 'باكت العيلة 8 قطع',
        category: 'family',
        price: 420,
        oldPrice: 470,
        badge: 'لمة العيلة 👨‍👩‍👧‍👦',
        spicyOption: true,
        desc: '8 قطع فرايد تشيكن مقرمش (ميكس أوراك وصدور) + 2 بطاطس حجم كبير + 2 كول سلو عائلي + 4 خبز + لتر بيبسي.',
        image: 'logo.png'
    },
    {
        id: 'f2',
        name: 'باكت اللمة الكبيرة 12 قطعة',
        category: 'family',
        price: 590,
        oldPrice: 660,
        badge: 'توفير 70 ج.م',
        spicyOption: true,
        desc: '12 قطعة دجاج ذهبي فائق القرمشة + 3 بطاطس كبيرة + 3 كول سلو كبير + 6 خبز + 4 صوصات متنوعة + 1.5 لتر بيبسي.',
        image: 'logo.png'
    },
    {
        id: 'f3',
        name: 'ميجا بارتي باكت 16 قطعة',
        category: 'family',
        price: 780,
        badge: 'عزومات وحفلات 🎉',
        spicyOption: true,
        desc: '16 قطعة فرايد تشيكن + 8 أصابع استربس هدية + 4 بطاطس لارج + 4 كول سلو + 8 خبز + 6 صوصات + 2 زجاجة مشروب عائلي.',
        image: 'logo.png'
    },
    {
        id: 'f4',
        name: 'باكت تندرز استربس 15 قطعة',
        category: 'family',
        price: 395,
        badge: 'عشاق التندر',
        spicyOption: true,
        desc: '15 قطعة تندر استربس مقرمشة بدون عظم + 2 بطاطس مقلية كبيرة + 4 صوصات ديبينج فاخرة + 3 كول سلو.',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80'
    },

    // --- استربس وأجنحة ---
    {
        id: 'w1',
        name: 'أصابع تشيكن استربس (5 قطع)',
        category: 'strips',
        price: 135,
        badge: 'قرمشة صافي',
        spicyOption: true,
        desc: '5 أصابع صدور دجاج كرسبي ناعمة من الداخل ومقرمشة من الخارج + بطاطس + صوص مستردة بالعسل أو باربيكيو.',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'w2',
        name: 'أجنحة دجاج بافلو حارة (8 قطع)',
        category: 'strips',
        price: 125,
        badge: 'حار ولاذع 🌶️',
        spicyOption: true,
        desc: '8 أجنحة دجاج مقلية مقرمشة مغطاة بصوص البافلو الحار اللذيذ تقدم مع صوص الرانش المهدئ.',
        image: 'buffalo-wings.jpg'
    },
    {
        id: 'w3',
        name: 'أجنحة سموكي باربيكيو (8 قطع)',
        category: 'strips',
        price: 125,
        badge: 'مدخن ولذيذ',
        spicyOption: false,
        desc: '8 أجنحة دجاج مقرمشة مغموسة في صوص الباربيكيو المدخن المكرمل مع رشة سمسم محمصة.',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'w4',
        name: 'بوب كورن تشيكن ديناميت',
        category: 'strips',
        price: 95,
        badge: 'سناك خطير',
        spicyOption: true,
        desc: 'قطع بوب كورن دجاج مقرمشة مغطاة بصوص الديناميت اللذيذ الخاص مع رشة بصل أخضر.',
        image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80'
    },

    // --- مقبلات وسلطات ---
    {
        id: 'sd1',
        name: 'لودد تشيزي فرايز بالفرايد تشيكن',
        category: 'sides',
        price: 90,
        oldPrice: 105,
        badge: 'قنبلة جبنة 🧀',
        spicyOption: true,
        desc: 'بطاطس مقلية ذهبية غارقة في صوص جبنة الشيدر الساخن مع قطع دجاج مقرمشة وشرائح هالبينو وصوص الرانش.',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sd2',
        name: 'بطاطس كيرلي حلزونية متبلة',
        category: 'sides',
        price: 55,
        badge: 'مقرمشة جداً',
        spicyOption: false,
        desc: 'بطاطس حلزونية الشكل مقلية ومتبلة بمزيج البابريكا والبهارات الخاصة لمقرمشة لا تنتهي.',
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sd3',
        name: 'أصابع جبنة موتزاريلا ستيكس (4 قطع)',
        category: 'sides',
        price: 65,
        badge: 'جبنة مطاطية',
        spicyOption: false,
        desc: 'أصابع موتزاريلا مقلية ذهبية ذات قلب ذائب ومطاطي تقدم مع صوص المارينارا أو صوص الثوم.',
        image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sd4',
        name: 'حلقات بصل كرسبي (6 قطع)',
        category: 'sides',
        price: 50,
        badge: 'خفيفة ومقرمشة',
        spicyOption: false,
        desc: 'حلقات بصل طازجة مغلفة بخلطة مقرمشة ومقلية بلون ذهبي مع صوص الكوكتيل.',
        image: 'onion-rings.jpg'
    },
    {
        id: 'sd5',
        name: 'سلطة كول سلو الأصلية الكبيرة',
        category: 'sides',
        price: 35,
        badge: 'انتعاش وطراوة',
        spicyOption: false,
        desc: 'سلطة الكرنب والجزر المبشور طازجاً مع صوص الكول سلو الكريمي الحلو والمتوازن.',
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sd6',
        name: 'أرز ريزو مبهر بصوص الباربكيو',
        category: 'sides',
        price: 45,
        badge: 'خلطة سرية',
        spicyOption: true,
        desc: 'أرز بسمتي مبهر ساخن بخلطة الفرايد تشيكن الغنية ومغطى بصوص الباربكيو الخاص.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
    },

    // --- صوصات ومشروبات وحلويات ---
    {
        id: 'sc1',
        name: 'ديب صوص شيدر سايح',
        category: 'sauces_drinks',
        price: 18,
        badge: 'إدمان 🧀',
        spicyOption: false,
        desc: 'كوب من صوص جبنة الشيدر الكريمية الساخنة الذائبة لتغميس الدجاج والبطاطس.',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sc2',
        name: 'ديب صوص رانش غني',
        category: 'sauces_drinks',
        price: 15,
        badge: 'كريمي ومنعش',
        spicyOption: false,
        desc: 'صوص الرانش المحضر من الزبادي والأعشاب والتوابل اللذيذة.',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sc3',
        name: 'ديب فاير صوص حار جداً',
        category: 'sauces_drinks',
        price: 15,
        badge: 'لعشاق السبايسي 🔥',
        spicyOption: false,
        desc: 'صوص الفلفل الحار والباربريكا الخاصة بالخلطة الانفجارية.',
        image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'dr1',
        name: 'مشروب غازي كانز (بيبسي / سفن / ميريندا)',
        category: 'sauces_drinks',
        price: 25,
        badge: 'مثلج 330ml',
        spicyOption: false,
        desc: 'علبة كانز مثلجة منعشة حسب اختيارك (بيبسي، دايت، سفن آب، أو ميريندا برتقال).',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'dr2',
        name: 'عصير برتقال طبيعي فريش',
        category: 'sauces_drinks',
        price: 40,
        badge: 'طبيعي 100%',
        spicyOption: false,
        desc: 'عصير برتقال طازج معصور يومياً بدون سكر مضاف أو مواد حافظة.',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'ds1',
        name: 'تشوكليت لافا كيك سايحة',
        category: 'sauces_drinks',
        price: 65,
        badge: 'حلو بعد القرمشة 🍫',
        spicyOption: false,
        desc: 'كيكة الشوكولاتة الساخنة محشوة بقلب من الشوكولاتة البلجيكية الذائبة والغنية.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
    }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let cart = JSON.parse(localStorage.getItem('friedChickenCart') || '[]');
let currentActiveItem = null;
let currentModalQty = 1;

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    filterAndRenderMenu();
    updateCartUI();
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartBackdrop = document.getElementById('cartBackdrop');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        filterAndRenderMenu();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        filterAndRenderMenu();
    });

    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartBackdrop.addEventListener('click', closeCart);
}

// ==========================================
// Render Categories Tabs
// ==========================================
function renderCategories() {
    const container = document.getElementById('categoryButtonsContainer');
    container.innerHTML = CATEGORIES.map(cat => `
        <button onclick="selectCategory('${cat.id}')" 
                class="cat-btn flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-200 ${
                    currentCategory === cat.id 
                    ? 'active' 
                    : 'bg-[#18181D] text-gray-300 border-brand-border hover:border-brand-orange/60 hover:text-white'
                }">
            <i class="fa-solid ${cat.icon} text-brand-orange"></i>
            <span>${cat.name}</span>
        </button>
    `).join('');
}

function selectCategory(catId) {
    currentCategory = catId;
    renderCategories();
    filterAndRenderMenu();
}

function resetFilters() {
    currentCategory = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');
    renderCategories();
    filterAndRenderMenu();
}

// ==========================================
// Filter and Render Menu Items
// ==========================================
function filterAndRenderMenu() {
    const grid = document.getElementById('menuGrid');
    const noResults = document.getElementById('noResults');

    const filtered = MENU_ITEMS.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = searchQuery === '' || 
            item.name.toLowerCase().includes(searchQuery) || 
            item.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = filtered.map(item => `
        <div class="meal-card bg-[#FFE54C] rounded-2xl border-2 border-black overflow-hidden flex flex-col justify-between group shadow-[4px_4px_0px_#000000]">
            <div>
                <!-- Item Image with Badge -->
                <div class="relative h-48 sm:h-52 meal-img-wrapper cursor-pointer" onclick="openItemModal('${item.id}')">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover">
                    ${item.badge ? `
                        <span class="absolute top-3 right-3 bg-black text-[#FFD200] text-[11px] font-black px-2.5 py-1 rounded-full border border-black shadow-md">
                            ${item.badge}
                        </span>
                    ` : ''}
                    ${item.oldPrice ? `
                        <span class="absolute top-3 left-3 bg-black text-[#FFD200] text-[11px] font-black px-2.5 py-1 rounded-full border border-black shadow-md">
                            خصم
                        </span>
                    ` : ''}
                </div>

                <!-- Item Info -->
                <div class="p-4 sm:p-5">
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <h3 class="text-base sm:text-lg font-black text-black hover:underline transition-colors cursor-pointer" onclick="openItemModal('${item.id}')">
                            ${item.name}
                        </h3>
                    </div>

                    <p class="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-bold">
                        ${item.desc}
                    </p>
                </div>
            </div>

            <!-- Footer Price & Action -->
            <div class="p-4 sm:p-5 pt-0 mt-auto border-t-2 border-black flex items-center justify-between">
                <div>
                    ${item.oldPrice ? `<span class="text-xs text-gray-700 font-black line-through block font-rubik">${item.oldPrice} ج.م</span>` : ''}
                    <div class="text-xl sm:text-2xl font-black text-black font-rubik">
                        ${item.price} <span class="text-xs font-cairo text-black font-bold">ج.م</span>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <button onclick="quickAddToCart('${item.id}')" 
                            class="bg-black hover:bg-gray-800 text-[#FFD200] p-2.5 rounded-xl font-black flex items-center justify-center transition-all duration-200 border-2 border-black shadow-[2px_2px_0px_#000000] active:scale-95" 
                            title="إضافة سريعة للسلة">
                        <i class="fa-solid fa-plus text-sm"></i>
                    </button>
                    <button onclick="openItemModal('${item.id}')" 
                            class="bg-[#FFF8B3] hover:bg-[#FFE54C] text-black border-2 border-black px-3 py-2 rounded-xl text-xs font-black transition-colors shadow-[2px_2px_0px_#000000]">
                        تخصيص
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// Item Customization Modal
// ==========================================
function openItemModal(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    currentActiveItem = item;
    currentModalQty = 1;

    document.getElementById('modalItemImg').src = item.image;
    document.getElementById('modalItemTitle').innerText = item.name;
    document.getElementById('modalItemPrice').innerText = `${item.price} ج.م`;
    document.getElementById('modalItemDesc').innerText = item.desc;
    document.getElementById('modalItemBadge').innerText = item.badge || 'وجبة مميزة';
    document.getElementById('modalQuantity').innerText = '1';
    document.getElementById('modalItemNotes').value = '';

    const modal = document.getElementById('itemModal');
    const card = document.getElementById('itemModalCard');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
    }, 10);
}

function closeItemModal() {
    const modal = document.getElementById('itemModal');
    const card = document.getElementById('itemModalCard');
    modal.classList.add('opacity-0');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        currentActiveItem = null;
    }, 300);
}

function changeModalQuantity(delta) {
    currentModalQty += delta;
    if (currentModalQty < 1) currentModalQty = 1;
    document.getElementById('modalQuantity').innerText = currentModalQty;
}

function confirmAddToCart() {
    if (!currentActiveItem) return;

    const spicePref = document.querySelector('input[name="spicePreference"]:checked')?.value || 'عادي ومقرمش';
    const notes = document.getElementById('modalItemNotes').value.trim();

    addToCartInternal(currentActiveItem, currentModalQty, spicePref, notes);
    closeItemModal();
    showToast(`تمت إضافة "${currentActiveItem.name}" إلى السلة 🍗`);
}

function quickAddToCart(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    addToCartInternal(item, 1, 'عادي ومقرمش', '');
    showToast(`تمت إضافة "${item.name}" إلى السلة 🍗`);
}

function addPromoToCart(title, price, image) {
    const promoItem = {
        id: 'promo_' + Date.now(),
        name: title,
        price: price,
        image: image,
        desc: 'عرض ترويجي خاص'
    };
    addToCartInternal(promoItem, 1, 'عادي ومقرمش', 'عرض حصري');
    showToast(`تمت إضافة "${title}" إلى السلة بنجاح! 🎉`);
}

// ==========================================
// Cart Operations
// ==========================================
function addToCartInternal(item, quantity, spice, notes) {
    // Check if matching item with same options exists
    const existingIndex = cart.findIndex(c => c.id === item.id && c.spice === spice && c.notes === notes);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: quantity,
            spice: spice,
            notes: notes
        });
    }
    saveCart();
    updateCartUI();
}

function changeCartItemQty(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        updateCartUI();
    }
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('friedChickenCart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = totalCount > 0 ? (subtotal >= 300 ? 0 : 20) : 0;
    const finalTotal = subtotal + deliveryFee;

    // Badges
    document.getElementById('cartCount').innerText = totalCount;
    const mobileCount = document.getElementById('mobileCartCount');
    if (mobileCount) mobileCount.innerText = totalCount;

    document.getElementById('cartSubtitle').innerText = `${totalCount} وجبات في السلة`;
    document.getElementById('cartSubtotal').innerText = `${subtotal} ج.م`;
    
    const deliveryElem = document.getElementById('cartDeliveryFee');
    if (deliveryFee === 0 && subtotal > 0) {
        deliveryElem.innerText = 'توصيل مجاني 🎁';
        deliveryElem.className = 'text-green-400 font-bold';
    } else {
        deliveryElem.innerText = `${deliveryFee} ج.م`;
        deliveryElem.className = 'text-gray-300 font-bold font-rubik';
    }

    document.getElementById('cartTotal').innerText = `${finalTotal} ج.م`;

    const list = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartFooter');

    if (cart.length === 0) {
        list.classList.add('hidden');
        footer.classList.add('hidden');
        emptyState.classList.remove('hidden');
        list.innerHTML = '';
        return;
    }

    emptyState.classList.add('hidden');
    list.classList.remove('hidden');
    footer.classList.remove('hidden');

    list.innerHTML = cart.map((item, index) => `
        <div class="bg-[#FFE54C] border-2 border-black rounded-2xl p-3 flex items-center gap-3 shadow-[3px_3px_0px_#000000]">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-black">
            
            <div class="flex-1 min-w-0">
                <h4 class="text-black text-sm font-black truncate">${item.name}</h4>
                <div class="flex items-center gap-2 mt-0.5">
                    <span class="text-[11px] text-black bg-[#FFF8B3] border border-black px-2 py-0.5 rounded-md font-bold">${item.spice}</span>
                    <span class="text-xs font-black text-black font-rubik">${item.price * item.quantity} ج.م</span>
                </div>
                ${item.notes ? `<p class="text-[11px] text-black font-bold truncate mt-1">ملاحظة: ${item.notes}</p>` : ''}
            </div>

            <!-- Quantity adjust -->
            <div class="flex flex-col items-center gap-1">
                <button onclick="changeCartItemQty(${index}, 1)" class="w-6 h-6 rounded-md bg-black text-[#FFD200] border border-black flex items-center justify-center text-xs font-black">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <span class="text-xs font-black font-rubik text-black">${item.quantity}</span>
                <button onclick="changeCartItemQty(${index}, -1)" class="w-6 h-6 rounded-md bg-black text-[#FFD200] border border-black flex items-center justify-center text-xs font-black">
                    <i class="fa-solid fa-minus"></i>
                </button>
            </div>
            
            <button onclick="removeCartItem(${index})" class="text-black hover:opacity-70 p-1 text-sm">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

// Cart Drawer open/close
function openCart() {
    const drawer = document.getElementById('cartDrawer');
    const panel = document.getElementById('cartPanel');
    drawer.classList.remove('opacity-0', 'pointer-events-none');
    panel.classList.remove('-translate-x-full');
    panel.classList.add('translate-x-0');
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    const panel = document.getElementById('cartPanel');
    panel.classList.remove('translate-x-0');
    panel.classList.add('-translate-x-full');
    drawer.classList.add('opacity-0', 'pointer-events-none');
}

// ==========================================
// Checkout & WhatsApp Direct Order
// ==========================================
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('سلة طلباتك فارغة! أضف وجباتك أولاً');
        return;
    }
    closeCart();

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 300 ? 0 : 20;
    const finalTotal = subtotal + deliveryFee;

    document.getElementById('checkoutItemCount').innerText = `${count} وجبات`;
    document.getElementById('checkoutTotal').innerText = `${finalTotal} ج.م`;

    const brief = document.getElementById('checkoutItemsBrief');
    brief.innerHTML = cart.map(i => `
        <div class="flex justify-between">
            <span>• ${i.quantity}x ${i.name} (${i.spice})</span>
            <span class="font-rubik text-white">${i.price * i.quantity} ج.م</span>
        </div>
    `).join('');

    const modal = document.getElementById('checkoutModal');
    const card = document.getElementById('checkoutModalCard');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
    }, 10);
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const card = document.getElementById('checkoutModalCard');
    modal.classList.add('opacity-0');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// ==========================================
// Payment Methods Management
// ==========================================
function togglePaymentDetails() {
    const selected = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'instapay';
    
    const instapayBox = document.getElementById('instapayDetails');
    const vodafoneBox = document.getElementById('vodafoneDetails');
    const cardBox = document.getElementById('cardDetails');
    const cashBox = document.getElementById('cashDetails');

    if (instapayBox) instapayBox.classList.toggle('hidden', selected !== 'instapay');
    if (vodafoneBox) vodafoneBox.classList.toggle('hidden', selected !== 'vodafone_cash');
    if (cardBox) cardBox.classList.toggle('hidden', selected !== 'card');
    if (cashBox) cashBox.classList.toggle('hidden', selected !== 'cash');
}

function toggleCardInputs() {
    const cardOption = document.querySelector('input[name="cardOption"]:checked')?.value;
    const inputs = document.getElementById('onlineCardInputs');
    if (inputs) {
        inputs.classList.toggle('hidden', cardOption !== 'online_card');
    }
}

function copyText(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg || 'تم النسخ بنجاح!');
        }).catch(() => {
            fallbackCopyText(text, successMsg);
        });
    } else {
        fallbackCopyText(text, successMsg);
    }
}

function fallbackCopyText(text, successMsg) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(successMsg || 'تم النسخ بنجاح!');
    } catch (err) {
        showToast('انسخ الرقم يدوياً: ' + text);
    }
    document.body.removeChild(textArea);
}

function submitOrderWhatsApp() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    if (!name || !phone || !address) {
        alert('من فضلك أكمل كتابة الاسم، رقم التليفون، وعنوان التوصيل بالتفصيل.');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 300 ? 0 : 20;
    const finalTotal = subtotal + deliveryFee;

    // Determine selected payment method & info
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'instapay';
    let paymentText = '';

    if (paymentMethod === 'instapay') {
        const sender = document.getElementById('instapaySender')?.value.trim() || 'لم يُحدد';
        paymentText = `⚡ *طريقة الدفع:* انستا باي (InstaPay)\n   • حساب الاستلام: ${RESTAURANT_PHONE}\n   • حساب المحول: ${sender}`;
    } else if (paymentMethod === 'vodafone_cash') {
        const sender = document.getElementById('vodafoneSender')?.value.trim() || 'لم يُحدد';
        paymentText = `📱 *طريقة الدفع:* فودافون كاش (Vodafone Cash)\n   • محفظة الاستلام: ${RESTAURANT_PHONE}\n   • محفظة المحول: ${sender}`;
    } else if (paymentMethod === 'card') {
        const cardOpt = document.querySelector('input[name="cardOption"]:checked')?.value;
        if (cardOpt === 'online_card') {
            const cardNum = document.getElementById('cardNumberInput')?.value.trim();
            const maskedCard = cardNum ? `**** **** **** ${cardNum.slice(-4)}` : 'بطاقة ماستر كارد / فيزا مسجلة أونلاين';
            paymentText = `💳 *طريقة الدفع:* ماستر كارد / فيزا (دفع إلكتروني أونلاين)\n   • البطاقة: ${maskedCard}`;
        } else {
            paymentText = `💳 *طريقة الدفع:* ماستر كارد / فيزا (مع المندوب بالماكينة POS)`;
        }
    } else {
        paymentText = `💵 *طريقة الدفع:* كاش نقداً عند الاستلام`;
    }

    let itemsText = cart.map((i, index) => {
        return `${index + 1}) *${i.name}* \n   • الكمية: ${i.quantity}\n   • النكهة: ${i.spice}${i.notes ? `\n   • ملاحظات: ${i.notes}` : ''}\n   • السعر: ${i.price * i.quantity} ج.م`;
    }).join('\n\n');

    // Generate unique Order ID
    const orderId = 'FC-' + Math.floor(1000 + Math.random() * 9000);

    let message = `🍗 *طلب جديد من منيو مطعم FRIED CHICKEN* 🍗\n` +
                  `-----------------------------------------\n` +
                  `🆔 *رقم الطلب:* #${orderId}\n` +
                  `👤 *اسم العميل:* ${name}\n` +
                  `📞 *رقم الهاتف:* ${phone}\n` +
                  `📍 *عنوان التوصيل:* ${address}\n` +
                  `-----------------------------------------\n` +
                  `📋 *تفاصيل الوجبات:*\n\n${itemsText}\n\n` +
                  `-----------------------------------------\n` +
                  `${paymentText}\n` +
                  `-----------------------------------------\n` +
                  `💵 *المجموع الفرعي:* ${subtotal} ج.م\n` +
                  `🛵 *خدمة التوصيل:* ${deliveryFee === 0 ? 'مجاناً 🎁' : deliveryFee + ' ج.م'}\n` +
                  `🔥 *الإجمالي النهائي المطلوب:* ${finalTotal} ج.م\n` +
                  `-----------------------------------------\n` +
                  `يرجى تأكيد استلام الطلب وبدء التحضير فوراً. شكراً لكم!`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodedMsg}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Save Active Order to LocalStorage for live tracking
    const orderData = {
        id: orderId,
        customerName: name,
        phone: phone,
        address: address,
        status: 'kitchen',
        createdAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };
    localStorage.setItem('lastPlacedOrder', JSON.stringify(orderData));

    // Clear cart & close
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckoutModal();
    showToast(`تم إرسال الطلب بنجاح! رقم طلبك: #${orderId} 🛵`);

    // Activate live tracking for this new order
    setTrackerState({
        id: orderId,
        title: 'تم استلام وتأكيد طلبك وجاري التحضير في المطبخ!',
        address: `عنوان التوصيل: ${address}`,
        timeRemaining: '25 دقيقة ⏱️',
        currentStep: 2,
        driverName: 'كابتن محمد الشناوي 🛵',
        progress: 35,
        startTime: 'بدء التحضير الآن',
        liveStatus: 'جاري القلي بالخلطة السرية المقرمشة 🍗',
        estimatedTime: 'خلال 25-30 دقيقة'
    });

    // Scroll to tracking section
    setTimeout(() => {
        const trackSection = document.getElementById('tracking-section');
        if (trackSection) {
            trackSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// ==========================================
// Delivery Live Tracker Functions
// ==========================================
function trackOrder() {
    const input = document.getElementById('trackInput');
    const val = input.value.trim();

    if (!val) {
        showToast('من فضلك ادخل رقم الطلب أو رقم التليفون');
        return;
    }

    // Check if user entered their newly placed order or demo
    const lastOrder = JSON.parse(localStorage.getItem('lastPlacedOrder') || 'null');
    if (lastOrder && (val.toUpperCase().includes(lastOrder.id) || val === lastOrder.phone)) {
        setTrackerState({
            id: lastOrder.id,
            title: 'طلبك قيد التحضير الطازج في المطبخ!',
            address: `عنوان التوصيل: ${lastOrder.address}`,
            timeRemaining: '22 دقيقة ⏱️',
            currentStep: 2,
            driverName: 'كابتن زياد إبراهيم 🛵',
            progress: 40,
            startTime: `تم الاستلام ${lastOrder.createdAt}`,
            liveStatus: 'جاري القلي والتجهيز في القلاية 🍗',
            estimatedTime: 'متوقع خلال 20 دقيقة'
        });
        showToast(`جاري تتبع طلبك #${lastOrder.id}`);
        return;
    }

    // Default simulation for searched order
    loadDemoTracker('onway', val.toUpperCase().startsWith('FC-') ? val.toUpperCase() : `FC-${Math.floor(1000 + Math.random() * 9000)}`);
    showToast(`تم العثور على الطلب وجاري تحديث المكان المباشر! 🛵`);
}

function loadDemoTracker(type, customId) {
    if (type === 'kitchen') {
        setTrackerState({
            id: customId || 'FC-7310',
            title: 'جاري تتبيل وقلي الدجاج بالخلطة المقرمشة!',
            address: 'عنوان التوصيل: شارع مصطفى النحاس، مدينة نصر',
            timeRemaining: '25 دقيقة ⏱️',
            currentStep: 2,
            driverName: 'في انتظار استلام الطيار 🛵',
            progress: 35,
            startTime: 'تم البدء 10:20 ص',
            liveStatus: 'في مطبخ المطعم (القلي بدرجة حرارة مثالية)',
            estimatedTime: 'الوصول المتوقع 10:45 ص'
        });
    } else if (type === 'delivered') {
        setTrackerState({
            id: customId || 'FC-6180',
            title: 'تم تسليم الطلب بنجاح! بالهناء والشفاء 🎉',
            address: 'عنوان التوصيل: شارع التحرير، الدقي',
            timeRemaining: 'تم التسليم ✅',
            currentStep: 5,
            driverName: 'كابتن محمود رضا 🛵',
            progress: 100,
            startTime: 'خرج 09:40 ص',
            liveStatus: 'تم الاستلام والدفع بنجاح',
            estimatedTime: 'وصل 10:10 ص'
        });
    } else {
        // onway
        setTrackerState({
            id: customId || 'FC-9241',
            title: 'الطيار في الطريق إليك ومعه وجبتك ساخنة ومقرمشة!',
            address: 'عنوان التوصيل: شارع الجمهورية، عمارة 14، الدور الثالث',
            timeRemaining: '14 دقيقة ⏱️',
            currentStep: 4,
            driverName: 'كابتن زياد إبراهيم 🛵',
            progress: 75,
            startTime: 'خرج من المطعم 10:35 ص',
            liveStatus: 'في الطريق (شارع النصر) 🛵',
            estimatedTime: 'الوصول المتوقع 10:50 ص'
        });
    }
}

function setTrackerState(data) {
    const orderIdElem = document.getElementById('trackOrderId');
    const titleElem = document.getElementById('trackOrderTitle');
    const addrElem = document.getElementById('trackOrderAddress');
    const timeRemainingElem = document.getElementById('trackTimeRemaining');
    const driverNameElem = document.getElementById('trackDriverName');
    const progressBarElem = document.getElementById('trackProgressBar');
    const startTimeElem = document.getElementById('trackStartTime');
    const liveStatusElem = document.getElementById('trackLiveStatus');
    const estimatedTimeElem = document.getElementById('trackEstimatedTime');

    if (orderIdElem) orderIdElem.innerText = `#${data.id}`;
    if (titleElem) titleElem.innerText = data.title;
    if (addrElem) addrElem.innerHTML = `<i class="fa-solid fa-location-dot text-blue-600"></i> ${data.address}`;
    if (timeRemainingElem) timeRemainingElem.innerText = data.timeRemaining;
    if (driverNameElem) driverNameElem.innerText = data.driverName;
    if (progressBarElem) progressBarElem.style.width = `${data.progress}%`;
    if (startTimeElem) startTimeElem.innerText = data.startTime;
    if (liveStatusElem) liveStatusElem.innerHTML = `<i class="fa-solid fa-motorcycle text-blue-600 anim-bike"></i> ${data.liveStatus}`;
    if (estimatedTimeElem) estimatedTimeElem.innerText = data.estimatedTime;

    // Update 5 Steps visual state
    for (let i = 1; i <= 5; i++) {
        const step = document.getElementById(`step${i}`);
        if (!step) continue;
        const iconBox = step.querySelector('.step-icon');
        const timeBox = step.querySelector('.step-time');

        if (i < data.currentStep) {
            // Completed step
            step.classList.remove('opacity-40');
            if (iconBox) {
                iconBox.className = 'step-icon w-12 h-12 rounded-2xl bg-black text-[#FFD200] border-2 border-black flex items-center justify-center text-lg mb-2 shadow-[2px_2px_0px_#000000]';
                iconBox.classList.remove('active-step-pulse');
            }
            if (timeBox) {
                timeBox.innerText = 'مكتمل ✅';
                timeBox.className = 'step-time text-[10px] text-black font-bold';
            }
        } else if (i === data.currentStep) {
            // Active current step
            step.classList.remove('opacity-40');
            if (iconBox) {
                iconBox.className = 'step-icon w-12 h-12 rounded-2xl bg-black text-[#FFD200] border-2 border-black active-step-pulse flex items-center justify-center text-lg mb-2 shadow-[3px_3px_0px_#000000]';
            }
            if (timeBox) {
                timeBox.innerText = 'جاري الآن 🔥';
                timeBox.className = 'step-time text-[10px] text-black font-black bg-[#FFF8B3] px-2 py-0.5 rounded-full border border-black mt-0.5';
            }
        } else {
            // Future step
            step.classList.add('opacity-40');
            if (iconBox) {
                iconBox.className = 'step-icon w-12 h-12 rounded-2xl bg-[#FFF8B3] text-black border-2 border-black flex items-center justify-center text-lg mb-2';
                iconBox.classList.remove('active-step-pulse');
            }
            if (timeBox) {
                timeBox.innerText = 'قريباً';
                timeBox.className = 'step-time text-[10px] text-black font-bold';
            }
        }
    }
}

// Toast Feedback Notification
function showToast(msg) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotice';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-check-circle text-green-400"></i> <span>${msg}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

// ==========================================
// Restaurant Interior & Exterior Gallery Management
// ==========================================
const branchPhotosData = [
    {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=70",
        badge: "خارجي ☀️",
        title: "الواجهة الخارجية الرئيسية للمطعم",
        caption: "تصميم معماري عصري مع إضاءة جذابة ليلاً ونهاراً، مدخل رئيسي واسع ومواقف سيارات خاصة للزبائن."
    },
    {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=70",
        badge: "داخلي 🛋️",
        title: "صالة الطعام العائلية الكبرى",
        caption: "صالة واسعة ومكيفة مصممة خصيصاً لتناسب العائلات والمجموعات مع إضاءة دافئة وطاولات طعام مريحة."
    },
    {
        url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=300&q=70",
        badge: "داخلي 🛋️",
        title: "كابينات وجلسات خاصة مريحة",
        caption: "جلسات كابينات مريحة بكنب مبطن وتصميم يوفر الخصوصية والراحة التامة للتمتع بوجبتك المقرمشة المفضلة."
    },
    {
        url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=300&q=70",
        badge: "الكاونتر 🍟",
        title: "كاونتر الطلبات السريعة والتيك أواي",
        caption: "شاشات عرض رقمية حديثة، وسرعة استثنائية في تجهيز وتسليم طلبات الزبائن مع موظفين ودودين."
    },
    {
        url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=300&q=70",
        badge: "خارجي 🌿",
        title: "التراس والجلسات الخارجية المفتوحة",
        caption: "جلسات خارجية مفتوحة في الهواء الطلق مع مظلات شمسية وتدفئة شتوية لتجربة طعام استثنائية طوال العام."
    },
    {
        url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
        thumb: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=300&q=70",
        badge: "المطبخ 👨‍🍳",
        title: "مطبخنا المفتوح وأعلى معايير النظافة",
        caption: "مطبخ استانلس ستيل حديث بالكامل ومعدات قلايات أمريكية متطورة لضمان أقصى درجات النظافة والجودة."
    }
];

let currentFeaturedIndex = 0;
let currentLightboxIndex = 0;

// Switch featured branch photo in main card
function switchBranchPhoto(index) {
    if (index < 0 || index >= branchPhotosData.length) return;
    currentFeaturedIndex = index;
    const photo = branchPhotosData[index];
    
    const featuredImg = document.getElementById('featuredBranchImg');
    const badgeText = document.getElementById('featuredBranchBadgeText');
    
    if (featuredImg) {
        featuredImg.src = photo.url;
        featuredImg.alt = photo.title;
    }
    if (badgeText) {
        badgeText.innerText = `${photo.title} (${photo.badge})`;
    }
    
    // Update thumbnail highlights
    const thumbs = document.querySelectorAll('.branch-thumb');
    thumbs.forEach((thumb, idx) => {
        if (idx === index) {
            thumb.classList.add('active');
            thumb.classList.remove('opacity-70');
        } else {
            thumb.classList.remove('active');
            thumb.classList.add('opacity-70');
        }
    });
}

// Open featured photo in Lightbox
function openCurrentFeaturedPhoto() {
    openPhotoLightbox(currentFeaturedIndex);
}

// Open Lightbox with specific photo index
function openPhotoLightbox(index) {
    if (index < 0 || index >= branchPhotosData.length) return;
    currentLightboxIndex = index;
    const photo = branchPhotosData[index];
    
    const modal = document.getElementById('photoLightboxModal');
    const img = document.getElementById('lightboxImg');
    const badge = document.getElementById('lightboxBadge');
    const title = document.getElementById('lightboxTitle');
    const caption = document.getElementById('lightboxCaption');
    
    if (img) img.src = photo.url;
    if (badge) badge.innerText = photo.badge;
    if (title) title.innerText = photo.title;
    if (caption) caption.innerText = photo.caption;
    
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

// Close Lightbox
function closePhotoLightbox(event) {
    if (event && event.target && event.target.id !== 'photoLightboxModal' && !event.target.closest('button')) {
        return;
    }
    const modal = document.getElementById('photoLightboxModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

// Navigate Lightbox (prev / next)
function navigateLightbox(direction) {
    let nextIndex = currentLightboxIndex + direction;
    if (nextIndex < 0) nextIndex = branchPhotosData.length - 1;
    if (nextIndex >= branchPhotosData.length) nextIndex = 0;
    openPhotoLightbox(nextIndex);
}

// Keyboard shortcuts for Lightbox (ESC, Left, Right)
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('photoLightboxModal');
    if (!modal || modal.classList.contains('hidden')) return;
    
    if (e.key === 'Escape') {
        closePhotoLightbox();
    } else if (e.key === 'ArrowLeft') {
        navigateLightbox(1);
    } else if (e.key === 'ArrowRight') {
        navigateLightbox(-1);
    }
});
