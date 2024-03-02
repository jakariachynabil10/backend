import { z } from "zod";

const DisplaySchema = z.object({
  type: z.string(),
  size_inch: z.number(),
  resolution: z.string(),
  refresh_rate: z.string(),
  hdr_support: z.boolean(),
  touchscreen_type: z.string(),
});

const ProcessorSchema = z.object({
  name: z.string(),
  cores: z.number(),
  speed_ghz: z.number(),
  manufacturing_process: z.string(),
  gpu: z.string(),
});

const RamSchema = z.object({
  size_gb: z.number(),
  type: z.string(),
});

const StorageSchema = z.object({
  size_gb: z.number(),
  type: z.string(),
  expandable: z.boolean(),
});

const BatterySchema = z.object({
  capacity_mah: z.number(),
  type: z.string(),
  fast_charging: z.boolean(),
  wattage: z.number(),
  wireless_charging: z.boolean(),
  reverse_wireless_charging: z.boolean(),
});

const CameraSchema = z.object({
  main: z.object({
    megapixels: z.number(),
    aperture: z.string(),
    features: z.array(z.string()),
  }),
  ultrawide: z.object({
    megapixels: z.number(),
    aperture: z.string(),
  }),
  telephoto: z.object({
    megapixels: z.number(),
    optical_zoom: z.number(),
  }).optional(),
  selfie: z.object({
    megapixels: z.number(),
    features: z.array(z.string()),
  }),
});

const ConnectivitySchema = z.object({
  wifi: z.string(),
  bluetooth: z.string(),
  nfc: z.boolean(),
  sim_slots: z.number(),
  sim_type: z.array(z.string()),
});

const SecuritySchema = z.object({
  fingerprint_sensor: z.string(),
  face_unlock: z.boolean(),
  iris_scanner: z.boolean(),
});

const DimensionsSchema = z.object({
  height_mm: z.number(),
  width_mm: z.number(),
  thickness_mm: z.number(),
  weight_g: z.number(),
});

const createProductValidationSchema = z.object({
  body: z.object({
    product: z.string(),
    brand: z.string(),
    model: z.string(),
    release_date: z.string(),
    price: z.number(),
    colors: z.array(z.string()),
    display: DisplaySchema,
    processor: ProcessorSchema,
    ram: RamSchema,
    storage: StorageSchema,
    battery: BatterySchema,
    camera: CameraSchema,
    connectivity: ConnectivitySchema,
    security: SecuritySchema,
    operating_system: z.string(),
    dimensions: DimensionsSchema,
    additional_features: z.array(z.string()),
  }),
});

export const ProductValidations = {
    createProductValidationSchema
};
