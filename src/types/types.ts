export interface Band {
  name: string;
  recordLabel?: string;
}

export interface MusicFestival {
  name?: string;
  bands: Band[];
}
