import { getSubdomainFromHost } from "@/utils/get-subdomain";
import { fetchMenuData } from "@/services/menu-data";
import { menuStore } from "@/stores/menu-store";

//server side for getStaticProps
export const withRestaurantMenuData = (getProps) => {
  return async (context) => {
    const host = context.req?.headers?.host || "";
    const restaurantSlug = getSubdomainFromHost(host);

    if (!restaurantSlug) {
      return { notFound: true };
    }

    const menuData = await fetchMenuData(restaurantSlug);

    const baseProps = {
      restaurantSlug,
      menuData,
    };

    if (typeof getProps === "function") {
      const result = await getProps(context, baseProps);
      return {
        props: {
          ...baseProps,
          ...(result?.props || {}),
        },
      };
    }

    return { props: baseProps };
  };
};

/**
 * Client side, for getStaticPaths
**/
export const withRestaurantStaticPaths = (restaurantSlug, getPathsFn) => {
  return async () => {
    const menuData = await fetchMenuData(restaurantSlug);
    return await getPathsFn(menuData);
  };
};

