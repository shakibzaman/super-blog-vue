import adminhome from './components/AdminHome.vue'
// Admin Category
import adCat from './components/admin/category/Add'
import catList from './components/admin/category/List'
import editCat from './components/admin/category/Edit'
export const routes = [
    { path: '/home', component:adminhome},
    { path: '/add-cat', component:adCat},
    { path: '/cat-list', component:catList},
    { path: '/edit-cat', component:editCat}
]
