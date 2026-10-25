import mongoose from 'mongoose';

const cvTemplateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'General',
    },
    price: {
      type: Number,
      default: 0,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    downloadsCount: {
      type: Number,
      default: 0,
    },
    structure: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export const CVTemplate = mongoose.model('CVTemplate', cvTemplateSchema);
