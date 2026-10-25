import mongoose from 'mongoose';

const portfolioTemplateSchema = new mongoose.Schema(
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
    previewUrl: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'Developer',
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
    viewsCount: {
      type: Number,
      default: 0,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const PortfolioTemplate = mongoose.model('PortfolioTemplate', portfolioTemplateSchema);
