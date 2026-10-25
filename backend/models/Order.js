import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    templateType: {
      type: String,
      enum: ['cv', 'portfolio'],
      required: true,
    },
    templateId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    paymentGateway: {
      type: String,
      default: 'Stripe',
    },
    transactionId: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model('Order', orderSchema);
