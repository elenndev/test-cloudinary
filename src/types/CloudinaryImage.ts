// mais informações uteis sobreos Types:
// https://cloudinary.com/documentation/product_gallery_reference#asset
export interface CloudinaryImage {
  public_id: string;
  created_at: string;
  width: number;
  height: number;
  url: string;
  secure_url: string;
}
