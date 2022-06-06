import create from 'zustand'

export const usePhotographyChartStore = create((set) => ({
    eDeltaY: 0,
    setEDeltaY: (eDeltaY) => set((state) => ({ eDeltaY: eDeltaY }))
}))