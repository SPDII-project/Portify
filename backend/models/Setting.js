import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: 'Portify',
    },
    siteTagline: {
      type: String,
      default: 'Stunning CV & Portfolio Templates for Modern Professionals',
    },
    contactEmail: {
      type: String,
      default: 'support@portify.io',
    },
    currency: {
      type: String,
      default: 'USD',
    },
    stripePublicKey: {
      type: String,
      default: '',
    },
    enableUserRegistration: {
      type: Boolean,
      default: true,
    },
    maintenanceMode: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Setting = mongoose.model('Setting', settingSchema);
