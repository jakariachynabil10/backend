import { Schema, model } from "mongoose";
import {
  Battery,
  Camera,
  Connectivity,
  Dimensions,
  Display,
  Processor,
  Ram,
  Security,
  Product,
  Storage,
} from "./product.interface";

const DisplaySchema = new Schema<Display>(
  {
    type: { type: String },
    size_inch: { type: Number },
    resolution: { type: String },
    refresh_rate: { type: String },
    hdr_support: { type: Boolean },
    touchscreen_type: { type: String },
  },
  { _id: false }
);

const ProcessorSchema = new Schema<Processor>(
  {
    name: { type: String },
    cores: { type: Number },
    speed_ghz: { type: Number },
    manufacturing_process: { type: String },
    gpu: { type: String },
  },
  { _id: false }
);

const RamSchema = new Schema<Ram>(
  {
    size_gb: { type: Number },
    type: { type: String },
  },
  { _id: false }
);

const StorageSchema = new Schema<Storage>({
  size_gb: { type: Number },
  type: { type: String },
  expandable: { type: Boolean },
});

const BatterySchema = new Schema<Battery>(
  {
    capacity_mah: { type: Number },
    type: { type: String },
    fast_charging: { type: Boolean },
    wattage: { type: Number },
    wireless_charging: { type: Boolean },
    reverse_wireless_charging: { type: Boolean },
  },
  { _id: false }
);

const CameraSchema = new Schema<Camera>(
  {
    main: {
      megapixels: { type: Number },
      aperture: { type: String },
      features: [{ type: String }],
    },
    ultrawide: {
      megapixels: { type: Number },
      aperture: { type: String },
    },
    telephoto: {
      megapixels: { type: Number },
      optical_zoom: { type: Number },
    },
    selfie: {
      megapixels: { type: Number },
      features: [{ type: String }],
    },
  },
  { _id: false }
);

const ConnectivitySchema = new Schema<Connectivity>(
  {
    wifi: { type: String },
    bluetooth: { type: String },
    nfc: { type: Boolean },
    sim_slots: { type: Number },
    sim_type: [{ type: String }],
  },
  { _id: false }
);

const SecuritySchema = new Schema<Security>(
  {
    fingerprint_sensor: { type: String },
    face_unlock: { type: Boolean },
    iris_scanner: { type: Boolean },
  },
  { _id: false }
);

const DimensionsSchema = new Schema<Dimensions>(
  {
    height_mm: { type: Number },
    width_mm: { type: Number },
    thickness_mm: { type: Number },
    weight_g: { type: Number },
  },
  { _id: false }
);

const ProductSchema = new Schema<Product>(
  {
    product: { type: String },
    brand: { type: String },
    model: { type: String },
    release_date: { type: String },
    price: { type: Number },
    colors: [{ type: String }],
    display: DisplaySchema,
    processor: ProcessorSchema,
    ram: RamSchema,
    storage: StorageSchema,
    battery: BatterySchema,
    camera: CameraSchema,
    connectivity: ConnectivitySchema,
    security: SecuritySchema,
    operating_system: { type: String },
    dimensions: DimensionsSchema,
    additional_features: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const product = model<Product>("product", ProductSchema);
