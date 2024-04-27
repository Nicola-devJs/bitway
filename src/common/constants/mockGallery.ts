import imageGallery from "@/assets/images/main-img.jpg";
import mockProperties from "../../../public/mockData/properties.json";
import iconBedWhite from "@/assets/icons/property-card/bed-w.svg";
import iconBathWhite from "@/assets/icons/property-card/bath-w.svg";
import iconCarWhite from "@/assets/icons/property-card/car-w.svg";

export const mockGallery = Array(8)
  .fill(" ")
  .map(() => imageGallery);

export const mockPropertiesWithImage = mockProperties.map((prop) => ({
  ...prop,
  currentImage: imageGallery,
  listImages: [imageGallery, imageGallery, imageGallery, imageGallery, imageGallery],
}));
