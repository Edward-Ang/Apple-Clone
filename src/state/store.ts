import create from 'zustand';

interface StoreState {
  selectedProduct: any;
  setSelectedProduct: (product: any) => void;
  selectedInch: number;
  setSelectedInch: (inch: number) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  selectedInch: 14,
  setSelectedInch: (inch) => set({ selectedInch: inch }),
}));

export default useStore;
