export const fetchMenuData = async (restaurantSlug) => {
  const s3Url = process.env.NEXT_PUBLIC_S3_URL;
  const res = await fetch(`${s3Url}/${restaurantSlug}.json`);
  if (!res.ok) {
    throw new Error(`Failed to fetch menu data: ${res.statusText}`);
  }
  return await res.json();
};

export const fetchPreviewMenuData = async (token) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/restaurants/preview`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch menu data: ${res.statusText}`);
  }
  return await res.json();
};
