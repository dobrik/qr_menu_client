import { useEffect } from "react";
import { getSubdomainFromHost } from "@/utils/get-subdomain";
import { menuStore } from "@/stores/menu-store";
import { observer } from "mobx-react-lite";

export const RestaurantDataProvider = observer(({ children, initialMenuData }) => {
  useEffect(() => {
    const host = window.location.host;
    const restaurantSlug = getSubdomainFromHost(host);

    if (!menuStore.menuData) {
      if (initialMenuData) {
        menuStore.setMenuData(initialMenuData);
      } else if (restaurantSlug) {
        menuStore.loadMenuData(restaurantSlug).catch(console.error);
      }
    }
  }, [initialMenuData]);

  return children;
});
