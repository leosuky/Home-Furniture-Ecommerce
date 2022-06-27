import products from "../assets/products"; // PRODUCTS

// TOP POSTS
import tp1 from '../assets/tp1.png'
import tp2 from '../assets/tp2.png'
import tp3 from '../assets/tp3.png'
import tp4 from '../assets/tp4.png'
import tp5 from '../assets/tp5.png'

// BLOG POSTS
import bp1 from '../assets/bp1.png'
import bp2 from '../assets/bp2.png'
import bp3 from '../assets/bp3.png'
import bp4 from '../assets/bp4.png'
import bp5 from '../assets/bp5.png'
import bp6 from '../assets/bp6.png'
import bp7 from '../assets/bp7.png'
import bp8 from '../assets/bp8.png'
import bp9 from '../assets/bp9.png'
import bp10 from '../assets/bp10.png'
import bp11 from '../assets/bp11.png'
import bp12 from '../assets/bp12.png'
import bp13 from '../assets/bp13.png'
import bp14 from '../assets/bp14.png'



// CATEGORIES
import living_room from '../assets/living_room.png'
import bedroom from '../assets/bedroom.png'
import kitchen from '../assets/kitchen.png'
import bathroom from '../assets/bathroom.png'
import workspace from '../assets/workspace.png'
import accessories from '../assets/accessories.png'
// __________________________________________________________________________________________________ //


// BLOG POSTS
const blog_posts = [
    {id:1, title:'A Guide To New Orleans’ Best - From Boutique Hotel Maison de la Luz', date:'Nov 05, 2022', author:'Dorothy Bell', image:bp1},
    {id:2, title:'How To Care For Wool Furniture', date:'May 31, 2022', author:'Sunkanmi Otitolaye', image:bp2},
    {id:3, title:'Decorating And Furnishing Small Spaces', date:'Jan 01, 2022', author:'Kevin Spacey', image:bp3},
    {id:4, title:'Our Favourite 2019 Design Furniture Trends', date:'Dec 05, 2021', author:'Adewale Adeyemo', image:bp4},
    {id:5, title:'The Right Way to Layer Lighting with Mitzi', date:'Oct 09, 2021', author:'Chidinma Ogadinma', image:bp5},
    {id:6, title:'6 Amazing Ideas To Improve Your Dining Area', date:'Aug 12, 2021', author:'Elizabeth Odin', image:bp6},
    {id:7, title:'5 Modern Airbnbs Travel Bug You Will Love', date:'Jun 07, 2021', author:'James Tarkowski', image:bp7},
    {id:8, title:'Cozy Living Room Essentials for Fall and Beyond', date:'Apr 20, 2020', author:'Caleb J', image:bp8},
    {id:9, title:'Incredible Before & After Living Room Makeovers', date:'Feb 10, 2020', author:'', image:bp9},
    {id:10, title:'Accent Walls for Every Style of Living Room', date:'Nov 03, 2020', author:'Abdullah Aslami', image:bp10},
    {id:11, title:'Furniture Ideas for Dog and Cat Owners', date:'Sep 25, 2020', author:'Pierre de Lac', image:bp11},
    {id:12, title:'Pick Your Perfect Pillow With Our Quiz', date:'Jul 15, 2019', author:'John Marston', image:bp12},
    {id:13, title:'Guide to Mattress Toppers & Mattress Pads: Whats the Difference?', date:'Feb 05, 2019', author:'Elizabeth Odin', image:bp13},
    {id:14, title:'Cant Live Without: Parachute Moms Share Their Must-Have Baby Items', date:'Jan 01, 2019', author:'Dorothy Bell', image:bp14},
]

// TOP POSTS
const top_posts = [
    {id:1, title:'The Houses Are Designed In Elegant Style', date:'March 26, 2019', image:tp1},
    {id:2, title:'Awesome themed homes with cool colors and backdrops', date:'May 10, 2021', image:tp2},
    {id:3, title:'Young Dynamic Styles for Bachelors', date:'August 12, 2021', image:tp3},
    {id:4, title:'Simple and Beautiful design for fashion stores', date:'October 1, 2019', image:tp4},
    {id:5, title:'New Styles for young couples', date:'June 9, 2022', image:tp5},
]
// CATEGORIES
const categories = [
    {id:0, title:'Living Room', image:living_room},
    {id:1, title:'Bedroom', image:bedroom},
    {id:2, title:'Kitchen', image:kitchen},
    {id:3, title:'Bathroom', image:bathroom},
    {id:4, title:'Workspace', image:workspace},
    {id:5, title:'Accessories', image:accessories},
]

// FURNITURE TYPES
const furniture_type = [
    {id:0, name:'Wooden'},
    {id:1, name:'Iron'},
    {id:2, name:'Ceramic'},
    {id:3, name:'Material'},
    {id:4, name:'Glass'},
]

// COLORS
const colors = [
    {id:0, name:'black'},
    {id:1, name:'#828282'},
    {id:2, name:'#bdbdbd'},
    {id:3, name:'#0f2c72'},
    {id:4, name:'#eb5757'},
    {id:5, name:'#f2994a'},
    {id:6, name:'#cdd454'},
    {id:7, name:'#219653'},
    {id:8, name:'#6fcf97'},
    {id:9, name:'brown'},
    {id:10, name:'#2f80ed'},
    {id:11, name:'#bb6bd9'},
]  

// PRODUCTS
const data = [
    {id:1, name:'Leosuky Rose Bar Stool', price:78.34, image:products.leosuky_rose_bar_stool},
    {id:2, name:'Pierre montBlanc Ceiling Lamp', price:100.00, image:products.pierre_montblanc_ceil_lamp},
    {id:3, name:'Leosuky Wood Cabinet Table', price:219.53, image:products.leosuky_wood_cabinet_table},
    {id:4, name:'al-Hilal High Chair', price:45.67, image:products.al_hilal_high_chair},
    {id:5, name:'Leosuky Vertical Lamp', price:59.99, image:products.leosuky_vertical_lamp},
    {id:6, name:'Grey Tassel Pillow', price:35.49, image:products.grey_tassel_pillow},
    {id:7, name:'Mesas Auxiliares Redondas', price:399.49, image:products.mesas_auxiliares_redondas},
    {id:8, name:'Leosuky Exotic Lamp', price:134.43, image:products.leosuky_exotic_lamp},
    {id:9, name:'Jameson Deluxe Stools', price:90.34, image:products.jameson_delux_stools},
    {id:10, name:'Chaise la Campagne', price:67.79, image:products.chaise_la_campagne},
    {id:11, name:'Kawosky Wooden Table', price:234.49, image:products.kawosky_wood_table},
    {id:12, name:'Federico Cushion Stools', price:599.99, image:products.federico_cushion_stools},
    {id:13, name:'laCampagna Gold Trays', price:799.99, image:products.lacampagna_gold_trays},
    {id:14, name:'Wendigo Wallclock', price:49.99, image:products.wendigo_wallclock},
    {id:15, name:'Furniture Supreme la Javascript', price:149.49, image:products.furniture_supreme},
    {id:16, name:'Leosuky M1 Lounge Chair', price:300.00, image:products.leosuky_m1_lounge_chair},
    {id:17, name:'Time by Olivier de Chrome', price:79.99, image:products.Time_Olivier_de_chrome},
    {id:18, name:'Leosuky Silver Cabinet', price:100.00, image:products.Leosuky_silver_cabinet},
    {id:19, name:'Carlo Colombo Chloe Bed', price:499.49, image:products.Carlo_Colombo_chloe_bed},
    {id:20, name:'Leosuky Grand Bookshelf', price:245.45, image:products.leosuky_grand_bookshelf},
    {id:21, name:'monClaire Ceiling Lamps', price:349.99, image:products.montclair_ceil_lamps},
    {id:22, name:'Pavo Champagne Sinzu Lamp', price:275.45, image:products.Pavo_champng_sinzu_lamp},
    {id:23, name:'Jensen Wallframes', price:135.67, image:products.Jensen_Wallframes},
    {id:24, name:'Brass Hexagon Mirror Panel', price:79.99, image:products.Brass_Hexagon_Mirror_Panel},
    {id:25, name:'Pavo Champagne Brass Lamp', price:89.99, image:products.Pavo_champng_brass_lamp},
    {id:26, name:'Etienne Wool Cushions', price:45.99, image:products.Etienne_wool_cushions},
    {id:27, name:'Nikari April Tables', price:39.99, image:products.Nikari_april_tables},
    {id:28, name:'monClaire Picture Frame', price:59.99, image:products.monclaire_picture_frame},
    {id:29, name:'Leosuky Round Dining Table', price:99.34, image:products.leosuky_round_dining_table},
    {id:30, name:'Leosuky Exotic Vase', price:65.99, image:products.leosuky_exotic_vase},
    {id:31, name:'Kurosawa Luxury Armchair', price:149.99, image:products.kurosawa_luxury_armchair},
    {id:32, name:'Etienne Corduroy Cushion', price:67.99, image:products.Etienne_corduroy_cushion},
    {id:33, name:'Jermaine Swiss Vase', price:59.99, image:products.Jermaine_swiss_vase},
    {id:34, name:'Leosuky Wood High Stool', price:103.44, image:products.leosuky_wood_high_stool},
    {id:35, name:'Leosuky Exotic Lamp', price:134.43, image:products.leosuky_exotic_lamp},
    {id:36, name:'Leosuky Bronze Outdoor Stools', price:90.00, image:products.leosuky_bronze_outdoor_stools},
]

export {
    data,
    categories,
    colors,
    furniture_type,
    top_posts,
    blog_posts,
}