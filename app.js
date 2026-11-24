const { createApp } = Vue;

const SECRET_ADMIN = {
  name: 'Kiên Khánh Duy',
  username: 'khanhduyadmin',
  email: 'khanhduytv3011@gmail.com',
  phone: '0348914077',
  address: 'Khu vực ĐBSCL - Vĩnh Long',
  password: '11111111',
  role: 'admin',
  locked: false
};

const INITIAL_CUSTOMERS = [
  { name: 'Trương Thế Cường', username: 'thecuong', email: 'thecuong.tv@gmail.com', phone: '0912345101', address: 'Hưng Mỹ, TP. Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Nguyễn Phương Quỳnh', username: 'phuongquynh', email: 'phuongquynh.vl@gmail.com', phone: '0912345102', address: 'Hưng Mỹ, TP. Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Đoàn Thị Như Phương', username: 'nhuphuong', email: 'nhuphuong.tv@gmail.com', phone: '0912345103', address: 'Hưng Mỹ, Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Cao Ngọc Phương Anh', username: 'phuonganh', email: 'phuonganh.bt@gmail.com', phone: '0912345104', address: 'Cầu Kè, Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Nguyễn Vũ Mai Phương', username: 'maiphuong', email: 'maiphuong.ct@gmail.com', phone: '0912345105', address: 'Ninh Kiều, Cần Thơ', password: 'User@123', role: 'customer', locked: false },
  { name: 'Lâm Hoàng Khang', username: 'hoangkhang', email: 'hoangkhang@gmail.com', phone: '0939112206', address: 'Bình Minh, Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Võ Ngọc Minh Thư', username: 'minhthu', email: 'minhthu@gmail.com', phone: '0939112207', address: 'Châu Thành, Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Huỳnh Tấn Phát', username: 'tanphat', email: 'tanphat@gmail.com', phone: '0939112208', address: 'TP. Sóc Trăng', password: 'User@123', role: 'customer', locked: false },
  { name: 'Bùi Thảo Vy', username: 'thaovy', email: 'thaovy@gmail.com', phone: '0939112209', address: 'Tam Bình, Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Đặng Quốc Huy', username: 'quochuy', email: 'quochuy@gmail.com', phone: '0939112210', address: 'Chợ Lách, Bến Tre', password: 'User@123', role: 'customer', locked: false },
  { name: 'Phan Thanh Trúc', username: 'thanhtruc', email: 'thanhtruc@gmail.com', phone: '0939112211', address: 'Trà Cú, Vĩnh Long', password: 'User@123', role: 'customer', locked: false },
  { name: 'Trịnh Gia Bảo', username: 'giabao', email: 'giabao@gmail.com', phone: '0939112212', address: 'Long Hồ, Vĩnh Long', password: 'User@123', role: 'customer', locked: false }
];

const DEFAULT_SUPPLIERS = [
  { id: 'NCC01', name: 'HTX Nông Sản Xanh Trà Vinh', phone: '02943855123', location: 'Châu Thành - Trà Vinh', mainCrop: 'Dưa hấu lưới, Rau cải hữu cơ' },
  { id: 'NCC02', name: 'Nhà Vườn Sinh Thái Vĩnh Long', phone: '02703822456', location: 'Bình Minh - Vĩnh Long', mainCrop: 'Thanh trà ngọt, Nấm bào ngư' },
  { id: 'NCC03', name: 'Nông Trại Cầu Đất Đà Lạt', phone: '02633888999', location: 'Đà Lạt - Lâm Đồng', mainCrop: 'Rau củ ôn đới, Nấm đùi gà' },
  { id: 'NCC04', name: 'HTX Trái Cây Đặc Sản Cái Mơn', phone: '02753777111', location: 'Chợ Lách - Bến Tre', mainCrop: 'Bưởi da xanh, Xoài Cát Hòa Lộc' }
];

const DEFAULT_LOGS = [
  {
    id: 'PK88201', time: '10/11/2026, 07:00:00', type: 'IMPORT',
    productName: 'Dưa Hấu Lưới Hoàng Kim', unit: 'kg', qtyChange: 50, newStock: 45,
    totalCost: 1500000, supplier: 'HTX Nông Sản Xanh Trà Vinh',
    note: 'Nhập lô dưa lưới VietGAP thu hoạch sáng sớm', actor: 'Kiên Khánh Duy'
  },
  {
    id: 'PK88202', time: '11/11/2026, 07:30:00', type: 'IMPORT',
    productName: 'Thanh Trà Ngọt Vĩnh Long', unit: 'kg', qtyChange: 45, newStock: 40,
    totalCost: 1575000, supplier: 'Nhà Vườn Sinh Thái Vĩnh Long',
    note: 'Nhập thanh trà chín cây đầu mùa', actor: 'Kiên Khánh Duy'
  },
  {
    id: 'PK88205', time: '12/11/2026, 09:15:00', type: 'EXPORT',
    productName: 'Dừa Sáp Cầu Kè Loại 1', unit: 'trái', qtyChange: -2, newStock: 18,
    totalCost: 270000, supplier: 'Cao Ngọc Phương Anh',
    note: 'Xuất bán theo đơn #DH100104', actor: 'Hệ thống'
  },
  {
    id: 'PK88206', time: '14/11/2026, 10:20:00', type: 'EXPORT',
    productName: 'Sầu Riêng Ri6 Cái Mơn', unit: 'kg', qtyChange: -3, newStock: 20,
    totalCost: 345000, supplier: 'Đặng Quốc Huy',
    note: 'Xuất bán theo đơn #DH100110', actor: 'Hệ thống'
  }
];

const INITIAL_ORDERS = [
  {
    id: 'DH100101', userId: 'thecuong',
    customer: { name: 'Trương Thế Cường', phone: '0912345101', address: 'Hưng Mỹ, TP. Vĩnh Long', payment: 'COD', note: 'Giao giờ hành chính giúp mình' },
    items: [{ id: 1, name: 'Dưa Hấu Lưới Hoàng Kim', price: 45000, unit: 'kg', quantity: 4, image: 'https://tse3.mm.bing.net/th/id/OIP.geZuar83XzfBOWf-653TQQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }],
    freeGift: null, shippingFee: 0, total: 180000, status: 'Hoàn thành', createdAt: '10/11/2026, 08:30:00'
  },
  {
    id: 'DH100102', userId: 'phuongquynh',
    customer: { name: 'Nguyễn Phương Quỳnh', phone: '0912345102', address: 'Hưng Mỹ, TP. Vĩnh Long', payment: 'BANK', note: 'Chọn xoài chín ngọt đều nhé shop' },
    items: [{ id: 4, name: 'Xoài Cát Hòa Lộc', price: 65000, unit: 'kg', quantity: 3, image: 'https://tse4.mm.bing.net/th/id/OIP.rSKXx7QHAKQpq9VuPgoZlgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }],
    freeGift: null, shippingFee: 0, total: 195000, status: 'Hoàn thành', createdAt: '11/11/2026, 09:15:00'
  },
  {
    id: 'DH100103', userId: 'nhuphuong',
    customer: { name: 'Đoàn Thị Như Phương', phone: '0912345103', address: 'Hưng Mỹ, Vĩnh Long', payment: 'COD', note: 'Thanh trà đóng hộp cẩn thận giúp mình' },
    items: [{ id: 24, name: 'Thanh Trà Ngọt Vĩnh Long', price: 50000, unit: 'kg', quantity: 3, image: 'https://media.vietravel.com/images/Content/mua-thanh-tra-dac-san-vinh-long-3.png' }],
    freeGift: null, shippingFee: 0, total: 150000, status: 'Hoàn thành', createdAt: '11/11/2026, 14:20:00'
  },
  {
    id: 'DH100104', userId: 'phuonganh',
    customer: { name: 'Cao Ngọc Phương Anh', phone: '0912345104', address: 'Cầu Kè, Vĩnh Long', payment: 'BANK', note: 'Chọn trái dừa sáp dày cơm làm quà biếu' },
    items: [{ id: 27, name: 'Dừa Sáp Cầu Kè Loại 1', price: 135000, unit: 'trái', quantity: 2, image: 'https://ik.imagekit.io/tvlk/blog/2024/10/dua-sap-4-1024x682.jpeg?tr=q-70,c-at_max,w-500,h-300,dpr-2' }],
    freeGift: null, shippingFee: 0, total: 270000, status: 'Hoàn thành', createdAt: '12/11/2026, 09:15:00'
  },
  {
    id: 'DH100105', userId: 'maiphuong',
    customer: { name: 'Nguyễn Vũ Mai Phương', phone: '0912345105', address: 'Ninh Kiều, Cần Thơ', payment: 'COD', note: 'Giao buổi sáng trước 11h' },
    items: [{ id: 11, name: 'Bưởi Da Xanh Ruột Hồng', price: 55000, unit: 'kg', quantity: 4, image: 'https://tse1.mm.bing.net/th/id/OIP.iByFF4Vnl0SloZVqoSwi3wHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }],
    freeGift: null, shippingFee: 0, total: 220000, status: 'Hoàn thành', createdAt: '12/11/2026, 16:05:00'
  },
  {
    id: 'DH100106', userId: 'hoangkhang',
    customer: { name: 'Lâm Hoàng Khang', phone: '0939112206', address: 'Bình Minh, Vĩnh Long', payment: 'COD', note: 'Rau cần tây tươi để ép nước' },
    items: [{ id: 2, name: 'Rau Cần Tây Organic', price: 28000, unit: 'bó 500g', quantity: 5, image: 'https://sieuthivivo.com/wp-content/uploads/2020/11/can-tay-organic.jpg' }],
    freeGift: null, shippingFee: 15000, total: 155000, status: 'Hoàn thành', createdAt: '13/11/2026, 07:45:00'
  },
  {
    id: 'DH100107', userId: 'minhthu',
    customer: { name: 'Võ Ngọc Minh Thư', phone: '0939112207', address: 'Châu Thành, Vĩnh Long', payment: 'COD', note: 'Nấm tươi nấu lẩu chay' },
    items: [{ id: 10, name: 'Nấm Bào Ngư Xám Tươi', price: 30000, unit: 'túi 300g', quantity: 5, image: 'https://namduoclinhchi.com/wp-content/uploads/2021/02/nam-bao-ngu-nhat-3-2048x2048.jpg' }],
    freeGift: null, shippingFee: 0, total: 150000, status: 'Hoàn thành', createdAt: '13/11/2026, 10:30:00'
  },
  {
    id: 'DH100108', userId: 'tanphat',
    customer: { name: 'Huỳnh Tấn Phát', phone: '0939112208', address: 'TP. Sóc Trăng', payment: 'BANK', note: 'Đặt 2 túi gạo ST25 cho gia đình' },
    items: [{ id: 43, name: 'Gạo ST25 Đặc Sản Sóc Trăng', price: 185000, unit: 'túi 5kg', quantity: 2, image: 'https://product.hstatic.net/1000141988/product/gao_st25_soc_trang_-_tui_5kg_dc3f41b72ebd44bd893555adf14f092e_master.png' }],
    freeGift: '01 Bó Hành Lá & Ngò Rí Hữu Cơ', shippingFee: 0, total: 370000, status: 'Hoàn thành', createdAt: '13/11/2026, 15:10:00'
  },
  {
    id: 'DH100109', userId: 'thaovy',
    customer: { name: 'Bùi Thảo Vy', phone: '0939112209', address: 'Tam Bình, Vĩnh Long', payment: 'COD', note: 'Cà chua cherry làm salad' },
    items: [{ id: 9, name: 'Cà Chua Cherry Đà Lạt', price: 35000, unit: 'hộp 500g', quantity: 4, image: 'https://farm24h.vn/wp-content/uploads/2020/03/CACHUACHERRYVANG-1-1.jpg' }],
    freeGift: null, shippingFee: 15000, total: 155000, status: 'Hoàn thành', createdAt: '14/11/2026, 08:20:00'
  },
  {
    id: 'DH100110', userId: 'quochuy',
    customer: { name: 'Đặng Quốc Huy', phone: '0939112210', address: 'Chợ Lách, Bến Tre', payment: 'BANK', note: 'Khui sẵn múi đóng hộp kín giúp mình' },
    items: [{ id: 31, name: 'Sầu Riêng Ri6 Cái Mơn', price: 115000, unit: 'kg', quantity: 3, image: 'https://trangtop.com/wp-content/uploads/2023/05/vuon-sau-rieng-can-tho-2.jpg' }],
    freeGift: '01 Bó Hành Lá & Ngò Rí Hữu Cơ', shippingFee: 0, total: 345000, status: 'Đang giao', createdAt: '14/11/2026, 10:20:00'
  },
  {
    id: 'DH100111', userId: 'thanhtruc',
    customer: { name: 'Phan Thanh Trúc', phone: '0939112211', address: 'Trà Cú, Vĩnh Long', payment: 'COD', note: 'Giao nhanh trong buổi chiều nhé' },
    items: [{ id: 18, name: 'Nấm Mối Đen', price: 110000, unit: 'túi 300g', quantity: 2, image: 'https://th.bing.com/th/id/OIP.KSiSfM_ZGensb-P6DPJjUgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' }],
    freeGift: null, shippingFee: 0, total: 220000, status: 'Đang đóng gói', createdAt: '14/11/2026, 13:50:00'
  },
  {
    id: 'DH100112', userId: 'giabao',
    customer: { name: 'Trịnh Gia Bảo', phone: '0939112212', address: 'Long Hồ, Vĩnh Long', payment: 'COD', note: 'Chọn cam mọng nước vắt cho bé uống' },
    items: [{ id: 25, name: 'Cam Sành Tam Bình', price: 20000, unit: 'kg', quantity: 8, image: 'https://product.hstatic.net/1000288770/product/trai_cam_sanh_tam_binh_tuoi_nguyen_trai_-_kg_1_e378feee01e14319a613e1039a362166_master.jpg' }],
    freeGift: null, shippingFee: 0, total: 160000, status: 'Chờ xử lý', createdAt: '14/11/2026, 16:40:00'
  }
];

const DEFAULT_REVIEWS = [
  { id: 101, productId: 1, username: 'thecuong', userName: 'Trương Thế Cường', rating: 5, comment: 'Dưa lưới Trà Vinh vỏ mỏng, ruột vàng giòn ngọt lắm, đóng gói rất kỹ!', date: '10/11/2026', verified: true },
  { id: 102, productId: 4, username: 'phuongquynh', userName: 'Nguyễn Phương Quỳnh', rating: 5, comment: 'Xoài Cát Hòa Lộc chín thơm lừng, thịt dày ngọt đậm không chút xơ nào.', date: '11/11/2026', verified: true },
  { id: 103, productId: 24, username: 'nhuphuong', userName: 'Đoàn Thị Như Phương', rating: 5, comment: 'Thanh trà ngọt Vĩnh Long trái tươi rói, vị chua ngọt thanh mát đúng chuẩn.', date: '11/11/2026', verified: true },
  { id: 104, productId: 27, username: 'phuonganh', userName: 'Cao Ngọc Phương Anh', rating: 5, comment: 'Dừa sáp Cầu Kè cơm dày dẻo quánh, dầm sữa đá cả nhà mình ai cũng thích!', date: '12/11/2026', verified: true },
  { id: 105, productId: 11, username: 'maiphuong', userName: 'Nguyễn Vũ Mai Phương', rating: 5, comment: 'Bưởi da xanh ruột hồng mọng nước, ngọt thanh không bị the đắng, rất đáng tiền.', date: '12/11/2026', verified: true },
  { id: 106, productId: 2, username: 'hoangkhang', userName: 'Lâm Hoàng Khang', rating: 5, comment: 'Cần tây Organic tươi non mọng nước, mua về ép nước uống mỗi sáng rất yên tâm.', date: '13/11/2026', verified: true },
  { id: 107, productId: 10, username: 'minhthu', userName: 'Võ Ngọc Minh Thư', rating: 5, comment: 'Nấm bào ngư xám thu hoạch trong ngày nên tai nấm trắng sạch, xào ngọt tự nhiên.', date: '13/11/2026', verified: true },
  { id: 108, productId: 43, username: 'tanphat', userName: 'Huỳnh Tấn Phát', rating: 5, comment: 'Gạo ST25 Sóc Trăng nấu lên dẻo mềm, thơm mùi lá dứa khắp cả gian bếp.', date: '13/11/2026', verified: true },
  { id: 109, productId: 9, username: 'thaovy', userName: 'Bùi Thảo Vy', rating: 4, comment: 'Cà chua cherry giòn ngọt, trái đều đẹp, trộn salad ăn cực kỳ bắt miệng.', date: '14/11/2026', verified: true },
  { id: 110, productId: 31, username: 'quochuy', userName: 'Đặng Quốc Huy', rating: 5, comment: 'Sầu riêng Ri6 Cái Mơn cơm vàng hạt lép, béo ngậy thơm nức mũi.', date: '14/11/2026', verified: true },
  { id: 111, productId: 18, username: 'thanhtruc', userName: 'Phan Thanh Trúc', rating: 5, comment: 'Nấm mối đen giòn sần sật, nấu cháo hay xào tỏi đều ngon xuất sắc.', date: '14/11/2026', verified: true },
  { id: 112, productId: 25, username: 'giabao', userName: 'Trịnh Gia Bảo', rating: 5, comment: 'Cam sành Tam Bình vỏ mỏng nhiều nước, vắt nước uống giải nhiệt quá tuyệt.', date: '14/11/2026', verified: true }
];

createApp({
  data() {
    return {
      viewMode: 'store',
      allProducts: [],
      categories: ['Tất cả', 'Trái cây', 'Rau củ', 'Nông sản khô', 'Nấm tươi'],
      selectedCategory: 'Tất cả',
      priceFilter: 'all',
      searchKeyword: '',
      sortBy: 'default',
      cart: JSON.parse(localStorage.getItem('cart_huongsac')) || [],
      selectedProduct: null,
      detailQuantity: 1,
      detailTab: 'passport',
      flashSaleDiscount: 25,
      flashSaleDuration: 600,
      flashSaleRemaining: 600,
      flashSaleRound: 1,
      flashSaleIds: [1, 10, 24, 27],
      timerInterval: null,
      selectedBudget: 150000,
      budgetOptions: [
        { limit: 100000, label: 'Bữa ăn 1 - 2 người' },
        { limit: 150000, label: 'Gia đình 3 - 4 người (Freeship)' },
        { limit: 300000, label: 'Đầy đủ cả tuần (+Tặng quà)' }
      ],
      budgetCombo: [],
      realOrderNotificationVisible: false,
      latestRealOrderAlert: null,
      contactMessages: JSON.parse(localStorage.getItem('messages_huongsac')) || [],
      contactForm: { name: '', contact: '', message: '' },
      reviews: [],
      reviewForm: { reviewerName: '', rating: 5, comment: '' },
      users: [],
      currentUser: JSON.parse(localStorage.getItem('currentUser_huongsac')) || null,
      authTab: 'login',
      authError: '',
      showPassword: false,
      loginForm: { username: '', password: '' },
      registerForm: { name: '', username: '', phone: '', email: '', address: '', password: '', confirmPassword: '' },
      profileForm: { name: '', phone: '', email: '', address: '', newPassword: '' },
      suppliers: [],
      supplierForm: { name: '', phone: '', location: '', mainCrop: '' },
      supplyLogs: [],
      supplyForm: { mode: 'IMPORT', productId: 1, supplier: 'HTX Nông Sản Xanh Trà Vinh', quantity: 25, importCost: 28000, note: '' },
      orders: [],
      adminTab: 'dashboard',
      adminSearch: '',
      adminCategoryFilter: 'Tất cả',
      stockFilter: 'all',
      showProductForm: false,
      isEditingProduct: false,
      productForm: {
        id: null, name: '', category: 'Trái cây', supplier: 'HTX Nông Sản Xanh Trà Vinh',
        costPrice: 20000, price: 30000, unit: 'kg', stock: 50, origin: '', badge: 'VietGAP', image: '', description: '', storage: ''
      },
      printData: null,
      checkoutForm: { name: '', phone: '', address: '', payment: 'COD', note: '' },
      toastMessage: ''
    };
  },
  computed: {
    isAdmin() {
      return Boolean(this.currentUser && this.currentUser.role === 'admin');
    },
    unreadMessagesCount() {
      return this.contactMessages.filter(m => m.status === 'Chưa đọc').length;
    },
    filteredProducts() {
      let keyword = this.searchKeyword.toLowerCase().trim();
      let result = this.allProducts.filter(item => {
        let matchCategory = (this.selectedCategory === 'Tất cả') || (item.category === this.selectedCategory);
        let matchKeyword = !keyword ||
                           item.name.toLowerCase().includes(keyword) ||
                           item.origin.toLowerCase().includes(keyword) ||
                           item.description.toLowerCase().includes(keyword) ||
                           item.badge.toLowerCase().includes(keyword) ||
                           (item.supplier && item.supplier.toLowerCase().includes(keyword));
        let effPrice = this.getEffectivePrice(item);
        let matchPrice = true;
        if (this.priceFilter === 'under30') matchPrice = effPrice < 30000;
        else if (this.priceFilter === '30to60') matchPrice = effPrice >= 30000 && effPrice <= 60000;
        else if (this.priceFilter === 'over60') matchPrice = effPrice > 60000;

        return matchCategory && matchKeyword && matchPrice;
      });

      if (this.sortBy === 'price-asc') result.sort((a, b) => this.getEffectivePrice(a) - this.getEffectivePrice(b));
      else if (this.sortBy === 'price-desc') result.sort((a, b) => this.getEffectivePrice(b) - this.getEffectivePrice(a));
      else if (this.sortBy === 'stock-desc') result.sort((a, b) => b.stock - a.stock);

      return result;
    },
    flashSaleProducts() {
      return this.allProducts.filter(p => this.flashSaleIds.includes(p.id));
    },
    formattedCountdown() {
      const hrs = String(Math.floor(this.flashSaleRemaining / 3600)).padStart(2, '0');
      const mins = String(Math.floor((this.flashSaleRemaining % 3600) / 60)).padStart(2, '0');
      const secs = String(this.flashSaleRemaining % 60).padStart(2, '0');
      return { hours: hrs, minutes: mins, seconds: secs };
    },
    flashSaleTimePercent() {
      return Math.round((this.flashSaleRemaining / this.flashSaleDuration) * 100);
    },
    budgetComboTotal() {
      return this.budgetCombo.reduce((sum, item) => sum + this.getEffectivePrice(item), 0);
    },
    cartNutritionSummary() {
      let totalKcal = 0;
      let vitaminSet = new Set();
      this.cart.forEach(item => {
        const p = this.allProducts.find(prod => prod.id === item.id) || item;
        const info = this.getNutritionInfo(p);
        totalKcal += info.kcal * item.quantity;
        vitaminSet.add(info.vitamin);
      });
      const servings = Math.max(1, Math.round(totalKcal / 450));
      return {
        totalKcal: totalKcal.toLocaleString('vi-VN'),
        servings: servings,
        vitamins: Array.from(vitaminSet).slice(0, 3).join(', ') || 'Chất xơ & Khoáng chất'
      };
    },
    totalCartItems() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalCartPrice() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    shippingFee() {
      if (this.cart.length === 0 || this.totalCartPrice >= 150000) return 0;
      return 15000;
    },
    finalCheckoutPrice() {
      return this.totalCartPrice + this.shippingFee;
    },
    bankQrUrl() {
      const amount = this.finalCheckoutPrice;
      const info = encodeURIComponent(`HUONGSAC ${this.checkoutForm.phone || 'THANHTOAN'}`);
      return `https://img.vietqr.io/image/MB-0348914077-compact2.png?amount=${amount}&addInfo=${info}&accountName=KIEN%20KHANH%20DUY`;
    },
    adminFilteredProducts() {
      let kw = this.adminSearch.toLowerCase().trim();
      return this.allProducts.filter(p => {
        let matchKw = !kw || p.name.toLowerCase().includes(kw) || p.origin.toLowerCase().includes(kw) || (p.supplier && p.supplier.toLowerCase().includes(kw));
        let matchCat = (this.adminCategoryFilter === 'Tất cả') || (p.category === this.adminCategoryFilter);
        let matchStock = true;
        if (this.stockFilter === 'ok') matchStock = p.stock > 10;
        else if (this.stockFilter === 'low') matchStock = p.stock > 0 && p.stock <= 10;
        else if (this.stockFilter === 'out') matchStock = p.stock <= 0;
        return matchKw && matchCat && matchStock;
      });
    },
    lowStockProducts() {
      return this.allProducts.filter(item => item.stock <= 10);
    },
    totalInventoryCount() {
      return this.allProducts.reduce((sum, item) => sum + (Number(item.stock) || 0), 0);
    },
    totalInventoryValue() {
      return this.allProducts.reduce((sum, item) => sum + ((Number(item.stock) || 0) * item.price), 0);
    },
    totalInventoryCost() {
      return this.allProducts.reduce((sum, item) => sum + ((Number(item.stock) || 0) * (item.costPrice || Math.round(item.price * 0.7))), 0);
    },
    lowStockCount() {
      return this.allProducts.filter(item => item.stock <= 10).length;
    },
    outOfStockCount() {
      return this.allProducts.filter(item => item.stock <= 0).length;
    },
    pendingOrdersCount() {
      return this.orders.filter(o => o.status === 'Chờ xử lý').length;
    },
    totalRevenue() {
      return this.orders.filter(o => o.status !== 'Đã hủy').reduce((sum, o) => sum + o.total, 0);
    },
    estimatedProfit() {
      return Math.round(this.totalRevenue * 0.3);
    },
    userOrders() {
      if (!this.currentUser) return [];
      return this.orders.filter(o => o.userId === this.currentUser.username);
    },
    categoryStats() {
      const cats = ['Trái cây', 'Rau củ', 'Nông sản khô', 'Nấm tươi'];
      const totalStock = this.totalInventoryCount || 1;
      return cats.map(c => {
        const items = this.allProducts.filter(p => p.category === c);
        const stock = items.reduce((s, i) => s + (Number(i.stock) || 0), 0);
        const value = items.reduce((s, i) => s + ((Number(i.stock) || 0) * i.price), 0);
        return {
          category: c,
          count: items.length,
          stock: stock,
          value: value,
          percent: Math.round((stock / totalStock) * 100)
        };
      });
    }
  },
  methods: {
    initSystemData() {
      let savedUsers = JSON.parse(localStorage.getItem('users_huongsac')) || [];
      savedUsers = savedUsers.filter(u => u.username !== 'khachhang' && u.username !== 'admin' && u.username !== 'khanhduy');

      const adminIdx = savedUsers.findIndex(u => u.username === SECRET_ADMIN.username);
      if (adminIdx === -1) {
        savedUsers.unshift(SECRET_ADMIN);
      } else {
        savedUsers[adminIdx] = { ...SECRET_ADMIN };
      }

      INITIAL_CUSTOMERS.forEach(cust => {
        const idx = savedUsers.findIndex(u => u.username === cust.username);
        if (idx === -1) {
          savedUsers.push(cust);
        } else {
          savedUsers[idx].address = cust.address;
        }
      });

      localStorage.setItem('users_huongsac', JSON.stringify(savedUsers));
      this.users = savedUsers;

      if (this.currentUser && (this.currentUser.username === 'khachhang' || this.currentUser.username === 'admin' || this.currentUser.username === 'khanhduy')) {
        this.currentUser = null;
        localStorage.removeItem('currentUser_huongsac');
      }

      if (this.isAdmin && this.cart.length > 0) {
        this.cart = [];
        this.saveCart();
      }

      let savedSuppliers = JSON.parse(localStorage.getItem('suppliers_huongsac'));
      if (!savedSuppliers || savedSuppliers.length === 0) {
        savedSuppliers = DEFAULT_SUPPLIERS;
        localStorage.setItem('suppliers_huongsac', JSON.stringify(savedSuppliers));
      }
      this.suppliers = savedSuppliers;

      let savedLogs = JSON.parse(localStorage.getItem('supplyLogs_huongsac'));
      if (!savedLogs || savedLogs.length < 4) {
        savedLogs = DEFAULT_LOGS;
        localStorage.setItem('supplyLogs_huongsac', JSON.stringify(savedLogs));
      }
      this.supplyLogs = savedLogs;

      let savedOrders = JSON.parse(localStorage.getItem('orders_huongsac')) || [];
      savedOrders = savedOrders.filter(o => o.id !== 'DH901234' && o.userId !== 'khachhang');

      INITIAL_ORDERS.forEach(initOrd => {
        if (!savedOrders.some(o => o.id === initOrd.id)) {
          savedOrders.push(initOrd);
        }
      });

      localStorage.setItem('orders_huongsac', JSON.stringify(savedOrders));
      this.orders = savedOrders;

      let savedReviews = JSON.parse(localStorage.getItem('reviews_huongsac')) || [];
      const hasUpdatedReviews = savedReviews.some(r => r.userName === 'Trương Thế Cường');
      if (!hasUpdatedReviews) {
        savedReviews = DEFAULT_REVIEWS;
        localStorage.setItem('reviews_huongsac', JSON.stringify(savedReviews));
      }
      this.reviews = savedReviews;

      if (this.currentUser && !this.isAdmin) this.prefillCheckout();
    },
    loadProducts() {
      const savedProducts = JSON.parse(localStorage.getItem('products_huongsac'));
      if (savedProducts && savedProducts.length >= 50) {
        this.allProducts = savedProducts;
        this.generateBudgetCombo();
      } else {
        this.fetchFromJsonFile();
      }
    },
    async fetchFromJsonFile() {
      const paths = ['data/products.json', 'dataj/products.json', 'products.json'];
      for (const path of paths) {
        try {
          const res = await fetch(path);
          if (!res.ok) continue;
          const rawText = await res.text();
          const cleanText = rawText.replace(/\u00A0/g, ' ').trim();
          const data = JSON.parse(cleanText);
          if (Array.isArray(data) && data.length > 0) {
            this.allProducts = data.map(item => ({
              ...item,
              category: item.category === 'Rau c cú' ? 'Rau củ' : item.category,
              stock: item.stock !== undefined ? item.stock : 40,
              costPrice: item.costPrice || Math.round(item.price * 0.7),
              supplier: item.supplier || this.guessSupplier(item.origin)
            }));
            this.saveProductsToStorage();
            this.generateBudgetCombo();
            return;
          }
        } catch (err) {
          console.warn('Thử đường dẫn tiếp theo:', path);
        }
      }
    },
    guessSupplier(origin) {
      if (origin.includes('Trà Vinh')) return 'HTX Nông Sản Xanh Trà Vinh';
      if (origin.includes('Vĩnh Long')) return 'Nhà Vườn Sinh Thái Vĩnh Long';
      if (origin.includes('Đà Lạt') || origin.includes('Lâm Đồng')) return 'Nông Trại Cầu Đất Đà Lạt';
      return 'HTX Trái Cây Đặc Sản Cái Mơn';
    },
    saveProductsToStorage() {
      localStorage.setItem('products_huongsac', JSON.stringify(this.allProducts));
    },
    startFlashSaleTimer() {
      const savedState = JSON.parse(localStorage.getItem('flashSaleState_huongsac'));
      const now = Math.floor(Date.now() / 1000);

      if (savedState && savedState.endTime > now && savedState.ids && savedState.ids.length === 4) {
        this.flashSaleIds = savedState.ids;
        this.flashSaleRound = savedState.round || 1;
        this.flashSaleRemaining = savedState.endTime - now;
      } else {
        this.saveFlashSaleState();
      }

      if (this.timerInterval) clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        if (this.flashSaleRemaining > 1) {
          this.flashSaleRemaining--;
        } else {
          this.autoRotateFlashSale();
        }
      }, 1000);
    },
    autoRotateFlashSale() {
      const available = this.allProducts.filter(p => p.stock > 0 && !this.flashSaleIds.includes(p.id));
      const pool = available.length >= 4 ? available : this.allProducts.filter(p => p.stock > 0);
      if (pool.length >= 4) {
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        this.flashSaleIds = shuffled.slice(0, 4).map(p => p.id);
      }
      this.flashSaleRemaining = this.flashSaleDuration;
      this.flashSaleRound++;
      this.saveFlashSaleState();
      this.syncCartPricesWithSale();
      this.showToast(`Đã hết phiên Sale cũ! Hệ thống tự động mở Phiên Sale #${this.flashSaleRound} với 4 nông sản mới!`);
    },
    saveFlashSaleState() {
      const endTime = Math.floor(Date.now() / 1000) + this.flashSaleRemaining;
      localStorage.setItem('flashSaleState_huongsac', JSON.stringify({
        ids: this.flashSaleIds,
        round: this.flashSaleRound,
        endTime: endTime
      }));
    },
    syncCartPricesWithSale() {
      this.cart.forEach(cartItem => {
        const prod = this.allProducts.find(p => p.id === cartItem.id);
        if (prod) {
          cartItem.price = this.getEffectivePrice(prod);
          cartItem.isSale = this.isProductOnSale(prod.id);
        }
      });
      this.saveCart();
    },
    isProductOnSale(productId) {
      return this.flashSaleIds.includes(productId);
    },
    getEffectivePrice(product) {
      if (!product) return 0;
      if (this.isProductOnSale(product.id)) {
        return Math.round((product.price * (100 - this.flashSaleDiscount)) / 1000) * 10;
      }
      return product.price;
    },
    selectBudgetTier(limit) {
      this.selectedBudget = limit;
      this.generateBudgetCombo();
    },
    shuffleBudgetCombo() {
      this.generateBudgetCombo();
      this.showToast('Đã phối lại thực đơn đi chợ mới theo ngân sách!');
    },
    generateBudgetCombo() {
      const inStock = this.allProducts.filter(p => p.stock > 0);
      if (inStock.length === 0) return;

      const veggies = inStock.filter(p => p.category === 'Rau củ').sort(() => 0.5 - Math.random());
      const mushrooms = inStock.filter(p => p.category === 'Nấm tươi').sort(() => 0.5 - Math.random());
      const fruits = inStock.filter(p => p.category === 'Trái cây').sort(() => 0.5 - Math.random());
      const dry = inStock.filter(p => p.category === 'Nông sản khô').sort(() => 0.5 - Math.random());

      let picked = [];
      let runningTotal = 0;

      const tryPick = (list) => {
        for (let item of list) {
          const price = this.getEffectivePrice(item);
          if (!picked.some(p => p.id === item.id) && (runningTotal + price <= this.selectedBudget)) {
            picked.push(item);
            runningTotal += price;
            return true;
          }
        }
        return false;
      };

      tryPick(veggies);
      tryPick(mushrooms);
      tryPick(fruits);
      if (this.selectedBudget >= 150000) tryPick(veggies);
      if (this.selectedBudget >= 250000) tryPick(dry);

      const remainingPool = [...inStock].sort(() => 0.5 - Math.random());
      for (let item of remainingPool) {
        if (picked.length >= 6) break;
        const price = this.getEffectivePrice(item);
        if (!picked.some(p => p.id === item.id) && (runningTotal + price <= this.selectedBudget)) {
          picked.push(item);
          runningTotal += price;
        }
      }

      this.budgetCombo = picked;
    },
    addBudgetComboToCart() {
      if (this.isAdmin) {
        this.showToast('Tài khoản Admin chỉ dùng để quản lý hệ thống, không thể mua hàng!');
        return;
      }
      if (this.budgetCombo.length === 0) return;
      this.budgetCombo.forEach(item => {
        this.addToCart(item, 1, true);
      });
      this.showToast(`Đã thêm trọn bộ ${this.budgetCombo.length} món từ Trợ lý Đi chợ vào giỏ hàng!`);
    },
    getCulinaryTips(product) {
      if (!product) return { prep: '', secret: '', dishes: [] };
      if (product.category === 'Rau củ') {
        return {
          prep: `Ngâm ${product.name} trong nước muối loãng 5-7 phút rồi rửa dưới vòi nước chảy nhẹ. Không nên cắt nhỏ trước khi rửa để tránh thất thoát Vitamin C và khoáng chất.`,
          secret: 'Khi luộc hoặc xào, thêm 1 chút muối và mở vung để rau giữ màu xanh ngọc bắt mắt và độ giòn tự nhiên.',
          dishes: [
            `${product.name} xào tỏi Lý Sơn / sốt dầu hào thanh đạm`,
            `Salad ${product.name} trộn dầu mè hoặc nấu canh tôm tươi miền Tây`,
            `Ép nước Detox thanh lọc cơ thể hoặc nhúng lẩu nấm`
          ]
        };
      }
      if (product.category === 'Nấm tươi') {
        return {
          prep: `Dùng dao cắt nhẹ phần gốc, chỉ rửa nhanh ${product.name} qua nước muối loãng trong 30 giây và để ráo. Tuyệt đối không ngâm nấm lâu trong nước vì nấm sẽ hút nước và mất độ ngọt dai.`,
          secret: 'Xé nấm theo chiều dọc bằng tay thay vì cắt dao sẽ giúp sợi nấm thấm gia vị đậm đà hơn.',
          dishes: [
            `Lẩu nấm tươi thập cẩm thanh ngọt chuẩn vị chay/mặn`,
            `${product.name} xào bơ tỏi hoặc kho tiêu xanh đậm đà`,
            `Nấm tẩm bột chiên giòn hoặc nướng giấy bạc sốt tiêu đen`
          ]
        };
      }
      if (product.category === 'Trái cây') {
        return {
          prep: `Rửa sạch vỏ ngoài của ${product.name}, ướp mát trong ngăn mát tủ lạnh khoảng 1-2 giờ trước khi thưởng thức để vị ngọt thanh và độ giòn đạt mức ngon nhất.`,
          secret: 'Không bọc kín bằng túi nilon khi trái còn ướt để giữ độ tươi lâu gấp đôi.',
          dishes: [
            `Thưởng thức tươi trực tiếp tráng miệng sau bữa ăn gia đình`,
            `Làm sinh tố đá xay, dầm sữa chua hoặc trà trái cây nhiệt đới`,
            `Đóng giỏ quà biếu sức khỏe sang trọng chuẩn đặc sản miền Tây`
          ]
        };
      }
      return {
        prep: `Bảo quản ${product.name} trong hũ kín nơi khô thoáng. Với các loại hạt/gạo, vo nhẹ tay để giữ trọn lớp cám giàu Vitamin nhóm B.`,
        secret: 'Rang sơ hoặc ngâm nước ấm 15 phút trước khi nấu giúp hạt mềm dẻo và dậy mùi thơm.',
        dishes: [
          `Nấu cơm thực dưỡng, nấu chè dưỡng nhan hoặc súp bổ dưỡng`,
          `Làm sữa hạt nguyên chất giàu dinh dưỡng cho buổi sáng`,
          `Dùng làm món ăn vặt lành mạnh hoặc gia vị tăng hương vị món chính`
        ]
      };
    },
    triggerRealOrderNotification(order) {
      if (!order || !order.items || order.items.length === 0) return;
      const firstItem = order.items[0];
      const prod = this.allProducts.find(p => p.id === firstItem.id) || firstItem;
      this.latestRealOrderAlert = {
        orderId: order.id,
        customerName: order.customer.name,
        address: order.customer.address,
        product: prod,
        qty: firstItem.quantity,
        time: 'Vừa đặt thành công'
      };
      this.realOrderNotificationVisible = true;
      setTimeout(() => {
        this.realOrderNotificationVisible = false;
      }, 8000);
    },
    getProductQrUrl(product) {
      const text = encodeURIComponent(`HUONGSAC-VIETGAP|SP:${product.name}|XUATXU:${product.origin}|NCC:${product.supplier}`);
      return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    },
    getNutritionInfo(product) {
      if (!product) return { kcal: 300, vitamin: 'Vitamin C' };
      if (product.category === 'Trái cây') return { kcal: 420, vitamin: 'Vitamin C & A' };
      if (product.category === 'Rau củ') return { kcal: 190, vitamin: 'Chất xơ & Folate' };
      if (product.category === 'Nấm tươi') return { kcal: 240, vitamin: 'Đạm thực vật & Vitamin D' };
      return { kcal: 1450, vitamin: 'Omega & Tinh bột tốt' };
    },
    getProductReviews(productId) {
      return this.reviews.filter(r => r.productId === productId);
    },
    getAverageRating(productId) {
      const list = this.getProductReviews(productId);
      if (list.length === 0) return '5.0';
      const avg = list.reduce((sum, r) => sum + r.rating, 0) / list.length;
      return avg.toFixed(1);
    },
    getReviewCount(productId) {
      return this.getProductReviews(productId).length;
    },
    submitReview() {
      if (!this.selectedProduct) return;
      const name = this.currentUser ? this.currentUser.name : this.reviewForm.reviewerName.trim();
      const uname = this.currentUser ? this.currentUser.username : name.toLowerCase().replace(/\s+/g, '');
      if (!name || !this.reviewForm.comment.trim()) return;

      const existingReview = this.reviews.find(r =>
        (r.username && r.username.toLowerCase() === uname.toLowerCase()) ||
        r.userName.toLowerCase() === name.toLowerCase()
      );

      if (existingReview) {
        const reviewedProd = this.allProducts.find(p => p.id === existingReview.productId);
        alert(`Tài khoản "${name}" đã đánh giá sản phẩm "${reviewedProd ? reviewedProd.name : '#' + existingReview.productId}". Mỗi khách hàng chỉ được đánh giá 1 sản phẩm duy nhất!`);
        return;
      }

      const hasBought = this.currentUser && this.orders.some(o =>
        o.userId === this.currentUser.username && o.items.some(i => i.id === this.selectedProduct.id)
      );

      const newRev = {
        id: Date.now(),
        productId: this.selectedProduct.id,
        username: uname,
        userName: name,
        rating: this.reviewForm.rating,
        comment: this.reviewForm.comment.trim(),
        date: new Date().toLocaleDateString('vi-VN'),
        verified: Boolean(hasBought)
      };

      if (!this.users.some(u => u.username.toLowerCase() === uname.toLowerCase())) {
        const autoAccount = {
          name: name,
          username: uname,
          email: `${uname}@gmail.com`,
          phone: '0900000000',
          address: 'Khách hàng đánh giá trên web',
          password: 'User@123',
          role: 'customer',
          locked: false
        };
        this.users.push(autoAccount);
        localStorage.setItem('users_huongsac', JSON.stringify(this.users));
      }

      this.reviews.unshift(newRev);
      localStorage.setItem('reviews_huongsac', JSON.stringify(this.reviews));
      this.reviewForm = { reviewerName: '', rating: 5, comment: '' };
      this.showToast('Cảm ơn bạn đã gửi đánh giá sản phẩm!');
    },
    openReviewFromOrder(productId) {
      const prod = this.allProducts.find(p => p.id === productId);
      if (!prod) return;
      const myOrdersModal = bootstrap.Modal.getInstance(document.getElementById('myOrdersModal'));
      if (myOrdersModal) myOrdersModal.hide();
      this.openProductDetail(prod, 'reviews');
    },
    reorderOldOrder(order) {
      if (this.isAdmin) return;
      let addedCount = 0;
      order.items.forEach(oldItem => {
        const currentProd = this.allProducts.find(p => p.id === oldItem.id);
        if (currentProd && currentProd.stock > 0) {
          const qtyToBuy = Math.min(oldItem.quantity, currentProd.stock);
          this.addToCart(currentProd, qtyToBuy, true);
          addedCount++;
        }
      });
      const myOrdersModal = bootstrap.Modal.getInstance(document.getElementById('myOrdersModal'));
      if (myOrdersModal) myOrdersModal.hide();

      if (addedCount > 0) {
        this.showToast(`Đã thêm lại ${addedCount} sản phẩm từ đơn #${order.id} vào giỏ hàng!`);
        new bootstrap.Modal(document.getElementById('cartModal')).show();
      } else {
        this.showToast('Các sản phẩm trong đơn cũ hiện đã tạm hết hàng!');
      }
    },
    addSupplyLog(type, product, qtyChange, supplier, note, totalCost = 0) {
      const log = {
        id: 'PK' + Math.floor(10000 + Math.random() * 90000),
        time: new Date().toLocaleString('vi-VN'),
        type: type,
        productName: product.name,
        unit: product.unit,
        qtyChange: qtyChange,
        newStock: product.stock,
        totalCost: totalCost,
        supplier: supplier || product.supplier || 'Kho Cửa hàng',
        note: note || '',
        actor: this.currentUser ? this.currentUser.name : 'Hệ thống'
      };
      this.supplyLogs.unshift(log);
      localStorage.setItem('supplyLogs_huongsac', JSON.stringify(this.supplyLogs));
    },
    resetDefaultData() {
      if (confirm('Khôi phục dữ liệu Sản phẩm, Nhà vườn, Tài khoản, Đơn đặt hàng và Đánh giá về mặc định ban đầu?')) {
        localStorage.removeItem('products_huongsac');
        localStorage.removeItem('suppliers_huongsac');
        localStorage.removeItem('supplyLogs_huongsac');
        localStorage.removeItem('users_huongsac');
        localStorage.removeItem('orders_huongsac');
        localStorage.removeItem('reviews_huongsac');
        this.initSystemData();
        this.fetchFromJsonFile();
        this.showToast('Đã khôi phục toàn bộ dữ liệu mặc định thành công!');
      }
    },
    formatPrice(price) {
      return Number(price || 0).toLocaleString('vi-VN') + ' đ';
    },
    resetFilters() {
      this.selectedCategory = 'Tất cả';
      this.priceFilter = 'all';
      this.searchKeyword = '';
      this.sortBy = 'default';
    },
    openProductDetail(product, defaultTab = 'passport') {
      this.selectedProduct = product;
      this.detailQuantity = 1;
      this.detailTab = defaultTab;
      new bootstrap.Modal(document.getElementById('productDetailModal')).show();
    },
    editProductFromStore(product) {
      this.viewMode = 'admin';
      this.adminTab = 'inventory';
      this.openProductForm(product);
    },
    addToCartFromModal() {
      if (this.selectedProduct) {
        this.addToCart(this.selectedProduct, this.detailQuantity);
        const modal = bootstrap.Modal.getInstance(document.getElementById('productDetailModal'));
        if (modal) modal.hide();
      }
    },
    addToCart(product, quantity = 1, silent = false) {
      if (this.isAdmin) {
        if (!silent) this.showToast('Tài khoản Admin chỉ dùng để quản lý web, không thể mua hàng!');
        return;
      }

      const currentProduct = this.allProducts.find(p => p.id === product.id);
      if (!currentProduct || currentProduct.stock <= 0) {
        if (!silent) this.showToast('Sản phẩm này hiện đã hết hàng!');
        return;
      }
      let cartItem = this.cart.find(item => item.id === product.id);
      let currentQty = cartItem ? cartItem.quantity : 0;

      if (currentQty + quantity > currentProduct.stock) {
        if (!silent) this.showToast(`Kho chỉ còn ${currentProduct.stock} ${currentProduct.unit} "${currentProduct.name}"!`);
        return;
      }

      const effectivePrice = this.getEffectivePrice(product);
      const onSale = this.isProductOnSale(product.id);

      if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.price = effectivePrice;
        cartItem.isSale = onSale;
      } else {
        this.cart.push({
          id: product.id, name: product.name, price: effectivePrice,
          image: product.image, unit: product.unit, quantity: quantity, isSale: onSale
        });
      }
      this.saveCart();
      if (!silent) {
        this.showToast(`Đã thêm ${quantity} ${product.unit} "${product.name}" vào giỏ!`);
      }
    },
    changeQuantity(productId, delta) {
      let cartItem = this.cart.find(item => item.id === productId);
      let productInStock = this.allProducts.find(p => p.id === productId);
      if (cartItem) {
        if (delta > 0 && productInStock && cartItem.quantity + delta > productInStock.stock) {
          this.showToast(`Tồn kho tối đa là ${productInStock.stock} ${productInStock.unit}!`);
          return;
        }
        cartItem.quantity += delta;
        if (cartItem.quantity <= 0) {
          this.removeFromCart(productId);
          return;
        }
      }
      this.saveCart();
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
      this.saveCart();
    },
    clearCart() {
      if (confirm('Xóa toàn bộ sản phẩm trong giỏ hàng?')) {
        this.cart = [];
        this.saveCart();
      }
    },
    saveCart() {
      localStorage.setItem('cart_huongsac', JSON.stringify(this.cart));
    },
    handleCheckout() {
      if (this.isAdmin) {
        alert('Tài khoản Admin không thể đặt mua hàng!');
        return;
      }
      if (this.cart.length === 0) return;

      const phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(this.checkoutForm.phone.trim())) {
        alert('Vui lòng nhập số điện thoại hợp lệ gồm 10 chữ số (bắt đầu bằng số 0)!');
        return;
      }

      for (let item of this.cart) {
        let p = this.allProducts.find(prod => prod.id === item.id);
        if (!p || p.stock < item.quantity) {
          alert(`Sản phẩm "${item.name}" không đủ số lượng tồn kho!`);
          return;
        }
      }

      const orderId = 'DH' + Math.floor(100000 + Math.random() * 900000);

      this.cart.forEach(item => {
        let p = this.allProducts.find(prod => prod.id === item.id);
        if (p) {
          p.stock -= item.quantity;
          this.addSupplyLog('EXPORT', p, -item.quantity, this.checkoutForm.name, `Xuất bán đơn #${orderId}`, item.price * item.quantity);
        }
      });
      this.saveProductsToStorage();

      const newOrder = {
        id: orderId,
        userId: this.currentUser ? this.currentUser.username : 'guest',
        customer: { ...this.checkoutForm },
        items: JSON.parse(JSON.stringify(this.cart)),
        freeGift: this.totalCartPrice >= 300000 ? '01 Bó Hành Lá & Ngò Rí Hữu Cơ' : null,
        shippingFee: this.shippingFee,
        total: this.finalCheckoutPrice,
        status: 'Chờ xử lý',
        createdAt: new Date().toLocaleString('vi-VN')
      };

      this.orders.unshift(newOrder);
      localStorage.setItem('orders_huongsac', JSON.stringify(this.orders));

      this.triggerRealOrderNotification(newOrder);

      this.showToast(`Đặt hàng thành công! Mã đơn: #${newOrder.id}`);
      this.cart = [];
      this.saveCart();

      const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
      if (modal) modal.hide();
    },
    openAuthModal(tab) {
      this.authTab = tab;
      this.authError = '';
    },
    handleLogin() {
      this.authError = '';
      const inputUser = this.loginForm.username.trim().toLowerCase();
      const pw = this.loginForm.password;

      const found = this.users.find(u =>
        (u.username.toLowerCase() === inputUser || (u.email && u.email.toLowerCase() === inputUser)) &&
        u.password === pw
      );

      if (!found) {
        this.authError = 'Tên đăng nhập hoặc mật khẩu không chính xác!';
        return;
      }
      if (found.locked) {
        this.authError = 'Tài khoản này hiện đang bị khóa bởi Quản trị viên!';
        return;
      }

      this.currentUser = found;
      localStorage.setItem('currentUser_huongsac', JSON.stringify(found));

      if (found.role === 'admin') {
        this.cart = [];
        this.saveCart();
        this.viewMode = 'admin';
      } else {
        this.prefillCheckout();
      }

      this.loginForm = { username: '', password: '' };

      const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
      if (modal) modal.hide();

      this.showToast(`Đăng nhập thành công! Xin chào ${found.name}.`);
    },
    handleRegister() {
      this.authError = '';
      const phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(this.registerForm.phone.trim())) {
        this.authError = 'Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng số 0!';
        return;
      }
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        this.authError = 'Mật khẩu xác nhận không khớp!';
        return;
      }
      const username = this.registerForm.username.trim();
      if (this.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        this.authError = 'Tên đăng nhập này đã được sử dụng, vui lòng chọn tên khác!';
        return;
      }

      const newUser = {
        name: this.registerForm.name.trim(),
        username: username,
        phone: this.registerForm.phone.trim(),
        email: this.registerForm.email.trim(),
        address: this.registerForm.address.trim(),
        password: this.registerForm.password,
        role: 'customer',
        locked: false
      };

      this.users.push(newUser);
      localStorage.setItem('users_huongsac', JSON.stringify(this.users));

      this.currentUser = newUser;
      localStorage.setItem('currentUser_huongsac', JSON.stringify(newUser));
      this.prefillCheckout();
      this.registerForm = { name: '', username: '', phone: '', email: '', address: '', password: '', confirmPassword: '' };

      const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
      if (modal) modal.hide();

      this.showToast(`Chào mừng thành viên mới ${newUser.name}!`);
    },
    openProfileModal() {
      if (!this.currentUser) return;
      this.profileForm = {
        name: this.currentUser.name,
        phone: this.currentUser.phone || '',
        email: this.currentUser.email || '',
        address: this.currentUser.address || '',
        newPassword: ''
      };
    },
    saveProfile() {
      const idx = this.users.findIndex(u => u.username === this.currentUser.username);
      if (idx !== -1) {
        this.users[idx].name = this.profileForm.name;
        this.users[idx].phone = this.profileForm.phone;
        this.users[idx].email = this.profileForm.email;
        this.users[idx].address = this.profileForm.address;
        if (this.profileForm.newPassword.trim().length >= 6) {
          this.users[idx].password = this.profileForm.newPassword.trim();
        }
        this.currentUser = { ...this.users[idx] };
        localStorage.setItem('users_huongsac', JSON.stringify(this.users));
        localStorage.setItem('currentUser_huongsac', JSON.stringify(this.currentUser));
        this.prefillCheckout();
        this.showToast('Đã lưu thông tin hồ sơ cá nhân!');
        const modal = bootstrap.Modal.getInstance(document.getElementById('profileModal'));
        if (modal) modal.hide();
      }
    },
    handleLogout() {
      this.currentUser = null;
      this.viewMode = 'store';
      localStorage.removeItem('currentUser_huongsac');
      this.checkoutForm = { name: '', phone: '', address: '', payment: 'COD', note: '' };
      this.showToast('Đã đăng xuất tài khoản!');
    },
    prefillCheckout() {
      if (this.currentUser && !this.isAdmin) {
        this.checkoutForm.name = this.currentUser.name || '';
        this.checkoutForm.phone = this.currentUser.phone || '';
        this.checkoutForm.address = this.currentUser.address || '';
      }
    },
    openSupplyModal(product) {
      this.supplyForm.mode = 'IMPORT';
      if (product) {
        this.supplyForm.productId = product.id;
        this.supplyForm.supplier = product.supplier || this.suppliers[0]?.name || 'HTX Nông Sản Xanh Trà Vinh';
        this.supplyForm.importCost = product.costPrice || Math.round(product.price * 0.7);
      }
      this.supplyForm.quantity = 30;
      this.supplyForm.note = 'Nhập nông sản đạt chuẩn VietGAP trong ngày';
      new bootstrap.Modal(document.getElementById('supplyModal')).show();
    },
    submitSupplyTicket() {
      const p = this.allProducts.find(item => item.id === this.supplyForm.productId);
      if (!p) return;

      const qty = Number(this.supplyForm.quantity) || 0;

      if (this.supplyForm.mode === 'IMPORT') {
        p.stock = (Number(p.stock) || 0) + qty;
        p.supplier = this.supplyForm.supplier;
        p.costPrice = Number(this.supplyForm.importCost) || p.costPrice;
        this.saveProductsToStorage();

        const totalCost = qty * (Number(this.supplyForm.importCost) || 0);
        this.addSupplyLog('IMPORT', p, qty, this.supplyForm.supplier, this.supplyForm.note, totalCost);
        this.showToast(`Đã nhập kho +${qty} ${p.unit} "${p.name}"!`);
      } else {
        if (qty > p.stock) {
          alert(`Số lượng hủy (${qty}) không thể lớn hơn tồn kho hiện tại (${p.stock})!`);
          return;
        }
        p.stock -= qty;
        this.saveProductsToStorage();
        const damageCost = qty * (p.costPrice || Math.round(p.price * 0.7));
        this.addSupplyLog('DAMAGE', p, -qty, 'Kiểm kê hao hụt', this.supplyForm.note, damageCost);
        this.showToast(`Đã trừ kho hao hụt -${qty} ${p.unit} "${p.name}"!`);
      }

      const modal = bootstrap.Modal.getInstance(document.getElementById('supplyModal'));
      if (modal) modal.hide();
    },
    quickSupply(product, amount) {
      product.stock = (Number(product.stock) || 0) + amount;
      this.saveProductsToStorage();
      const cost = amount * (product.costPrice || Math.round(product.price * 0.7));
      this.addSupplyLog('IMPORT', product, amount, product.supplier, 'Nhập bổ sung nhanh', cost);
      this.showToast(`Đã nhập nhanh +${amount} ${product.unit} cho "${product.name}"!`);
    },
    updateStockDirect(product) {
      if (product.stock < 0 || isNaN(product.stock)) product.stock = 0;
      this.saveProductsToStorage();
      this.addSupplyLog('DAMAGE', product, 0, 'Kiểm kê trực tiếp', `Cập nhật số lượng tồn thành ${product.stock}`, 0);
      this.showToast(`Đã cập nhật tồn kho "${product.name}": ${product.stock} ${product.unit}`);
    },
    countProductsBySupplier(supplierName) {
      return this.allProducts.filter(p => p.supplier === supplierName).length;
    },
    addSupplier() {
      const newSup = {
        id: 'NCC0' + (this.suppliers.length + 1),
        ...this.supplierForm
      };
      this.suppliers.push(newSup);
      localStorage.setItem('suppliers_huongsac', JSON.stringify(this.suppliers));
      this.supplierForm = { name: '', phone: '', location: '', mainCrop: '' };
      this.showToast(`Đã thêm đối tác "${newSup.name}"!`);
    },
    removeSupplier(id) {
      if (confirm('Xóa đối tác cung ứng này?')) {
        this.suppliers = this.suppliers.filter(s => s.id !== id);
        localStorage.setItem('suppliers_huongsac', JSON.stringify(this.suppliers));
      }
    },
    openProductForm(product = null) {
      if (product) {
        this.isEditingProduct = true;
        this.productForm = { ...product, costPrice: product.costPrice || Math.round(product.price * 0.7) };
      } else {
        this.isEditingProduct = false;
        this.productForm = {
          id: Date.now(), name: '', category: 'Trái cây', supplier: this.suppliers[0]?.name || 'HTX Nông Sản Xanh Trà Vinh',
          costPrice: 20000, price: 30000, unit: 'kg', stock: 50, origin: 'Vĩnh Long', badge: 'VietGAP', image: '',
          description: '', storage: 'Bảo quản nơi khô ráo, thoáng mát hoặc ngăn mát tủ lạnh.'
        };
      }
      this.showProductForm = true;
    },
    saveProductForm() {
      if (this.isEditingProduct) {
        const idx = this.allProducts.findIndex(p => p.id === this.productForm.id);
        if (idx !== -1) this.allProducts[idx] = { ...this.productForm };
        this.showToast(`Đã cập nhật "${this.productForm.name}"!`);
      } else {
        const maxId = this.allProducts.reduce((max, p) => Math.max(max, p.id), 0);
        this.productForm.id = maxId + 1;
        this.allProducts.unshift({ ...this.productForm });
        this.addSupplyLog('IMPORT', this.productForm, this.productForm.stock, this.productForm.supplier, 'Khởi tạo mặt hàng mới', this.productForm.stock * this.productForm.costPrice);
        this.showToast(`Đã thêm mặt hàng "${this.productForm.name}"!`);
      }
      this.saveProductsToStorage();
      this.showProductForm = false;
    },
    deleteProduct(productId) {
      if (confirm('Bạn có chắc muốn xóa mặt hàng này khỏi hệ thống?')) {
        this.allProducts = this.allProducts.filter(p => p.id !== productId);
        this.saveProductsToStorage();
        this.showToast('Đã xóa nông sản khỏi kho!');
      }
    },
    updateOrderStatus(order) {
      if (order.status === 'Đã hủy' && !order.refundedStock) {
        order.items.forEach(item => {
          const p = this.allProducts.find(prod => prod.id === item.id);
          if (p) {
            p.stock += item.quantity;
            this.addSupplyLog('IMPORT', p, item.quantity, 'Hoàn kho đơn hủy', `Hoàn trả từ đơn #${order.id}`, 0);
          }
        });
        order.refundedStock = true;
        this.saveProductsToStorage();
      }
      localStorage.setItem('orders_huongsac', JSON.stringify(this.orders));
      this.showToast(`Đã cập nhật trạng thái đơn #${order.id}: ${order.status}`);
    },
    cancelOrderByCustomer(order) {
      if (confirm('Bạn có chắc chắn muốn hủy đơn hàng này?')) {
        order.status = 'Đã hủy';
        this.updateOrderStatus(order);
      }
    },
    getOrderStep(status) {
      if (status === 'Chờ xử lý') return 1;
      if (status === 'Đang đóng gói') return 2;
      if (status === 'Đang giao') return 3;
      if (status === 'Hoàn thành') return 4;
      return 0;
    },
    getOrderStatusClass(status) {
      if (status === 'Hoàn thành') return 'bg-success';
      if (status === 'Đang giao' || status === 'Đang đóng gói') return 'bg-primary';
      if (status === 'Đã hủy') return 'bg-danger';
      return 'bg-warning text-dark';
    },
    openPrintSupplyTicket(log) {
      this.printData = {
        title: log.type === 'IMPORT' ? 'PHIẾU NHẬP KHO NÔNG SẢN' : 'PHIẾU XUẤT / KIỂM KÊ KHO',
        code: log.id,
        date: log.time,
        partner: log.supplier,
        address: '',
        note: log.note,
        rows: [{ name: log.productName, unit: log.unit, qty: Math.abs(log.qtyChange), total: log.totalCost || 0 }],
        grandTotal: log.totalCost || 0
      };
      new bootstrap.Modal(document.getElementById('printModal')).show();
    },
    openPrintOrderInvoice(order) {
      this.printData = {
        title: 'HÓA ĐƠN GIAO NHẬN NÔNG SẢN',
        code: order.id,
        date: order.createdAt,
        partner: `${order.customer.name} - SĐT: ${order.customer.phone}`,
        address: order.customer.address,
        note: order.customer.note,
        rows: order.items.map(i => ({ name: i.name, unit: i.unit, qty: i.quantity, total: i.price * i.quantity })),
        grandTotal: order.total
      };
      new bootstrap.Modal(document.getElementById('printModal')).show();
    },
    toggleUserRole(user) {
      if (user.username === SECRET_ADMIN.username) return;
      user.role = user.role === 'admin' ? 'customer' : 'admin';
      localStorage.setItem('users_huongsac', JSON.stringify(this.users));
      this.showToast(`Đã cấp quyền ${user.role} cho @${user.username}!`);
    },
    toggleUserLock(user) {
      if (user.username === SECRET_ADMIN.username) return;
      user.locked = !user.locked;
      localStorage.setItem('users_huongsac', JSON.stringify(this.users));
      this.showToast(`${user.locked ? 'Đã khóa' : 'Đã mở khóa'} tài khoản @${user.username}!`);
    },
    deleteUser(username) {
      if (username === SECRET_ADMIN.username) return;
      if (confirm(`Xóa vĩnh viễn tài khoản @${username}?`)) {
        this.users = this.users.filter(u => u.username !== username);
        localStorage.setItem('users_huongsac', JSON.stringify(this.users));
      }
    },
    handleContactSubmit() {
      const newMsg = {
        id: 'TV' + Math.floor(1000 + Math.random() * 9000),
        name: this.contactForm.name.trim(),
        contact: this.contactForm.contact.trim(),
        message: this.contactForm.message.trim(),
        createdAt: new Date().toLocaleString('vi-VN'),
        status: 'Chưa đọc'
      };
      this.contactMessages.unshift(newMsg);
      localStorage.setItem('messages_huongsac', JSON.stringify(this.contactMessages));

      this.showToast(`Cảm ơn ${newMsg.name}! Yêu cầu tư vấn #${newMsg.id} đã được gửi tới Quản trị viên.`);
      this.contactForm = { name: '', contact: '', message: '' };
    },
    toggleMessageStatus(msg) {
      msg.status = msg.status === 'Chưa đọc' ? 'Đã tư vấn' : 'Chưa đọc';
      localStorage.setItem('messages_huongsac', JSON.stringify(this.contactMessages));
      this.showToast(`Đã cập nhật trạng thái thư #${msg.id}: ${msg.status}`);
    },
    deleteContactMessage(id) {
      if (confirm('Xóa tin nhắn tư vấn này khỏi hộp thư?')) {
        this.contactMessages = this.contactMessages.filter(m => m.id !== id);
        localStorage.setItem('messages_huongsac', JSON.stringify(this.contactMessages));
      }
    },
    exportInventoryCSV() {
      let csv = '\uFEFFMã SP,Tên Nông Sản,Danh Mục,Nhà Vườn Cung Ứng,Xuất Xứ,Giá Vốn,Giá Bán Lẻ,Đơn Vị,Tồn Kho,Tổng Giá Trị Bán\n';
      this.allProducts.forEach(p => {
        csv += `${p.id},"${p.name}","${p.category}","${p.supplier || ''}","${p.origin}",${p.costPrice || 0},${p.price},"${p.unit}",${p.stock},${p.price * p.stock}\n`;
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Bao_Cao_Ton_Kho_HuongSac_${new Date().toISOString().slice(0,10)}.csv`;
      link.click();
      this.showToast('Đã xuất file Báo cáo Tồn kho (CSV)!');
    },
    exportOrdersCSV() {
      let csv = '\uFEFFMã Đơn,Ngày Đặt,Khách Hàng,Số Điện Thoại,Địa Chỉ,Thanh Toán,Tổng Tiền,Trạng Thái\n';
      this.orders.forEach(o => {
        csv += `${o.id},"${o.createdAt}","${o.customer.name}","${o.customer.phone}","${o.customer.address}","${o.customer.payment}",${o.total},"${o.status}"\n`;
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Bao_Cao_Don_Hang_HuongSac_${new Date().toISOString().slice(0,10)}.csv`;
      link.click();
      this.showToast('Đã xuất file Báo cáo Đơn hàng (CSV)!');
    },
    showToast(message) {
      this.toastMessage = message;
      const toastEl = document.getElementById('liveToast');
      const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
      toast.show();
    }
  },
  mounted() {
    this.initSystemData();
    this.loadProducts();
    this.startFlashSaleTimer();
  }
}).mount('#app');