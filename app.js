const DB = {
  products: 'products', categories: 'categories', users: 'users', orders: 'orders',
  carts: 'carts', wishlists: 'wishlists', reviews: 'reviews', coupons: 'coupons',
  notifications: 'notifications', settings: 'settings', currentUser: 'currentUser', admin: 'adminSession'
};
const image = (id, width = 720) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const seedProducts = [
  { id: 'p101', name: 'Sculpted Stoneware Mug', category: 'Home', price: 18500, oldPrice: 22000, stock: 24, sku: 'HOM-MUG-01', rating: 4.8, featured: true, bestseller: true, createdAt: '2026-09-15', description: 'A satisfying weight, a soft glaze, and a handle made for slow mornings. Each piece is finished by hand.', image: image('photo-1514228742587-6b1558fcca3d'), specifications: 'Stoneware ceramic\nHand-finished glaze\nCapacity: 340 ml' },
  { id: 'p102', name: 'Everyday Canvas Tote', category: 'Wear', price: 24000, oldPrice: 0, stock: 38, sku: 'WEA-TOT-02', rating: 4.9, featured: true, bestseller: true, createdAt: '2026-09-17', description: 'A roomy, hard-wearing carryall in heavyweight cotton canvas. An easy companion for market mornings and everywhere after.', image: image('photo-1590874103328-eac38a683ce7'), specifications: '100% cotton canvas\nReinforced handles\nDimensions: 38 × 42 cm' },
  { id: 'p103', name: 'Ribbed Glass Carafe', category: 'Home', price: 32000, oldPrice: 38000, stock: 11, sku: 'HOM-CAR-03', rating: 4.7, featured: true, bestseller: false, createdAt: '2026-09-18', description: 'A clear, ribbed carafe that makes the daily ritual of pouring feel like a small occasion.', image: image('photo-1544787219-7f47ccb76574'), specifications: 'Borosilicate glass\nCapacity: 900 ml\nDishwasher safe' },
  { id: 'p104', name: 'Botanical Hand Balm', category: 'Wellness', price: 14500, oldPrice: 0, stock: 42, sku: 'WEL-BAL-04', rating: 4.6, featured: false, bestseller: true, createdAt: '2026-09-19', description: 'A rich but quick-absorbing balm with shea butter and a gentle botanical scent. Made for hands that do things.', image: image('photo-1608248543803-ba4f8c70ae0b'), specifications: 'Net wt. 75 g\nPlant-based ingredients\nMade in small batches' },
  { id: 'p105', name: 'Linen Market Shirt', category: 'Wear', price: 46500, oldPrice: 56000, stock: 9, sku: 'WEA-LIN-05', rating: 4.9, featured: true, bestseller: false, createdAt: '2026-09-21', description: 'Relaxed, breathable linen with a clean collar and a little room to move. Cut for repeat wear, not a single season.', image: image('photo-1603252109303-2751441dd157'), specifications: '100% European linen\nRelaxed fit\nMachine wash cold' },
  { id: 'p106', name: 'Sandalwood Incense Set', category: 'Wellness', price: 19500, oldPrice: 0, stock: 31, sku: 'WEL-INC-06', rating: 4.5, featured: false, bestseller: false, createdAt: '2026-09-23', description: 'A grounding, wood-forward scent in a simple set for a quieter end to the day.', image: image('photo-1602874801007-bd458bb1b8b6'), specifications: '20 incense sticks\nCeramic holder included\nApprox. 35 min burn time' },
  { id: 'p107', name: 'Woven Storage Basket', category: 'Objects', price: 38500, oldPrice: 0, stock: 6, sku: 'OBJ-BAS-07', rating: 4.8, featured: false, bestseller: true, createdAt: '2026-09-24', description: 'Handwoven from natural fibres to keep everyday things close and considered. Each basket has its own character.', image: image('photo-1593085260707-5377ba37f868'), specifications: 'Handwoven natural fibre\nApprox. 30 cm diameter\nMade by local artisans' },
  { id: 'p108', name: 'Soft Form Desk Lamp', category: 'Objects', price: 72000, oldPrice: 85000, stock: 5, sku: 'OBJ-LAM-08', rating: 4.9, featured: true, bestseller: false, createdAt: '2026-09-25', description: 'A warm pool of light from a compact, sculptural lamp that feels at home on any bedside table or desk.', image: image('photo-1507473885765-e6ed057f782c'), specifications: 'Powder-coated steel\nWarm LED included\nHeight: 32 cm' },
  { id: 'p109', name: 'Folded Brass Bookends', category: 'Objects', price: 29500, oldPrice: 0, stock: 14, sku: 'OBJ-BOK-09', rating: 4.7, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A pair of solid brass bookends with a folded silhouette and enough weight to keep a small library in line.', image: image('photo-1507842217343-583bb7270b66'), specifications: 'Solid brushed brass\nSet of two\nFelt-lined base' },
  { id: 'p110', name: 'Pebble Catchall Tray', category: 'Objects', price: 16500, oldPrice: 19500, stock: 22, sku: 'OBJ-TRY-10', rating: 4.6, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A small, tactile landing place for keys, rings, and the little things that tend to wander.', image: image('photo-1603006905003-be475563bc59'), specifications: 'Cast ceramic\nHand-glazed\nApprox. 14 cm wide' },
  { id: 'p111', name: 'Oak Picture Ledge', category: 'Objects', price: 42000, oldPrice: 0, stock: 8, sku: 'OBJ-OAK-11', rating: 4.8, featured: false, bestseller: true, createdAt: '2026-09-26', description: 'A slim solid-oak ledge for rotating prints, postcards, and keepsakes without committing to one arrangement.', image: image('photo-1513519245088-0e12902e5a38'), specifications: 'Solid oak\nLength: 60 cm\nWall fixings included' },
  { id: 'p112', name: 'Everyday Leather Card Case', category: 'Wear', price: 27500, oldPrice: 0, stock: 19, sku: 'WEA-CAR-12', rating: 4.8, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A slim vegetable-tanned leather case for the cards you reach for every day. It softens beautifully with use.', image: image('photo-1627123424574-724758594e93'), specifications: 'Vegetable-tanned leather\nFour card slots\nMade to patina' },
  { id: 'p113', name: 'Weekend Cotton Cap', category: 'Wear', price: 18500, oldPrice: 22000, stock: 27, sku: 'WEA-CAP-13', rating: 4.5, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A soft cotton cap with a curved brim and an adjustable back for long walks and unplanned errands.', image: image('photo-1588850561407-ed78c282e89b'), specifications: '100% cotton twill\nAdjustable strap\nOne size' },
  { id: 'p114', name: 'Ribbed Everyday Socks', category: 'Wear', price: 9500, oldPrice: 0, stock: 54, sku: 'WEA-SOC-14', rating: 4.6, featured: false, bestseller: true, createdAt: '2026-09-26', description: 'Soft, breathable crew socks with a comfortable rib and a little colour at the cuff.', image: image('photo-1618354691229-88d47f285158'), specifications: 'Cotton-rich knit\nOne size fits most\nPair of two' },
  { id: 'p115', name: 'Sunday Lounge Trousers', category: 'Wear', price: 38500, oldPrice: 0, stock: 13, sku: 'WEA-TRS-15', rating: 4.7, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'Relaxed pull-on trousers in a soft cotton weave, made for slow starts and late finishes.', image: image('photo-1529139574466-a303027c1d8b'), specifications: 'Cotton blend\nElastic drawstring waist\nRelaxed straight leg' },
  { id: 'p116', name: 'Canvas Zip Pouch', category: 'Wear', price: 12000, oldPrice: 0, stock: 33, sku: 'WEA-PCH-16', rating: 4.5, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A sturdy zip pouch for cables, pencils, travel bits, or whatever needs its own little place.', image: image('photo-1512436991641-6745cdb1723f'), specifications: 'Heavy cotton canvas\nMetal zip\nDimensions: 22 × 15 cm' },
  { id: 'p117', name: 'Sunday Pour-Over Set', category: 'Home', price: 34500, oldPrice: 39500, stock: 12, sku: 'HOM-COF-17', rating: 4.9, featured: true, bestseller: true, createdAt: '2026-09-26', description: 'A ceramic dripper and matching cup for a slower, more hands-on morning coffee ritual.', image: image('photo-1495474472287-4d71bcdd2085'), specifications: 'Glazed ceramic dripper\nMatching 280 ml cup\nReusable filter included' },
  { id: 'p118', name: 'Ripple Linen Napkins', category: 'Home', price: 22000, oldPrice: 0, stock: 20, sku: 'HOM-NAP-18', rating: 4.6, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A set of four washed-linen napkins that make the everyday table feel a little more considered.', image: image('photo-1603199506016-b9a594b593c0'), specifications: '100% washed linen\nSet of four\nMachine washable' },
  { id: 'p119', name: 'Hand-Thrown Pasta Bowl', category: 'Home', price: 24500, oldPrice: 0, stock: 17, sku: 'HOM-BWL-19', rating: 4.8, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A generous, hand-thrown bowl with a quiet speckled glaze for pasta, fruit, or a very good salad.', image: image('photo-1610701596007-11502861dcfa'), specifications: 'Wheel-thrown stoneware\nDiameter: 22 cm\nDishwasher safe' },
  { id: 'p120', name: 'Amber Oil Bottle', category: 'Home', price: 19500, oldPrice: 0, stock: 25, sku: 'HOM-OIL-20', rating: 4.5, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A dark glass bottle with a controlled pour spout, made to keep your favourite cooking oil close at hand.', image: image('photo-1608571423902-eed4a5ad8108'), specifications: 'Amber glass\nStainless pourer\nCapacity: 500 ml' },
  { id: 'p121', name: 'Soft Check Tea Towel', category: 'Home', price: 10500, oldPrice: 0, stock: 40, sku: 'HOM-TOW-21', rating: 4.6, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A cheerful, absorbent cotton tea towel that earns its hook by the sink.', image: image('photo-1600369671236-e74521d4b6ad'), specifications: '100% cotton\nSet of two\nMachine washable' },
  { id: 'p122', name: 'Citrus Grove Candle', category: 'Wellness', price: 21000, oldPrice: 25000, stock: 18, sku: 'WEL-CAN-22', rating: 4.8, featured: true, bestseller: true, createdAt: '2026-09-26', description: 'Bright citrus peel meets leafy green notes in a clean-burning candle for fresh-air afternoons.', image: image('photo-1603006905003-be475563bc59'), specifications: 'Soy wax blend\nBurn time: approx. 40 hours\nCotton wick' },
  { id: 'p123', name: 'Quiet Hour Bath Soak', category: 'Wellness', price: 15500, oldPrice: 0, stock: 28, sku: 'WEL-BTH-23', rating: 4.7, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'Mineral salts and dried botanicals for a warm bath at the end of a long day.', image: image('photo-1608248543803-ba4f8c70ae0b'), specifications: 'Mineral salt blend\nNet wt. 400 g\nUse within 12 months' },
  { id: 'p124', name: 'Daily Face Oil', category: 'Wellness', price: 28500, oldPrice: 0, stock: 16, sku: 'WEL-OIL-24', rating: 4.8, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A lightweight botanical facial oil that sinks in quickly and leaves skin feeling comfortable, not coated.', image: image('photo-1601049541289-9b1b7bbbfe19'), specifications: '30 ml glass bottle\nPlant-derived oils\nFragrance free' },
  { id: 'p125', name: 'Herbal Hand Wash', category: 'Wellness', price: 13500, oldPrice: 0, stock: 36, sku: 'WEL-WAS-25', rating: 4.5, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A gentle, botanical hand wash with a fresh herbal scent for a small daily reset.', image: image('photo-1608571423902-eed4a5ad8108'), specifications: 'Plant-derived cleanser\n500 ml refillable bottle\nMade in Nigeria' },
  { id: 'p126', name: 'Cloud Cotton Bath Towel', category: 'Wellness', price: 32000, oldPrice: 36000, stock: 14, sku: 'WEL-TOW-26', rating: 4.8, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A plush, quick-drying cotton towel with a soft hand and a sturdy hanging loop.', image: image('photo-1620626011761-996317b8d101'), specifications: '100% cotton\n700 GSM\nSize: 70 × 140 cm' },
  { id: 'p127', name: 'Speckled Planter Pot', category: 'Objects', price: 26500, oldPrice: 0, stock: 15, sku: 'OBJ-PLN-27', rating: 4.7, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A rounded stoneware planter with a speckled finish and a drainage hole for thriving indoor greens.', image: image('photo-1485955900006-10f4d324d411'), specifications: 'Stoneware ceramic\nDiameter: 16 cm\nDrainage hole and saucer' },
  { id: 'p128', name: 'Pocket Notebook Trio', category: 'Objects', price: 11500, oldPrice: 0, stock: 48, sku: 'OBJ-NOT-28', rating: 4.6, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'Three pocket notebooks for lists, sketches, and thoughts worth keeping.', image: image('photo-1517842645767-c639042777db'), specifications: 'Set of three\n64 blank pages each\nRecycled paper' },
  { id: 'p129', name: 'Brass Arc Wall Hook', category: 'Objects', price: 14500, oldPrice: 0, stock: 21, sku: 'OBJ-HOK-29', rating: 4.5, featured: false, bestseller: false, createdAt: '2026-09-26', description: 'A solid brass hook with a simple curved form for coats, towels, or a favourite tote.', image: image('photo-1618221195710-dd6b41faaea6'), specifications: 'Solid brass\nWall plug included\nLoad rating: 5 kg' },
  { id: 'p130', name: 'Low Tide Serving Board', category: 'Home', price: 36000, oldPrice: 0, stock: 10, sku: 'HOM-BRD-30', rating: 4.9, featured: true, bestseller: false, createdAt: '2026-09-26', description: 'A sculpted wooden serving board for bread, fruit, and the kind of snacks that become dinner.', image: image('photo-1547592180-85f173990554'), specifications: 'Solid acacia wood\nFood-safe finish\nHand wash only' },
  { id: 'p131', name: 'Gathering Cotton Throw', category: 'Home', price: 58500, oldPrice: 0, stock: 7, sku: 'HOM-THR-31', rating: 4.9, featured: false, bestseller: true, createdAt: '2026-09-26', description: 'A generously sized, textured cotton throw for cool evenings and unhurried mornings.', image: image('photo-1600369671236-e74521d4b6ad'), specifications: '100% cotton\nSize: 130 × 180 cm\nMachine wash cold' },
  { id: 'p132', name: 'Field Notes Crossbody', category: 'Wear', price: 52000, oldPrice: 0, stock: 8, sku: 'WEA-BAG-32', rating: 4.8, featured: true, bestseller: false, createdAt: '2026-09-26', description: 'A compact crossbody in sturdy canvas with a wide strap and room for daily essentials.', image: image('photo-1553062407-98eeb64c6a62'), specifications: 'Heavy cotton canvas\nAdjustable strap\nInterior pocket' }
];
const defaultSettings = { name: 'Morrow Market', email: 'hello@morrowmarket.ng', phone: '+234 800 555 0190', whatsapp: '+234 800 555 0190', deliveryFee: 3500, currency: 'NGN', description: 'Thoughtful goods for everyday living', instagram: '@morrowmarket' };
const state = { route: 'shop', category: 'All', query: '', sort: 'featured', maxPrice: '', accountTab: 'overview', adminTab: 'overview', coupon: '', orderConfirmation: null, installPrompt: null };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const tabId = crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`;
const liveChannel = 'BroadcastChannel' in window ? new BroadcastChannel('morrow-market-live') : null;
let refreshAfterForm = false;

function read(key, fallback) {
  try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
  catch { return fallback; }
}
function announceLocalChange(key) { liveChannel?.postMessage({ key, source: tabId }); }
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  announceLocalChange(key);
}
function remove(key) {
  localStorage.removeItem(key);
  announceLocalChange(key);
}
function refreshFromOtherTab(key) {
  if (!Object.values(DB).includes(key)) return;
  updateHeader();
  if (document.activeElement?.matches('input, textarea, select')) {
    refreshAfterForm = true;
    return;
  }
  render();
  toast('Store updated in another tab.');
}
if (liveChannel) {
  liveChannel.addEventListener('message', event => {
    if (event.data?.source !== tabId) refreshFromOtherTab(event.data?.key);
  });
}
window.addEventListener('storage', event => {
  if (event.key) refreshFromOtherTab(event.key);
});
document.addEventListener('focusout', () => {
  if (refreshAfterForm && !document.activeElement?.matches('input, textarea, select')) {
    refreshAfterForm = false;
    render();
  }
});
function ensure(key, value) { if (localStorage.getItem(key) === null) write(key, value); }
function esc(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
async function passwordDigest(password) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
}
function settings() { return { ...defaultSettings, ...read(DB.settings, {}) }; }
function products() { return read(DB.products, []); }
function user() { return read(DB.currentUser, null); }
function keyForUser() { return user()?.id || 'guest'; }
function carts() { return read(DB.carts, {}); }
function cart() { return carts()[keyForUser()] || {}; }
function wishlists() { return read(DB.wishlists, {}); }
function wishlist() { return wishlists()[keyForUser()] || []; }
function money(amount) { return new Intl.NumberFormat('en-NG', { style: 'currency', currency: settings().currency, maximumFractionDigits: 0 }).format(Number(amount) || 0); }
function updateHeader() {
  $('#cart-count').textContent = Object.values(cart()).reduce((sum, quantity) => sum + quantity, 0);
  $('#wishlist-count').textContent = wishlist().length;
  $$('.main-nav button').forEach(button => button.classList.toggle('active', button.dataset.route === state.route || button.dataset.category === state.category));
}
function toast(message) {
  const node = document.createElement('div');
  node.className = 'toast'; node.textContent = message; $('#toast-region').append(node);
  setTimeout(() => node.remove(), 2700);
}
function go(route) {
  state.route = route; state.orderConfirmation = null;
  if (location.hash !== `#${route}`) location.hash = route;
  render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}
function syncRoute() {
  const route = location.hash.replace(/^#\/?/, '').split('/')[0];
  const initialRoute = !route && document.body.dataset.entry === 'admin' ? 'admin' : route;
  state.route = ['shop', 'cart', 'wishlist', 'checkout', 'account', 'admin'].includes(initialRoute) ? initialRoute : 'shop';
  if (state.route === 'admin' && !read(DB.admin, false)) state.adminTab = 'login';
  render();
}
function saveCart(next) {
  const all = carts(); all[keyForUser()] = next; write(DB.carts, all); updateHeader();
}
function saveWishlist(next) {
  const all = wishlists(); all[keyForUser()] = next; write(DB.wishlists, all); updateHeader();
}
function migrateGuestData(userId) {
  const allCarts = carts();
  if (allCarts.guest) {
    allCarts[userId] = { ...(allCarts[userId] || {}), ...allCarts.guest };
    delete allCarts.guest;
    write(DB.carts, allCarts);
  }
  const allWishlists = wishlists();
  if (allWishlists.guest) {
    allWishlists[userId] = [...new Set([...(allWishlists[userId] || []), ...allWishlists.guest])];
    delete allWishlists.guest;
    write(DB.wishlists, allWishlists);
  }
}
function addToCart(id, quantity = 1) {
  const product = products().find(item => item.id === id);
  if (!product || product.stock < 1) { toast('That item is currently out of stock.'); return; }
  const next = { ...cart() };
  next[id] = Math.min(product.stock, (next[id] || 0) + quantity);
  saveCart(next); toast(`${product.name} added to your bag.`);
}
function toggleWishlist(id) {
  const current = wishlist(), saved = current.includes(id);
  saveWishlist(saved ? current.filter(item => item !== id) : [...current, id]);
  toast(saved ? 'Removed from saved items.' : 'Saved for later.'); render();
}
function productCard(product, index = 0) {
  const saved = wishlist().includes(product.id);
  const badge = product.stock < 1 ? 'Sold out' : product.oldPrice ? 'Offer' : product.bestseller ? 'Best seller' : product.createdAt >= '2026-09-20' ? 'New' : '';
  return `<article class="product-card" style="animation-delay:${Math.min(index * 45, 250)}ms"><div class="product-image-wrap">
    <img class="product-image" src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy"><span class="product-tag ${product.oldPrice ? 'sale' : ''}">${esc(badge)}</span>
    <button class="heart-button ${saved ? 'saved' : ''}" data-action="wishlist" data-id="${esc(product.id)}" aria-label="${saved ? 'Remove from' : 'Add to'} wishlist">${saved ? '♥' : '♡'}</button>
    <button class="quick-add" data-action="quick-add" data-id="${esc(product.id)}" ${product.stock < 1 ? 'disabled' : ''}>${product.stock < 1 ? 'Sold out' : 'Quick add'} <span>↗</span></button></div>
    <div class="product-info"><span class="product-category">${esc(product.category)}</span><h3 class="product-title"><button class="text-button" data-action="product-detail" data-id="${esc(product.id)}">${esc(product.name)}</button></h3>
    <div class="product-meta"><span class="product-price">${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : ''}${money(product.price)}</span><span class="product-rating">★ ${Number(product.rating || 0).toFixed(1)}</span></div></div></article>`;
}
function featureCard(product) {
  if (!product) return '';
  return `<article class="feature-card"><img src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy"><div class="feature-card-top"><span>THE OBJECT STUDY · 01</span><button class="heart-button ${wishlist().includes(product.id) ? 'saved' : ''}" data-action="wishlist" data-id="${esc(product.id)}" aria-label="Save ${esc(product.name)}">${wishlist().includes(product.id) ? '♥' : '♡'}</button></div><div class="feature-card-copy"><span class="eyebrow">Editor’s pick · ${esc(product.category)}</span><h3>${esc(product.name)}</h3><p>${esc(product.description)}</p><div><strong>${money(product.price)}</strong><button class="button light small" data-action="quick-add" data-id="${esc(product.id)}">Add to bag ↗</button><button class="feature-detail" data-action="product-detail" data-id="${esc(product.id)}" aria-label="View ${esc(product.name)}">↗</button></div></div></article>`;
}
function shopView() {
  let items = products();
  if (state.category !== 'All') items = items.filter(item => item.category === state.category);
  if (state.query) items = items.filter(item => `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(state.query.toLowerCase()));
  if (state.maxPrice) items = items.filter(item => item.price <= Number(state.maxPrice));
  if (state.sort === 'price-low') items.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') items.sort((a, b) => b.price - a.price);
  if (state.sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
  if (state.sort === 'newest') items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  if (state.sort === 'featured') items.sort((a, b) => Number(b.featured) - Number(a.featured));
  const categories = ['All', ...read(DB.categories, [])];
  const featured = items.find(item => item.featured) || items[0];
  const remaining = featured ? items.filter(item => item.id !== featured.id) : [];
  return `<section class="cover-story"><img class="cover-image" src="${image('photo-1616486338812-3dadae4b4ace', 1500)}" alt="A calm, sunlit living room filled with collected home objects"><div class="cover-shade"></div><div class="cover-index"><span>MM / 01</span><span>INDEPENDENT GOODS · LAGOS</span></div><div class="cover-copy"><span class="eyebrow">Objects for an unordinary everyday</span><h1>Keep the things<br>that feel like <i>you.</i></h1><p>Small-batch pieces, useful rituals, and a little room for wonder.</p><button class="button light" data-scroll="collection">Enter the collection <span>↘</span></button></div><span class="cover-caption">A HOME IS MADE IN THE DETAILS · VOL. 01</span><span class="cover-orbit">M<br>M</span></section>
  <section class="benefits"><div class="benefit"><b>✳</b>Free delivery over ₦75,000</div><div class="benefit"><b>↺</b>Easy 7-day returns</div><div class="benefit"><b>♡</b>Made and sourced with care</div></section>
  <section class="shop-section" id="collection"><div class="section-heading"><div><span class="eyebrow">A living collection <span class="live-dot"></span> live in this browser</span><h2>${state.query ? `Results for “${esc(state.query)}”` : state.category === 'All' ? 'Chosen for the way you live.' : esc(state.category)}</h2></div><p>${items.length} pieces <span class="heading-divider">/</span> updated across open tabs</p></div>
  <div class="catalog-tools"><div class="category-tabs">${categories.map(category => `<button class="chip ${state.category === category ? 'active' : ''}" data-category="${esc(category)}">${esc(category)}</button>`).join('')}</div><div class="price-filter"><label for="max-price">Under ₦</label><input id="max-price" type="number" min="0" placeholder="Any price" value="${esc(state.maxPrice)}"><select class="sort-select" id="sort-select" aria-label="Sort products"><option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>Featured</option><option value="newest" ${state.sort === 'newest' ? 'selected' : ''}>Newest</option><option value="price-low" ${state.sort === 'price-low' ? 'selected' : ''}>Price: low to high</option><option value="price-high" ${state.sort === 'price-high' ? 'selected' : ''}>Price: high to low</option><option value="name" ${state.sort === 'name' ? 'selected' : ''}>Name: A to Z</option></select></div></div>
  ${items.length ? `<div class="product-grid editorial-grid">${featured ? featureCard(featured) : ''}${remaining.map(productCard).join('')}</div>` : `<div class="empty-state"><h3>Nothing in this edit just yet</h3><p>Try another search or browse all of our pieces.</p><button class="button small" data-action="clear-filters">Browse everything</button></div>`}</section>
  <section class="closing-note"><span>01 — 08</span><p>Less, but with a little more meaning.</p><span>MM / EST. FOR EVERYDAY</span></section>`;
}
function cartLines() {
  return Object.entries(cart()).map(([id, quantity]) => ({ product: products().find(item => item.id === id), quantity })).filter(line => line.product);
}
function totals(code = state.coupon) {
  const subtotal = cartLines().reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const coupon = code && read(DB.coupons, []).find(item => item.code.toLowerCase() === code.toLowerCase() && item.active && item.expires >= new Date().toISOString().slice(0, 10) && subtotal >= item.minOrder);
  const discount = coupon ? coupon.type === 'percent' ? Math.round(subtotal * coupon.value / 100) : coupon.value : 0;
  const delivery = subtotal >= 75000 || subtotal === 0 ? 0 : Number(settings().deliveryFee);
  return { subtotal, discount, delivery, total: Math.max(0, subtotal - discount + delivery) };
}
function summaryBox(checkout = false) {
  const sum = totals();
  return `<aside class="summary-box"><h2>Order summary</h2>${cartLines().map(line => `<div class="summary-line"><span>${esc(line.product.name)} × ${line.quantity}</span><span>${money(line.product.price * line.quantity)}</span></div>`).join('')}
  <div class="summary-line"><span>Subtotal</span><span>${money(sum.subtotal)}</span></div><div class="summary-line"><span>Delivery</span><span>${sum.delivery ? money(sum.delivery) : 'Complimentary'}</span></div>${sum.discount ? `<div class="summary-line"><span>Discount</span><span>−${money(sum.discount)}</span></div>` : ''}<div class="summary-line total"><span>Total</span><span>${money(sum.total)}</span></div>
  ${checkout ? '' : `<div class="coupon-entry"><input id="coupon-code" placeholder="Coupon code" value="${esc(state.coupon)}"><button data-action="apply-coupon">Apply</button></div><button class="button" data-action="${user() ? 'checkout' : 'checkout-auth'}">Continue to checkout <span>↗</span></button>`}<p class="summary-note">${sum.subtotal < 75000 ? `Add ${money(75000 - sum.subtotal)} for complimentary delivery.` : 'You have complimentary delivery.'} Taxes included where applicable.</p></aside>`;
}
function cartView() {
  const lines = cartLines();
  return `<section class="page-wrap"><span class="eyebrow">Your edit</span><h1 class="page-title">Your bag</h1><p class="page-subtitle">${lines.reduce((sum, line) => sum + line.quantity, 0)} considered ${lines.length === 1 ? 'piece' : 'pieces'} in your bag</p>${lines.length ? `<div class="cart-layout"><div class="cart-list">${lines.map(({ product, quantity }) => `<div class="cart-row"><img class="cart-thumb" src="${esc(product.image)}" alt="${esc(product.name)}"><div class="cart-detail"><span class="product-category">${esc(product.category)}</span><h3>${esc(product.name)}</h3><p>${money(product.price)} · ${product.stock} available</p><div class="quantity-control"><button data-action="quantity" data-id="${product.id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${quantity}</span><button data-action="quantity" data-id="${product.id}" data-delta="1" aria-label="Increase quantity">+</button></div></div><div class="cart-row-end"><span>${money(product.price * quantity)}</span><button class="text-button" data-action="remove-cart" data-id="${product.id}">Remove</button></div></div>`).join('')}<div style="display:flex;justify-content:space-between;padding-top:14px"><button class="text-button" data-route="shop">← Continue shopping</button><button class="text-button" data-action="clear-cart">Clear bag</button></div></div>${summaryBox()}</div>` : `<div class="empty-state"><h3>Your bag is taking a breather</h3><p>Find something useful, beautiful, or both.</p><button class="button" data-route="shop">Explore the shop ↗</button></div>`}</section>`;
}
function wishlistView() {
  const items = wishlist().map(id => products().find(item => item.id === id)).filter(Boolean);
  return `<section class="page-wrap"><span class="eyebrow">Kept close</span><h1 class="page-title">Saved pieces</h1><p class="page-subtitle">A shortlist of things you love.</p>${items.length ? `<div class="product-grid">${items.map(productCard).join('')}</div>` : `<div class="empty-state"><h3>A place for future favourites</h3><p>Tap the heart on any piece to save it here.</p><button class="button" data-route="shop">Browse the collection ↗</button></div>`}</section>`;
}
function authView(message = 'Sign in or create an account to see your orders and saved details.') {
  return `<section class="page-wrap"><span class="eyebrow">Your Morrow account</span><h1 class="page-title">Welcome in.</h1><p class="page-subtitle">${esc(message)}</p><div class="cart-layout"><form class="summary-box" id="login-form"><h2>Sign in</h2><div class="field" style="margin-bottom:12px"><label>Email address</label><input name="email" type="email" autocomplete="email" required></div><div class="field"><label>Password</label><input name="password" type="password" autocomplete="current-password" required></div><button class="button" style="width:100%;margin-top:15px">Sign in ↗</button></form>
  <form class="summary-box" id="register-form"><h2>Create an account</h2><div class="field" style="margin-bottom:12px"><label>Your name</label><input name="name" required></div><div class="field" style="margin-bottom:12px"><label>Email address</label><input name="email" type="email" required></div><div class="field"><label>Password</label><input name="password" type="password" minlength="8" required></div><button class="button" style="width:100%;margin-top:15px">Join Morrow ↗</button></form></div></section>`;
}
function statusClass(status) { return String(status || 'Pending').toLowerCase().replaceAll(' ', '-'); }
function notificationPanel(items, audience) {
  if (!items.length) return '<div class="empty-state"><p>You are all caught up.</p></div>';
  return `<div class="notification-list">${items.map(item => `<article class="user-card"><div><strong>${esc(item.title)}</strong><p>${esc(item.message)}</p><small>${new Date(item.createdAt).toLocaleString('en-NG')}</small></div>${item.read ? '' : '<b class="count-badge">New</b>'}</article>`).join('')}</div><button class="text-button" data-action="mark-notifications-read" data-audience="${esc(audience)}">Mark all as read</button>`;
}
function orderTable(orders, admin = false) {
  if (!orders.length) return '<div class="empty-state"><p>No orders here yet.</p></div>';
  return `<div class="table-wrap"><table><thead><tr><th>Order</th>${admin ? '<th>Customer</th>' : ''}<th>Date</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead><tbody>${orders.map(order => `<tr><td><strong>${esc(order.id)}</strong></td>${admin ? `<td>${esc(order.customer.name)}<br><span style="color:var(--muted)">${esc(order.customer.email)}</span></td>` : ''}<td>${new Date(order.createdAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</td><td>${money(order.total)}</td><td><span class="status ${statusClass(order.status)}">${esc(order.status)}</span></td><td><button class="text-button" data-action="view-order" data-id="${esc(order.id)}">View order</button></td></tr>`).join('')}</tbody></table></div>`;
}
function accountView() {
  const current = user(); if (!current) return authView();
  const orders = read(DB.orders, []).filter(order => order.userId === current.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const pending = orders.filter(order => !['Delivered', 'Cancelled'].includes(order.status)).length;
  const delivered = orders.filter(order => order.status === 'Delivered').length;
  const spending = orders.filter(order => order.status !== 'Cancelled').reduce((sum, order) => sum + order.total, 0);
  let content = '';
  if (state.accountTab === 'overview') content = `<div class="stat-grid"><div class="stat-card"><span>Total orders</span><strong>${orders.length}</strong></div><div class="stat-card"><span>In progress</span><strong>${pending}</strong></div><div class="stat-card"><span>Delivered</span><strong>${delivered}</strong></div><div class="stat-card"><span>Saved pieces</span><strong>${wishlist().length}</strong></div><div class="stat-card"><span>Total spending</span><strong>${money(spending)}</strong></div></div><div class="dashboard-heading"><h2>Recent orders</h2><button class="text-button" data-account-tab="orders">All orders ↗</button></div>${orderTable(orders.slice(0, 4))}`;
  if (state.accountTab === 'orders') content = `<div class="dashboard-heading"><h2>Order history</h2></div>${orderTable(orders)}`;
  if (state.accountTab === 'wishlist') content = `<div class="dashboard-heading"><h2>Saved pieces</h2></div>${wishlist().length ? `<div class="product-grid">${wishlist().map(id => products().find(item => item.id === id)).filter(Boolean).map(productCard).join('')}</div>` : '<div class="empty-state"><p>No saved pieces yet.</p></div>'}`;
  if (state.accountTab === 'profile') content = `<div class="dashboard-heading"><h2>Your details</h2></div><form id="profile-form" class="form-grid settings-grid"><div class="field"><label>Name</label><input name="name" required value="${esc(current.name)}"></div><div class="field"><label>Email</label><input name="email" type="email" required value="${esc(current.email)}"></div><div class="field"><label>Phone</label><input name="phone" value="${esc(current.phone || '')}"></div><div class="field full"><button class="button">Save details ↗</button></div></form>`;
  if (state.accountTab === 'addresses') content = `<div class="dashboard-heading"><h2>Delivery addresses</h2></div><p class="page-subtitle">Your most recent delivery address is saved with each order.</p>${orders[0]?.shipping ? `<div class="summary-box">${esc(orders[0].shipping.name)}<br>${esc(orders[0].shipping.address)}<br>${esc(orders[0].shipping.city)}, ${esc(orders[0].shipping.state)}<br>${esc(orders[0].shipping.phone)}</div>` : '<div class="empty-state"><p>Addresses will appear after your first order.</p></div>'}`;
  if (state.accountTab === 'notifications') content = `<div class="dashboard-heading"><h2>Notifications</h2></div>${notificationPanel(read(DB.notifications, []).filter(item => item.userId === current.id), current.id)}`;
  return `<section class="page-wrap"><span class="eyebrow">Your Morrow account</span><h1 class="page-title">Good to see you, ${esc(current.name.split(' ')[0])}.</h1><p class="page-subtitle">A tidy place for your orders, saved pieces, and details.</p><div class="dashboard-layout"><nav class="side-nav" aria-label="Account navigation">${[['overview', 'Overview'], ['orders', 'My orders'], ['wishlist', 'Saved pieces'], ['profile', 'Profile'], ['addresses', 'Addresses'], ['notifications', 'Notifications']].map(([id, label]) => `<button class="${state.accountTab === id ? 'active' : ''}" data-account-tab="${id}">${label}</button>`).join('')}<button class="logout" data-action="logout">Sign out ↗</button></nav><div class="dashboard-content">${content}</div></div></section>`;
}
function checkoutView() {
  if (!user()) return authView('Please sign in before checkout.');
  if (!cartLines().length) return '<section class="page-wrap"><div class="empty-state"><h3>Your bag is empty</h3><button class="button" data-route="shop">Back to shop</button></div></section>';
  return `<section class="page-wrap"><span class="eyebrow">Nearly yours</span><h1 class="page-title">Checkout</h1><p class="page-subtitle">A few details, then we’ll take it from here.</p><form id="checkout-form"><div class="checkout-layout"><div><section class="checkout-section"><h2 class="form-section-title">Delivery details</h2><div class="checkout-form"><div class="field"><label for="full-name">Full name</label><input id="full-name" name="name" required value="${esc(user().name)}"></div><div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" required value="${esc(user().email)}"></div><div class="field"><label for="phone">Phone number</label><input id="phone" name="phone" required value="${esc(user().phone || '')}"></div><div class="field"><label for="state">State</label><input id="state" name="state" required placeholder="e.g. Lagos"></div><div class="field"><label for="city">City</label><input id="city" name="city" required></div><div class="field full"><label for="address">Street address</label><input id="address" name="address" required autocomplete="street-address"></div></div></section><section class="checkout-section"><h2 class="form-section-title">Payment method</h2><div class="radio-list"><label class="radio-option"><input type="radio" name="payment" value="Cash on Delivery" checked> Cash on Delivery</label><label class="radio-option"><input type="radio" name="payment" value="Bank Transfer"> Bank Transfer · demo</label><label class="radio-option"><input type="radio" name="payment" value="Online Payment"> Online Payment · simulation</label></div></section><button class="button">Place order · ${money(totals().total)} ↗</button></div>${summaryBox(true)}</div></form></section>`;
}
function confirmationView(order) {
  return `<section class="page-wrap"><div class="confirmation"><div class="confirmation-mark">✓</div><span class="eyebrow">Order received</span><h1>Thank you, ${esc(order.customer.name.split(' ')[0])}.</h1><p>Your order <span class="order-id">${esc(order.id)}</span> is confirmed and saved in this browser.</p><p>${esc(order.payment)} selected. No payment has been processed.<br>${money(order.total)} · ${new Date(order.createdAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</p><button class="button" data-route="account">View your orders ↗</button> <button class="button outline" data-action="print-order" data-id="${esc(order.id)}">Print receipt</button></div></section>`;
}

function adminLogin() {
  return `<section class="page-wrap"><div class="admin-login"><span class="eyebrow">Morrow Market · Studio</span><h2>Store admin</h2><p class="page-subtitle">Sign in to manage your store.</p><form id="admin-login-form"><div class="field"><label>Admin email</label><input name="email" type="email" required value="admin@morrowmarket.ng"></div><div class="field" style="margin-top:12px"><label>Password</label><input name="password" type="password" required value="morrow-demo"></div><button class="button" style="width:100%;margin-top:16px">Open studio ↗</button></form><p class="demo-note">Demo access: admin@morrowmarket.ng / morrow-demo. This browser-only demo is not suitable for real credentials or production administration.</p></div></section>`;
}
function adminStats() {
  const orders = read(DB.orders, []), customers = read(DB.users, []);
  const sales = orders.filter(order => order.status !== 'Cancelled'), revenue = sales.reduce((sum, order) => sum + order.total, 0);
  const values = [['Products', products().length], ['Customers', customers.length], ['Orders', orders.length], ['Pending', orders.filter(order => ['Pending', 'Processing'].includes(order.status)).length], ['Revenue', money(revenue)], ['Delivered', orders.filter(order => order.status === 'Delivered').length], ['Low stock', products().filter(item => item.stock < 8).length], ['Avg. order', money(sales.length ? Math.round(revenue / sales.length) : 0)]];
  return `<div class="stat-grid admin-stats">${values.map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>`;
}
function adminProducts() {
  return `<div class="admin-toolbar"><input class="control-select" id="admin-product-search" placeholder="Search inventory"><button class="button small" data-action="new-product">＋ Add product</button></div><div class="table-wrap"><table><thead><tr><th>Product</th><th>SKU</th><th>Price</th><th>Stock</th><th>Category</th><th>Flags</th><th>Action</th></tr></thead><tbody>${products().map(item => `<tr><td><div class="table-product"><img class="inventory-image" src="${esc(item.image)}" alt="">${esc(item.name)}</div></td><td>${esc(item.sku || '—')}</td><td>${money(item.price)}</td><td>${item.stock}</td><td>${esc(item.category)}</td><td>${item.featured ? 'Featured ' : ''}${item.bestseller ? 'Best seller' : ''}</td><td><div class="row-actions"><button data-action="edit-product" data-id="${item.id}">Edit</button><button data-action="delete-product" data-id="${item.id}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
}
function adminUsers() {
  const users = read(DB.users, []), orders = read(DB.orders, []);
  if (!users.length) return '<div class="empty-state"><p>No customer accounts yet.</p></div>';
  return `<div class="table-wrap"><table><thead><tr><th>Customer</th><th>Joined</th><th>Orders</th><th>Status</th><th>Action</th></tr></thead><tbody>${users.map(item => `<tr><td><strong>${esc(item.name)}</strong><br><span style="color:var(--muted)">${esc(item.email)}</span></td><td>${new Date(item.createdAt).toLocaleDateString('en-NG')}</td><td>${orders.filter(order => order.userId === item.id).length}</td><td><span class="status ${item.disabled ? 'cancelled' : ''}">${item.disabled ? 'Disabled' : 'Active'}</span></td><td><div class="row-actions"><button data-action="toggle-user" data-id="${item.id}">${item.disabled ? 'Enable' : 'Disable'}</button><button data-action="delete-user" data-id="${item.id}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
}
function adminCategories() {
  const categories = read(DB.categories, []);
  return `<form id="category-form" class="admin-toolbar"><input class="control-select" name="name" placeholder="New category name" required><button class="button small">＋ Add category</button></form><div class="table-wrap"><table><thead><tr><th>Category</th><th>Products</th><th>Action</th></tr></thead><tbody>${categories.map(category => `<tr><td>${esc(category)}</td><td>${products().filter(item => item.category === category).length}</td><td><div class="row-actions"><button data-action="rename-category" data-id="${esc(category)}">Rename</button><button data-action="delete-category" data-id="${esc(category)}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
}
function adminCoupons() {
  const coupons = read(DB.coupons, []);
  return `<form id="coupon-form" class="form-grid settings-grid"><div class="field"><label>Coupon code</label><input name="code" required placeholder="SAVE20"></div><div class="field"><label>Discount type</label><select name="type"><option value="percent">Percentage</option><option value="fixed">Fixed amount</option></select></div><div class="field"><label>Discount value</label><input name="value" type="number" min="1" required></div><div class="field"><label>Minimum order (₦)</label><input name="minOrder" type="number" min="0" value="0"></div><div class="field"><label>Expiry date</label><input name="expires" type="date" required></div><div class="field" style="justify-content:end"><button class="button">＋ Create coupon</button></div></form><div class="table-wrap" style="margin-top:25px"><table><thead><tr><th>Code</th><th>Discount</th><th>Minimum</th><th>Expires</th><th>Status</th><th>Action</th></tr></thead><tbody>${coupons.map(item => `<tr><td><strong>${esc(item.code)}</strong></td><td>${item.type === 'percent' ? `${item.value}%` : money(item.value)}</td><td>${money(item.minOrder)}</td><td>${esc(item.expires)}</td><td>${item.active ? 'Active' : 'Inactive'}</td><td><button class="text-button" data-action="toggle-coupon" data-id="${item.id}">${item.active ? 'Disable' : 'Enable'}</button></td></tr>`).join('')}</tbody></table></div>`;
}
function adminReviews() {
  const reviews = read(DB.reviews, []);
  if (!reviews.length) return '<div class="empty-state"><p>No reviews have been submitted.</p></div>';
  return `<div class="table-wrap"><table><thead><tr><th>Customer</th><th>Product</th><th>Rating</th><th>Review</th><th>Action</th></tr></thead><tbody>${reviews.map(item => `<tr><td>${esc(item.name)}</td><td>${esc(products().find(product => product.id === item.productId)?.name || 'Removed item')}</td><td>★ ${item.rating}</td><td>${esc(item.text)}</td><td><button class="text-button" data-action="delete-review" data-id="${item.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`;
}
function adminSettings() {
  const config = settings();
  return `<form id="settings-form" class="form-grid settings-grid"><div class="field"><label>Store name</label><input name="name" value="${esc(config.name)}" required></div><div class="field"><label>Store email</label><input name="email" type="email" value="${esc(config.email)}"></div><div class="field"><label>Phone</label><input name="phone" value="${esc(config.phone)}"></div><div class="field"><label>WhatsApp</label><input name="whatsapp" value="${esc(config.whatsapp)}"></div><div class="field"><label>Delivery fee (₦)</label><input name="deliveryFee" type="number" min="0" value="${config.deliveryFee}"></div><div class="field"><label>Currency</label><select name="currency"><option value="NGN" ${config.currency === 'NGN' ? 'selected' : ''}>NGN · ₦ Nigerian naira</option><option value="USD" ${config.currency === 'USD' ? 'selected' : ''}>USD · $ US dollar</option><option value="GBP" ${config.currency === 'GBP' ? 'selected' : ''}>GBP · £ Pound sterling</option></select></div><div class="field"><label>Instagram</label><input name="instagram" value="${esc(config.instagram)}"></div><div class="field"><label>Store description</label><input name="description" value="${esc(config.description)}"></div><div class="field full"><button class="button">Save settings ↗</button></div></form><div style="margin-top:30px"><h3 class="admin-table-title">Local data backup</h3><p class="page-subtitle">Export this browser’s store data or restore a JSON backup.</p><button class="button outline small" data-action="export-data">↓ Export data</button> <label class="button outline small" for="restore-data">↑ Restore data</label><input id="restore-data" type="file" accept="application/json" hidden></div>`;
}
function adminView() {
  if (!read(DB.admin, false)) return adminLogin();
  const tabs = [['overview', 'Overview'], ['products', 'Products'], ['orders', 'Orders'], ['users', 'Customers'], ['categories', 'Categories'], ['reviews', 'Reviews'], ['coupons', 'Coupons'], ['notifications', 'Notifications'], ['settings', 'Settings']];
  const orders = read(DB.orders, []).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  let content = '';
  if (state.adminTab === 'overview') content = `${adminStats()}<h2 class="admin-table-title">Latest orders</h2>${orderTable(orders.slice(0, 8), true)}`;
  if (state.adminTab === 'products') content = adminProducts();
  if (state.adminTab === 'orders') content = orderTable(orders, true);
  if (state.adminTab === 'users') content = adminUsers();
  if (state.adminTab === 'categories') content = adminCategories();
  if (state.adminTab === 'reviews') content = adminReviews();
  if (state.adminTab === 'coupons') content = adminCoupons();
  if (state.adminTab === 'notifications') content = `<h2 class="admin-table-title">Store notifications</h2>${notificationPanel(read(DB.notifications, []).filter(item => item.userId === 'admin'), 'admin')}`;
  if (state.adminTab === 'settings') content = adminSettings();
  return `<section class="page-wrap admin-layout"><div class="admin-topline"><div><span class="eyebrow">Store studio</span><h1 class="page-title">${esc(settings().name)} admin</h1></div><div class="admin-top-actions"><button class="button outline small" data-action="export-data">↓ Backup</button><button class="button small" data-action="admin-logout">Sign out</button></div></div><nav class="admin-tabs">${tabs.map(([id, label]) => `<button class="${state.adminTab === id ? 'active' : ''}" data-admin-tab="${id}">${label}</button>`).join('')}</nav>${content}</section>`;
}
function render() {
  updateHeader();
  const app = $('#app');
  if (state.orderConfirmation) app.innerHTML = confirmationView(state.orderConfirmation);
  else app.innerHTML = state.route === 'shop' ? shopView() : state.route === 'cart' ? cartView() : state.route === 'wishlist' ? wishlistView() : state.route === 'checkout' ? checkoutView() : state.route === 'account' ? accountView() : adminView();
  document.title = state.route === 'admin' ? 'Studio · Morrow Market' : `${state.route[0].toUpperCase() + state.route.slice(1)} · Morrow Market`;
}
function formData(form) { return Object.fromEntries(new FormData(form).entries()); }
function openModal(content) {
  $('#modal-root').innerHTML = `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true">${content}<button class="modal-close" data-action="close-modal" aria-label="Close dialog">×</button></section></div>`;
}
function closeModal() { $('#modal-root').innerHTML = ''; }
function productModal(id) {
  const item = products().find(product => product.id === id); if (!item) return;
  const reviews = read(DB.reviews, []).filter(review => review.productId === id);
  openModal(`<div class="modal-product"><img src="${esc(item.image)}" alt="${esc(item.name)}"><div><span class="product-category">${esc(item.category)} · ★ ${Number(item.rating).toFixed(1)}</span><h2>${esc(item.name)}</h2><p class="product-price">${money(item.price)} ${item.oldPrice ? `<span class="old-price">${money(item.oldPrice)}</span>` : ''}</p><p>${esc(item.description)}</p><p>${item.stock} available</p><p style="white-space:pre-line">${esc(item.specifications || '')}</p><div class="modal-actions"><button class="button" data-action="quick-add" data-id="${item.id}">Add to bag ↗</button><button class="button outline" data-action="wishlist" data-id="${item.id}">♡ Save</button></div><button class="text-button" data-action="open-review" data-id="${item.id}">Write a review</button><h3 class="form-section-title" style="margin-top:18px">Reviews (${reviews.length})</h3>${reviews.slice(0, 3).map(review => `<p><strong>${esc(review.name)} · ★ ${review.rating}</strong><br>${esc(review.text)}</p>`).join('') || '<p>No reviews yet. Be the first to share your thoughts.</p>'}</div></div>`);
}
function productForm(product = null) {
  const item = product || { name: '', category: read(DB.categories, [])[0] || 'Home', price: '', oldPrice: '', stock: 0, sku: '', featured: false, bestseller: false, description: '', image: '', specifications: '' };
  openModal(`<h2 class="form-section-title">${product ? 'Edit product' : 'Add a product'}</h2><form id="product-form"><input type="hidden" name="id" value="${esc(item.id || '')}"><input type="hidden" name="image" value="${esc(item.image)}"><div class="form-grid"><div class="field"><label>Name</label><input name="name" required value="${esc(item.name)}"></div><div class="field"><label>Category</label><select name="category">${read(DB.categories, []).map(category => `<option ${item.category === category ? 'selected' : ''}>${esc(category)}</option>`).join('')}</select></div><div class="field"><label>Price</label><input name="price" type="number" min="0" required value="${item.price}"></div><div class="field"><label>Old price</label><input name="oldPrice" type="number" min="0" value="${item.oldPrice || ''}"></div><div class="field"><label>Stock</label><input name="stock" type="number" min="0" required value="${item.stock}"></div><div class="field"><label>SKU</label><input name="sku" value="${esc(item.sku)}"></div><div class="field full"><label for="product-image-file">Product image</label><div class="image-upload-control"><img id="product-image-preview" src="${esc(item.image)}" alt="${item.image ? `Current image for ${esc(item.name)}` : 'No product image selected'}" ${item.image ? '' : 'hidden'}><div class="image-upload-input"><input id="product-image-file" name="imageFile" type="file" accept="image/*" ${product ? '' : 'required'}><small id="image-upload-note">${product ? 'Choose a new image to replace the current one. The image is stored in this browser.' : 'Choose an image from your device. It is stored in this browser.'}</small></div></div></div><div class="field full"><label>Description</label><textarea name="description" required>${esc(item.description)}</textarea></div><div class="field full"><label>Specifications</label><textarea name="specifications">${esc(item.specifications || '')}</textarea></div><label class="radio-option"><input type="checkbox" name="featured" ${item.featured ? 'checked' : ''}> Featured</label><label class="radio-option"><input type="checkbox" name="bestseller" ${item.bestseller ? 'checked' : ''}> Best seller</label><div class="field full"><button class="button">Save product ↗</button></div></div></form>`);
}
function prepareProductImage(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) { reject(new Error('Choose an image file.')); return; }
    const objectUrl = URL.createObjectURL(file);
    const preview = new Image();
    preview.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const maxDimension = 1400;
      const scale = Math.min(1, maxDimension / Math.max(preview.naturalWidth, preview.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(preview.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(preview.naturalHeight * scale));
      const context = canvas.getContext('2d');
      if (!context) { reject(new Error('This image could not be processed in your browser.')); return; }
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(preview, 0, 0, canvas.width, canvas.height);
      let quality = 0.84;
      const encode = () => {
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        if (dataUrl.length <= 1_800_000) { resolve(dataUrl); return; }
        if (quality > 0.5) { quality -= 0.1; encode(); return; }
        reject(new Error('Image is too large for browser storage. Choose a smaller image.'));
      };
      encode();
    };
    preview.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('That image could not be opened.')); };
    preview.src = objectUrl;
  });
}
function announce(userId, title, message) {
  const notifications = read(DB.notifications, []);
  notifications.unshift({ id: `n-${Date.now()}`, userId, title, message, createdAt: new Date().toISOString(), read: false });
  write(DB.notifications, notifications);
}
function placeOrder(form) {
  const data = formData(form), lines = cartLines(), sum = totals();
  const unavailable = lines.find(line => line.quantity > line.product.stock);
  if (!lines.length || unavailable) { toast(unavailable ? `${unavailable.product.name} no longer has enough stock.` : 'Your bag is empty.'); return; }
  const order = { id: `ORD-${Date.now().toString().slice(-8)}`, userId: user().id, customer: { name: data.name, email: data.email, phone: data.phone }, shipping: { name: data.name, phone: data.phone, address: data.address, city: data.city, state: data.state }, items: lines.map(line => ({ productId: line.product.id, name: line.product.name, image: line.product.image, price: line.product.price, quantity: line.quantity })), subtotal: sum.subtotal, discount: sum.discount, delivery: sum.delivery, total: sum.total, payment: data.payment, status: 'Pending', createdAt: new Date().toISOString() };
  const orders = read(DB.orders, []); orders.unshift(order); write(DB.orders, orders);
  write(DB.products, products().map(product => { const line = lines.find(item => item.product.id === product.id); return line ? { ...product, stock: product.stock - line.quantity } : product; }));
  saveCart({}); state.coupon = ''; state.orderConfirmation = order;
  announce('admin', 'New order received', `${order.id} from ${order.customer.name}`);
  render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}
function viewOrder(id) {
  const order = read(DB.orders, []).find(item => item.id === id); if (!order) return;
  const admin = Boolean(read(DB.admin, false));
  openModal(`<span class="eyebrow">${esc(order.id)}</span><h2 class="form-section-title">Order details</h2><p class="page-subtitle">${new Date(order.createdAt).toLocaleString('en-NG')} · <span class="status ${statusClass(order.status)}">${esc(order.status)}</span></p><div class="table-wrap"><table><thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead><tbody>${order.items.map(item => `<tr><td>${esc(item.name)}</td><td>${item.quantity}</td><td>${money(item.price * item.quantity)}</td></tr>`).join('')}</tbody></table></div><div class="summary-line"><span>Subtotal</span><span>${money(order.subtotal)}</span></div><div class="summary-line"><span>Delivery</span><span>${money(order.delivery)}</span></div><div class="summary-line total"><span>Total · ${esc(order.payment)}</span><span>${money(order.total)}</span></div><p class="summary-note">Deliver to ${esc(order.shipping.address)}, ${esc(order.shipping.city)}, ${esc(order.shipping.state)}.</p>${admin ? `<label class="field" style="margin-top:15px">Update status<select class="control-select" id="order-status" data-id="${esc(order.id)}">${['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map(status => `<option ${status === order.status ? 'selected' : ''}>${status}</option>`).join('')}</select></label><button class="text-button" data-action="delete-order" data-id="${esc(order.id)}">Delete order</button>` : `<button class="button outline small" style="margin-top:13px" data-action="print-order" data-id="${esc(order.id)}">Print receipt</button>`}`);
}
function printOrder(id) {
  const order = read(DB.orders, []).find(item => item.id === id); if (!order) return;
  const popup = window.open('', '_blank', 'width=700,height=800');
  if (!popup) { toast('Allow pop-ups to print your receipt.'); return; }
  popup.document.write(`<title>Receipt ${esc(order.id)}</title><style>body{font:14px Arial;max-width:650px;margin:40px auto;color:#222}h1{font-family:Georgia}table{width:100%;border-collapse:collapse;margin:25px 0}td,th{text-align:left;padding:10px;border-bottom:1px solid #ddd}</style><h1>Morrow Market</h1><p>Order ${esc(order.id)} · ${new Date(order.createdAt).toLocaleDateString()}</p><p>${esc(order.customer.name)} · ${esc(order.shipping.address)}, ${esc(order.shipping.city)}</p><table><thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead><tbody>${order.items.map(item => `<tr><td>${esc(item.name)}</td><td>${item.quantity}</td><td>${money(item.price * item.quantity)}</td></tr>`).join('')}</tbody></table><p>Total <strong>${money(order.total)}</strong> · ${esc(order.status)}</p>`);
  popup.document.close(); popup.print();
}
function exportData() {
  const bundle = {};
  Object.values(DB).filter(key => ![DB.currentUser, DB.admin].includes(key)).forEach(key => { bundle[key] = read(key, null); });
  const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `morrow-backup-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(link.href);
}
function restoreData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const bundle = JSON.parse(reader.result);
      Object.entries(bundle).forEach(([key, value]) => { if (Object.values(DB).includes(key) && ![DB.currentUser, DB.admin].includes(key)) write(key, value); });
      render(); toast('Store data restored.');
    } catch { toast('That backup file is not valid JSON.'); }
  };
  reader.readAsText(file);
}
function handleAction(action, target) {
  const id = target.dataset.id;
  if (action === 'quick-add') { addToCart(id); if ($('#modal-root').innerHTML) closeModal(); }
  if (action === 'wishlist') toggleWishlist(id);
  if (action === 'product-detail') productModal(id);
  if (action === 'remove-cart') { const next = { ...cart() }; delete next[id]; saveCart(next); render(); }
  if (action === 'quantity') {
    const next = { ...cart() }, product = products().find(item => item.id === id);
    next[id] = (next[id] || 0) + Number(target.dataset.delta);
    if (next[id] <= 0) delete next[id];
    else if (next[id] > product.stock) { next[id] = product.stock; toast('That is all the available stock.'); }
    saveCart(next); render();
  }
  if (action === 'clear-cart') { saveCart({}); render(); }
  if (action === 'apply-coupon') {
    const code = $('#coupon-code')?.value.trim() || '';
    if (totals(code).discount > 0) { state.coupon = code; toast('Coupon applied.'); }
    else { state.coupon = ''; toast('Coupon is invalid, expired, or below its minimum order.'); }
    render();
  }
  if (action === 'checkout') go('checkout');
  if (action === 'checkout-auth') go('account');
  if (action === 'close-modal') closeModal();
  if (action === 'new-product') productForm();
  if (action === 'edit-product') productForm(products().find(item => item.id === id));
  if (action === 'delete-product' && confirm('Delete this product?')) { write(DB.products, products().filter(item => item.id !== id)); render(); toast('Product deleted.'); }
  if (action === 'view-order') viewOrder(id);
  if (action === 'print-order') printOrder(id);
  if (action === 'delete-order' && confirm('Delete this order?')) { write(DB.orders, read(DB.orders, []).filter(item => item.id !== id)); closeModal(); render(); }
  if (action === 'admin-logout') { remove(DB.admin); state.adminTab = 'login'; render(); }
  if (action === 'logout') { remove(DB.currentUser); render(); toast('Signed out.'); }
  if (action === 'toggle-user') { write(DB.users, read(DB.users, []).map(item => item.id === id ? { ...item, disabled: !item.disabled } : item)); render(); }
  if (action === 'delete-user' && confirm('Delete this customer account?')) { write(DB.users, read(DB.users, []).filter(item => item.id !== id)); render(); }
  if (action === 'rename-category') {
    const name = prompt('Category name', id);
    if (name?.trim() && name.trim() !== id) { write(DB.categories, read(DB.categories, []).map(item => item === id ? name.trim() : item)); write(DB.products, products().map(item => item.category === id ? { ...item, category: name.trim() } : item)); render(); }
  }
  if (action === 'delete-category') {
    if (products().some(item => item.category === id)) toast('Move or remove products in this category first.');
    else if (confirm(`Delete ${id}?`)) { write(DB.categories, read(DB.categories, []).filter(item => item !== id)); render(); }
  }
  if (action === 'delete-review') { write(DB.reviews, read(DB.reviews, []).filter(item => item.id !== id)); render(); }
  if (action === 'toggle-coupon') { write(DB.coupons, read(DB.coupons, []).map(item => item.id === id ? { ...item, active: !item.active } : item)); render(); }
  if (action === 'export-data') exportData();
  if (action === 'mark-notifications-read') {
    write(DB.notifications, read(DB.notifications, []).map(item => item.userId === target.dataset.audience ? { ...item, read: true } : item));
    render();
  }
  if (action === 'open-review') {
    if (!user()) { closeModal(); go('account'); toast('Sign in to leave a review.'); return; }
    openModal(`<h2 class="form-section-title">Share a thought</h2><form id="review-form"><input type="hidden" name="productId" value="${esc(id)}"><div class="field"><label>Rating</label><select name="rating"><option value="5">5 · Loved it</option><option value="4">4 · Really good</option><option value="3">3 · Just right</option><option value="2">2 · Could be better</option><option value="1">1 · Not for me</option></select></div><div class="field" style="margin-top:12px"><label>Your review</label><textarea name="text" required minlength="5"></textarea></div><button class="button" style="margin-top:14px">Post review ↗</button></form>`);
  }
  if (action === 'clear-filters') { state.category = 'All'; state.query = ''; state.maxPrice = ''; render(); }
}

document.addEventListener('click', event => {
  const route = event.target.closest('[data-route]');
  if (route) { event.preventDefault(); go(route.dataset.route); return; }
  const category = event.target.closest('[data-category]');
  if (category) { state.category = category.dataset.category; state.query = ''; if (state.route !== 'shop') go('shop'); else render(); $('#collection')?.scrollIntoView({ behavior: 'smooth' }); return; }
  const accountTab = event.target.closest('[data-account-tab]');
  if (accountTab) { state.accountTab = accountTab.dataset.accountTab; render(); return; }
  const adminTab = event.target.closest('[data-admin-tab]');
  if (adminTab) { state.adminTab = adminTab.dataset.adminTab; render(); return; }
  const scroll = event.target.closest('[data-scroll]');
  if (scroll) { document.getElementById(scroll.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }); return; }
  const action = event.target.closest('[data-action]');
  if (action) handleAction(action.dataset.action, action);
});

document.addEventListener('change', event => {
  if (event.target.id === 'product-image-file' && event.target.files[0]) {
    const file = event.target.files[0], preview = $('#product-image-preview'), note = $('#image-upload-note');
    if (!file.type.startsWith('image/')) { event.target.value = ''; toast('Choose an image file.'); return; }
    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
    preview.alt = `Selected image: ${file.name}`;
    note.textContent = `${file.name} · ${(file.size / 1024).toFixed(0)} KB before browser optimization`;
  }
  if (event.target.id === 'sort-select') { state.sort = event.target.value; render(); }
  if (event.target.id === 'max-price') { state.maxPrice = event.target.value; render(); }
  if (event.target.id === 'order-status') {
    const orders = read(DB.orders, []).map(item => item.id === event.target.dataset.id ? { ...item, status: event.target.value } : item);
    const order = orders.find(item => item.id === event.target.dataset.id); write(DB.orders, orders);
    announce(order.userId, 'Order update', `Your order status is now ${event.target.value}.`); closeModal(); render(); toast('Order status updated.');
  }
  if (event.target.id === 'restore-data' && event.target.files[0]) restoreData(event.target.files[0]);
  if (event.target.id === 'admin-product-search') {
    const query = event.target.value.toLowerCase();
    $$('.table-wrap tbody tr').forEach(row => row.classList.toggle('hidden', !row.textContent.toLowerCase().includes(query)));
  }
});

document.addEventListener('submit', async event => {
  const form = event.target, formId = form.getAttribute('id'); event.preventDefault();
  if (formId === 'search-form') { state.query = $('#site-search').value.trim(); state.category = 'All'; go('shop'); $('#collection')?.scrollIntoView({ behavior: 'smooth' }); }
  if (formId === 'login-form') {
    const data = formData(form), passwordHash = await passwordDigest(data.password), accounts = read(DB.users, []);
    const account = accounts.find(item => item.email.toLowerCase() === data.email.toLowerCase() && (item.passwordHash === passwordHash || item.password === data.password) && !item.disabled);
    if (!account) { toast('Email or password does not match an active account.'); return; }
    if (account.password) {
      const upgraded = { ...account, passwordHash };
      delete upgraded.password;
      write(DB.users, accounts.map(item => item.id === account.id ? upgraded : item));
    }
    write(DB.currentUser, { id: account.id, name: account.name, email: account.email, phone: account.phone || '' });
    migrateGuestData(account.id);
    render(); toast(`Welcome back, ${account.name.split(' ')[0]}.`);
  }
  if (formId === 'register-form') {
    const data = formData(form), accounts = read(DB.users, []);
    if (accounts.some(item => item.email.toLowerCase() === data.email.toLowerCase())) { toast('An account already exists with that email.'); return; }
    const account = { id: `u-${Date.now()}`, name: data.name.trim(), email: data.email.trim(), passwordHash: await passwordDigest(data.password), phone: '', createdAt: new Date().toISOString(), disabled: false };
    accounts.push(account); write(DB.users, accounts); write(DB.currentUser, { id: account.id, name: account.name, email: account.email, phone: '' }); migrateGuestData(account.id); render(); toast('Your account is ready. Welcome to Morrow.');
  }
  if (formId === 'admin-login-form') {
    const data = formData(form);
    if (data.email === 'admin@morrowmarket.ng' && data.password === 'morrow-demo') { write(DB.admin, true); state.adminTab = 'overview'; render(); toast('Welcome to the store studio.'); }
    else toast('Admin email or password is incorrect.');
  }
  if (formId === 'checkout-form') placeOrder(form);
  if (formId === 'profile-form') {
    const data = formData(form), accounts = read(DB.users, []);
    if (accounts.some(item => item.id !== user().id && item.email.toLowerCase() === data.email.toLowerCase())) { toast('That email address is already in use.'); return; }
    write(DB.users, accounts.map(item => item.id === user().id ? { ...item, ...data } : item)); write(DB.currentUser, { ...user(), ...data }); render(); toast('Your details have been saved.');
  }
  if (formId === 'product-form') {
    const data = formData(form), all = products(), existing = all.find(item => item.id === data.id), imageFile = form.elements.imageFile.files[0];
    try {
      if (imageFile) data.image = await prepareProductImage(imageFile);
      if (!data.image) { toast('Choose a product image from your device.'); return; }
      const item = { ...(existing || {}), id: data.id || `p-${Date.now()}`, name: data.name.trim(), category: data.category, price: Number(data.price), oldPrice: Number(data.oldPrice) || 0, stock: Number(data.stock), sku: data.sku.trim(), rating: existing?.rating || 5, featured: form.elements.featured.checked, bestseller: form.elements.bestseller.checked, description: data.description.trim(), image: data.image, specifications: data.specifications.trim(), createdAt: existing?.createdAt || new Date().toISOString().slice(0, 10) };
      write(DB.products, existing ? all.map(product => product.id === item.id ? item : product) : [item, ...all]); closeModal(); render(); toast('Product saved in this browser.');
    } catch (error) {
      toast(error.name === 'QuotaExceededError' ? 'Browser storage is full. Remove some product images or use smaller images.' : error.message || 'Unable to save this image.');
    }
  }
  if (formId === 'category-form') {
    const name = formData(form).name.trim(), all = read(DB.categories, []);
    if (all.some(item => item.toLowerCase() === name.toLowerCase())) { toast('That category already exists.'); return; }
    write(DB.categories, [...all, name]); render(); toast('Category added.');
  }
  if (formId === 'coupon-form') {
    const data = formData(form), all = read(DB.coupons, []);
    if (all.some(item => item.code.toLowerCase() === data.code.trim().toLowerCase())) { toast('That code already exists.'); return; }
    all.push({ id: `c-${Date.now()}`, code: data.code.trim().toUpperCase(), type: data.type, value: Number(data.value), minOrder: Number(data.minOrder) || 0, expires: data.expires, active: true }); write(DB.coupons, all); render(); toast('Coupon created.');
  }
  if (formId === 'settings-form') { const data = formData(form); write(DB.settings, { ...settings(), ...data, deliveryFee: Number(data.deliveryFee) || 0 }); render(); toast('Store settings saved.'); }
  if (formId === 'review-form') {
    const data = formData(form), all = read(DB.reviews, []), item = products().find(product => product.id === data.productId);
    all.unshift({ id: `r-${Date.now()}`, productId: data.productId, userId: user().id, name: user().name, rating: Number(data.rating), text: data.text.trim(), createdAt: new Date().toISOString() }); write(DB.reviews, all);
    const reviews = all.filter(review => review.productId === data.productId);
    write(DB.products, products().map(product => product.id === data.productId ? { ...product, rating: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length } : product));
    closeModal(); if (item) productModal(item.id); toast('Review posted.');
  }
});

document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
window.addEventListener('hashchange', syncRoute);
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); state.installPrompt = event; $('#install-button').hidden = false; });
$('#install-button').addEventListener('click', async () => {
  if (!state.installPrompt) return;
  state.installPrompt.prompt(); await state.installPrompt.userChoice; state.installPrompt = null; $('#install-button').hidden = true;
});
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(error => console.warn('Service worker registration failed:', error)));
}
const storedProducts = read(DB.products, seedProducts);
const storedProductIds = new Set(storedProducts.map(product => product.id));
const newSeedProducts = seedProducts.filter(product => !storedProductIds.has(product.id));
const correctedProducts = storedProducts.map(product => {
  if (product.id === 'p114' && product.image.includes('photo-1586350977771-b3b0aaa502e6')) return { ...product, image: image('photo-1618354691229-88d47f285158') };
  if (product.id === 'p115' && product.image.includes('photo-1506629905607-d9a8d7f4d0a8')) return { ...product, image: image('photo-1529139574466-a303027c1d8b') };
  return product;
});
if (newSeedProducts.length || correctedProducts.some((product, index) => product !== storedProducts[index])) {
  write(DB.products, [...correctedProducts, ...newSeedProducts]);
}
ensure(DB.categories, ['Home', 'Wear', 'Objects', 'Wellness']);
ensure(DB.users, []); ensure(DB.orders, []); ensure(DB.carts, {}); ensure(DB.wishlists, {});
ensure(DB.reviews, []); ensure(DB.coupons, [{ id: 'welcome', code: 'WELCOME10', type: 'percent', value: 10, minOrder: 30000, expires: '2026-12-31', active: true }]);
ensure(DB.notifications, []); ensure(DB.settings, defaultSettings);
if ($('#year')) $('#year').textContent = new Date().getFullYear();
syncRoute();
