import create from "zustand";

interface ModalState {
  modalState: boolean;
  setModal: (modalState: boolean) => void;
  deleteState: boolean;
  setDelete: (deleteState: boolean) => void;
  idState: number;
  setId: (idState:number) => void;
  chartState: boolean;
  setChart: (chartState:boolean) => void;
  currentValue: number;
  setCurrency: (currentValue: number) => void;
  currencyArea: string;
  setArea: (currencyArea: string) => void;

  addState: boolean;
  setAdd: (addState: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalState: false,
  setModal: (modalState) =>
    set((state) => ({
      ...state,
      modalState
    })),

    deleteState: false,
  setDelete: (deleteState) =>
    set((state) => ({
      ...state,
      deleteState
    })),

    idState: 0,
  setId: (idState) =>
    set((state) => ({
      ...state,
      idState
    })),

    chartState: false,
  setChart: (chartState) =>
    set((state) => ({
      ...state,
      chartState
    })),

    currentValue: 0,
  setCurrency: (currentValue) =>
    set((state) => ({
      ...state,
      currentValue
    })),

    currencyArea: "",
  setArea: (currencyArea) =>
    set((state) => ({
      ...state,
      currencyArea
    })),

    addState: false,
    setAdd: (addState) =>
      set((state) => ({
        ...state,
        addState
      })),

}));

export default useModalStore;