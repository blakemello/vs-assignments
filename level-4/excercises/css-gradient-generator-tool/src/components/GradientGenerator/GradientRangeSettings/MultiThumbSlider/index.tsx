import React, { useRef } from 'react';
import { defaultHexColor, maxColorsCount } from '@shared/constants';
//...

const MultiThumbSlider: React.FC<MultiThumbSliderProps> = ({
    palettes,
    activePaletteId,
    setPalettes,
    setActivePalette,
  }) => {
        /* ... */
    const handleColorPositionChange = (value: string, paletteId: string) => {
      const newPalettes = [...palettes];
      const neededPalette = newPalettes.find(
        (palette) => palette.id === paletteId
      );
  
      if (neededPalette) {
        neededPalette.position = parseInt(value, 10);
        setPalettes(newPalettes);
      }
    }
    };

interface MultiThumbSliderProps {
    palettes: Palette[];
    activePaletteId: string | undefined;
    setPalettes: (palettes: Palette[]) => void;
    setActivePalette: (palette: Palette) => void;
  }


export default MultiThumbSlider;