export interface Display {
  type: string;
  size_inch: number;
  resolution: string;
  refresh_rate: string;
  hdr_support: boolean;
  touchscreen_type: string;
}

export interface Processor {
  name: string;
  cores: number;
  speed_ghz: number;
  manufacturing_process: string;
  gpu: string;
}

export interface Ram {
  size_gb: number;
  type: string;
}

export interface Storage {
  size_gb: number;
  type: string;
  expandable: boolean;
}

export interface Battery {
  capacity_mah: number;
  type: string;
  fast_charging: boolean;
  wattage: number;
  wireless_charging: boolean;
  reverse_wireless_charging: boolean;
}

export interface Camera {
  main: {
    megapixels: number;
    aperture: string;
    features: string[];
  };
  ultrawide: {
    megapixels: number;
    aperture: string;
  };
  telephoto: {
    megapixels: number;
    optical_zoom: number;
  };
  selfie: {
    megapixels: number;
    features: string[];
  };
}

export interface Connectivity {
  wifi: string;
  bluetooth: string;
  nfc: boolean;
  sim_slots: number;
  sim_type: string[];
}

export interface Security {
  fingerprint_sensor: string;
  face_unlock: boolean;
  iris_scanner: boolean;
}

export interface Dimensions {
  height_mm: number;
  width_mm: number;
  thickness_mm: number;
  weight_g: number;
}

export interface Product {
  product: string;
  brand: string;
  model: string;
  release_date: string;
  price: number;
  colors: string[];
  display: Display;
  processor: Processor;
  ram: Ram;
  storage: Storage;
  battery: Battery;
  camera: Camera;
  connectivity: Connectivity;
  security: Security;
  operating_system: string;
  dimensions: Dimensions;
  additional_features: string[];
}
