import { create } from 'zustand'

type Scene = 'menu' | 'settings'
export interface GameManagerStore {
  ready: boolean
  scene: Scene

  readonly actions: {
    // TODO: loadGame: async () => Promise<void>
    switchScene: (scene: Scene) => void
  }
}

export const useGameManagerStore = create<GameManagerStore>()((set, get) => {
  return {
    ready: false,
    scene: 'menu',

    actions: {
      switchScene(scene) {
        set({ scene })
      },
    },
  }
})
