import { makeAutoObservable, runInAction } from "mobx";
import { fetchMenuData } from "@/services/menu-data";

export class Store {
    menuData = null;
    categoryMap = {};
    sectionMap = {};
    productMap = {};

    constructor() {
        makeAutoObservable(this);
    }

    setMenuData(data) {
        this.menuData = data;
        this.categoryMap = {};
        this.sectionMap = {};
        this.productMap = {};
    }

    async loadMenuData(restaurantSlug, isPreview = false) {
        const data = await fetchMenuData(restaurantSlug, isPreview);
        runInAction(() => {
            this.setMenuData(data);
        });
    }

    get categories() {
        return this.menuData?.categories || [];
    }

    getCategoryBySlug(categorySlug) {
        if (this.categoryMap[categorySlug]) {
            return this.categoryMap[categorySlug];
        }
        const category = this.categories.find((c) => c.slug === categorySlug);
        if (category) {
            this.categoryMap[categorySlug] = category;
        }
        return category || null;
    }

    getSectionBySlugs(categorySlug, sectionSlug) {
        const key = `${categorySlug}/${sectionSlug}`;
        if (this.sectionMap[key]) {
            return this.sectionMap[key];
        }
        const category = this.getCategoryBySlug(categorySlug);
        const section = category?.sections.find((s) => s.slug === sectionSlug);
        if (section) {
            this.sectionMap[key] = section;
        }
        return section || null;
    }

    getProductBySlugs(categorySlug, sectionSlug, productSlug) {
        const key = `${categorySlug}/${sectionSlug}/${productSlug}`;
        if (this.productMap[key]) {
            return this.productMap[key];
        }
        const section = this.getSectionBySlugs(categorySlug, sectionSlug);
        const product = section?.products.find((p) => p.slug === productSlug);
        if (product) {
            this.productMap[key] = product;
        }
        return product || null;
    }
}

// Singleton for client side usage
export const menuStore = new Store();