import { create } from 'zustand';

interface StoreState {
  selectedProduct: any;
  setSelectedProduct: (product: any) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useStore;
