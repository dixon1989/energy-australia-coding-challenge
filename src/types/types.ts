export interface Band {
  name: string;
  recordLabel?: string;
}

export interface MusicFestival {
  name: string;
  bands: Band[];
}

export interface BandFestival {
  name: string;
  musicFestivalName?: string;
}

export interface FestivalBands {
  name?: string;
  bands: BandFestival[];
}
