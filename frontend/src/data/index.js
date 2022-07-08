
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

export {
    categories,
    colors,
    furniture_type,
    top_posts,
    blog_posts,
}